# Caster of Magic Damage Calculator

A browser-based combat damage calculator for **Caster of Magic for Windows (CoM2)** v1.05.11, with support for the original **Master of Magic (MoM)** mechanics as well.

Given an attacker and defender configuration, the calculator computes the **exact probability distribution** of damage dealt in a single attack phase, displayed as both a histogram and a numerical table, along with the **expected (average) damage**.

## Implementation Phases

### Phase 1 — MoM calculator, custom units, no enchantments
Core damage engine with manual stat entry for both attacker and defender:
- Attack strength, defense, HP per figure, number of figures
- To-Hit and To-Block modifiers
- Damage types: TBD
- Multi-figure sequential combat (per-figure attack rolls, fresh defense rolls on figure death, damage overflow)
- Exact binomial probability computation (no Monte Carlo)
- Probability distribution chart + expected damage display

### Phase 2 — Unit database
- Predefined unit database (JSON) with all MoM/CoM/CoM2 unit stats
- Dropdown unit selector that auto-fills stats
- Users can still override any stat after selection

### Phase 3 — Enchantments and abilities
- Unit enchantments (Bless, Holy Armor, Holy Weapon, Invulnerability, etc.)
- Special abilities (Lucky, Large Shield, Weapon Immunity, Missile Immunity, etc.)
- Experience level bonuses

### Phase 4 — CoM2 mechanics toggle
- Switch between MoM (10% increment) and CoM2 (1% increment) to-hit/to-defend systems
- CoM2-specific ranged penalty formula
- Any other CoM2-specific combat differences

### Phase 5 — Polish
- Responsive layout, visual styling matching the game's aesthetic
- Save/share configurations via URL parameters
- Additional quality-of-life features

## Combat Mechanics Reference (MoM)

### TBD
