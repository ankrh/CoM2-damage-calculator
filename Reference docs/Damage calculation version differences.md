## Version Differences: v1.31 vs v1.40n

The MoM Advanced Damage Calculator supports two game versions. The version selection does **not** affect unit stats, rosters, or base abilities — only the following combat mechanics differ.

### 11a. Lucky: Opponent To Hit Penalty (v1.31 only)

In **v1.31**, Lucky reduces the **opponent's To Hit** by −10% (for melee, ranged, and breath attacks), in addition to its standard +10% To Hit / +10% To Block on the Lucky unit's own rolls.

In **v1.40n**, Lucky only provides the self-bonus (+10% To Hit, +10% To Block). It no longer penalizes the opponent's To Hit.

This is a significant nerf to Lucky in v1.40n — in v1.31 it was effectively a 20% swing (your To Hit +10%, enemy To Hit −10%), while in v1.40n it is only a 10% self-buff to each.

### 11b. Weapon Immunity / Missile Immunity Interaction (v1.31 only)

When a unit has **both** Weapon Immunity and Missile Immunity and is attacked by Ranged Missile (arrow) attacks from a non-magical attacker:

- **v1.31**: Weapon Immunity applies first (Defense → 10) and **blocks** Missile Immunity from also applying. The defender gets Defense 10, not 50.
- **v1.40n**: Weapon Immunity applies (Defense → 10), but then Missile Immunity **overrides** it (Defense → 50).

In practice, v1.40n is more favorable to the defender in this edge case. This only matters for units that have both immunities and face non-magical missile attacks.

### 11c. Hero Random Ability Picks: Arcane Power Waste (v1.31 only)

When randomizing hero ability picks for heroes that already have Arcane Power as a guaranteed ability (e.g., Torin, Alorra):

- **v1.31**: Arcane Power can still be "rolled" as a random pick, wasting a pick slot.
- **v1.40n**: Arcane Power is excluded from the random pool, so all picks are effective.

### Other

Demon Skin no longer applies its Defense bonus twice in combat.
The Cause Fear ability now affects the correct unit.
Thrown- and Breath Attacks no longer ignore ranged To Hit modifiers.
Extra chance To Block no longer reduces the enemy's chance To Hit with Melee Attacks in addition to its normal effect.
 Spell Save modifiers now apply to Life Drain, Death Spell, and Holy Word. 
 Units standing on the central tiles of a Town with City Walls in combat now receive  +3 as though there were intact walls there. (IW082)
Defending units now get  +2 during sieges in strategic combat if the City has either City Walls or a Wall of Fire. (IW084)
Introduced bug : Weapon Immunity provides  +50 instead of  +10 against physical non-melee attacks ( Thrown,  Boulder,  Missile).

## 1.40n vs 1.51

Units having a Wind Walking enchantment on them are no longer impossible to attack in combat using ground units.
Fixes the healing bug that grants extra  Health to units. Affects Regeneration, Life Steal, Healing, Mass Healing. (113)
Undead units now have the expected Illusion Immunity, Death Immunity, Cold Immunity, Poison Immunity. (144)
Berserk now sets  0 instead of  -20. More of a precaution than a bugfix, in case negative defense causes unexpected trouble. (145)
Black Sleep now causes units to lose all their movement types instead of remaining a Icon Movement Air unit, preventing attacks to it. (146)
Thrown no longer ignores Weapon Immunity (152)
Units no longer fail using Gaze or other special attack types if their associated attack strength is 0 (153), also known as the hidden ranged attack problem.
Immolation no longer works with ranged attacks (no more shooting flaming arrows) (154)
Blur works as intended, no rolls are lost on successes and Illusion Immunity is no longer checked on the wrong unit (156)
Wraith Form no longer grants immunity against Flame Strike, Death Spell, and Holy Word (318)
Fixed bug : Icon Movement SailingSailing Ships and Catapults ignore Weapon Immunity. (635)
Fixed Insecticide bug : Weapon Immunity provides  +50 instead of  +10 against physical non-melee attacks ( Thrown,  Boulder,  Missile). (637)
Fixed bug : Weakness does not affect  Thrown attacks. (638)
Fixed bug: Life Stealing units ignore Irreversible Damage. (700)
Fixed bug:  Ranged Magical Attacks are not always doubled correctly by Haste. (744)
Fixed bug: Ability FirstStrike First Strike  figures slain by Ability DoomGaze Doom Gaze sometimes still participate in melee. (746)

