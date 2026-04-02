"""
Generate a human-readable Markdown overview of MoM unit stats.
Format: one table per race/category, with a Notes column for special abilities.
Designed to support future CoM2 diff annotations (e.g. "3 → 5").
"""
import json

INPUT  = "CoM1 or MoM material/units_from_changeunit.json"
OUTPUT = "CoM1 or MoM material/MoM Unit Stats Overview.md"

RANGED_TYPE = {0: "-", 1: "Magic(C)", 2: "Magic(N)", 3: "Magic(S)", 4: "Missile", 5: "Rock"}
BREATH_TYPE = {0: "-", 1: "Thrown", 2: "Fire", 3: "Lightning"}

# Abilities that show as text labels in the Notes column
ABILITY_FLAGS = [
    ("flying",            "Flying"),
    ("noncorp",           "Non-Corp"),
    ("large_shield",      "Large Shield"),
    ("lucky",             "Lucky"),
    ("long_range",        "Long Range"),
    ("armor_piercing",    "Armor Piercing"),
    ("first_strike",      "First Strike"),
    ("negate_first_strike","Negate FS"),
    ("missile_immunity",  "Missile Imm"),
    ("magic_immunity",    "Magic Imm"),
    ("illusions_immunity","Illusion Imm"),
    ("weapon_immunity",   "Weapon Imm"),
    ("death_immunity",    "Death Imm"),
    ("fire_immunity",     "Fire Imm"),
    ("cold_immunity",     "Cold Imm"),
    ("poison_immunity",   "Poison Imm"),
    ("stone_immunity",    "Stone Imm"),
    ("poison_touch",      "Poison Touch"),
    ("illusion",          "Illusion"),
    ("invisibility",      "Invisible"),
    ("fear",              "Fear"),
    ("life_steal",        "Life Steal"),
    ("regeneration",      "Regen"),
    ("immolation",        "Immolation"),
    ("dispel_evil",       "Dispel Evil"),
    ("resist_all",        "Resist All"),
    ("death_gaze",        "Death Gaze"),
    ("stone_gaze",        "Stone Gaze"),
    ("doom_gaze",         "Doom Gaze"),
    ("gaze_ranged",       "Gaze Ranged"),
    ("stone_touch",       "Stone Touch"),
]

def stat(u, key, default=0):
    return u.get(key, default)

def fmt(val):
    """Format a stat value, returning '-' for 0/missing."""
    return str(val) if val else "-"

def abilities_str(u):
    parts = []
    for key, label in ABILITY_FLAGS:
        v = u.get(key, 0)
        if v:
            if isinstance(v, int) and v > 1:
                parts.append(f"{label} {v}")
            else:
                parts.append(label)
    if u.get("holy_bonus"):
        parts.append(f"Holy Bonus {u['holy_bonus']}")
    color = next((c for c in ["life_unit","death_unit","chaos_unit","nature_unit","sorc_unit"] if u.get(c)), None)
    if color:
        parts.append(color.replace("_unit","").capitalize() + " unit")
    return ", ".join(parts) if parts else ""

def unit_row(u):
    ranged_str = fmt(stat(u, "ranged"))
    if ranged_str != "-":
        ranged_str += f" ({RANGED_TYPE.get(stat(u,'ranged_type'), '?')})"
    breath_str = fmt(stat(u, "breath"))
    if breath_str != "-":
        breath_str += f" ({BREATH_TYPE.get(stat(u,'breath_type'), '?')})"
    tohit = stat(u, "to_hit")
    tohit_str = f"+{tohit}%" if tohit else "-"
    return (
        f"| {u['name']:<30} "
        f"| {fmt(stat(u,'figures')):>4} "
        f"| {fmt(stat(u,'melee')):>5} "
        f"| {fmt(stat(u,'defense')):>3} "
        f"| {fmt(stat(u,'resist')):>3} "
        f"| {fmt(stat(u,'hp')):>2} "
        f"| {tohit_str:>5} "
        f"| {ranged_str:<16} "
        f"| {breath_str:<16} "
        f"| {abilities_str(u)} |"
    )

HEADER = (
    "| Unit                           |  Fig | Melee | Def | Res | HP | ToHit "
    "| Ranged           | Thrown/Breath    | Abilities |"
)
DIVIDER = (
    "|--------------------------------|------|-------|-----|-----|----|-------"
    "|------------------|------------------|-----------|"
)

def section(title, unit_list):
    lines = [f"## {title}", "", HEADER, DIVIDER]
    for u in unit_list:
        lines.append(unit_row(u))
    lines.append("")
    return "\n".join(lines)

# Race groupings for normal units
RACES = [
    ("Barbarian",  range(37, 43)),
    ("Gnoll",      range(43, 50)),
    ("Halfling",   range(50, 56)),
    ("High Elf",   range(56, 64)),
    ("High Men",   [64, 65, 66, 800, 801, 802, 804, 805, 806]),
    ("Klackon",    range(68, 73)),
    ("Lizardmen",  range(74, 80)),
    ("Nomad",      [80, 81, 82, 801, 802, 804, 805, 806]),
    ("Orc",        [83, 84, 85, 86, 87, 800, 801, 802, 805]),
    ("Beastmen",   range(88, 99)),
    ("Dark Elf",   range(100, 108)),
    ("Draconian",  range(109, 117)),
    ("Dwarf",      range(118, 124)),
    ("Troll",      range(125, 131)),
]

SUMMON_GROUPS = [
    ("Summoned — Life",    range(1001, 1005)),
    ("Summoned — Death",   [1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014,
                             1044, 1045, 1046, 1047, 1048, 1049]),
    ("Summoned — Chaos",   range(1015, 1025)),
    ("Summoned — Nature",  range(1025, 1036)),
    ("Summoned — Sorcery", range(1036, 1043)),
    ("Summoned — Arcane",  [1043]),
]

def main():
    units = json.load(open(INPUT, encoding="utf-8"))

    lines = [
        "# Master of Magic — Unit Stats Overview",
        "",
        "Stats shown at base (Recruit/no experience). "
        "ToHit bonus is on top of the base 30% (i.e. +10% means 40% effective).",
        "Future CoM2 differences will be annotated as `old → new`.",
        "",
    ]

    # Heroes
    heroes = [units[str(i)] for i in range(1, 36) if str(i) in units]
    lines.append(section("Heroes (base stats at Hero rank)", heroes))

    # Normal units by race
    for race, ids in RACES:
        race_units = [units[str(i)] for i in ids if str(i) in units]
        if race_units:
            lines.append(section(race, race_units))

    # Ships
    ships = [units[str(i)] for i in [899, 900, 901, 902] if str(i) in units]
    if ships:
        lines.append(section("Ships", ships))

    # Summoned units
    for group_name, ids in SUMMON_GROUPS:
        group_units = [units[str(i)] for i in ids if str(i) in units]
        if group_units:
            lines.append(section(group_name, group_units))

    out = "\n".join(lines)
    with open(OUTPUT, "w", encoding="utf-8") as f:
        f.write(out)
    print(f"Written to {OUTPUT}")

if __name__ == "__main__":
    main()
