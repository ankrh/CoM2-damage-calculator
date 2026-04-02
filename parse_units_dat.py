"""
Parse Units.dat from Caster of Magic 2.

Binary format: 401 records of 1924 (0x784) bytes each.
Records 0-34 are heroes, 35-200 are regular/summoned units, 201-400 are empty.
Each record is a fixed-size struct of little-endian int32 fields and byte flags.
Movement values are stored as double the displayed value (half-moves).
"""

import struct
import sys
from pathlib import Path

RECORD_SIZE = 0x784  # 1924 bytes
DAT_PATH = Path(__file__).parent / "CoM2 material" / "Units.dat"

# Race ID -> name mapping (derived from cross-referencing units)
RACE_NAMES = {
    0: "Barbarian",
    1: "Beastmen",
    2: "Dark Elf",
    3: "Draconian",
    4: "Dwarf",
    5: "Gnoll",
    6: "Halfling",
    7: "High Elf",
    8: "High Men",
    9: "Klackon",
    10: "Lizardman",
    11: "Nomad",
    12: "Orc",
    13: "Troll",
    14: "Shared/Ship",
    15: "Arcane",
    16: "Nature",
    17: "Sorcery",
    18: "Chaos",
    19: "Life",
    20: "Death",
}

# Ranged type ID -> name
RANGED_TYPE_NAMES = {
    -1: "None",
    10: "Boulder",
    20: "Arrow",
    32: "Magic Ranged",
    35: "Healing/Special",
    36: "Lightning",
}

# Ability flag byte offsets (relative to record start) and names.
# These are individual bytes within the record that are 1 if the ability is present.
ABILITY_FLAGS = {
    0xBC: "Lucky",
    0xBD: "?_0xBD",
    0xBE: "Forester",
    0xBF: "Mountainwalk",
    0xC0: "FireImmunity",
    0xC1: "StoneTouch",
    0xC2: "PoisonImmunity",
    0xC3: "ColdImmunity_2",
    0xC4: "WeaponImmunity",
    0xC5: "ColdImmunity",
    0xC6: "MissileImmunity",
    0xC7: "MagicImmunity",
    0xC8: "Sailing",
    0xC9: "Flight",
    0xCA: "?_0xCA",
    0xCB: "?_0xCB",
    0xCC: "DisplayRace",
    0xCD: "?_0xCD",
    0xCE: "Caster",
    0xCF: "?_0xCF",
    0xD0: "LargeShield",
    0xD1: "PoisonAttack",
    0xD2: "LifeSteal",
    0xD3: "Healer",
    0xD4: "Regeneration",
    0xD5: "Purify",
    0xD6: "CreateUndead",
    0xD7: "WallCrusher",
    0xD8: "?_0xD8",
    0xD9: "ArmorPiercing",
    0xDA: "LongRange",
    0xDB: "IllusionAttack",
    0xDC: "Stealth",
    0xDD: "NegateFirstStrike",
    0xDE: "FirstStrike",
    0xDF: "?_0xDF",
    0xE0: "Teleport",
    0xE1: "?_0xE1",
    0xE2: "IsHero",
}

# Human-readable display names for abilities (matching units_by_race.md style).
# Keys not listed here are skipped in units_by_race output (internal/display flags).
ABILITY_DISPLAY = {
    "Lucky":             "Lucky",
    "Forester":          "Forester",
    "Mountainwalk":      "Mountainwalk",
    "FireImmunity":      "Fire Immunity",
    "PoisonImmunity":    "Poison Immunity",
    "ColdImmunity":      "Cold Immunity",
    "ColdImmunity_2":    "Cold Immunity",
    "WeaponImmunity":    "Weapon Immunity",
    "MissileImmunity":   "Missile Immunity",
    "MagicImmunity":     "Magic Immunity",
    "StoneTouch":        "Stoning Touch",
    "Flight":            "Flying",
    "Sailing":           "Ship",
    "LargeShield":       "Large Shield",
    "PoisonAttack":      "Poison",
    "LifeSteal":         "Life Steal",
    "Healer":            "Healer",
    "Regeneration":      "Regeneration",
    "Purify":            "Purify",
    "CreateUndead":      "Create Undead",
    "WallCrusher":       "Wall Crusher",
    "ArmorPiercing":     "Armor Piercing",
    "LongRange":         "Long Range",
    "IllusionAttack":    "Illusion Attack",
    "Stealth":           "Stealth",
    "NegateFirstStrike": "Negate First Strike",
    "FirstStrike":       "First Strike",
    "Teleport":          "Teleport",
    "Caster":            "Caster",
}

