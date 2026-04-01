"""
LBX file investigator for Master of Magic.
Probes each LBX file (or a folder of them) to determine what kind of data
it contains: graphics, text strings, structured numeric data, audio, etc.

For non-graphics subfiles it attempts to detect fixed-size record tables
and dumps them as numeric fields.

Usage:
  python lbxprobe.py <path.LBX>           Probe a single file
  python lbxprobe.py <folder>             Probe all LBX files in folder
  python lbxprobe.py <path.LBX> --dump N  Hex + numeric dump of subfile N
  python lbxprobe.py <path.EXE> --scan    Scan an EXE for record tables
"""

import struct
import glob
import sys
import os


def read_lbx_header(data):
    """Parse LBX container header. Returns (num_files, offsets, names) or None."""
    if len(data) < 8:
        return None
    num_files = struct.unpack_from('<H', data, 0)[0]
    sig = data[2:6]
    if sig != b'\xad\xfe\x00\x00':
        return None
    if num_files == 0 or num_files > 5000:
        return None

    offsets = []
    for i in range(num_files + 1):
        pos = 8 + i * 4
        if pos + 4 > len(data):
            return None
        offsets.append(struct.unpack_from('<I', data, pos)[0])

    names = []
    for i in range(num_files):
        base = 512 + i * 32
        if base + 9 <= offsets[0] and base + 9 <= len(data):
            name = data[base:base+9].split(b'\x00')[0].decode('ascii', errors='replace').strip()
            desc = data[base+9:base+32].split(b'\x00')[0].decode('ascii', errors='replace').strip() if base+32 <= len(data) else ''
            names.append((name, desc))
        else:
            names.append(('', ''))

    return num_files, offsets, names


def classify_subfile(data, offset, size):
    """Classify a subfile as graphics, text, audio, or numeric data."""
    if size < 4:
        return 'tiny', {}

    chunk = data[offset:offset + size]

    # Check for graphics header
    if size >= 18:
        w, h, _, bc = struct.unpack_from('<4H', chunk, 0)
        if 1 <= w <= 640 and 1 <= h <= 480 and 1 <= bc <= 1000:
            header_size = 18 + (bc + 1) * 4
            if size >= header_size:
                # Verify bitmap offsets are ascending
                bmp_offsets = [struct.unpack_from('<I', chunk, 18 + i * 4)[0] for i in range(bc + 1)]
                ascending = all(bmp_offsets[i] < bmp_offsets[i + 1] for i in range(len(bmp_offsets) - 1))
                if ascending and bmp_offsets[-1] <= size:
                    return 'graphics', {'width': w, 'height': h, 'frames': bc}

    # Check for audio signatures
    if chunk[:4] == b'RIFF':
        return 'wav', {}
    if chunk[16:20] == b'Crea':
        return 'voc', {}
    if chunk[16:20] == b'FORM':
        return 'xmi', {}

    # Check for text content
    printable = sum(1 for b in chunk if 32 <= b <= 126 or b == 0)
    if printable > len(chunk) * 0.75:
        # Extract strings
        strings = []
        pos = 0
        while pos < len(chunk):
            end = chunk.find(b'\x00', pos)
            if end == -1:
                break
            s = chunk[pos:end]
            if len(s) > 1 and sum(1 for b in s if 32 <= b <= 126) > len(s) * 0.8:
                strings.append((pos, s.decode('ascii', errors='replace')))
            pos = end + 1
        if strings:
            return 'text', {'num_strings': len(strings), 'sample': [s[1] for s in strings[:5]]}

    # Assume numeric/binary data
    return 'data', {'size': size}


