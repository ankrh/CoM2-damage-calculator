// --- Combat Resolution ---
// Pure functions with no DOM dependencies. Depends on engine.js.

// Clamp a percentage to 10%-100% (MoM rules: always at least 10%, at most 100%)
function clampPct(base, mod) {
  return Math.min(1.0, Math.max(0.1, (base + mod) / 100));
}

// Weapon type bonuses: { atk, def, toHit }
// Magical/Mithril/Adamantium: +10% To Hit (melee, missile, boulder only)
// Mithril: +1 atk (melee, missile, boulder, thrown), +1 def
// Adamantium: +2 atk (same types), +2 def
function weaponBonus(type) {
  switch (type) {
    case 'magic':      return { atk: 0, def: 0, toHit: 10 };
    case 'mithril':    return { atk: 1, def: 1, toHit: 10 };
    case 'adamantium': return { atk: 2, def: 2, toHit: 10 };
    default:           return { atk: 0, def: 0, toHit: 0 };
  }
}

// Level bonuses vary by game version
function getLevelBonuses(level, version) {
  const isMoM = version.startsWith('mom_');
  if (isMoM) {
    switch (level) {
      case 'regular':    return { atk: 1, ranged: 1, thrown: 1, def: 0, res: 1, hp: 0, toHit: 0 };
      case 'veteran':    return { atk: 1, ranged: 1, thrown: 1, def: 1, res: 2, hp: 0, toHit: 0 };
      case 'elite':      return { atk: 2, ranged: 2, thrown: 2, def: 1, res: 3, hp: 1, toHit: 10 };
      case 'ultra_elite':return { atk: 2, ranged: 2, thrown: 2, def: 2, res: 4, hp: 1, toHit: 20 };
      case 'champion':   return { atk: 3, ranged: 3, thrown: 3, def: 2, res: 5, hp: 2, toHit: 30 };
      default:           return { atk: 0, ranged: 0, thrown: 0, def: 0, res: 0, hp: 0, toHit: 0 };
    }
  } else {
    switch (level) {
      case 'regular':    return { atk: 1, ranged: 1, thrown: 0, def: 0, res: 1, hp: 0, toHit: 0 };
      case 'veteran':    return { atk: 2, ranged: 2, thrown: 1, def: 1, res: 1, hp: 0, toHit: 0 };
      case 'elite':      return { atk: 2, ranged: 2, thrown: 1, def: 2, res: 2, hp: 1, toHit: 0 };
      case 'ultra_elite':return { atk: 3, ranged: 3, thrown: 1, def: 3, res: 2, hp: 1, toHit: 0 };
      case 'champion':   return { atk: 3, ranged: 3, thrown: 1, def: 3, res: 2, hp: 2, toHit: 10 };
      default:           return { atk: 0, ranged: 0, thrown: 0, def: 0, res: 0, hp: 0, toHit: 0 };
    }
  }
}

// Compute ranged distance penalty for missile/boulder attacks.
// Returns a negative percentage modifier (e.g. -10, -20, -30) or 0.
function distancePenalty(distance, rangedType) {
  if (rangedType !== 'missile' && rangedType !== 'boulder') return 0;
  if (distance >= 9) return -30;
  if (distance >= 6) return -20;
  if (distance >= 3) return -10;
  return 0;
}

// --- Ability Stat Modifiers ---
// Apply ability/enchantment effects that modify base stats.
// Called after level/weapon bonuses are computed.
// `abilities` is a map of ability key -> value (bool true/false, or number).
// Returns { atkMod, defMod, resMod, hpMod, toHitMod, toBlkMod, rtbMod } — additive modifiers.
//
// TODO: Implement each ability's stat effects. Currently returns zeros (no-op).
function getAbilityStatModifiers(abilities) {
  return { atkMod: 0, defMod: 0, resMod: 0, hpMod: 0, toHitMod: 0, toBlkMod: 0, rtbMod: 0 };
}

// --- Poison Touch ---
// Compute probability of failing a single poison resistance roll.
// MoM: d10, success if roll ≤ Resistance. pFail = max(0, (10 - res) / 10).
// CoM2: universal -1 save modifier → pFail = max(0, (11 - res) / 10).
// Returns 0 if target is immune (Poison Immunity or effective resistance ≥ 10).
function poisonFailProb(defRes, defAbilities, version) {
  if (defAbilities && defAbilities.poisonImmunity) return 0;
  const penalty = version && version.startsWith('com') ? 1 : 0;
  const effectiveRes = defRes - penalty;
  if (effectiveRes >= 10) return 0;
  return Math.max(0, (10 - effectiveRes) / 10);
}

