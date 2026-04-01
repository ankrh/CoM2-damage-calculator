"""
LBX graphics extractor for Master of Magic.
Ports logic from lbxtract.go (LBX container parsing) and the Delphi
SaveGfxAsBmps procedure (RLE bitmap decoding) into Python.

Usage:
  python lbxtract.py <lbx_folder> [output_dir]

Loops over all .LBX files in the folder, extracts all decodable bitmaps
into a single output folder, and writes an index.txt summary table.
"""

import struct
import glob
import sys
import os

# Default MoM palette from the Delphi source (256 RGB entries)
MOM_PALETTE = [
    (0x0,0x0,0x0),(0x8,0x4,0x4),(0x24,0x1c,0x18),(0x38,0x30,0x2c),
    (0x48,0x40,0x3c),(0x58,0x50,0x4c),(0x68,0x60,0x5c),(0x7c,0x74,0x70),
    (0x8c,0x84,0x80),(0x9c,0x94,0x90),(0xac,0xa4,0xa0),(0xc0,0xb8,0xb4),
    (0xd0,0xc8,0xc4),(0xe0,0xd8,0xd4),(0xf0,0xe8,0xe4),(0xfc,0xfc,0xfc),
    (0x38,0x20,0x1c),(0x40,0x2c,0x24),(0x48,0x34,0x2c),(0x50,0x3c,0x30),
    (0x58,0x40,0x34),(0x5c,0x44,0x38),(0x60,0x48,0x3c),(0x64,0x4c,0x3c),
    (0x68,0x50,0x40),(0x70,0x54,0x44),(0x78,0x5c,0x4c),(0x80,0x64,0x50),
    (0x8c,0x70,0x58),(0x94,0x74,0x5c),(0x9c,0x7c,0x64),(0xa4,0x84,0x68),
    (0xec,0xc0,0xd4),(0xd4,0x98,0xb4),(0xbc,0x74,0x94),(0xa4,0x54,0x7c),
    (0x8c,0x38,0x60),(0x74,0x24,0x4c),(0x5c,0x10,0x34),(0x44,0x04,0x20),
    (0xec,0xc0,0xc0),(0xd4,0x94,0x94),(0xbc,0x74,0x74),(0xa4,0x54,0x54),
    (0x8c,0x38,0x38),(0x74,0x24,0x24),(0x5c,0x10,0x10),(0x44,0x04,0x04),
    (0xec,0xd4,0xc0),(0xd4,0xb4,0x98),(0xbc,0x98,0x74),(0xa4,0x7c,0x54),
    (0x8c,0x60,0x38),(0x74,0x4c,0x24),(0x5c,0x34,0x10),(0x44,0x24,0x04),
    (0xec,0xec,0xc0),(0xd4,0xd4,0x94),(0xbc,0xbc,0x74),(0xa4,0xa4,0x54),
    (0x8c,0x8c,0x38),(0x74,0x74,0x24),(0x5c,0x5c,0x10),(0x44,0x44,0x04),
    (0xd4,0xec,0xbc),(0xb8,0xd4,0x98),(0x98,0xbc,0x74),(0x7c,0xa4,0x54),
    (0x60,0x8c,0x38),(0x4c,0x74,0x24),(0x38,0x5c,0x10),(0x24,0x44,0x04),
    (0xc0,0xec,0xc0),(0x98,0xd4,0x98),(0x74,0xbc,0x74),(0x54,0xa4,0x54),
    (0x38,0x8c,0x38),(0x24,0x74,0x24),(0x10,0x5c,0x10),(0x04,0x44,0x04),
    (0xc0,0xec,0xd8),(0x98,0xd4,0xb8),(0x74,0xbc,0x98),(0x54,0xa4,0x7c),
    (0x38,0x8c,0x60),(0x24,0x74,0x4c),(0x10,0x5c,0x38),(0x04,0x44,0x24),
    (0xf4,0xc0,0xa0),(0xe0,0xa0,0x84),(0xcc,0x84,0x6c),(0xc8,0x8c,0x68),
    (0xa8,0x78,0x54),(0x98,0x68,0x4c),(0x8c,0x60,0x44),(0x7c,0x50,0x3c),
    (0xc0,0xd8,0xec),(0x94,0xb4,0xd4),(0x70,0x98,0xbc),(0x54,0x7c,0xa4),
    (0x38,0x64,0x8c),(0x24,0x4c,0x74),(0x10,0x38,0x5c),(0x04,0x24,0x44),
    (0xc0,0xc0,0xec),(0x98,0x98,0xd4),(0x74,0x74,0xbc),(0x54,0x54,0xa4),
    (0x3c,0x38,0x8c),(0x24,0x24,0x74),(0x10,0x10,0x5c),(0x04,0x04,0x44),
    (0xd8,0xc0,0xec),(0xb8,0x98,0xd4),(0x98,0x74,0xbc),(0x7c,0x54,0xa4),
    (0x60,0x38,0x8c),(0x4c,0x24,0x74),(0x38,0x10,0x5c),(0x24,0x04,0x44),
    (0xec,0xc0,0xec),(0xd4,0x98,0xd4),(0xbc,0x74,0xbc),(0xa4,0x54,0xa4),
    (0x8c,0x38,0x8c),(0x74,0x24,0x74),(0x5c,0x10,0x5c),(0x44,0x04,0x44),
    (0xd8,0xd0,0xd0),(0xc0,0xb0,0xb0),(0xa4,0x90,0x90),(0x8c,0x74,0x74),
    (0x78,0x5c,0x5c),(0x68,0x4c,0x4c),(0x5c,0x3c,0x3c),(0x48,0x2c,0x2c),
    (0xd0,0xd8,0xd0),(0xb0,0xc0,0xb0),(0x90,0xa4,0x90),(0x74,0x8c,0x74),
    (0x5c,0x78,0x5c),(0x4c,0x68,0x4c),(0x3c,0x5c,0x3c),(0x2c,0x48,0x2c),
    (0xc8,0xc8,0xd4),(0xb0,0xb0,0xc0),(0x90,0x90,0xa4),(0x74,0x74,0x8c),
    (0x5c,0x5c,0x78),(0x4c,0x4c,0x68),(0x3c,0x3c,0x5c),(0x2c,0x2c,0x48),
    (0xd8,0xdc,0xec),(0xc8,0xcc,0xdc),(0xb8,0xc0,0xd4),(0xa8,0xb8,0xcc),
    (0x9c,0xb0,0xcc),(0x94,0xac,0xcc),(0x88,0xa4,0xcc),(0x88,0x94,0xdc),
    (0xfc,0xf0,0x90),(0xfc,0xe4,0x60),(0xfc,0xc8,0x24),(0xfc,0xac,0x0c),
    (0xfc,0x78,0x10),(0xd0,0x1c,0x00),(0x98,0x00,0x00),(0x58,0x00,0x00),
    (0x90,0xf0,0xfc),(0x60,0xe4,0xfc),(0x24,0xc8,0xfc),(0x0c,0xac,0xfc),
    (0x10,0x78,0xfc),(0x00,0x1c,0xd0),(0x00,0x00,0x98),(0x00,0x00,0x58),
    (0xfc,0xc8,0x64),(0xfc,0xb4,0x2c),(0xec,0xa4,0x24),(0xdc,0x94,0x1c),
    (0xcc,0x88,0x18),(0xbc,0x7c,0x14),(0xa4,0x6c,0x1c),(0x8c,0x60,0x24),
    (0x78,0x54,0x24),(0x60,0x44,0x24),(0x48,0x38,0x24),(0x34,0x28,0x1c),
    (0x90,0x68,0x34),(0x90,0x64,0x2c),(0x94,0x6c,0x34),(0x94,0x70,0x40),
    (0x8c,0x5c,0x24),(0x90,0x64,0x2c),(0x90,0x68,0x30),(0x98,0x78,0x4c),
    (0x60,0x3c,0x2c),(0x54,0xa4,0xa4),(0xc0,0x00,0x00),(0xfc,0x88,0xe0),
    (0xfc,0x58,0x84),(0xf4,0x00,0x0c),(0xd4,0x00,0x00),(0xac,0x00,0x00),
    (0xe8,0xa8,0xfc),(0xe0,0x7c,0xfc),(0xd0,0x3c,0xfc),(0xc4,0x00,0xfc),
    (0x90,0x00,0xbc),(0xfc,0xf4,0x7c),(0xfc,0xe4,0x00),(0xe4,0xd0,0x00),
    (0xa4,0x98,0x00),(0x64,0x58,0x00),(0xac,0xfc,0xa8),(0x74,0xe4,0x70),
    (0x00,0xbc,0x00),(0x00,0xa4,0x00),(0x00,0x7c,0x00),(0xac,0xa8,0xfc),
    (0x80,0x7c,0xfc),(0x00,0x00,0xfc),(0x00,0x00,0xbc),(0x00,0x00,0x7c),
    (0x30,0x30,0x50),(0x28,0x28,0x48),(0x24,0x24,0x40),(0x20,0x1c,0x38),
    (0x1c,0x18,0x34),(0x18,0x14,0x2c),(0x14,0x10,0x24),(0x10,0x0c,0x20),
    (0xa0,0xa0,0xb4),(0x88,0x88,0xa4),(0x74,0x74,0x90),(0x60,0x60,0x80),
    (0x50,0x4c,0x70),(0x40,0x3c,0x60),(0x30,0x2c,0x50),(0x24,0x20,0x40),
    (0x18,0x14,0x30),(0x10,0x0c,0x20),(0x14,0x0c,0x08),(0x18,0x10,0x0c),
    (0x00,0x00,0x00),(0x00,0x00,0x00),(0x00,0x00,0x00),(0x00,0x00,0x00),
    (0x00,0x00,0x00),(0x00,0x00,0x00),(0x00,0x00,0x00),(0x00,0x00,0x00),
    (0x00,0x00,0x00),(0x00,0x00,0x00),(0x00,0x00,0x00),(0x00,0x00,0x00),
]


