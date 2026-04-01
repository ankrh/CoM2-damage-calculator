# Master of Magic — Combat Damage Mechanics Reference

Condensed reference for implementing a damage calculator. Covers all mechanics relevant to resolving a single attack phase.

**Source references** are given as `[FileName.md:Line]` pointing to files under `CoM1 or MoM material/Fandom site/`.

---

## 1. Core Dice System

All combat resolution uses **d10 rolls** (random integer 1–10).
`[Attack Roll.md:8-9, Defense Roll.md:7-8]`

- **Attack Roll**: One d10 per point of Attack Strength. Success if roll ≤ (To Hit / 10). Base To Hit = **30%** (success on 1, 2, or 3 — equivalently, roll ≥ 8 on a d10). `[Attack Roll.md:12-14, To Hit.md:76]`
- **Defense Roll**: One d10 per point of Defense. Success if roll ≤ (To Block / 10). Base To Block = **30%**. `[Defense Roll.md:10-12, Defense.md:7]`
- Each successful attack roll = 1 **hit**. Each successful defense roll = 1 **block**. Damage = hits − blocks (minimum 0). `[Attack Roll.md:17-19, Defense.md:22-27]`

**To Hit** range: 10% to 100% (minimum 1-in-10 always succeeds; maximum guaranteed hit). `[To Hit.md:78]`
**To Block** range: 10% to 100%. `[Defense.md:35]`
Both adjust in **10% increments** (MoM). In CoM2, both adjust in **1% increments**. `[To Hit.md:86-88, Lucky.md:59]`

---

## 2. Attack Strength

The number of dice rolled in the Attack Roll. Determined by: `[Attack Strength.md:59]`

