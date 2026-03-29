# Master of Magic — Combat Damage Mechanics Reference

Condensed reference for implementing a damage calculator. Covers all mechanics relevant to resolving a single attack phase.

---

## 1. Core Dice System

All combat resolution uses **d10 rolls** (random integer 1–10).

- **Attack Roll**: One d10 per point of Attack Strength. Success if roll ≤ (To Hit / 10). Base To Hit = **30%** (success on 8, 9, or 10 — equivalently, roll ≤ 3 on a d10).
- **Defense Roll**: One d10 per point of Defense. Success if roll ≤ (To Block / 10). Base To Block = **30%**.
- Each successful attack roll = 1 **hit**. Each successful defense roll = 1 **block**. Damage = hits − blocks (minimum 0).

**To Hit** range: 10% to 100% (minimum 1-in-10 always succeeds; maximum guaranteed hit).
**To Block** range: 10% to 100%.
Both adjust in **10% increments** (MoM). In CoM2, both adjust in **1% increments**.

---

## 2. Attack Strength

The number of dice rolled in the Attack Roll. Determined by:

| Attack Type | Strength Source |
|---|---|
| Melee | Unit's Melee stat (swords) |
| Counter Attack | Same as Melee (unit's Melee stat) |
| Ranged Missile | Unit's Ranged stat (arrows) |
| Ranged Boulder | Unit's Ranged stat (boulders) |
| Ranged Magical | Unit's Ranged stat (bolts) |
| Thrown | Number after "Thrown" ability |
| Fire Breath | Number after "Fire Breath" ability |
| Lightning Breath | Number after "Lightning Breath" ability |
| Gaze Attacks | Fixed at 1 (hidden), except Chaos Spawn |
| Immolation | Fixed at 4 |
| Spells | Per spell description |

**Modifiers to Attack Strength:**
- Mithril weapons: +1
- Adamantium weapons: +2
- Experience (Elite): +1 melee/ranged; (Ultra-Elite, Champion): more
- Various enchantments (Flame Blade, Giant Strength, etc.)

A unit with **0 base Attack Strength** for an attack type cannot perform that attack at all; bonuses cannot raise it from 0.

---

## 3. To Hit Modifiers

Base = 30%. Modifiers add/subtract in 10% steps.

**Increases:**
- Magical weapons: +10%
- Mithril/Adamantium: +10% (on top of magical)
- Experience (Elite +10%, Champion +10% more)
- Holy Weapon: +10%
- Heroism: +10%
- Lucky: +10% (on the Lucky unit's own attacks)

**Decreases:**
- Black Prayer: −10%
- Vertigo: −20% (resistable)
- Attacking Invisible target: −10% (unless attacker has Illusions Immunity)
- Counter Attack penalty: −10% per counter after the first in the same round
- Ranged distance penalties (see §8)

**Spell damage always uses exactly 30% — cannot be modified.**

---

## 4. Defense and To Block

**Defense** = number of dice in the Defense Roll.

**Effective Defense calculation order:**
1. Start with base Defense stat
2. Apply additive modifiers (enchantments, penalties: Stone Skin +1, Holy Armor +2, Black Prayer −1, Berserk → set to 0, etc.)
3. Apply **Armor Piercing** → halve Defense (round down)
4. Apply **immunities** that raise Defense (Weapon Immunity → 10, Missile Immunity → 50, Magic Immunity → 50, Fire/Cold Immunity → 50)
5. Apply **Illusion Damage** → set Defense to 0 (overrides immunities, except Illusions Immunity negates this step; City Walls bonus also survives)
6. Apply **Doom Damage** → skip Defense Roll entirely (no dice rolled)

**To Block modifiers** (very few exist):
- Lucky: +10%
- Prayer / High Prayer: +10%
- Eldritch Weapon (on attacker): −10% to target's To Block
- Maximum achievable: 50% (Lucky + Prayer)

---

## 5. Multi-Figure Combat

### Attacking
Each **figure** in the attacking unit makes a **separate attack** with the unit's listed Attack Strength. They are NOT combined into one large attack.

Example: 6 Spearmen with 2 Melee each → 6 separate attacks of strength 2, not 1 attack of strength 12. The defender gets a separate Defense Roll against each.

### Defending (Damage Overflow)
Damage from a single attacking figure is applied to the defending unit's **lead figure** first:

1. Attacker's figure rolls Attack Roll → gets N hits
2. Defender's lead figure rolls Defense Roll (using full Defense score) → blocks some
3. Unblocked damage applied to lead figure
4. If lead figure's remaining HP ≤ 0, it **dies** and excess damage carries to next figure
5. Next figure gets a **fresh Defense Roll** (full Defense score) against remaining damage
6. Repeat until damage is exhausted or unit is destroyed

**Key distinction — Top Figure Damage:**
- **Unit attacks**: Always treat the target figure as having **full HP** for determining when a new Defense Roll triggers. Top figure damage is ignored.
- **Spell attacks**: Consider **actual remaining HP** of the top figure. A partially damaged top figure dies sooner, triggering a new Defense Roll earlier.

This means multi-figure units are significantly more resilient than single-figure units — they effectively multiply their Defense rolls.

---

## 6. Damage Types

### 6a. Physical Damage (Conventional Damage)

Standard resolution: Attack Roll → Defense Roll → net damage. This is the baseline for Melee, Counter Attack, Ranged, Thrown, and direct-damage spells.

### 6b. Tandem Modifiers (modify the Defense step)

These don't deal damage on their own — they modify how Defense works for the accompanying Physical Damage.

| Modifier | Effect on Defense | Notes |
|---|---|---|
| **Armor Piercing** | Halve Defense (round down) | Applied before immunities. Sources: Armor Piercing ability, Lightning Breath, some spells. |
| **Illusion Damage** | Set Defense to 0 | Overrides all immunities except Illusions Immunity and City Walls. Sources: Illusion ability, Phantasmal weapons, Psionic Blast. |
| **Doom Damage** | Skip Attack Roll AND Defense Roll | Attack Strength = raw damage directly. Sources: Doom Bolt, Doom Gaze (Chaos Spawn), Chaos Weapons (halve strength first), Black Sleep (converts incoming conventional to Doom). |

### 6c. Elemental Damage Subtypes

These are still Physical Damage (use Attack Roll + Defense Roll) but trigger additional immunities:

| Subtype | Triggers Immunity | Defense if Immune |
|---|---|---|
| **Magical Damage** | Magic Immunity | Ranged/Breath: Defense → 50. Spells: completely blocked. |
| **Fire Damage** | Fire Immunity OR Magic Immunity | Defense → 50 |
| **Cold Damage** | Cold Immunity OR Magic Immunity | Defense → 50 |

Fire Breath delivers Fire Damage. Lightning Breath delivers Armor Piercing + Magical Damage. Ranged Magical Attacks deliver Magical Damage.

### 6d. Area Damage

Same as Physical Damage but resolved **per defending figure** separately:
1. For each figure in the target unit, make a separate Attack Roll (same strength)
2. Each figure makes its own Defense Roll
3. Damage to each figure is **capped at that figure's current HP** (no overflow between figures)
4. All per-figure damage is pooled and applied to the unit

Area Damage is much more effective against multi-figure units than normal damage.

**Types:** Immolation Damage (Fire-type area, strength 4), Blizzard Damage (Cold-type area, from Ice Storm spell).

### 6e. Special Damage (Resistance-Based)

These bypass Attack Roll and Defense entirely. Instead, the target makes a **Resistance Roll**: roll d10, success if roll ≤ (Resistance − penalty). On failure, the specific effect applies.

| Damage Type | On Failed Resist | Penalty | Blocked By |
|---|---|---|---|
| **Poison** | 1 damage per failed point (roll each poison point separately) | None (usually) | Poison Immunity, Resistance ≥ 10 |
| **Stoning** | Figure instantly dies | Varies: −1 to −4 | Stoning Immunity, Magic Immunity, high Resistance |
| **Death** | Figure instantly dies | Varies: −2 to −4 | Death Immunity, Magic Immunity, high Resistance |
| **Life Stealing** | Damage = (roll − Resistance), attacker heals | Varies: 0 to −5 | Death Immunity, Magic Immunity, Resistance ≥ 10 |
| **Dispel Evil** | Figure instantly dies (Chaos/Death/Undead only) | −4 or −9 | Magic Immunity, wrong unit type |
| **Disintegration** | Lead figure dies (permanently) | None | Magic Immunity, Resistance ≥ 10 |
| **Fear** | Figure cannot melee attack this round | None | Death Immunity, Magic Immunity, Resistance ≥ 10 |

**Touch Attacks** (Poison Touch, Stoning Touch, Life Steal, etc.): One Resistance roll per **attacking** figure. Resolved simultaneously with Melee Damage.

**Gaze Attacks** (Stoning Gaze, Death Gaze, Doom Gaze): One roll per **defending** figure. Resolved before Melee exchange (attacker's Gaze first, then defender's Gaze).

**Note:** Poison Damage is unique — it is NOT blocked by Magic Immunity.

---

## 7. Melee Combat Sequence

When unit A initiates a Melee Attack on unit B, the full sequence is:

1. **Breath/Thrown** (A only) — A executes Breath and/or Thrown attacks. B cannot.
2. **Gaze** (A then B) — A executes Gaze attacks against B. Then B executes Gaze attacks against A.
3. **Fear** (if applicable) — Cause Fear forces Resistance rolls on B's figures; failed figures can't melee.
4. **Melee + Touch** (simultaneous) — A and B exchange Melee Damage and Touch Attacks at the same time.

**Figures killed in earlier stages don't participate in later stages.** This makes Breath/Thrown/Gaze very valuable — they can reduce the enemy before the risky simultaneous melee exchange.

### First Strike
Changes step 4: A delivers Melee/Touch damage **first**. B's surviving figures then retaliate. Only works when A is the voluntary attacker (not Counter Attacking).

### Negate First Strike
If B has Negate First Strike, A's First Strike is cancelled — step 4 reverts to simultaneous.

### Counter Attack
When B retaliates, B acts as defender in steps 1–4. B cannot use Breath or Thrown attacks. B can use Gaze and Touch attacks. Counter Attack To Hit gets −10% cumulative penalty per additional counter in the same round.

---

## 8. Ranged Attack Distance Penalties

Applies to **Ranged Missile** and **Ranged Boulder** attacks only. Ranged Magical attacks have **no distance penalty**.

| Distance (tiles) | To Hit Penalty |
|---|---|
| 1–2 | None |
| 3–5 | −10% |
| 6–8 | −20% |
| 9+ | −30% |

**Long Range** ability: Maximum penalty capped at −10%.

---

## 9. Immunities Summary

| Immunity | Triggers Against | Effect |
|---|---|---|
| **Weapon Immunity** | Non-magical Melee/Thrown by Normal Units | Defense → 10 |
| **Missile Immunity** | Ranged Missile Attacks | Defense → 50 |
| **Magic Immunity** | Magical Ranged, Breath (magical), most spells, Resistance-based damage (except Poison) | Ranged/Breath: Defense → 50. Spells: completely blocked. |
| **Fire Immunity** | Fire Damage, Immolation | Defense → 50 |
| **Cold Immunity** | Cold Damage, Blizzard | Defense → 50 |
| **Illusions Immunity** | Illusion Damage, some Sorcery spells | Negates Illusion Damage (Defense not set to 0). Can target Invisible units. |
| **Poison Immunity** | Poison Damage | Complete block (no Resistance rolls) |
| **Stoning Immunity** | Stoning Damage | Complete block (no Resistance rolls) |
| **Death Immunity** | Death Damage, Life Stealing, Fear, some Death spells | Auto-succeed Resistance rolls |

---

## 10. Probability Math for the Calculator

For the calculator engine, we need exact probability distributions, not just averages.

### Single Attack (one figure attacking one figure)
Given Attack Strength S, To Hit probability p, Defense D, To Block probability q:

1. **Hits** ~ Binomial(S, p). P(hits = h) = C(S,h) · p^h · (1−p)^(S−h)
2. For each possible h, **blocks** ~ Binomial(min(h, D), q). P(blocks = b | hits = h) = C(min(h,D), b) · q^b · (1−q)^(min(h,D)−b)
3. **Net damage** = h − b. Combine across all (h, b) pairs for full distribution.

### Multi-Figure (damage overflow with fresh Defense rolls)
This requires tracking the probability distribution of damage as it cascades through defending figures. Each figure boundary triggers a fresh Defense Roll against remaining damage, which is a convolution of conditional distributions. This is the most computationally complex part.

### Armor Piercing
Same as above but with D_eff = floor(D / 2).

### Illusion Damage
Same as above but with D_eff = 0 (no Defense Roll). Damage distribution = just the Binomial(S, p) hits.

### Doom Damage
Deterministic: damage = Attack Strength. No distribution needed (probability 1 at that value).

### Area Damage
Resolve per defending figure separately (each gets own Attack Roll + Defense Roll), cap damage per figure at that figure's HP, then sum.

### Special Damage (Resistance-based)
Per affected figure: roll d10, succeed if ≤ (Resistance − penalty). On failure, effect applies (usually 1 figure killed). Distribution is Binomial over number of figures rolled.