def detect_record_size(chunk):
    """Try to detect fixed-size records in a binary chunk by looking for repeating patterns."""
    if len(chunk) < 16:
        return None

    candidates = []
    for rec_size in range(8, min(200, len(chunk) // 3)):
        if len(chunk) % rec_size != 0 and len(chunk) % rec_size > rec_size // 2:
            continue
        num_recs = len(chunk) // rec_size
        if num_recs < 3:
            continue

        # Score: how many records have similar byte patterns at the same offsets?
        # Check for consistent zero bytes, consistent small values, etc.
        score = 0
        for byte_off in range(rec_size):
            vals = [chunk[r * rec_size + byte_off] for r in range(min(num_recs, 20)) if r * rec_size + byte_off < len(chunk)]
            if not vals:
                continue
            # Bonus for columns that are always zero
            if all(v == 0 for v in vals):
                score += 2
            # Bonus for columns with small range
            elif max(vals) - min(vals) < 20:
                score += 1

        # Normalize by record size
        score_norm = score / rec_size
        if score_norm > 0.3:
            candidates.append((score_norm, rec_size, num_recs))

    candidates.sort(reverse=True)
    if candidates:
        return candidates[0][1], candidates[0][2]
    return None


def dump_subfile(data, offset, size, show_records=True):
    """Detailed hex + numeric dump of a subfile."""
    chunk = data[offset:offset + size]

    # Hex dump (first 512 bytes)
    print(f"  Hex dump (first {min(size, 512)} of {size} bytes):")
    for row_start in range(0, min(size, 512), 16):
        row = chunk[row_start:row_start + 16]
        hex_str = ' '.join(f'{b:02x}' for b in row)
        ascii_str = ''.join(chr(b) if 32 <= b <= 126 else '.' for b in row)
        print(f"    {row_start:04x}: {hex_str:<48s}  {ascii_str}")

    if not show_records:
        return

    # Try record detection
    result = detect_record_size(chunk)
    if result:
        rec_size, num_recs = result
        print(f"\n  Possible record structure: {rec_size} bytes x {num_recs} records")
        print(f"  Interpreting as uint8 columns:")

        # Header
        col_headers = [f"{'b'+str(i):>4s}" for i in range(min(rec_size, 40))]
        if rec_size > 40:
            col_headers.append("...")
        print(f"    {'rec':>4s} " + ' '.join(col_headers))
        print(f"    {'---':>4s} " + ' '.join(['----'] * len(col_headers)))

        for r in range(min(num_recs, 30)):
            rec = chunk[r * rec_size:(r + 1) * rec_size]
            vals = [f"{b:4d}" for b in rec[:min(rec_size, 40)]]
            if rec_size > 40:
                vals.append("...")
            print(f"    {r:4d} " + ' '.join(vals))

        # Also show as uint16 LE
        if rec_size >= 4:
            print(f"\n  Interpreting as uint16 LE columns:")
            n_cols = rec_size // 2
            col_headers = [f"{'w'+str(i):>6s}" for i in range(min(n_cols, 20))]
            if n_cols > 20:
                col_headers.append("...")
            print(f"    {'rec':>4s} " + ' '.join(col_headers))
            print(f"    {'---':>4s} " + ' '.join(['------'] * len(col_headers)))

            for r in range(min(num_recs, 30)):
                rec = chunk[r * rec_size:(r + 1) * rec_size]
                vals = []
                for c in range(min(n_cols, 20)):
                    v = struct.unpack_from('<H', rec, c * 2)[0]
                    vals.append(f"{v:6d}")
                if n_cols > 20:
                    vals.append("...")
                print(f"    {r:4d} " + ' '.join(vals))
    else:
        print("\n  No obvious fixed-size record structure detected.")

    # Try showing as uint16 array regardless
    if size <= 400:
        print(f"\n  All uint16 LE values:")
        vals = []
        for i in range(0, size - 1, 2):
            vals.append(struct.unpack_from('<H', chunk, i)[0])
        for i in range(0, len(vals), 16):
            row = vals[i:i+16]
            print(f"    {i*2:04x}: " + ' '.join(f'{v:5d}' for v in row))


def probe_lbx(filepath, dump_index=None):
    """Probe an LBX file and report what each subfile contains."""
    with open(filepath, 'rb') as f:
        data = f.read()

    basename = os.path.basename(filepath).upper()
    parsed = read_lbx_header(data)
    if parsed is None:
        print(f"{basename}: Not a valid LBX file ({len(data)} bytes)")
        return

    num_files, offsets, names = parsed
    print(f"\n{'='*70}")
    print(f"{basename}: {num_files} subfiles, {len(data)} bytes")
    print(f"{'='*70}")

    for i in range(num_files):
        size = offsets[i + 1] - offsets[i]
        name, desc = names[i] if i < len(names) else ('', '')
        label = f"{name}" if name else f"sub{i}"
        if desc:
            label += f" ({desc})"

        kind, info = classify_subfile(data, offsets[i], size)

        summary = f"  [{i:3d}] {label:30s} {size:8d} bytes  "
        if kind == 'graphics':
            summary += f"GRAPHICS {info['width']}x{info['height']}, {info['frames']} frames"
        elif kind == 'text':
            summary += f"TEXT ({info['num_strings']} strings) e.g. {info['sample'][:3]}"
        elif kind in ('wav', 'voc', 'xmi'):
            summary += f"AUDIO ({kind.upper()})"
        elif kind == 'data':
            result = detect_record_size(data[offsets[i]:offsets[i] + size])
            if result:
                summary += f"DATA (possibly {result[0]}b x {result[1]} records)"
            else:
                summary += f"DATA (binary, {size} bytes)"
        else:
            summary += kind.upper()
        print(summary)

        if dump_index is not None and i == dump_index:
            print()
            dump_subfile(data, offsets[i], size)
            print()


def scan_exe(filepath):
    """Scan an EXE file for potential unit stat tables by looking for
    clusters of small numbers that could be combat stats."""
    with open(filepath, 'rb') as f:
        data = f.read()

    basename = os.path.basename(filepath).upper()
    print(f"\n{'='*70}")
    print(f"Scanning {basename} ({len(data)} bytes) for unit name table")
    print(f"{'='*70}")

    # Step 1: Find the unit name list
    # Search for known MoM unit names in sequence
    name_sequence = [b'Spearmen', b'Swordsmen', b'Bowmen', b'Cavalry', b'Shaman', b'Settlers']
    first_pos = data.find(name_sequence[0])
    while first_pos != -1:
        # Check if the other names follow nearby
        region = data[first_pos:first_pos + 2000]
        all_found = all(name in region for name in name_sequence)
        if all_found:
            print(f"\nUnit name block found at 0x{first_pos:x}")
            # Extract all names
            unit_names = []
            pos = first_pos
            while pos < first_pos + 2000:
                end = data.find(b'\x00', pos)
                if end == -1 or end - pos > 30:
                    break
                s = data[pos:end]
                if len(s) == 0:
                    pos += 1
                    continue
                if all(32 <= b <= 126 for b in s):
                    unit_names.append((pos, s.decode('ascii')))
                    pos = end + 1
                else:
                    break

            print(f"Found {len(unit_names)} unit names:")
            for idx, (off, name) in enumerate(unit_names):
                print(f"  {idx:3d}  0x{off:05x}: {name}")

            break
        first_pos = data.find(name_sequence[0], first_pos + 1)

    if first_pos == -1:
        print("No unit name block found.")
        return

    # Step 2: Look for a structured data table that could be unit stats.
    # Search for arrays of bytes/words where the count matches the number of units.
    num_units = len(unit_names)
    print(f"\nSearching for tables with ~{num_units} records...")

    found_tables = []
    for rec_size in range(16, 60):
        table_size = rec_size * num_units
        # Search the exe
        for start in range(0, len(data) - table_size, 2):
            chunk = data[start:start + table_size]
            # Score this region as a potential stat table:
            # - Should have many small values (0-30 range, typical for stats)
            # - Should have some variation between records
            # - Shouldn't be all zeros
            small_count = 0
            zero_count = 0
            total = 0
            for r in range(num_units):
                for c in range(rec_size):
                    v = chunk[r * rec_size + c]
                    total += 1
                    if v <= 30:
                        small_count += 1
                    if v == 0:
                        zero_count += 1

            # Heuristics
            small_ratio = small_count / total
            zero_ratio = zero_count / total
            if small_ratio > 0.7 and zero_ratio < 0.6 and zero_ratio > 0.1:
                # Additional: check column consistency
                col_scores = 0
                for c in range(rec_size):
                    col_vals = [chunk[r * rec_size + c] for r in range(num_units)]
                    val_range = max(col_vals) - min(col_vals)
                    if val_range == 0:
                        col_scores += 1  # constant column (could be padding)
                    elif val_range < 20:
                        col_scores += 2  # stat-like range

                if col_scores / rec_size > 1.0:
                    found_tables.append((col_scores / rec_size, start, rec_size))

        # This is slow, so just try a few record sizes
        if rec_size > 40:
            break

    # Deduplicate nearby matches
    found_tables.sort(reverse=True)
    reported = set()
    for score, start, rec_size in found_tables[:20]:
        # Skip if too close to an already reported table
        if any(abs(start - r) < 100 for r in reported):
            continue
        reported.add(start)
        print(f"\n  Candidate table at 0x{start:x}, rec_size={rec_size}, score={score:.2f}")
        print(f"  First 5 records as uint8:")
        for r in range(min(5, num_units)):
            rec = data[start + r * rec_size:start + (r + 1) * rec_size]
            vals = ' '.join(f'{b:3d}' for b in rec)
            name = unit_names[r][1] if r < len(unit_names) else '?'
            print(f"    {name:20s}: {vals}")


def main():
    if len(sys.argv) < 2:
        print("Usage:")
        print(f"  {sys.argv[0]} <file.LBX>            Probe a single LBX file")
        print(f"  {sys.argv[0]} <folder>               Probe all LBX files in folder")
        print(f"  {sys.argv[0]} <file.LBX> --dump N    Dump subfile N in detail")
        print(f"  {sys.argv[0]} <file.EXE> --scan      Scan EXE for unit stat tables")
        sys.exit(1)

    path = sys.argv[1]
    dump_index = None
    scan_mode = False

    if '--dump' in sys.argv:
        dump_index = int(sys.argv[sys.argv.index('--dump') + 1])
    if '--scan' in sys.argv:
        scan_mode = True

    if scan_mode:
        scan_exe(path)
        return

    if os.path.isdir(path):
        lbx_files = sorted(glob.glob(os.path.join(path, '*.[lL][bB][xX]')))
        if not lbx_files:
            print(f"No .LBX files found in {path}")
            sys.exit(1)
        for f in lbx_files:
            probe_lbx(f, dump_index)
    else:
        probe_lbx(path, dump_index)


if __name__ == '__main__':
    main()