# Race display order matching units_by_race.md
RACE_ORDER = [0, 5, 6, 7, 8, 9, 10, 11, 12, 1, 4, 2, 3, 13, 14, 16, 17, 18, 19, 20, 15]

# Ranged type ID -> annotation string (used in the Ranged column)
RANGED_TYPE_ANNOTATION = {
    10: "boulder",
    11: "cannon",
    20: "",        # plain arrow — no annotation needed
    21: "",        # sling — treat as arrow
    30: "chaos bolt",
    31: "magic",
    32: "magic",
    33: "death ray",
    34: "water",
    35: "magic",   # healing-type ranged (shamans, priests)
    36: "lightning",
    37: "nature magic",
    38: "magic",
}


def parse_name(data, offset):
    """Parse pascal-style name string (length byte + chars, 32 bytes total)."""
    name_len = data[offset]
    if name_len == 0:
        return ""
    return data[offset + 1 : offset + 1 + name_len].decode("ascii", errors="replace")


def parse_record(data, index):
    """Parse a single unit record and return a dict of fields."""
    offset = index * RECORD_SIZE
    if offset + RECORD_SIZE > len(data):
        return None

    name = parse_name(data, offset)
    if not name:
        return None

    def i32(rel_offset):
        return struct.unpack_from("<i", data, offset + rel_offset)[0]

    ranged_type = i32(0x28)

    unit = {
        "index": index,
        "name": name,
        # Combat stats
        "attack": i32(0x20),
        "ranged": i32(0x24),
        "ranged_type": ranged_type,
        "thrown": i32(0x2C),
        "breath": i32(0x30),
        "ammo": i32(0x44),
        "to_hit": i32(0x4C),
        "to_hit_base": i32(0x50),
        # Defense
        "defense": i32(0x64),
        "resistance": i32(0x68),
        # Unit properties
        "race": i32(0x7C),
        "upkeep": i32(0x70),
        "hp": i32(0x80),
        "scouting": i32(0x84),
        "figures": i32(0x88),
        "building1": i32(0x94),
        "building2": i32(0x98),
        "ai_production": i32(0xA0),
        "cost": i32(0xA8),
        "ai_garrison": i32(0xB4),
        "sound": i32(0xB8),
        # Movement (stored as half-moves, display = value / 2)
        "moves_raw": i32(0x4E0),
        "hero_type": i32(0x6B0),
    }

    # Parse ability flags
    abilities = []
    for flag_offset, flag_name in ABILITY_FLAGS.items():
        if data[offset + flag_offset]:
            if not flag_name.startswith("?_"):
                abilities.append(flag_name)
    unit["abilities"] = abilities

    # Check for caster level (at 0x30 area or elsewhere)
    # +0x30 seems to be breath attack for some units
    # +0x34 unknown

    return unit


def parse_all(dat_path=DAT_PATH):
    """Parse all units from the DAT file."""
    data = dat_path.read_bytes()
    num_records = len(data) // RECORD_SIZE
    units = []
    for i in range(num_records):
        unit = parse_record(data, i)
        if unit:
            units.append(unit)
    return units


def format_unit_line(u):
    """Format a unit as a concise one-line summary."""
    race_name = RACE_NAMES.get(u["race"], f"?{u['race']}")

    ranged_str = ""
    if u["ranged"] > 0:
        rtype = RANGED_TYPE_NAMES.get(u["ranged_type"], f"type{u['ranged_type']}")
        ranged_str = f" Rng={u['ranged']}({rtype})"
    if u["thrown"] > 0:
        ranged_str += f" Thr={u['thrown']}"
    if u["breath"] > 0:
        ranged_str += f" Bth={u['breath']}"

    ammo_str = f" Ammo={u['ammo']}" if u["ammo"] > 0 else ""
    hero_str = f" HeroType={u['hero_type']}" if u["hero_type"] > 0 else ""
    abilities_str = f" [{', '.join(u['abilities'])}]" if u["abilities"] else ""

    return (
        f"[{u['index']:3d}] {u['name']:20s} "
        f"Race={race_name:12s} "
        f"Cost={u['cost']:3d} "
        f"Atk={u['attack']:2d}{ranged_str}{ammo_str} "
        f"Def={u['defense']:2d} Res={u['resistance']:2d} "
        f"HP={u['hp']:2d} Fig={u['figures']} "
        f"Mv={u['moves_raw'] / 2:g} "
        f"Hit={u['to_hit']}%"
        f"{hero_str}"
        f"{abilities_str}"
    )