// Check whether touch attacks fire for a given attack phase.
// v1.31 bug: touch attacks don't fire if the effective attack value is 0.
// Other versions: only skip if the base (pre-modifier) attack value is 0.
function touchAttackFires(effectiveAtk, baseAtk, version) {
  if (version === 'mom_1.03.01') return effectiveAtk > 0;
  return (baseAtk || 0) > 0;
}

// --- Combat Flow Modifiers ---
// Abilities that change *how* combat resolves rather than just stat values.
// These are checked during resolveCombat to alter phase ordering, defense
// effectiveness, damage types, etc.
//
// TODO: Implement each modifier. For now these are documented stubs.
//
// Categories:
//   Phase ordering:  First Strike, Negate First Strike
//   Defense halving: Armor Piercing, Illusion (defender ignores defense if no Illusion Immunity)
//   Damage immunity: Fire Immunity (vs fire breath/immolation), Magic Immunity (vs magic ranged),
//                    Missile Immunity (vs missile/boulder), Weapon Immunity (vs non-magic melee),
//                    Poison Immunity, Stoning Immunity, Cold Immunity, Death Immunity
//   Special attacks: Poison Touch, Life Steal, Stoning Touch/Gaze, Death Gaze, Doom Gaze
//   Defense bonus:   Large Shield (+2 def vs ranged), Invulnerability
//   Hit bonus:       Lucky (minimum 10% To Hit after all penalties), Bless (vs Chaos/Death)
//   Misc:           Haste (double melee attacks), Immolation (extra damage phase)