def read_lbx(filepath):
    """Parse LBX container, return (raw_data, list of (offset, size, name))."""
    with open(filepath, 'rb') as f:
        data = f.read()

    num_files = struct.unpack_from('<H', data, 0)[0]
    sig = data[2:6]
    if sig != b'\xad\xfe\x00\x00':
        return None, []

    offsets = []
    for i in range(num_files + 1):
        offsets.append(struct.unpack_from('<I', data, 8 + i * 4)[0])

    # Names at offset 512
    names = []
    for i in range(num_files):
        base = 512 + i * 32
        if base + 9 <= offsets[0]:
            name = data[base:base+9].split(b'\x00')[0].decode('ascii', errors='replace').strip()
            names.append(name)
        else:
            names.append('')

    subfiles = []
    for i in range(num_files):
        subfiles.append((offsets[i], offsets[i + 1] - offsets[i], names[i] if i < len(names) else ''))

    return data, subfiles


def decode_gfx(data, file_offset, file_size):
    """
    Decode an LBX graphics subfile into a list of RGBA pixel buffers.
    Returns (width, height, list_of_frames) where each frame is list of (r,g,b,a).
    Raises on non-graphics data.
    """
    if file_size < 18:
        raise ValueError("too small for gfx header")

    off = file_offset

    # GfxHeader: 9 x uint16
    width, height, unk1, bitmap_count, unk2, unk3, unk4, palette_info_offset, unk5 = \
        struct.unpack_from('<9H', data, off)

    if width == 0 or width > 640 or height == 0 or height > 480 or bitmap_count == 0 or bitmap_count > 1000:
        raise ValueError(f"bad dimensions {width}x{height} bitmaps={bitmap_count}")

    header_size = 18 + (bitmap_count + 1) * 4
    if file_size < header_size:
        raise ValueError("file too small for bitmap offsets")

    # Read bitmap offsets (relative to subfile start)
    bitmap_offsets = []
    for i in range(bitmap_count + 1):
        bo = struct.unpack_from('<I', data, off + 18 + i * 4)[0]
        bitmap_offsets.append(bo)

    # Sanity: offsets should be ascending and within file
    for i in range(len(bitmap_offsets) - 1):
        if bitmap_offsets[i] >= bitmap_offsets[i + 1]:
            raise ValueError("bitmap offsets not ascending")
        if bitmap_offsets[i + 1] > file_size:
            raise ValueError("bitmap offset past end of subfile")

    # Build palette
    palette = list(MOM_PALETTE)

    # Read embedded palette if present
    first_pal_idx = 0
    pal_colour_count = 256
    if palette_info_offset > 0:
        pio = off + palette_info_offset
        if pio + 8 > len(data):
            raise ValueError("palette info offset out of range")
        pal_offset, first_pal_idx, pal_colour_count, _pal_unk = struct.unpack_from('<4H', data, pio)
        pal_pos = off + pal_offset
        if pal_pos + pal_colour_count * 3 > len(data):
            raise ValueError("palette data out of range")
        for c in range(pal_colour_count):
            r, g, b = struct.unpack_from('3B', data, pal_pos + c * 3)
            # Embedded palette values are 6-bit VGA, multiply by 4
            palette[first_pal_idx + c] = (r << 2, g << 2, b << 2)

    rle_val_default = first_pal_idx + pal_colour_count

    frames = []
    bg = (255, 0, 255, 0)

    for bmp_no in range(bitmap_count):
        bmp_start = bitmap_offsets[bmp_no]
        bmp_end = bitmap_offsets[bmp_no + 1]
        bmp_size = bmp_end - bmp_start

        if bmp_size < 2:
            raise ValueError("bitmap data too small")

        buf = data[off + bmp_start: off + bmp_end]

        if bmp_no == 0 or (buf[0] == 1 and bmp_no > 0):
            pixels = [bg] * (width * height)
        else:
            pixels = list(frames[-1])

        rle_val = rle_val_default
        idx = 1
        x = 0

        while x < width and idx < bmp_size:
            y = 0
            if buf[idx] == 0xFF:
                idx += 1
                rle_val = first_pal_idx + pal_colour_count
            else:
                if idx + 3 >= bmp_size:
                    break
                long_data = buf[idx + 2]
                next_ctl = idx + buf[idx + 1] + 2

                if buf[idx] == 0x00:
                    rle_val = first_pal_idx + pal_colour_count
                elif buf[idx] == 0x80:
                    rle_val = 0xE0
                else:
                    break

                y = buf[idx + 3]
                idx += 4

                n_r = idx
                while n_r < next_ctl:
                    while n_r < idx + long_data and x < width:
                        if buf[n_r] >= rle_val:
                            rle_length = buf[n_r] - rle_val + 1
                            if n_r + 1 < bmp_size:
                                colour_idx = buf[n_r + 1]
                            else:
                                break
                            for _ in range(rle_length):
                                if y < height:
                                    r, g, b = palette[colour_idx]
                                    pixels[y * width + x] = (r, g, b, 255)
                                y += 1
                            n_r += 2
                        else:
                            colour_idx = buf[n_r]
                            if y < height:
                                r, g, b = palette[colour_idx]
                                pixels[y * width + x] = (r, g, b, 255)
                            n_r += 1
                            y += 1

                    if n_r < next_ctl:
                        if n_r + 1 < bmp_size:
                            long_data = buf[n_r]
                            y += buf[n_r + 1]
                            idx = n_r + 2
                            n_r += 2
                        else:
                            break

                idx = next_ctl

            x += 1

        frames.append(pixels)

    return width, height, frames