def format_comparison_table(units):
    """Format units grouped by race in a markdown table for comparison."""
    lines = []

    # Group by race
    from collections import defaultdict

    by_race = defaultdict(list)
    heroes = []
    for u in units:
        if u["hero_type"] > 0:
            heroes.append(u)
        else:
            by_race[u["race"]].append(u)

    # Print heroes
    lines.append("## Heroes")
    lines.append("")
    lines.append(
        "| # | Name | Atk | Ranged | Thrown | Ammo | Def | Res | HP | Fig | Mv | Hit% | Cost | Abilities |"
    )
    lines.append(
        "|---|------|-----|--------|-------|------|-----|-----|----|----|----|----|------|-----------|"
    )
    for u in heroes:
        rng = str(u["ranged"]) if u["ranged"] > 0 else "—"
        rtype = (
            RANGED_TYPE_NAMES.get(u["ranged_type"], f"?{u['ranged_type']}")
            if u["ranged"] > 0
            else ""
        )
        rng_full = f"{rng} ({rtype})" if rng != "—" else "—"
        thr = str(u["thrown"]) if u["thrown"] > 0 else "—"
        ammo = str(u["ammo"]) if u["ammo"] > 0 else "—"
        abils = ", ".join(u["abilities"])
        lines.append(
            f"| {u['index']} | {u['name']} | {u['attack']} | {rng_full} | {thr} | {ammo} | "
            f"{u['defense']} | {u['resistance']} | {u['hp']} | {u['figures']} | "
            f"{u['moves_raw'] / 2:g} | {u['to_hit']}% | {u['cost']} | {abils} |"
        )
    lines.append("")

    # Print each race
    for race_id in sorted(by_race.keys()):
        race_name = RACE_NAMES.get(race_id, f"Unknown ({race_id})")
        race_units = by_race[race_id]
        lines.append(f"## {race_name} (Race {race_id})")
        lines.append("")
        lines.append(
            "| # | Name | Atk | Ranged | Thrown | Ammo | Def | Res | HP | Fig | Mv | Hit% | Cost | Abilities |"
        )
        lines.append(
            "|---|------|-----|--------|-------|------|-----|-----|----|----|----|----|------|-----------|"
        )
        for u in race_units:
            rng = str(u["ranged"]) if u["ranged"] > 0 else "—"
            rtype = (
                RANGED_TYPE_NAMES.get(u["ranged_type"], f"?{u['ranged_type']}")
                if u["ranged"] > 0
                else ""
            )
            rng_full = f"{rng} ({rtype})" if rng != "—" else "—"
            thr = str(u["thrown"]) if u["thrown"] > 0 else "—"
            ammo = str(u["ammo"]) if u["ammo"] > 0 else "—"
            abils = ", ".join(u["abilities"])
            lines.append(
                f"| {u['index']} | {u['name']} | {u['attack']} | {rng_full} | {thr} | {ammo} | "
                f"{u['defense']} | {u['resistance']} | {u['hp']} | {u['figures']} | "
                f"{u['moves_raw'] / 2:g} | {u['to_hit']}% | {u['cost']} | {abils} |"
            )
        lines.append("")

    return "\n".join(lines)


def _ranged_cell(u):
    """Return the Ranged column value, including thrown and breath attacks."""
    # Breath attack (fire breath etc.) — stored in 'breath' field
    if u["breath"] > 0:
        return f"{u['breath']} (fire breath)"

    thrown = u["thrown"]
    ranged = u["ranged"]
    rtype = u["ranged_type"]

    if thrown > 0:
        return f"{thrown} (thrown)"

    if ranged > 0:
        annotation = RANGED_TYPE_ANNOTATION.get(rtype, f"type{rtype}")
        if annotation:
            return f"{ranged} ({annotation})"
        return str(ranged)

    return "—"


def _ammo_cell(u):
    """Return the Ammo column value."""
    # Thrown attacks have no ammo in CoM2
    if u["thrown"] > 0 or u["breath"] > 0:
        return "—"
    return str(u["ammo"]) if u["ammo"] > 0 else "—"