// Resolve a full combat exchange between attacker and defender.
// All inputs are plain objects — no DOM access.
//
// Parameters:
//   a, b: unit stat objects with fields:
//     { figs, atk, def, res, hp, dmg, rtb, rangedType, thrownType,
//       toHitMelee, toHitRtb, toBlock, abilities }
//     where toHitMelee/toHitRtb/toBlock are already-clamped decimals (0.1-1.0)
//   opts: { isRanged, distance }
//
// Returns:
//   { phases, totalDmgToA, totalDmgToB,
//     aRemHP, aHP, aAlive, bRemHP, bHP, bAlive }
//   phases: array of { label, atkDist, defDist, atkHP, defHP, atkHPper, defHPper, atkFigs, defFigs } or null
function resolveCombat(a, b, opts) {
  const isRanged = opts.isRanged;

  // Compute alive figures and remaining HP
  const aTotalHP = a.figs * a.hp;
  const aAlive   = Math.max(0, a.figs - Math.floor(a.dmg / a.hp));
  const aRemHP   = Math.max(0, aTotalHP - a.dmg);

  const bTotalHP = b.figs * b.hp;
  const bAlive   = Math.max(0, b.figs - Math.floor(b.dmg / b.hp));
  const bRemHP   = Math.max(0, bTotalHP - b.dmg);

  // Determine if attacker has thrown/breath (melee only)
  const hasThrown = !isRanged && a.thrownType !== 'none' && a.rtb > 0;

  // Lightning breath is armor piercing: halve defense (round down)
  const bDefForThrown = a.thrownType === 'lightning' ? Math.floor(b.def / 2) : b.def;

  if (isRanged) {
    // --- Ranged: attacker shoots, no counter-attack ---
    let dmgToB = aAlive > 0 && bRemHP > 0 && a.rtb > 0
      ? calcTotalDamageDist(aAlive, a.rtb, a.toHitRtb, b.def, b.toBlock, b.hp, bRemHP)
      : [1];

    // Poison Touch accompanies ranged attacks
    const aPoisonStr = touchAttackFires(a.rtb, a.baseRtb, opts.version)
      ? ((a.abilities && a.abilities.poison) || 0) : 0;
    if (aPoisonStr > 0 && aAlive > 0 && bRemHP > 0) {
      const pFail = poisonFailProb(b.res, b.abilities, opts.version);
      if (pFail > 0) {
        const poisonDist = calcResistDmgDist(aAlive * aPoisonStr, pFail, bRemHP);
        dmgToB = convolveDists(dmgToB, poisonDist, bRemHP);
      }
    }

    return {
      phases: null,
      totalDmgToA: [1],
      totalDmgToB: dmgToB,
      aRemHP, aHP: a.hp, aAlive,
      bRemHP, bHP: b.hp, bAlive,
    };

  } else if (hasThrown) {
    // --- Melee with thrown/breath: thrown first, then simultaneous melee exchange ---
    // Poison Touch fires in BOTH the thrown/breath phase AND the melee phase.
    // Defender's poison fires only with their melee counter-attack.
    const aPoisonStr = (a.abilities && a.abilities.poison) || 0;
    const bPoisonStr = (b.abilities && b.abilities.poison) || 0;
    const aPoisonFail = aPoisonStr > 0 ? poisonFailProb(b.res, b.abilities, opts.version) : 0;
    const bPoisonFail = bPoisonStr > 0 ? poisonFailProb(a.res, a.abilities, opts.version) : 0;

    // Per-phase activation: touch attacks require the associated attack to be non-zero
    const aPoisonWithThrown = aPoisonFail > 0 && touchAttackFires(a.rtb, a.baseRtb, opts.version);
    const aPoisonWithMelee  = aPoisonFail > 0 && touchAttackFires(a.atk, a.baseAtk, opts.version);
    const bPoisonWithMelee  = bPoisonFail > 0 && touchAttackFires(b.atk, b.baseAtk, opts.version);

    // Phase 1: Thrown/Breath damage
    let thrownDist = aAlive > 0 && bRemHP > 0
      ? calcTotalDamageDist(aAlive, a.rtb, a.toHitRtb, bDefForThrown, b.toBlock, b.hp, bRemHP)
      : [1];

    // Convolve attacker's poison into thrown phase (simultaneous with thrown)
    const phase1HasPoison = aPoisonWithThrown && aAlive > 0 && bRemHP > 0;
    let phase1Dist = thrownDist;
    if (phase1HasPoison) {
      const poisonDist = calcResistDmgDist(aAlive * aPoisonStr, aPoisonFail, bRemHP);
      phase1Dist = convolveDists(thrownDist, poisonDist, bRemHP);
    }

    const totalDmgToB = new Array(bRemHP + 1).fill(0);
    const totalDmgToA = new Array(aRemHP + 1).fill(0);
    const meleeOnlyToB = new Array(bRemHP + 1).fill(0);
    const counterOnlyToA = new Array(aRemHP + 1).fill(0);

    for (let p1Dmg = 0; p1Dmg < phase1Dist.length; p1Dmg++) {
      if (phase1Dist[p1Dmg] < 1e-15) continue;
      const pPhase1 = phase1Dist[p1Dmg];

      // Defender state after phase 1 damage
      const bDmgAfter = b.dmg + p1Dmg;
      const bAliveAfter = Math.max(0, b.figs - Math.floor(bDmgAfter / b.hp));
      const bRemHPAfter = Math.max(0, bRemHP - p1Dmg);

      // Attacker's melee vs defender
      let meleeDist = aAlive > 0 && bRemHPAfter > 0 && a.atk > 0
        ? calcTotalDamageDist(aAlive, a.atk, a.toHitMelee, b.def, b.toBlock, b.hp, bRemHPAfter)
        : [1];

      // Convolve attacker's poison onto defender (simultaneous with melee)
      if (aPoisonWithMelee && aAlive > 0 && bRemHPAfter > 0) {
        const poisonDist = calcResistDmgDist(aAlive * aPoisonStr, aPoisonFail, bRemHPAfter);
        meleeDist = convolveDists(meleeDist, poisonDist, bRemHPAfter);
      }

      // Defender's counter-attack (surviving figures after phase 1)
      let counterDist = bAliveAfter > 0 && aRemHP > 0 && b.atk > 0
        ? calcTotalDamageDist(bAliveAfter, b.atk, b.toHitMelee, a.def, a.toBlock, a.hp, aRemHP)
        : [1];

      // Convolve defender's poison onto attacker (simultaneous with counter-attack)
      if (bPoisonWithMelee && bAliveAfter > 0 && aRemHP > 0) {
        const poisonDist = calcResistDmgDist(bAliveAfter * bPoisonStr, bPoisonFail, aRemHP);
        counterDist = convolveDists(counterDist, poisonDist, aRemHP);
      }

      // Combine phase 1 + melee for total damage to defender
      for (let mDmg = 0; mDmg < meleeDist.length; mDmg++) {
        if (meleeDist[mDmg] < 1e-15) continue;
        const totalD = Math.min(p1Dmg + mDmg, bRemHP);
        totalDmgToB[totalD] += pPhase1 * meleeDist[mDmg];
        meleeOnlyToB[Math.min(mDmg, bRemHP)] += pPhase1 * meleeDist[mDmg];
      }

      // Counter-attack damage to attacker
      for (let cDmg = 0; cDmg < counterDist.length; cDmg++) {
        if (counterDist[cDmg] < 1e-15) continue;
        totalDmgToA[cDmg] += pPhase1 * counterDist[cDmg];
        counterOnlyToA[cDmg] += pPhase1 * counterDist[cDmg];
      }
    }

    // Build phase labels
    let thrownLabel = a.thrownType === 'thrown' ? 'Thrown'
                    : a.thrownType === 'fire' ? 'Fire Breath'
                    : 'Lightning Breath';
    if (phase1HasPoison) thrownLabel += ' + Poison Touch';

    const meleeHasPoison = aPoisonWithMelee || bPoisonWithMelee;
    const meleePhaseLabel = meleeHasPoison
      ? 'Melee + Poison Touch + Counter-attack'
      : 'Melee + Counter-attack';

    return {
      phases: [
        { label: thrownLabel,
          atkDist: [1], atkHP: aRemHP, atkHPper: a.hp, atkFigs: aAlive,
          defDist: phase1Dist, defHP: bRemHP, defHPper: b.hp, defFigs: bAlive },
        { label: meleePhaseLabel,
          atkDist: counterOnlyToA, atkHP: aRemHP, atkHPper: a.hp, atkFigs: aAlive,
          defDist: meleeOnlyToB, defHP: bRemHP, defHPper: b.hp, defFigs: bAlive },
      ],
      totalDmgToA,
      totalDmgToB,
      aRemHP, aHP: a.hp, aAlive,
      bRemHP, bHP: b.hp, bAlive,
    };

  } else {
    // --- Pure melee: simultaneous exchange ---
    // Poison Touch: resolved simultaneously with melee damage.
    const aPoisonStr = touchAttackFires(a.atk, a.baseAtk, opts.version)
      ? ((a.abilities && a.abilities.poison) || 0) : 0;
    const bPoisonStr = touchAttackFires(b.atk, b.baseAtk, opts.version)
      ? ((b.abilities && b.abilities.poison) || 0) : 0;
    const aPoisonFail = aPoisonStr > 0 ? poisonFailProb(b.res, b.abilities, opts.version) : 0;
    const bPoisonFail = bPoisonStr > 0 ? poisonFailProb(a.res, a.abilities, opts.version) : 0;

    let dmgToB = aAlive > 0 && bRemHP > 0 && a.atk > 0
      ? calcTotalDamageDist(aAlive, a.atk, a.toHitMelee, b.def, b.toBlock, b.hp, bRemHP)
      : [1];

    // Convolve attacker's poison damage onto defender
    if (aPoisonFail > 0 && aAlive > 0 && bRemHP > 0) {
      const poisonDist = calcResistDmgDist(aAlive * aPoisonStr, aPoisonFail, bRemHP);
      dmgToB = convolveDists(dmgToB, poisonDist, bRemHP);
    }

    let dmgToA = bAlive > 0 && aRemHP > 0 && b.atk > 0
      ? calcTotalDamageDist(bAlive, b.atk, b.toHitMelee, a.def, a.toBlock, a.hp, aRemHP)
      : [1];

    // Convolve defender's poison damage onto attacker
    if (bPoisonFail > 0 && bAlive > 0 && aRemHP > 0) {
      const poisonDist = calcResistDmgDist(bAlive * bPoisonStr, bPoisonFail, aRemHP);
      dmgToA = convolveDists(dmgToA, poisonDist, aRemHP);
    }

    return {
      phases: null,
      totalDmgToA: dmgToA,
      totalDmgToB: dmgToB,
      aRemHP, aHP: a.hp, aAlive,
      bRemHP, bHP: b.hp, bAlive,
    };
  }
}