## 1.51 to 1.60 (Community Patch)

Node auras were broken in combat from ~v1.50 to v1.52.02, fixed in v1.52.03 (patch 811). 1.60 matches 1.31, so no branch needed.

## MoM 1.60 to CoM 6.08

Source: `Manuals/Spell list version differences.md` (spell list diff) and `Manuals/CoM spells.md` (full CoM spell descriptions). Only combat enchantments and unit enchantments that change how stats, immunities, damage, or to-hit/to-defend are resolved are listed here. Pure global/city/economy/summoning/direct-damage spells and tier moves that leave effects unchanged are omitted.

### New combat / unit enchantments

- **Blood Lust** (Death, Uncommon) — new unit enchantment. Enchanted unit becomes Undead and deals **double melee damage against normal (non-fantastic) units**. Works on fantastic units too (e.g., undead Werewolves still get the doubling vs. normal units). Fills the role Black Channels + Berserk used to occupy.
- **Focus Magic** (Sorcery, Common) — new unit enchantment. +3 magical ranged/breath attack strength. If the unit has a thrown or non-magical ranged attack, it is **converted into a magical ranged attack of equal strength**. If it has no ranged attack at all, it gains a strength 3 magical ranged attack with 3 ammo. Also grants +15 MP.
- **Supreme Light** (Life, Very Rare) — new global combat/army enchantment. All of the caster's **Life creatures and magic-user (Caster) units** gain +2 melee and +2 ranged attack, gain **Defense equal to ⅓ of their magic resistance**, and regenerate at end of combat. Not active on combat turn 1 when attacking.
- **Survival Instinct** (Nature, Rare) — new global enchantment. All of the caster's **fantastic creatures** gain +1 defense, +1 To Hit, and +2 magic resistance.
- **Mystic Surge** (Chaos, Uncommon) — new combat spell cast on own unit. Target gains +3 movement, +2 defense, −2 resistance, **−1 To Defend (makes the unit's attacks harder to defend against)**, plus random enchantments, becomes fantastic. Can't be dispelled. (Heal-block + post-combat death are non-combat-stat effects but should be noted.)
- **Blazing March** (Chaos, Rare) — new combat global enchantment replacing Metal Fires. All of the caster's units gain **+3 melee attack and +3 missile attack, and those attacks ignore Weapon Immunity**. Unlike the old Metal Fires, it also affects fantastic creatures.

### Removed enchantments (supported in MoM, gone in CoM)

- **Black Channels** (Death) — removed. Role partly subsumed by Blood Lust.
- **Berserk** (Death) — removed. (Doubling attack was too strong and created shortint overflow risk on heroes.)
- **Giant Strength** (Nature) — removed.
- **Stone Skin** (Nature) — removed. Iron Skin (+5 defense) remains as the sole defense buff of this kind.
- **Eldritch Weapon** (Chaos) — removed.
- **Metal Fires** (Chaos) — removed. Flame Blade (now Common) remains as the +2 magical weapon buff.

### Changed effects on existing enchantments

- **High Prayer** (Life) — now +1 To Hit, +1 To Defend, +3 attack, +3 resistance, +2 defense (in MoM the buff was smaller and structured differently). Not cumulative with Prayer.
- **Lionheart** (Life) — now +3 attack, +3 resistance, and **(8 ÷ figure count, rounded down) extra HP per figure** (was +3 attack / +3 defense / +3 resistance / +3 HP per figure in MoM). Multi-figure units get less, single-figure units (heroes) get a full +8 HP.
- **Invulnerability** (Life) — in addition to Weapon Immunity, the unit now also takes **−2 damage from every incoming damage instance** (even damage that would bypass defense, except Doom damage). Effectively +~6.7 defense on top of Weapon Immunity.
- **Blur** (Sorcery) — moved to Common and strengthened: **each point of incoming damage has a 20% chance to be nullified** (applied before defense rolls), not the old 10%. Still does not apply against Illusion-immune attackers per base mechanics.
- **Invisibility** (Sorcery) — still grants Blur-equivalent damage prevention, but when **stacked with Blur** the combined damage-ignore chance is 30% (not 40%).
- **Haste** (Sorcery) — moved to Very Rare. Still doubles movement and gives two attacks per attack, but **no longer doubles counter-attacks** (counter-attack happens only once).
- **Wraith Form** (Death) — moved to Common. Grants Weapon Immunity + Non-Corporeal, and additionally **lets the enchanted unit bypass Weapon Immunity on its own attacks (as if it had magic weapons)**. No longer grants Poison Immunity.
- **Flame Blade** (Chaos) — moved to Common (effect unchanged: +2 magical to melee / ranged / thrown / breath).
- **Chaos Channels** (Chaos) — Fire Breath option's strength raised to **4** (from 2 in MoM).

## CoM 6.08 to CoM2 1.05.11

Source: `Manuals/Spell list version differences.md` (CoM → CoM2 section) and `Manuals/CoM2 spells.md` (full CoM2 spell descriptions), cross-checked against `Manuals/CoM spells.md`. Same scope rule as the CoM section — only combat/unit enchantments that change stats, immunities, damage, or to-hit/to-defend. Direct-damage spells, terrain/economy spells, pure summons (new creatures without new enchantment mechanics), and tier moves that leave effects unchanged are omitted.

### New combat / unit enchantments

- **Discipline** (Life, Common) — new unit enchantment scaling with veterancy. Base: +1 defense. Regular or better: +1 more defense (+2 total). Veteran or better: additionally +1 attack and +1 ranged (excluding magical ranged). Elite: additionally +1 movement (overland) or **Negate First Strike** if cast in combat.
- **Destiny** (Life, Very Rare) — new unit enchantment. Target normal unit becomes a **Supernatural Life creature permanently**, with **doubled base melee and ranged attack strength**, **doubled health**, **+4 defense**, **+4 resistance**. Changes the unit's base type (loses levels, can't receive normal-unit-only buffs afterward).
- **Reinforce Magic** (Sorcery, Rare) — new global combat enchantment. All of the caster's units gain **+2 resistance**. Units that already have a magical ranged attack additionally gain **+2 magical ranged strength**.
- **Mislead** (Death, Common) — new unit enchantment cast on enemy normal units. Target gains Misfortune, and all normal units fighting alongside it lose **−1 melee, −1 ranged, −1 defense, −1 resistance** (not cumulative, can't be dispelled). Target gets −1 save per 2 fantastic creatures on caster's side. No effect on units immune to Death or Illusions.
- **Ruler of Underworld** (Death, Very Rare) — new global combat enchantment. All of the caster's units gain **Wraith Form** during battle (Weapon Immunity + Non-Corporeal + bypass Weapon Immunity on own attacks). Additionally, enemy **Magical, Mithril, and Adamantium weapons no longer bypass Weapon Immunity** while this is in effect — a major defensive upgrade over plain mass Wraith Form.
- **Inner Power** (Chaos, Rare) — new global combat enchantment. All of the caster's units that have **Fire Immunity or Lightning Resistance** gain **+3 to every attack strength** (melee, ranged, breath, thrown), **+2 defense**, and **+2 resistance**.
- **Blazing Eyes** (Chaos, Very Rare) — new global enchantment. All Chaos creatures gain **Doom Gaze 3**. Creatures that already have Doom Gaze instead get **+1 to its strength**.

### Changed effects on existing enchantments

- **Endurance** (Life) — moved from Common to Uncommon and the effect changed. CoM: +1 movement, **+2 defense**. CoM2: +1 movement, **+4 total HP split evenly between figures (minimum 1 per figure)**. Single-figure units (heroes, big fantastics) gain the full +4 HP; multi-figure units lose the defense bonus in exchange for a small per-figure HP top-up.
- **High Prayer** (Life) — attack bonus reduced from **+3 to +2**. Other components unchanged (+10% To Hit, +10% To Defend, +3 resistance, +2 defense).
- **Magic Immunity** (Sorcery) — tier-moved from Rare to Very Rare; effect unchanged (100 defense and 100 resistance vs. spells, magical ranged, gaze, and touch attacks).