def _abilities_cell(u):
    """Return a comma-separated abilities string matching units_by_race.md style."""
    parts = []

    # To Hit bonus (base is 30%; each 10% above is a +X0% To Hit ability)
    hit = u["to_hit"]
    if hit > 30:
        parts.append(f"+{hit - 30}% To Hit")

    # Scouting (only show if > 1; Scouting 1 is the default)
    if u["scouting"] > 1:
        parts.append(f"Scouting {u['scouting']}")

    # Named ability flags (in flag offset order = consistent display order)
    seen = set()
    for flag_name in u["abilities"]:
        display = ABILITY_DISPLAY.get(flag_name)
        if display is None:
            continue  # skip DisplayRace, IsHero, unknown flags
        if display in seen:
            continue  # deduplicate ColdImmunity / ColdImmunity_2
        seen.add(display)
        parts.append(display)

    return ", ".join(parts) if parts else "—"


def format_units_by_race_md(units):
    """
    Format all units in the same style as units_by_race.md:
    one markdown table per race, columns matching the reference file.
    """
    from collections import defaultdict

    lines = []
    lines.append("# CoM2 Units by Race — Parsed from Units.dat")
    lines.append("")
    lines.append(
        "Movement is stored as half-moves in the binary; displayed values are halved here.  "
    )
    lines.append(
        'Ranged type is annotated in parentheses where it differs from a plain arrow.  '
    )
    lines.append('"—" means the unit does not have that stat/attack.')
    lines.append("")

    by_race = defaultdict(list)
    heroes = []
    for u in units:
        if u["hero_type"] > 0:
            heroes.append(u)
        else:
            by_race[u["race"]].append(u)

    TABLE_HEADER = (
        "| Unit | Cost | Melee | Ranged | Ammo | Defense | Resistance"
        " | Movement | Figures | Health | Abilities |"
    )
    TABLE_SEP = (
        "|------|------|-------|--------|------|---------|------------"
        "|----------|---------|--------|-----------|"
    )

    # Units to suppress from the per-race tables (shared/generic units)
    SUPPRESS_NAMES = {"Settlers"}

    def emit_race_section(race_id):
        race_units = [u for u in by_race.get(race_id, []) if u["name"] not in SUPPRESS_NAMES]
        if not race_units:
            return
        race_name = RACE_NAMES.get(race_id, f"Unknown ({race_id})")
        lines.append(f"## {race_name}")
        lines.append("")
        lines.append(TABLE_HEADER)
        lines.append(TABLE_SEP)
        for u in race_units:
            ranged = _ranged_cell(u)
            ammo   = _ammo_cell(u)
            abils  = _abilities_cell(u)
            mv     = u["moves_raw"] // 2
            lines.append(
                f"| {u['name']} | {u['cost']} | {u['attack']} | {ranged}"
                f" | {ammo} | {u['defense']} | {u['resistance']}"
                f" | {mv} | {u['figures']} | {u['hp']} | {abils} |"
            )
        lines.append("")
        lines.append("---")
        lines.append("")

    for race_id in RACE_ORDER:
        emit_race_section(race_id)

    # Heroes section
    lines.append("## Heroes")
    lines.append("")
    lines.append(TABLE_HEADER)
    lines.append(TABLE_SEP)
    for u in heroes:
        ranged = _ranged_cell(u)
        ammo   = _ammo_cell(u)
        abils  = _abilities_cell(u)
        mv     = u["moves_raw"] // 2
        lines.append(
            f"| {u['name']} | {u['cost']} | {u['attack']} | {ranged}"
            f" | {ammo} | {u['defense']} | {u['resistance']}"
            f" | {mv} | {u['figures']} | {u['hp']} | {abils} |"
        )
    lines.append("")

    return "\n".join(lines)


if __name__ == "__main__":
    units = parse_all()

    if "--table" in sys.argv:
        print(format_comparison_table(units))
    elif "--output" in sys.argv or len(sys.argv) == 1:
        out_path = Path(__file__).parent / "CoM2 material" / "units_by_race_from_dat.md"
        text = format_units_by_race_md(units)
        out_path.write_text(text, encoding="utf-8")
        print(f"Written to {out_path}")
    else:
        for u in units:
            print(format_unit_line(u))