| Attack Type | Strength Source | Ref |
|---|---|---|
| Melee | Unit's Melee stat (swords) | `[Attack Strength.md:9, Melee Attack.md:67-74]` |
| Counter Attack | Same as Melee (unit's Melee stat) | `[Counter Attack.md:44-57]` |
| Ranged Missile | Unit's Ranged stat (arrows) | `[Ranged Attack.md:14]` |
| Ranged Boulder | Unit's Ranged stat (boulders) | `[Ranged Attack.md:14]` |
| Ranged Magical | Unit's Ranged stat (bolts) | `[Ranged Attack.md:14]` |
| Thrown | Number after "Thrown" ability | `[Thrown Attack.md:11]` |
| Fire Breath | Number after "Fire Breath" ability | `[Breath Attack.md:13, Fire Breath.md]` |
| Lightning Breath | Number after "Lightning Breath" ability | `[Breath Attack.md:13]` |
| Gaze Attacks | Per gaze type (see note below) | `[Gaze Attack.md:11-15, 62-72]` |
| Immolation | Fixed at 4 | `[Area Damage.md:41]` |
| Spells | Per spell description | `[Attack Roll.md:57]` |

**Gaze Attack note:** Death Gaze and Stoning Gaze do NOT use Attack Rolls — they force per-figure Resistance rolls (the listed "strength" is the Resistance penalty, e.g., -1, -4). Only Doom Gaze delivers Doom Damage with a fixed strength (4, or 6 in Chaos Nodes). Multi-figure units execute only ONE Gaze Attack regardless of figure count. `[Gaze Attack.md:57-72]`

**Modifiers to Attack Strength:**
- Mithril weapons: +1 Attack Strength (Melee, Missile, Boulder, Thrown — NOT Ranged Magical, Breath), +1 Defense `[Attack Strength.md:203, 513]`
- Adamantium weapons: +2 Attack Strength (same types as Mithril), +2 Defense `[Attack Strength.md:225, 514]`
- Experience (Elite): +1 melee/ranged; (Ultra-Elite, Champion): more `[Attack Strength.md:64]`
- Various enchantments (Flame Blade, Giant Strength, etc.)

A unit with **0 base Attack Strength** for an attack type cannot perform that attack at all; bonuses cannot raise it from 0. `[Melee Attack.md:195]`

---

## 3. To Hit Modifiers

Base = 30%. Modifiers add/subtract in 10% steps. `[To Hit.md:76, 86-88]`

**Increases:**
- Magical/Mithril/Adamantium weapons: +10% (applies to Melee, Ranged Missile, Ranged Boulder only — NOT Ranged Magical, Thrown, or Breath) `[To Hit.md:261-281]`
- Experience (Elite +10%, Champion +10% more) `[To Hit.md:78, 113]`
- Holy Weapon: +10% `[To Hit.md:112-114]`
- Heroism: +10% `[To Hit.md:112-114]`
- Lucky: +10% (on the Lucky unit's own attacks) `[Lucky.md:7, 37-49]`

**Decreases:**
- Black Prayer: −10% `[To Hit.md:112-114]`
- Vertigo: −20% (resistable) `[To Hit.md:112-114]`
- Attacking Invisible target: −10% (unless attacker has Illusions Immunity) `[Invisibility.md, To Hit.md:112-114]`
- Counter Attack penalty: −10% per 2 incoming attacks in the same turn (see §7 note) `[Counter Attack.md:166-182]`
- Ranged distance penalties (see §8) `[To Hit.md:107-109]`

**Spell damage always uses exactly 30% — cannot be modified.** `[Attack Roll.md:84-88, To Hit.md:92]`

---

## 4. Defense and To Block

**Defense** = number of dice in the Defense Roll. `[Defense.md:7, Defense Roll.md:10]`

**Effective Defense calculation order:** `[Defense Roll.md:55-58, Illusion Damage.md:45-47]`
1. Start with base Defense stat
2. Apply additive modifiers (enchantments, penalties: Stone Skin +1, Holy Armor +2, Black Prayer −1, Berserk → set to 0, etc.)
3. Apply **Armor Piercing** → halve Defense (round down) `[Armor Piercing Damage.md:22-24]`
4. Apply **immunities** that raise Defense (Weapon Immunity → 10, Missile Immunity → 50, Magic Immunity → 50, Fire/Cold Immunity → 50) `[Weapon Immunity.md:10, Defense Roll.md:55-58]`
5. Apply **Illusion Damage** → set Defense to 0 (overrides immunities, except Illusions Immunity negates this step; City Walls bonus also survives) `[Illusion Damage.md:45-47, Defense Roll.md:55-58]`
6. Apply **Doom Damage** → skip Attack Roll AND Defense Roll entirely (no dice rolled) `[Doom Damage.md:3-5]`

**To Block modifiers** (very few exist):
- Lucky: +10% `[Lucky.md:53-59]`
- Prayer / High Prayer: +10% `[To Hit.md (To Block section)]`
- Eldritch Weapon (on attacker): −10% to target's To Block `[To Hit.md (To Block section)]`
- Maximum achievable: 50% (Lucky + Prayer) `[Lucky.md:59]`

---

## 5. Multi-Figure Combat

### Attacking
Each **figure** in the attacking unit makes a **separate attack** with the unit's listed Attack Strength. They are NOT combined into one large attack. `[Attack Roll.md:147-159]`

Example: 6 Spearmen with 2 Melee each → 6 separate attacks of strength 2, not 1 attack of strength 12. The defender gets a separate Defense Roll against each. `[Attack Roll.md:149-158]`

### Defending (Damage Overflow)
Damage from a single attacking figure is applied to the defending unit's **lead figure** first: `[Defense.md:53-67]`

1. Attacker's figure rolls Attack Roll → gets N hits
2. Defender's lead figure rolls Defense Roll (using full Defense score) → blocks some `[Defense.md:60-61]`
3. Unblocked damage applied to lead figure
4. If lead figure's remaining HP ≤ 0, it **dies** and excess damage carries to next figure `[Defense.md:62-63]`
5. Next figure gets a **fresh Defense Roll** (full Defense score) against remaining damage `[Defense.md:63-65]`
6. Repeat until damage is exhausted or unit is destroyed `[Defense.md:65]`

**Key distinction — Top Figure Damage:** `[Defense.md:74-80]`
- **Unit attacks**: Always treat the target figure as having **full HP** for determining when a new Defense Roll triggers. Top figure damage is ignored. `[Defense.md:74]`
- **Spell attacks**: Consider **actual remaining HP** of the top figure. A partially damaged top figure dies sooner, triggering a new Defense Roll earlier. `[Defense.md:76]`

This means multi-figure units are significantly more resilient than single-figure units — they effectively multiply their Defense rolls. `[Defense.md:69-72]`

---

## 6. Damage Types

### 6a. Physical Damage (Conventional Damage)

Standard resolution: Attack Roll → Defense Roll → net damage. This is the baseline for Melee, Counter Attack, Ranged, Thrown, and direct-damage spells. `[Conventional Damage.md, Physical Damage.md, Defense.md:16-27]`

### 6b. Tandem Modifiers (modify the Defense step)

These don't deal damage on their own — they modify how Defense works for the accompanying Physical Damage.

| Modifier | Effect on Defense | Notes | Ref |
|---|---|---|---|
| **Armor Piercing** | Halve Defense (round down) | Applied before immunities. Sources: Armor Piercing ability, Lightning Breath, some spells. | `[Armor Piercing Damage.md:22-24, 59]` |
| **Illusion Damage** | Set Defense to 0 | Overrides all immunities except Illusions Immunity and City Walls. Sources: Illusion ability, Phantasmal weapons, Psionic Blast. | `[Illusion Damage.md:13-15, 42-47]` |
| **Doom Damage** | Skip Attack Roll AND Defense Roll | Attack Strength = raw damage directly. Sources: Doom Bolt, Doom Gaze (Chaos Spawn), Chaos Weapons (halve strength first), Black Sleep (converts incoming conventional to Doom). | `[Doom Damage.md:1-5, 44-46, 56-58]` |

### 6c. Elemental Damage Subtypes

These are still Physical Damage (use Attack Roll + Defense Roll) but trigger additional immunities: `[Fire Damage.md, Cold Damage.md, Magical Damage.md]`

| Subtype | Triggers Immunity | Defense if Immune | Ref |
|---|---|---|---|
| **Magical Damage** | Magic Immunity | Ranged/Breath: Defense → 50. Spells: completely blocked. | `[Magical Damage.md, Magic Immunity.md]` |
| **Fire Damage** | Fire Immunity OR Magic Immunity | Defense → 50 | `[Fire Damage.md, Breath Attack.md:70-74]` |
| **Cold Damage** | Cold Immunity OR Magic Immunity | Defense → 50 | `[Cold Damage.md, Cold Immunity.md]` |

Fire Breath delivers Fire Damage. Lightning Breath delivers Armor Piercing + Magical Damage. Ranged Magical Attacks deliver Magical Damage. `[Breath Attack.md:48, 70, 77-87]`

### 6d. Area Damage

Same as Physical Damage but resolved **per defending figure** separately: `[Area Damage.md:1-3, 18-31]`
1. For each figure in the target unit, make a separate Attack Roll (same strength) `[Area Damage.md:26]`
2. Each figure makes its own Defense Roll `[Area Damage.md:27-28]`
3. Damage to each figure is **capped at that figure's current HP** (no overflow between figures) `[Area Damage.md:19, 28-29]`
4. All per-figure damage is pooled and applied to the unit `[Area Damage.md:30-31]`

Area Damage is much more effective against multi-figure units than normal damage. `[Area Damage.md:4-5, 13]`

**Types:** Immolation Damage (Fire-type area, strength 4), Blizzard Damage (Cold-type area, from Ice Storm spell). `[Area Damage.md:1, 41]`

### 6e. Special Damage (Resistance-Based)

These bypass Attack Roll and Defense entirely. Instead, the target makes a **Resistance Roll**: roll d10, success if roll ≤ (Resistance − penalty). On failure, the specific effect applies. `[Special Damage.md, Resistance.md]`

| Damage Type | On Failed Resist | Penalty | Blocked By | Ref |
|---|---|---|---|---|
| **Poison** | 1 damage per failed point (roll each poison point separately) | None (usually) | Poison Immunity, Resistance ≥ 10 | `[Poison Damage.md]` |
| **Stoning** | Figure instantly dies | Varies: −1 to −4 | Stoning Immunity, Magic Immunity, high Resistance | `[Stoning Damage.md]` |
| **Death** | Figure instantly dies | Varies: −2 to −4 | Death Immunity, Magic Immunity, high Resistance | `[Death Damage.md]` |
| **Life Stealing** | Damage = (roll − Resistance), attacker heals | Varies: 0 to −5 | Death Immunity, Magic Immunity, Resistance ≥ 10 | `[Life Stealing Damage.md]` |
| **Dispel Evil** | Figure instantly dies (Chaos/Death/Undead only) | −4 or −9 | Magic Immunity, wrong unit type | `[Dispel Evil Damage.md]` |
| **Disintegration** | Lead figure dies (permanently) | None | Magic Immunity, Resistance ≥ 10 | `[Disintegration Damage.md]` |
| **Fear** | Figure cannot melee attack this round | None | Death Immunity, Magic Immunity, Resistance ≥ 10 | `[Cause Fear.md:48-56, 73-75]` |

**Touch Attacks** (Poison Touch, Stoning Touch, Life Steal, etc.): One Resistance roll per **attacking** figure. Resolved simultaneously with Melee Damage. `[Touch Attack.md:46]`

**Gaze Attacks** (Stoning Gaze, Death Gaze, Doom Gaze): Per **defending** figure (for Death/Stoning Gaze) or lead figure only (for Doom Gaze). Resolved before Melee exchange (attacker's Gaze first, then defender's Gaze). `[Gaze Attack.md:64-72, 86-97]`

**Note:** Poison Damage is unique — it is NOT blocked by Magic Immunity. `[Cause Fear.md:75 (by analogy), Poison Damage.md]`

---

## 7. Melee Combat Sequence

When unit A initiates a Melee Attack on unit B, the full sequence is:

**Standard sequence (no First Strike):** `[Counter Attack.md:88-96, Melee Attack.md:134-141]`

| Step | Assailant (A) | Target (B) |
|---|---|---|
| 1 | Thrown OR Breath Attack | — |
| 2 | Gaze Attack | — |
| 3 | — | Gaze Attack |
| 4 | Fear Attack | Fear Attack |
| 5 | Melee Damage + Touch Attacks | Melee Damage + Touch Attacks |

**Key details:**

- Steps 1 (Thrown/Breath) are **attacker-only** — B cannot use Breath or Thrown when Counter Attacking. `[Counter Attack.md:13, 34, 68-72; Breath Attack.md:9; Thrown Attack.md:7]`
- Steps 2–3: Attacker's Gaze executes first; figures killed don't participate in defender's Gaze. `[Gaze Attack.md:7, 86-97; Counter Attack.md:86-87, 106-107]`
- Step 4: **Fear is bilateral** — BOTH A and B can have Cause Fear, and both execute it at this step. Each unit's Fear forces Resistance rolls on the opposing unit's figures; failed figures cannot deliver Melee Damage or Touch Attacks. `[Counter Attack.md:95; Cause Fear.md:33-35]`
- Step 5: Melee Damage and Touch Attacks are exchanged **simultaneously** between surviving (non-feared) figures. `[Counter Attack.md:96, 7-8; Melee Attack.md:141; Breath Attack.md:140]`
- **Figures killed in earlier steps don't participate in later steps.** `[Counter Attack.md:99-105; Melee Attack.md:143-149]`

> **Note (Cause Fear bug in v1.31):** In the unpatched game, Cause Fear is bugged: when the Cause Fear unit is the *defender*, the ability has no effect at all. When it is the attacker, the attacker's own figures are also partially affected. See `[Cause Fear.md:107-115]` for details.

### First Strike

When A has First Strike and B does NOT have Negate First Strike: `[Counter Attack.md:119-147; First Strike.md:58-68; Melee Attack.md:161-176]`

| Step | Assailant (A) | Target (B) |
|---|---|---|
| 1 | Thrown OR Breath Attack | — |
| 2 | Gaze Attack | — |
| 3 | — | Gaze Attack |
| 4 | — | Fear Attack |
| 5 | Melee Damage + Touch Attacks | — |
| 6 | Fear Attack | — |
| 7 | — | Melee Damage + Touch Attacks |

A delivers its Melee + Touch first (step 5). B's surviving figures then retaliate (step 7). Fear is **split**: B's Fear happens at step 4 (before A's melee), and A's Fear happens at step 6 (before B's melee). `[Counter Attack.md:121-129]`

**First Strike only works when A is the voluntary attacker** — it is never used when Counter Attacking. `[First Strike.md:38; Counter Attack.md:138-142]`

### Negate First Strike

If B has Negate First Strike, A's First Strike is cancelled — the sequence reverts to the standard (simultaneous) form. `[First Strike.md:84-89; Negate First Strike.md; Counter Attack.md:149]`

### Complete Sequence (First Strike + Haste + Wall of Fire + Immolation)

The most detailed sequence from the source covers all possible sub-phases, including Haste (which grants double attacks), Wall of Fire, Immolation, and Touch Attack interactions. This is the "complete picture" when the attacker has First Strike + Haste and other effects, and the defender has Haste + Wall of Fire, etc.: `[Melee Attack.md:178-195]`

| Step | Assailant (A) | Target (B) |
|---|---|---|
| 1 | 1st Thrown or Breath*, 1st Immolation & Touch** | — |
|   | 2nd Thrown or Breath*, 2nd Immolation & Touch** | — |
|   | Only 1 Gaze*, 1st Immolation & Touch** | — |
| 2 | — | Only 1 Gaze*, 1st Immolation & Touch** |
| 3 | Wall of Fire | — |
| 4 | — | Fear Attack |
| 5 | 1st Melee Damage***, Immolation & Touch** | — |
| 6 | Fear Attack | — |
| 7 | 2nd Melee Damage***, Immolation & Touch** | 1st Melee Damage***, Immolation & Touch** |
|   | — | 2nd Melee Damage***, Immolation & Touch** |

**Footnotes from source:**
- \* Thrown, Breath, or Gaze Attack is only dealt if the ranged attack strength is ≥ 1.
- \*\* Immolation and Touch Attack are only dealt if the previously listed attack is dealt. If the Touch Attack comes from a Magical Item, the previously listed attack must match the weapon's type.
- \*\*\* Melee Damage is only dealt if the melee attack strength is ≥ 1.

`[Melee Attack.md:180-195]`

**Key observations from this full sequence:**
- **Haste** doubles Thrown/Breath attacks (2 volleys in step 1) and Melee attacks (steps 5+7 for attacker, step 7 for defender with 2 sub-steps). `[Melee Attack.md:178]`
- **Immolation** (Area Fire Damage, strength 4) triggers as a Touch Attack alongside the attack that triggers it — it fires with Thrown/Breath, Gaze, AND Melee phases.
- **Touch Attacks** from abilities trigger with every attack phase (Thrown, Gaze, Melee), but item-based Touch Attacks only trigger with the matching weapon type.
- **Wall of Fire** has its own step (3) between Gaze and the first Fear/Melee exchange.
- The standard and simple First Strike tables above are simplifications of this full table for the common case (no Haste, no Wall of Fire, no Immolation).

### Counter Attack To Hit Penalty

**IMPORTANT:** The penalty is **−10% per every 2 incoming attacks** received during the enemy's turn. Both Ranged Attacks and Melee Attacks count as incoming attacks. The penalty is cumulative and applies to all subsequent Counter Attacks during that turn. It resets at the end of the enemy turn. Minimum To Hit is always 10%. `[Counter Attack.md:166-182]`

Example from source: A Magic Spirit attacked by 2 Bowmen (ranged) + 2 Spearmen (each attacking twice in melee):
- After 2 ranged attacks → −10% penalty → Counter Attacks at 20% (base 30% − 10%)
- After 4 total attacks → −20% penalty → Counter Attacks at 10% (base 30% − 20%)
- After 6 total attacks → penalty would be −30%, but minimum is 10%, so stays at 10%

`[Counter Attack.md:171-182]`

---

## 8. Ranged Attack Distance Penalties

Applies to **Ranged Missile** and **Ranged Boulder** attacks only. Ranged Magical attacks have **no distance penalty**. `[Ranged Attack.md:29; To Hit.md:107-109]`

| Distance (tiles) | To Hit Penalty |
|---|---|
| 1–2 | None |
| 3–5 | −10% |
| 6–8 | −20% |
| 9+ | −30% |

`[To Hit.md:107-109]`

**Long Range** ability: Maximum penalty capped at −10%. `[To Hit.md:107-109]`

---

## 9. Immunities Summary

| Immunity | Triggers Against | Effect | Ref |
|---|---|---|---|
| **Weapon Immunity** | Non-magical Melee/Thrown by Normal Units | Defense → 10 | `[Weapon Immunity.md:10, 33-37]` |
| **Missile Immunity** | Ranged Missile Attacks | Defense → 50 | `[Missile Immunity.md]` |
| **Magic Immunity** | Magical Ranged, Breath (magical), most spells, Resistance-based damage (except Poison) | Ranged/Breath: Defense → 50. Spells: completely blocked. | `[Magic Immunity.md, Breath Attack.md:62]` |
| **Fire Immunity** | Fire Damage, Immolation | Defense → 50 | `[Fire Immunity.md, Breath Attack.md:70-74]` |
| **Cold Immunity** | Cold Damage, Blizzard | Defense → 50 | `[Cold Immunity.md]` |
| **Illusions Immunity** | Illusion Damage, some Sorcery spells | Negates Illusion Damage (Defense not set to 0). Can target Invisible units. | `[Illusions Immunity.md, Illusion Damage.md:42-43]` |
| **Poison Immunity** | Poison Damage | Complete block (no Resistance rolls) | `[Poison Immunity.md]` |
| **Stoning Immunity** | Stoning Damage | Complete block (no Resistance rolls) | `[Stoning Immunity.md]` |
| **Death Immunity** | Death Damage, Life Stealing, Fear, some Death spells | Auto-succeed Resistance rolls | `[Death Immunity.md, Cause Fear.md:73]` |

---

## 10. Probability Math for the Calculator

For the calculator engine, we need exact probability distributions, not just averages.

### Single Attack (one figure attacking one figure)
Given Attack Strength S, To Hit probability p, Defense D, To Block probability q:

1. **Hits** ~ Binomial(S, p). P(hits = h) = C(S,h) · p^h · (1−p)^(S−h)
2. **Blocks** ~ Binomial(D, q). All D defense dice are always rolled. P(blocks = b) = C(D, b) · q^b · (1−q)^(D−b)
3. **Net damage** = max(h − b, 0). Combine across all (h, b) pairs for full distribution.

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