def save_bmp(filepath, width, height, pixels):
    """Save RGBA pixel list as a 24-bit BMP file (no external deps needed)."""
    row_size = (width * 3 + 3) & ~3
    pixel_data_size = row_size * height
    file_size = 54 + pixel_data_size

    bmp = bytearray(file_size)
    bmp[0:2] = b'BM'
    struct.pack_into('<I', bmp, 2, file_size)
    struct.pack_into('<I', bmp, 10, 54)
    struct.pack_into('<I', bmp, 14, 40)
    struct.pack_into('<i', bmp, 18, width)
    struct.pack_into('<i', bmp, 22, -height)  # top-down
    struct.pack_into('<H', bmp, 26, 1)
    struct.pack_into('<H', bmp, 28, 24)
    struct.pack_into('<I', bmp, 34, pixel_data_size)

    for row in range(height):
        for col in range(width):
            r, g, b, a = pixels[row * width + col]
            if a == 0:
                r, g, b = 255, 0, 255
            offset = 54 + row * row_size + col * 3
            bmp[offset] = b
            bmp[offset + 1] = g
            bmp[offset + 2] = r

    with open(filepath, 'wb') as f:
        f.write(bmp)


def main():
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} <lbx_folder> [output_dir]")
        print(f"  Loops over all .LBX files in the folder and extracts graphics.")
        sys.exit(1)

    lbx_folder = sys.argv[1]
    out_dir = sys.argv[2] if len(sys.argv) > 2 else os.path.join(lbx_folder, 'extracted_bitmaps')

    os.makedirs(out_dir, exist_ok=True)

    lbx_files = sorted(glob.glob(os.path.join(lbx_folder, '*.[lL][bB][xX]')))
    if not lbx_files:
        print(f"No .LBX files found in {lbx_folder}")
        sys.exit(1)

    # index_rows: list of (filename, lbx_file, sub_index, sub_name, width, height, frames)
    index_rows = []
    total_gfx = 0
    total_frames = 0
    total_skipped = 0

    for lbx_path in lbx_files:
        lbx_basename = os.path.splitext(os.path.basename(lbx_path))[0].upper()
        print(f"Processing {lbx_basename}.LBX ...", end=" ", flush=True)

        data, subfiles = read_lbx(lbx_path)
        if data is None:
            print("not a valid LBX, skipped")
            total_skipped += 1
            continue

        file_gfx = 0
        file_frames = 0

        for i, (offset, size, name) in enumerate(subfiles):
            label = name if name else f"sub{i:03d}"
            try:
                width, height, frames = decode_gfx(data, offset, size)
                if len(frames) == 0:
                    raise ValueError("no frames")

                bmp_names = []
                for f_idx, pixels in enumerate(frames):
                    fname = f"{lbx_basename}_{i:03d}_{label}_f{f_idx:02d}.bmp"
                    save_bmp(os.path.join(out_dir, fname), width, height, pixels)
                    bmp_names.append(fname)

                index_rows.append({
                    'lbx': f"{lbx_basename}.LBX",
                    'sub_index': i,
                    'sub_name': label,
                    'width': width,
                    'height': height,
                    'num_frames': len(frames),
                    'files': bmp_names,
                })
                file_gfx += 1
                file_frames += len(frames)

            except Exception:
                pass  # not graphics data, skip silently

        if file_gfx > 0:
            print(f"{file_gfx} graphics, {file_frames} frames")
        else:
            print("no graphics found")
            total_skipped += 1

        total_gfx += file_gfx
        total_frames += file_frames

    # Write summary index
    index_path = os.path.join(out_dir, 'index.txt')
    col_lbx = 'LBX File'
    col_sub = 'Sub#'
    col_name = 'Name'
    col_size = 'Size'
    col_fr = 'Frames'
    col_files = 'Output Files'

    # Compute column widths
    w_lbx = max(len(col_lbx), max((len(r['lbx']) for r in index_rows), default=0))
    w_sub = max(len(col_sub), 4)
    w_name = max(len(col_name), max((len(r['sub_name']) for r in index_rows), default=0))
    w_size = max(len(col_size), 7)
    w_fr = max(len(col_fr), 6)

    with open(index_path, 'w') as f:
        header = (
            f"{'LBX File':<{w_lbx}}  "
            f"{'Sub#':>{w_sub}}  "
            f"{'Name':<{w_name}}  "
            f"{'Size':>{w_size}}  "
            f"{'Frames':>{w_fr}}  "
            f"Output Files"
        )
        f.write(header + '\n')
        f.write('-' * len(header) + '\n')

        for r in index_rows:
            size_str = f"{r['width']}x{r['height']}"
            first_file = r['files'][0]
            if r['num_frames'] > 1:
                last_file = r['files'][-1]
                files_str = f"{first_file} .. {last_file}"
            else:
                files_str = first_file

            line = (
                f"{r['lbx']:<{w_lbx}}  "
                f"{r['sub_index']:>{w_sub}}  "
                f"{r['sub_name']:<{w_name}}  "
                f"{size_str:>{w_size}}  "
                f"{r['num_frames']:>{w_fr}}  "
                f"{files_str}"
            )
            f.write(line + '\n')

        f.write('\n')
        f.write(f"Total: {total_gfx} graphics, {total_frames} BMP frames from {len(lbx_files)} LBX files\n")

    print()
    print(f"Done. {total_gfx} graphics, {total_frames} frames extracted to {out_dir}/")
    print(f"Index written to {index_path}")


if __name__ == '__main__':
    main()
