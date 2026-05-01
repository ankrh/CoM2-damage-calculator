// --- UI Layer ---
// All DOM interaction. Depends on data.js, engine.js, combat.js.

// --- Abilities UI ---

function buildAbilitiesUI(prefix) {
  const container = document.getElementById(prefix + 'Abilities');
  let gridDiv = null;
  let currentGroup = '';
  let currentGroupClass = '';
  let currentSubgroup = '';
  for (const abil of ABILITY_DEFS) {
    if (abil.group && abil.group !== currentGroup) {
      currentGroup = abil.group;
      currentGroupClass = 'group-' + currentGroup.toLowerCase().replace(/[^a-z]+/g, '-');
      currentSubgroup = '';
      gridDiv = null;
      const header = document.createElement('div');
      header.className = 'abil-group-header';
      header.dataset.abilGroup = currentGroup;
      header.textContent = currentGroup;
      container.appendChild(header);
    }
    if (abil.subgroup && abil.subgroup !== currentSubgroup) {
      currentSubgroup = abil.subgroup;
      gridDiv = null;
      if (!abil.subgroup.startsWith('_')) {
        const subheader = document.createElement('div');
        subheader.className = 'abil-subgroup-header';
        subheader.dataset.abilGroup = currentGroup;
        subheader.dataset.abilSubgroup = currentSubgroup;
        subheader.textContent = currentSubgroup;
        container.appendChild(subheader);
      }
    }
    if (!gridDiv) {
      gridDiv = document.createElement('div');
      gridDiv.className = 'abil-grid ' + currentGroupClass;
      gridDiv.dataset.abilGroup = currentGroup;
      if (currentSubgroup) gridDiv.dataset.abilSubgroup = currentSubgroup;
      container.appendChild(gridDiv);
    }
    const id = prefix + 'Abil_' + abil.key;
    const realmCls = abil.realm ? 'realm-' + abil.realm : '';
    // Color only spell-name text: for dual-name ability/spell labels, wrap the spell part after '/'
    let labelHtml;
    if (realmCls && abil.group === 'Abilities/Enchantments' && abil.label.includes('/')) {
      const slashIdx = abil.label.indexOf('/');
      labelHtml = abil.label.slice(0, slashIdx + 1) + `<span class="${realmCls}">${abil.label.slice(slashIdx + 1)}</span>`;
    } else if (realmCls) {
      labelHtml = `<span class="${realmCls}">${abil.label}</span>`;
    } else {
      labelHtml = abil.label;
    }
    if (abil.type === 'bool') {
      const lbl = document.createElement('label');
      lbl.className = 'abil-check abil-item';
      lbl.dataset.abilKey = abil.key;
      if (abil.tooltip) lbl.dataset.tooltip = abil.tooltip;
      lbl.innerHTML = `<input type="checkbox" id="${id}"> ${labelHtml}`;
      gridDiv.appendChild(lbl);
    } else if (abil.type === 'select') {
      const row = document.createElement('div');
      row.className = 'abil-num-row abil-item';
      row.dataset.abilKey = abil.key;
      row.dataset.abilDefault = abil.options[0][0];
      if (abil.tooltip) row.dataset.tooltip = abil.tooltip;
      const opts = abil.options.map(([v, l]) => `<option value="${v}">${l}</option>`).join('');
      row.innerHTML = `<label for="${id}">${labelHtml}</label><select id="${id}">${opts}</select>`;
      gridDiv.appendChild(row);
    } else if (abil.type === 'numcheck') {
      const row = document.createElement('div');
      row.className = 'abil-num-row abil-item';
      row.dataset.abilKey = abil.key;
      if (abil.tooltip) row.dataset.tooltip = abil.tooltip;
      row.innerHTML = `<input type="checkbox" id="${id}_on"><label for="${id}">${labelHtml}</label><input type="number" id="${id}" value="0" min="-50" max="50">`;
      gridDiv.appendChild(row);
    } else {
      const row = document.createElement('div');
      row.className = 'abil-num-row abil-item';
      row.dataset.abilKey = abil.key;
      if (abil.tooltip) row.dataset.tooltip = abil.tooltip;
      row.innerHTML = `<label for="${id}">${labelHtml}</label><input type="number" id="${id}" value="0" min="-50" max="50">`;
      gridDiv.appendChild(row);
    }
  }
}

function parseAbilitiesFromUnit(unit) {
  const result = {};
  const abilities = unit.abilities || [];
  // Normalize: strip spaces from ability strings for matching against camelCase match keys
  const normalized = abilities.map(a => a.replace(/ /g, ''));
  for (const abil of ABILITY_DEFS) {
    if (abil.type === 'bool') {
      result[abil.key] = normalized.some(a => a === abil.match || a.startsWith(abil.match + '='));
    } else if (abil.type === 'numcheck') {
      const found = normalized.find(a => a.startsWith(abil.match + '='));
      if (found) {
        result[abil.key] = parseInt(found.split('=')[1]) || 0;
      } else if (normalized.includes(abil.match)) {
        result[abil.key] = 0;
      } else {
        result[abil.key] = null;
      }
    } else {
      const found = normalized.find(a => a.startsWith(abil.match + '='));
      if (found) {
        result[abil.key] = parseInt(found.split('=')[1]) || 0;
      } else if (normalized.includes(abil.match)) {
        result[abil.key] = 1;
      } else {
        result[abil.key] = 0;
      }
    }
  }
  return result;
}

function applyAbilities(prefix, abilValues) {
  for (const abil of ABILITY_DEFS) {
    const el = document.getElementById(prefix + 'Abil_' + abil.key);
    if (!el) continue;
    if (abil.type === 'bool') {
      el.checked = !!abilValues[abil.key];
    } else if (abil.type === 'select') {
      el.value = abilValues[abil.key] || abil.options[0][0];
    } else if (abil.type === 'numcheck') {
      const chk = document.getElementById(prefix + 'Abil_' + abil.key + '_on');
      const val = abilValues[abil.key];
      if (chk) chk.checked = val != null;
      el.value = val != null ? val : 0;
    } else {
      el.value = abilValues[abil.key] || 0;
    }
  }
}

function clearAbilities(prefix) {
  for (const abil of ABILITY_DEFS) {
    const el = document.getElementById(prefix + 'Abil_' + abil.key);
    if (!el) continue;
    if (abil.type === 'bool') {
      el.checked = false;
    } else if (abil.type === 'select') {
      el.value = abil.options[0][0];
    } else if (abil.type === 'numcheck') {
      const chk = document.getElementById(prefix + 'Abil_' + abil.key + '_on');
      if (chk) chk.checked = false;
      el.value = 0;
    } else {
      el.value = 0;
    }
  }
}

// --- Unit Database ---

const unitDatabases = {};
const unitBaseStats = {};
let _activeVersion = null;

function loadUnitDatabase(version) {
  if (unitDatabases[version]) return unitDatabases[version];
  const data = VERSION_DATA[version];
  if (!data) { unitDatabases[version] = []; return []; }
  unitDatabases[version] = Object.values(data);
  return unitDatabases[version];
}

const unitComboboxData = {};

function populateUnitDropdown(selectId, units) {
  const prefix = selectId[0];
  const hiddenEl = document.getElementById(selectId);
  const oldVal = hiddenEl.value;

  const CAT_NORMALIZE = {
    'General': 'Generic', 'Dwarf': 'Dwarven',
    'Life Creatures': 'Life', 'Death Creatures': 'Death', 'Chaos Creatures': 'Chaos',
    'Nature Creatures': 'Nature', 'Sorcery Creatures': 'Sorcery', 'Arcane Creatures': 'Arcane',
  };
  const raceOrder = [
    'Barbarian', 'Gnoll', 'Halfling', 'High Elf', 'High Men', 'Klackon',
    'Lizardman', 'Nomad', 'Orc',
    'Beastmen', 'Dark Elf', 'Draconian', 'Dwarven', 'Troll',
  ];
  const categoryOrder = [
    'Heroes', 'Generic',
    ...raceOrder,
    'Other',
    'Life', 'Death', 'Chaos',
    'Nature', 'Sorcery', 'Arcane',
  ];

  const groups = {};
  for (const u of units) {
    if (u.abilities && u.abilities.includes('CreateOutpost')) continue;
    if (u.name === 'Floating Island') continue;
    if (u.category === 'Heroes') continue;
    const cat = CAT_NORMALIZE[u.category] || u.category;
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(u);
  }

  const flatList = [];
  for (const cat of categoryOrder) {
    if (!groups[cat]) continue;
    for (const u of groups[cat].slice().sort((a, b) => {
      const k = a.sort_order !== undefined ? 'sort_order' : 'cost';
      return (a[k] || 0) - (b[k] || 0);
    })) {
      flatList.push({ id: String(u.id), name: u.name, cat });
    }
  }
  unitComboboxData[prefix] = flatList;

  hiddenEl.value = flatList.some(u => u.id === oldVal) ? oldVal : 'custom';
  syncUnitDisplay(prefix);
}

function syncUnitDisplay(prefix) {
  const hiddenEl = document.getElementById(prefix + 'Unit');
  const searchEl = document.getElementById(prefix + 'UnitSearch');
  if (!searchEl) return;
  if (hiddenEl.value === 'custom') {
    searchEl.value = '';
  } else {
    const u = (unitComboboxData[prefix] || []).find(u => u.id === hiddenEl.value);
    searchEl.value = u ? u.name : '';
  }
}

function initUnitCombobox(prefix) {
  const searchEl = document.getElementById(prefix + 'UnitSearch');
  const listEl = document.getElementById(prefix + 'UnitList');
  const hiddenEl = document.getElementById(prefix + 'Unit');
  let activeIndex = -1;

  function renderDropdown(query) {
    const allUnits = unitComboboxData[prefix] || [];
    const q = query.trim().toLowerCase();
    const showCustom = q === '' || 'custom'.includes(q);
    const matches = q === '' ? allUnits : allUnits.filter(u => u.name.toLowerCase().includes(q) || u.cat.toLowerCase().includes(q));

    listEl.innerHTML = '';
    activeIndex = -1;

    if (!showCustom && matches.length === 0) { listEl.style.display = 'none'; return; }

    if (showCustom) {
      const item = document.createElement('div');
      item.className = 'unit-dropdown-item';
      item.textContent = 'Custom';
      item.dataset.id = 'custom';
      item.addEventListener('mousedown', e => { e.preventDefault(); commitUnit('custom'); });
      listEl.appendChild(item);
    }

    let lastCat = null;
    for (const u of matches) {
      if (u.cat !== lastCat) {
        const header = document.createElement('div');
        header.className = 'unit-dropdown-cat';
        header.textContent = u.cat;
        listEl.appendChild(header);
        lastCat = u.cat;
      }
      const item = document.createElement('div');
      item.className = 'unit-dropdown-item';
      item.textContent = u.name;
      item.dataset.id = u.id;
      item.addEventListener('mousedown', e => { e.preventDefault(); commitUnit(u.id); });
      listEl.appendChild(item);
    }
    listEl.style.display = 'block';
  }

  function commitUnit(id) {
    hiddenEl.value = id;
    listEl.style.display = 'none';
    activeIndex = -1;
    syncUnitDisplay(prefix);
    hiddenEl.dispatchEvent(new Event('change'));
  }

  function updateActiveItem() {
    const items = [...listEl.querySelectorAll('.unit-dropdown-item')];
    items.forEach((item, i) => item.classList.toggle('unit-dropdown-active', i === activeIndex));
    if (activeIndex >= 0 && items[activeIndex]) items[activeIndex].scrollIntoView({ block: 'nearest' });
  }

  searchEl.addEventListener('focus', () => renderDropdown(searchEl.value));
  searchEl.addEventListener('input', () => renderDropdown(searchEl.value));
  searchEl.addEventListener('blur', () => {
    setTimeout(() => {
      listEl.style.display = 'none';
      activeIndex = -1;
      syncUnitDisplay(prefix);
    }, 150);
  });
  searchEl.addEventListener('keydown', e => {
    const items = [...listEl.querySelectorAll('.unit-dropdown-item')];
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, items.length - 1);
      updateActiveItem();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, -1);
      updateActiveItem();
    } else if (e.key === 'Enter') {
      const target = activeIndex >= 0 ? items[activeIndex] : items[0];
      if (target) {
        commitUnit(target.dataset.id);
        searchEl.blur();
      }
    } else if (e.key === 'Escape') {
      listEl.style.display = 'none';
      syncUnitDisplay(prefix);
      searchEl.blur();
    }
  });
}

// --- Stat Reading ---

// Read ability checkboxes/inputs from DOM for a given prefix.
// Returns a plain object keyed by ability key.
function readAbilitiesFromDOM(prefix) {
  const result = {};
  for (const abil of ABILITY_DEFS) {
    const el = document.getElementById(prefix + 'Abil_' + abil.key);
    if (!el) continue;
    if (abil.type === 'bool') {
      result[abil.key] = el.checked;
    } else if (abil.type === 'select') {
      result[abil.key] = el.value;
    } else if (abil.type === 'numcheck') {
      const chk = document.getElementById(prefix + 'Abil_' + abil.key + '_on');
      result[abil.key] = chk && chk.checked ? (parseInt(el.value) || 0) : null;
    } else {
      result[abil.key] = parseInt(el.value) || 0;
    }
  }
  return result;
}

// Read DOM inputs and compute all effective stats for a unit.
// Returns a stat object suitable for both display and resolveCombat.
function readUnitStats(prefix) {
  const el = id => document.getElementById(id);
  const enemyPrefix = prefix === 'a' ? 'b' : 'a';
  const chaosChannelsEl = el(prefix + 'Abil_chaosChannels');
  const enemyEternalNightEl = el(enemyPrefix + 'Abil_eternalNight');
  return deriveUnitStats({
    prefix,
    version: el('gameVersion').value,
    abilities: readAbilitiesFromDOM(prefix),
    level: el(prefix + 'Level').value,
    weapon: el(prefix + 'Weapon').value,
    armor: el(prefix + 'Armor').value,
    rtbType: el(prefix + 'RtbType').value,
    unitType: el(prefix + 'Abil_unitType').value,
    chaosChannels: chaosChannelsEl ? chaosChannelsEl.value : 'none',
    figs: el(prefix + 'Figs').value,
    atk: el(prefix + 'Atk').value,
    rtb: el(prefix + 'Rtb').value,
    def: el(prefix + 'Def').value,
    res: el(prefix + 'Res').value,
    hp: el(prefix + 'HP').value,
    dmg: el(prefix + 'Dmg').value,
    toHitMod: el(prefix + 'ToHitMod').value,
    toHitRtbMod: el(prefix + 'ToHitRtbMod').value,
    toBlkMod: el(prefix + 'ToBlkMod').value,
    cityWalls: el('cityWalls').value,
    nodeAura: el('nodeAura').value,
    trueLight: !!el('trueLight').checked,
    darkness: !!el('darkness').checked,
    enemyEternalNight: !!(enemyEternalNightEl && enemyEternalNightEl.checked),
    chaosSurge: el('chaosSurge').value,
    rangedCheck: !!el('rangedCheck').checked,
    rangedDist: el('rangedDist').value,
    warpReality: !!el('warpReality').checked,
    generic: !!(unitBaseStats[prefix] && unitBaseStats[prefix].generic),
  });
}
// --- Modified Display ---

// Show modified (final) stat values next to base stat fields.
// Takes a pre-computed stat object to avoid redundant readUnitStats calls.
function updateModifiedDisplay(prefix, stats) {
  const s = stats || readUnitStats(prefix);

  function showMod(id, effective, base) {
    const el = document.getElementById(id);
    if (!el) return;
    if (effective !== base) {
      el.textContent = String(effective);
      el.classList.add('visible');
    } else {
      el.textContent = '';
      el.classList.remove('visible');
    }
  }

  // Show the total percentage whenever it differs from the default 30%.
  function showModPct(id, effective, forceShow) {
    const el = document.getElementById(id);
    if (!el) return;
    const pct = Math.round(effective * 100);
    if (pct !== 30 || forceShow) {
      el.textContent = pct + '%';
      el.classList.add('visible');
    } else {
      el.textContent = '';
      el.classList.remove('visible');
    }
  }

  showMod(prefix + 'AtkMod', s.atk, s.baseAtk);
  showMod(prefix + 'RtbMod', s.rtb, s.baseRtb);
  showMod(prefix + 'DefMod', s.displayDef ?? s.def, s.baseDef);
  showMod(prefix + 'ResMod', s.res, s.baseRes);
  showMod(prefix + 'HPMod', s.hp, s.baseHP);

  showModPct(prefix + 'ToHitMeleeMod', s.displayToHitMelee ?? s.toHitMelee, s.toHitMeleeHasModifiers);
  showModPct(prefix + 'ToHitRtbModDisp', s.displayToHitRtb ?? s.toHitRtb, s.toHitRtbHasModifiers);
  showModPct(prefix + 'ToBlkModDisp', s.displayToBlock ?? s.toBlock, s.toBlockHasModifiers);
}

// --- Level Bonuses ---

function applyLevelBonuses(prefix) {
  const base = unitBaseStats[prefix];
  if (!base) return;
  const version = document.getElementById('gameVersion').value;
  const b = getLevelBonuses(document.getElementById(prefix + 'Level').value, version);
  document.getElementById(prefix + 'Atk').value = base.atk;
  document.getElementById(prefix + 'Rtb').value = base.rtb;
  document.getElementById(prefix + 'Def').value = base.def;
  document.getElementById(prefix + 'Res').value = base.res;
  document.getElementById(prefix + 'HP').value = base.hp;
  document.getElementById(prefix + 'ToHitMod').value = base.toHitMod;
}

// --- Unit Application ---

function applyUnit(prefix, unitIndex) {
  const version = document.getElementById('gameVersion').value;
  const units = unitDatabases[version] || [];
  const unit = units.find(u => u.id === unitIndex);
  if (!unit) return;

  const unitRtb = (unit.ranged && parseInt(unit.ranged) > 0) ? parseInt(unit.ranged)
                : (unit.breath && parseInt(unit.breath) > 0) ? parseInt(unit.breath)
                : (unit.thrown_breath && parseInt(unit.thrown_breath) > 0) ? parseInt(unit.thrown_breath) : 0;
  unitBaseStats[prefix] = {
    atk: unit.melee, def: unit.defense, res: unit.resist, hp: unit.hp,
    rtb: unitRtb,
    toHitMod: unit.to_hit || 0,
    generic: unit.category === 'Generic',
  };

  document.getElementById(prefix + 'Figs').value = unit.figures || 1;
  document.getElementById(prefix + 'ToHitRtbMod').value = 0;
  document.getElementById(prefix + 'ToBlkMod').value = 0;
  document.getElementById(prefix + 'Dmg').value = 0;

  const rawRtb = (unit.ranged_type && unit.ranged_type !== 'none') ? unit.ranged_type
               : (unit.thrown_breath_type && unit.thrown_breath_type !== 'none') ? unit.thrown_breath_type
               : 'none';
  const rtbType = RANGED_TYPE_NORMALIZE[rawRtb] || rawRtb;
  document.getElementById(prefix + 'RtbType').value = rtbType;

  const unitTypeSel = document.getElementById(prefix + 'Abil_unitType');
  if (unitTypeSel) {
    const cat = unit.category || '';
    const hasFantasticAbility = (unit.abilities || []).some(a => a === 'Fantastic' || a === 'Fantastic=1');
    const isFantastic = cat.endsWith(' Creatures') || hasFantasticAbility;
    if (cat === 'Heroes') {
      unitTypeSel.value = 'hero';
    } else if (isFantastic) {
      const realmMap = { 'Nature': 'nature', 'Sorcery': 'sorcery', 'Chaos': 'chaos',
                         'Life': 'life', 'Death': 'death', 'Arcane': 'arcane',
                         'Nature Creatures': 'nature', 'Sorcery Creatures': 'sorcery', 'Chaos Creatures': 'chaos',
                         'Life Creatures': 'life', 'Death Creatures': 'death', 'Arcane Creatures': 'arcane' };
      const realm = realmMap[cat] || 'arcane';
      unitTypeSel.value = 'fantastic_' + realm;
    } else {
      unitTypeSel.value = 'normal';
    }
  }

  // Clear any previous unit-innate locks before re-applying
  const abilCont = document.getElementById(prefix + 'Abilities');
  abilCont.querySelectorAll('.abil-unit-locked').forEach(item => {
    item.classList.remove('abil-unit-locked');
    item.querySelectorAll('input, select').forEach(inp => { inp.disabled = false; });
  });

  const abilValues = parseAbilitiesFromUnit(unit);
  applyAbilities(prefix, abilValues);
  applyLevelBonuses(prefix);

  // Lock Abilities/Enchantments items that are innate to this unit
  for (const abil of ABILITY_DEFS) {
    if (abil.group !== 'Abilities/Enchantments') continue;
    const val = abilValues[abil.key];
    const isActive = abil.type === 'bool' ? !!val
      : abil.type === 'numcheck' ? val != null
      : (val || 0) !== 0;
    if (!isActive) continue;
    const el = document.getElementById(prefix + 'Abil_' + abil.key);
    if (!el) continue;
    const item = el.closest('.abil-item');
    if (!item) continue;
    item.classList.add('abil-unit-locked');
    item.querySelectorAll('input, select').forEach(inp => { inp.disabled = true; });
  }

  refreshAbilityFieldVisibility();
}

function updateUnitLock(prefix) {
  const sel = document.getElementById(prefix + 'Unit');
  const fields = sel.closest('.panel').querySelector('.panel-fields');
  const abilContent = document.getElementById(prefix + 'Abilities');
  const isCustom = sel.value === 'custom';
  fields.classList.toggle('locked', !isCustom);
  abilContent.classList.toggle('locked', !isCustom);

  const unitTypeSel = document.getElementById(prefix + 'Abil_unitType');
  if (unitTypeSel) unitTypeSel.disabled = !isCustom;

  const levelSel = document.getElementById(prefix + 'Level');
  const weaponSel = document.getElementById(prefix + 'Weapon');
  if (!isCustom) {
    const version = document.getElementById('gameVersion').value;
    const units = unitDatabases[version] || [];
    const unit = units.find(u => u.id === parseInt(sel.value));
    const hasFantasticAbility = unit && (unit.abilities || []).some(a => a === 'Fantastic' || a === 'Fantastic=1');
    const isHeroOrFantastic = unit && (unit.category === 'Heroes' || (unit.category || '').endsWith(' Creatures') || hasFantasticAbility);
    const isZombies = unit && unit.name === 'Zombies';
    if (isHeroOrFantastic) {
      levelSel.value = 'normal';
      if (!isZombies) weaponSel.value = 'normal';
    }
    applyUnit(prefix, parseInt(sel.value));
    levelSel.disabled = isHeroOrFantastic;
    weaponSel.classList.toggle('weapon-locked', isHeroOrFantastic && !isZombies);
  } else {
    delete unitBaseStats[prefix];
    weaponSel.classList.remove('weapon-locked');
    // Clear unit-innate locks when switching to custom
    const abilContCustom = document.getElementById(prefix + 'Abilities');
    abilContCustom.querySelectorAll('.abil-unit-locked').forEach(item => {
      item.classList.remove('abil-unit-locked');
      item.querySelectorAll('input, select').forEach(inp => { inp.disabled = false; });
    });
    updateCustomLevelState(prefix);
  }
}

function updateCustomLevelState(prefix) {
  const sel = document.getElementById(prefix + 'Unit');
  if (sel.value !== 'custom') return;
  const levelSel = document.getElementById(prefix + 'Level');
  const weaponSel = document.getElementById(prefix + 'Weapon');
  const unitTypeSel = document.getElementById(prefix + 'Abil_unitType');
  const isNormal = !unitTypeSel || unitTypeSel.value === 'normal';
  levelSel.disabled = !isNormal;
  if (!isNormal) levelSel.value = 'normal';
  weaponSel.classList.toggle('weapon-locked', !isNormal);
  if (!isNormal) weaponSel.value = 'normal';
}

// --- Swap ---

function swapAttackerDefender() {
  const aUnitSel = document.getElementById('aUnit');
  const bUnitSel = document.getElementById('bUnit');
  let tmp = aUnitSel.value;
  aUnitSel.value = bUnitSel.value;
  bUnitSel.value = tmp;

  const simpleFields = ['Figs', 'Atk', 'RtbType', 'Rtb', 'ToHitMod', 'ToHitRtbMod', 'ToBlkMod', 'Def', 'Res', 'HP', 'Dmg', 'Level', 'Weapon', 'Armor'];
  for (const f of simpleFields) {
    const aEl = document.getElementById('a' + f);
    const bEl = document.getElementById('b' + f);
    if (!aEl || !bEl) continue;
    tmp = aEl.value;
    aEl.value = bEl.value;
    bEl.value = tmp;
  }

  for (const abil of ABILITY_DEFS) {
    const aEl = document.getElementById('aAbil_' + abil.key);
    const bEl = document.getElementById('bAbil_' + abil.key);
    if (!aEl || !bEl) continue;
    if (abil.type === 'bool') {
      const tmpC = aEl.checked;
      aEl.checked = bEl.checked;
      bEl.checked = tmpC;
    } else {
      tmp = aEl.value;
      aEl.value = bEl.value;
      bEl.value = tmp;
    }
  }

  const aTypeSel = document.getElementById('aAbil_unitType');
  const bTypeSel = document.getElementById('bAbil_unitType');
  if (aTypeSel && bTypeSel) {
    tmp = aTypeSel.value;
    aTypeSel.value = bTypeSel.value;
    bTypeSel.value = tmp;
  }

  tmp = unitBaseStats['a'];
  unitBaseStats['a'] = unitBaseStats['b'];
  unitBaseStats['b'] = tmp;

  syncUnitDisplay('a');
  syncUnitDisplay('b');
  updateUnitLock('a');
  updateUnitLock('b');
  updateTypeVisibility();
  updateAbilityVisibility();
  recalculate();
}

// --- Version Change ---

function findMatchingUnit(units, oldUnit) {
  if (!oldUnit) return null;
  const nonHeroes = units.filter(u => u.category !== 'Heroes');
  const oldName = oldUnit.name;
  let match = nonHeroes.find(u => u.name === oldName);
  if (match) return match;
  const aliased = UNIT_NAME_ALIASES[oldName];
  if (aliased) {
    match = nonHeroes.find(u => u.name === aliased);
    if (match) return match;
  }
  return null;
}

function onVersionChange() {
  const version = document.getElementById('gameVersion').value;
  const aUnitSel = document.getElementById('aUnit');
  const bUnitSel = document.getElementById('bUnit');
  const oldAId = aUnitSel.value;
  const oldBId = bUnitSel.value;
  const prevDb = (_activeVersion && unitDatabases[_activeVersion]) || [];
  const oldAUnit = oldAId !== 'custom' ? (prevDb.find(u => String(u.id) === oldAId) || null) : null;
  const oldBUnit = oldBId !== 'custom' ? (prevDb.find(u => String(u.id) === oldBId) || null) : null;

  const units = loadUnitDatabase(version);
  populateUnitDropdown('aUnit', units);
  populateUnitDropdown('bUnit', units);

  for (const [prefix, oldUnit, sel] of [['a', oldAUnit, aUnitSel], ['b', oldBUnit, bUnitSel]]) {
    if (!oldUnit) continue;
    const matched = findMatchingUnit(units, oldUnit);
    sel.value = matched ? String(matched.id) : 'custom';
    syncUnitDisplay(prefix);
  }

  // Save user enchantments — updateUnitLock calls applyUnit which resets all abilities
  const savedEnch = {};
  for (const prefix of ['a', 'b']) {
    savedEnch[prefix] = {};
    for (const abil of ABILITY_DEFS) {
      if (abil.group !== 'Enchantments') continue;
      const el = document.getElementById(prefix + 'Abil_' + abil.key);
      if (!el) continue;
      if (abil.type === 'bool') {
        savedEnch[prefix][abil.key] = el.checked;
      } else if (abil.type === 'select') {
        savedEnch[prefix][abil.key] = el.value;
      } else if (abil.type === 'numcheck') {
        const chk = document.getElementById(prefix + 'Abil_' + abil.key + '_on');
        savedEnch[prefix][abil.key] = chk && chk.checked ? (parseInt(el.value) || 0) : null;
      } else {
        savedEnch[prefix][abil.key] = parseInt(el.value) || 0;
      }
    }
  }

  _activeVersion = version;
  updateUnitLock('a');
  updateUnitLock('b');

  // Restore user enchantments; updateTypeVisibility will still disable/uncheck version-incompatible ones
  for (const prefix of ['a', 'b']) {
    for (const abil of ABILITY_DEFS) {
      if (abil.group !== 'Enchantments') continue;
      const el = document.getElementById(prefix + 'Abil_' + abil.key);
      if (!el) continue;
      const val = savedEnch[prefix][abil.key];
      if (val === undefined) continue;
      if (abil.type === 'bool') {
        el.checked = val;
      } else if (abil.type === 'select') {
        el.value = val;
      } else if (abil.type === 'numcheck') {
        const chk = document.getElementById(prefix + 'Abil_' + abil.key + '_on');
        if (chk) chk.checked = val != null;
        el.value = val != null ? val : 0;
      } else {
        el.value = val || 0;
      }
    }
  }

  updateTypeVisibility();
  recalculate();
}

// --- Rendering ---

function formatPct(p) {
  return (p * 100).toFixed(1) + '%';
}

function renderDistPanel(container, title, dist, hp, numFigs, opts) {
  const showSkulls = opts && opts.showSkulls;
  const colHeader = (opts && opts.colHeader) || 'Damage';
  // firstFigRem: HP remaining on the lead figure (accounts for pre-existing damage)
  const firstFigRem = (opts && opts.firstFigRem) || hp;

  let maxD = dist.length - 1;
  while (maxD > 0 && dist[maxD] < 1e-10) maxD--;

  let expected = 0;
  for (let d = 0; d < dist.length; d++) expected += d * dist[d];

  let peakProb = 0;
  for (let d = 0; d <= maxD; d++) {
    if ((dist[d] || 0) > peakProb) peakProb = dist[d];
  }

  // Precompute figure-kill thresholds
  const killThresholds = new Set();
  if (showSkulls && numFigs > 0 && hp > 0) {
    for (let i = 0; i < numFigs; i++) {
      const thresh = i === 0 ? firstFigRem : firstFigRem + i * hp;
      killThresholds.add(thresh);
    }
  }

  // Compute destruction chance (damage >= total remaining HP).
  // opts.pDestroy overrides with a pre-computed cumulative value (used by phase panels).
  let destroyPct = '';
  if (opts && opts.pDestroy != null) {
    destroyPct = `<br>${formatPct(opts.pDestroy)} destroyed`;
  } else if (numFigs > 0 && hp > 0) {
    const totalRemHP = firstFigRem + (numFigs - 1) * hp;
    let pDestroy = 0;
    for (let d = totalRemHP; d < dist.length; d++) pDestroy += dist[d] || 0;
    destroyPct = `<br>${formatPct(pDestroy)} destroyed`;
  }

  const barColor = (opts && opts.barColor) || '#ff4d6a';

  let hpPct = '';
  if (numFigs > 0 && hp > 0) {
    const totalRemHP = firstFigRem + (numFigs - 1) * hp;
    hpPct = ` <span class="hp-pct">(${(expected / totalRemHP * 100).toFixed(1)}% HP)</span>`;
  }

  let html = `<div class="dist-header">${title}:<br><span class="avg">${expected.toFixed(3)}</span>${hpPct}${destroyPct}</div>`;
  html += '<div class="dist-scroll"><table class="dist-table">';
  html += `<thead><tr><th>${colHeader}</th><th style="text-align:right">Chance</th></tr></thead><tbody>`;

  for (let d = 0; d <= maxD; d++) {
    const p = dist[d] || 0;
    const barWidth = peakProb > 0 ? (p / peakProb) * 100 : 0;
    const isPeak = peakProb > 0 && Math.abs(p - peakProb) < 1e-15;

    let dmgLabel = '' + d;
    if (showSkulls && killThresholds.has(d)) {
      dmgLabel += ' ☠';
    }

    html += `<tr class="${isPeak ? 'peak' : ''}">`;
    html += `<td class="dmg-cell">${dmgLabel}</td>`;
    html += `<td class="chance-cell">`;
    html += `<span class="chance-bar" style="width:${barWidth}%;background:${barColor}"></span>`;
    html += `<span class="chance-text">${formatPct(p)}</span>`;
    html += `</td></tr>`;
  }

  html += '</tbody></table></div>';
  container.innerHTML = html;
}

function renderBreakdownGrid(phases) {
  const grid = document.getElementById('breakdownGrid');
  grid.innerHTML = '';
  if (!phases || phases.length <= 1) return;

  const breakdownOpts = { barColor: '#f0c030' };

  const heading = document.createElement('div');
  heading.className = 'breakdown-heading';
  heading.textContent = 'Phase breakdown';
  grid.appendChild(heading);

  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];

    const row = document.createElement('div');
    row.className = 'breakdown-phase-row' + (i === 0 ? ' first-phase' : '');
    grid.appendChild(row);

    const label = document.createElement('div');
    label.className = 'breakdown-phase-label';
    label.textContent = phase.label;
    row.appendChild(label);

    const panels = document.createElement('div');
    panels.className = 'breakdown-phase-panels';
    row.appendChild(panels);

    const panelA = document.createElement('div');
    panelA.className = 'dist-panel';
    panels.appendChild(panelA);

    const panelB = document.createElement('div');
    panelB.className = 'dist-panel';
    panels.appendChild(panelB);

    if (phase.mode === 'feared') {
      const fearOpts = { barColor: '#c080ff', colHeader: 'Feared' };
      renderDistPanel(panelA, 'Attacker figs feared', phase.atkDist, 0, 0, fearOpts);
      renderDistPanel(panelB, 'Defender figs feared', phase.defDist, 0, 0, fearOpts);
    } else {
      const atkOpts = phase.atkDestroyPct != null ? { ...breakdownOpts, pDestroy: phase.atkDestroyPct } : breakdownOpts;
      const defOpts = phase.defDestroyPct != null ? { ...breakdownOpts, pDestroy: phase.defDestroyPct } : breakdownOpts;
      renderDistPanel(panelA, 'Mean damage to attacker', phase.atkDist, phase.atkHPper, phase.atkFigs, atkOpts);
      renderDistPanel(panelB, 'Mean damage to defender', phase.defDist, phase.defHPper, phase.defFigs, defOpts);
    }
  }
}

// --- Life Steal Summary ---

function renderLifeStealSummary(result) {
  const el = document.getElementById('lifeStealSummary');
  if (!el) return;

  function expectedValue(dist) {
    if (!dist) return 0;
    let ev = 0;
    for (let d = 0; d < dist.length; d++) ev += d * dist[d];
    return ev;
  }

  const aLS = (result.aLifeStealExpected != null)
    ? result.aLifeStealExpected
    : (result.aLifeStealDist ? expectedValue(result.aLifeStealDist) : 0);
  const bLS = (result.bLifeStealExpected != null)
    ? result.bLifeStealExpected
    : (result.bLifeStealDist ? expectedValue(result.bLifeStealDist) : 0);

  if (aLS < 0.001 && bLS < 0.001) {
    el.style.display = 'none';
    el.innerHTML = '';
    return;
  }

  let html = '';
  if (aLS >= 0.001) {
    html += `<span>Attacker life steal damage: <strong>${aLS.toFixed(3)}</strong></span>`;
  }
  if (bLS >= 0.001) {
    if (html) html += ' &nbsp;|&nbsp; ';
    html += `<span>Defender life steal damage: <strong>${bLS.toFixed(3)}</strong></span>`;
  }
  el.style.display = '';
  el.innerHTML = html;
}

// --- Main Calculate ---
// Reads stats once, updates displays, resolves combat, renders results.

const REALM_PANEL_CLASSES = ['panel-realm-life','panel-realm-nature','panel-realm-sorcery','panel-realm-chaos','panel-realm-death','panel-realm-arcane','panel-realm-normal'];

function applyPanelRealmClass(panelId, unitType) {
  const el = document.getElementById(panelId);
  if (!el || !unitType) return;
  el.classList.remove(...REALM_PANEL_CLASSES);
  let realm = unitType.startsWith('fantastic_') ? unitType.slice('fantastic_'.length) : 'normal';
  if (realm === 'unaligned') realm = 'arcane';
  if (!REALM_PANEL_CLASSES.includes('panel-realm-' + realm)) realm = 'normal';
  el.classList.add('panel-realm-' + realm);
}

function recalculate() {
  const a = readUnitStats('a');
  const b = readUnitStats('b');

  applyPanelRealmClass('panelA', a.unitType);
  applyPanelRealmClass('panelB', b.unitType);

  // Update modified displays using the already-computed stats (no redundant reads)
  updateModifiedDisplay('a', a);
  updateModifiedDisplay('b', b);

  const isRanged = document.getElementById('rangedCheck').checked && a.rangedType !== 'none' && a.rtb > 0;
  const version = document.getElementById('gameVersion').value;
  const wallOfFire = document.getElementById('wallOfFire').checked;

  const result = resolveCombat(a, b, { isRanged, version, wallOfFire });

  const aFirstFigRem = a.hp > 0 && a.dmg % a.hp !== 0 ? a.hp - (a.dmg % a.hp) : a.hp;
  const bFirstFigRem = b.hp > 0 && b.dmg % b.hp !== 0 ? b.hp - (b.dmg % b.hp) : b.hp;

  renderBreakdownGrid(result.phases);
  renderDistPanel(document.getElementById('distA'), 'Mean damage to attacker', result.totalDmgToA, result.aHP, result.aAlive,
    { showSkulls: true, firstFigRem: aFirstFigRem });
  renderDistPanel(document.getElementById('distB'), 'Mean damage to defender', result.totalDmgToB, result.bHP, result.bAlive,
    { showSkulls: true, firstFigRem: bFirstFigRem });
  renderLifeStealSummary(result);
}

// Backward-compatible alias
function calculate() { recalculate(); }

// --- Visibility ---

function updateTypeVisibility() {
  ['aRtbType', 'bRtbType'].forEach(id => {
    const sel = document.getElementById(id);
    const input = sel.nextElementSibling;
    if (input) input.classList.toggle('disabled-field', sel.value === 'none');
  });

  // Armor type is CoM/CoM2-only; grey it out for MoM versions.
  const version = document.getElementById('gameVersion').value;
  const isMoM = version === 'mom_1.31' || version === 'mom_cp_1.60.00';
  ['aArmor', 'bArmor'].forEach(id => {
    const el = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    el.classList.toggle('disabled-field', isMoM);
    if (label) label.classList.toggle('disabled-field', isMoM);
    el.disabled = isMoM;
    if (isMoM) el.value = 'normal';
  });

  // Version and unit type restrictions on enchantments.
  const isCoMorCoM2 = version === 'com_6.08' || version === 'com2_1.05.11';
  const isCoM2 = version === 'com2_1.05.11';

  function subgroupAllowed(subgroup) {
    const sg = (subgroup || '').replace(/^_/, '');
    if (sg === 'MoM only') return isMoM;
    if (sg === 'CoM & CoM2') return isCoMorCoM2;
    if (sg === 'CoM2 only') return isCoM2;
    return true;
  }

  const abilByKey = Object.fromEntries(ABILITY_DEFS.map(a => [a.key, a]));

  function applyDisabled(el, disabled) {
    if (disabled) {
      if (el.tagName === 'SELECT') el.value = el.options[0].value;
      else if (el.type === 'checkbox') el.checked = false;
    }
    el.disabled = disabled;
  }

  for (const prefix of ['a', 'b']) {
    const unitTypeSel = document.getElementById(prefix + 'Abil_unitType');
    const unitType = unitTypeSel ? unitTypeSel.value : 'normal';
    // Casting restrictions should reflect the explicit base Unit Type selector only.
    // Some enchantments can transform a unit after other legal enchantments were already cast.
    const isFantastic = unitType.startsWith('fantastic_');
    const isNormal = unitType === 'normal';

    // Version-only pass: set all Enchantments items based on version.
    for (const abil of ABILITY_DEFS) {
      if (abil.group !== 'Enchantments') continue;
      const el = document.getElementById(prefix + 'Abil_' + abil.key);
      if (!el) continue;
      applyDisabled(el, !subgroupAllowed(abil.subgroup));
    }

    // Unit-type passes use the explicit Unit Type control, not transformed/effective type.

    // Normal or Hero only (disabled for fantastic units).
    for (const key of ['flameBlade', 'metalFires', 'chaosChannels', 'blackChannels', 'holyArmor', 'holyWeapon', 'eldritchWeapon', 'shatter', 'mislead']) {
      const el = document.getElementById(prefix + 'Abil_' + key);
      if (!el) continue;
      applyDisabled(el, isFantastic || !subgroupAllowed(abilByKey[key]?.subgroup));
    }

    // Normal only (disabled for fantastic units AND heroes).
    for (const key of ['discipline', 'destiny']) {
      const el = document.getElementById(prefix + 'Abil_' + key);
      if (!el) continue;
      applyDisabled(el, !isNormal || !subgroupAllowed(abilByKey[key]?.subgroup));
    }
  }

  const aStats = readUnitStats('a');
  const hasRanged = aStats.rangedType !== 'none' && aStats.rtb > 0;
  const rangedCheckLabel = document.getElementById('rangedCheckLabel');
  const rangedCheck = document.getElementById('rangedCheck');
  const rangedDist = document.getElementById('rangedDist');
  rangedCheckLabel.classList.toggle('disabled-field', !hasRanged);
  rangedCheck.disabled = !hasRanged;
  if (!hasRanged) rangedCheck.checked = false;

  const isRanged = hasRanged && rangedCheck.checked;
  document.getElementById('rangedDistLabel').classList.toggle('disabled-field', !isRanged);
  rangedDist.classList.toggle('disabled-field', !isRanged);
  rangedDist.disabled = !isRanged;

  for (const prefix of ['a', 'b']) {
    const armorSel = document.getElementById(prefix + 'Armor');
    if (!armorSel) continue;
    if (isMoM) {
      armorSel.value = 'normal';
      armorSel.disabled = true;
    } else {
      armorSel.disabled = false;
    }
  }
}

function refreshAbilityFieldVisibility() {
  updateTypeVisibility();
  updateAbilityVisibility();
}

// --- Presets ---

const PRESET_VERSIONS = {};

function applyPreset(name) {
  const preset = PRESETS[name];
  if (!preset) return;
  const targetVersion = preset.version || PRESET_VERSIONS[name];
  if (targetVersion) {
    const versionSel = document.getElementById('gameVersion');
    if (versionSel.value !== targetVersion) {
      versionSel.value = targetVersion;
      onVersionChange();
    }
  }
  function setUnit(prefix, u) {
    const s = { ...UNIT_DEFAULTS, ...u };
    document.getElementById(prefix + 'Figs').value = s.figs;
    document.getElementById(prefix + 'Atk').value = s.atk;
    document.getElementById(prefix + 'RtbType').value = s.rtbType;
    document.getElementById(prefix + 'Rtb').value = s.rtb;
    document.getElementById(prefix + 'Def').value = s.def;
    document.getElementById(prefix + 'Res').value = s.res;
    document.getElementById(prefix + 'ToHitMod').value = s.toHitMod;
    document.getElementById(prefix + 'ToHitRtbMod').value = s.toHitRtbMod;
    document.getElementById(prefix + 'ToBlkMod').value = s.toBlkMod;
    document.getElementById(prefix + 'HP').value = s.hp;
    document.getElementById(prefix + 'Dmg').value = s.dmg;
    document.getElementById(prefix + 'Weapon').value = s.weapon;
    document.getElementById(prefix + 'Armor').value = s.armor || 'normal';
    document.getElementById(prefix + 'Level').value = s.level;
    document.getElementById(prefix + 'Abil_unitType').value = s.unitType;
    clearAbilities(prefix);
    applyAbilities(prefix, s.abilities);
    refreshAbilityFieldVisibility();
  }
  const activeVersion = document.getElementById('gameVersion').value;
  const unitsDb = unitDatabases[activeVersion] || [];
  function selectPredefined(prefix, unitName) {
    const match = unitsDb.find(u => u.name === unitName);
    if (!match) {
      console.warn(`Preset "${name}": predefined unit "${unitName}" not found in ${activeVersion}`);
      document.getElementById(prefix + 'Unit').value = 'custom';
      syncUnitDisplay(prefix);
      return false;
    }
    document.getElementById(prefix + 'Unit').value = String(match.id);
    syncUnitDisplay(prefix);
    return true;
  }
  if (preset.aUnitName) {
    if (!selectPredefined('a', preset.aUnitName)) setUnit('a', preset.a || {});
  } else {
    setUnit('a', preset.a || {});
    document.getElementById('aUnit').value = 'custom';
    syncUnitDisplay('a');
  }
  if (preset.bUnitName) {
    if (!selectPredefined('b', preset.bUnitName)) setUnit('b', preset.b || {});
  } else {
    setUnit('b', preset.b || {});
    document.getElementById('bUnit').value = 'custom';
    syncUnitDisplay('b');
  }
  updateUnitLock('a');
  updateUnitLock('b');
  if (preset.a && preset.a.level) document.getElementById('aLevel').value = preset.a.level;
  if (preset.a && preset.a.weapon) document.getElementById('aWeapon').value = preset.a.weapon;
  if (preset.b && preset.b.level) document.getElementById('bLevel').value = preset.b.level;
  if (preset.b && preset.b.weapon) document.getElementById('bWeapon').value = preset.b.weapon;
  document.getElementById('rangedCheck').checked = preset.rangedCheck || false;
  document.getElementById('rangedDist').value = preset.rangedDist || 1;
  document.getElementById('cityWalls').value = preset.cityWalls || 'none';
  document.getElementById('nodeAura').value = preset.nodeAura || 'none';
  const legacyLightDark = preset.enchLightDark || 'none';
  document.getElementById('trueLight').checked = !!preset.trueLight || legacyLightDark === 'trueLight';
  document.getElementById('darkness').checked = !!preset.darkness || legacyLightDark === 'darkness';
  if (preset.eternalNight) {
    const side = preset.eternalNight === 'defender' ? 'b' : 'a';
    const el = document.getElementById(side + 'Abil_eternalNight');
    if (el) el.checked = true;
  }
  document.getElementById('chaosSurge').value = preset.chaosSurge || 0;
  document.getElementById('wallOfFire').checked = preset.wallOfFire || false;
  document.getElementById('warpReality').checked = preset.warpReality || false;
  refreshAbilityFieldVisibility();
  recalculate();
}

// --- Test Runner ---

function runTests(tolerance) {
  tolerance = tolerance || 0.002;
  const results = [];
  let allPassed = true;
  for (const [name, preset] of Object.entries(PRESETS)) {
    if (!preset.expected) continue;
    applyPreset(name);
    const panels = document.querySelectorAll('.dist-header .avg');
    const dmgToA = parseFloat(panels[0].textContent);
    const dmgToB = parseFloat(panels[1].textContent);
    const expA = preset.expected.dmgToA;
    const expB = preset.expected.dmgToB;
    const errA = expA != null ? Math.abs(dmgToA - expA) : 0;
    const errB = expB != null ? Math.abs(dmgToB - expB) : 0;
    const pass = errA < tolerance && errB < tolerance;
    if (!pass) allPassed = false;
    results.push({
      name, pass,
      dmgToA, expectedA: expA, errA: +errA.toFixed(4),
      dmgToB, expectedB: expB, errB: +errB.toFixed(4),
    });
  }
  const failures = results.filter(r => !r.pass);
  if (allPassed) {
    console.log(`All ${results.length} tests passed.`);
  } else {
    console.error(`${failures.length}/${results.length} tests FAILED:`);
    failures.forEach(f => console.error(`  ${f.name}: A=${f.dmgToA} (exp ${f.expectedA}, err ${f.errA}), B=${f.dmgToB} (exp ${f.expectedB}, err ${f.errB})`));
  }
  return { allPassed, total: results.length, failures };
}

// --- Ability Visibility ---

// Check if a single ability item is "active" (non-default value)
function isAbilityActive(item) {
  const key = item.dataset.abilKey;
  if (!key) return false;
  const chk = item.querySelector('input[type="checkbox"]');
  const numInput = item.querySelector('input[type="number"]');
  const sel = item.querySelector('select');

  // numcheck: has a _on checkbox and a number input
  if (chk && numInput) return chk.checked;
  // bool: just a checkbox
  if (chk) return chk.checked;
  // select: non-default value
  if (sel) return sel.value !== (item.dataset.abilDefault || sel.options[0].value);
  // num: non-zero
  if (numInput) return parseInt(numInput.value) !== 0;
  return false;
}

// Update which abilities are shown based on active state.
// Hides inactive items, group headers, and empty grid containers when in hide-inactive mode.
function updateAbilityVisibility() {
  for (const prefix of ['a', 'b']) {
    const section = document.getElementById(prefix + 'Abilities').closest('.abilities-section');
    if (!section) continue;
    const content = document.getElementById(prefix + 'Abilities');
    const hiding = section.classList.contains('hide-inactive');
    const items = section.querySelectorAll('.abil-item');

    items.forEach(item => {
      if (!hiding) {
        item.classList.remove('abil-hidden');
      } else {
        const active = isAbilityActive(item);
        const focused = item.contains(document.activeElement);
        item.classList.toggle('abil-hidden', !active && !focused);
      }
    });

    // Hide subgroup headers when all their children are hidden
    section.querySelectorAll('.abil-subgroup-header').forEach(header => {
      const group = header.dataset.abilGroup;
      const subgroup = header.dataset.abilSubgroup;
      const gridContainers = section.querySelectorAll(
        `.abil-grid[data-abil-group="${group}"][data-abil-subgroup="${subgroup}"]`
      );
      let anyVisible = false;
      gridContainers.forEach(c => {
        c.querySelectorAll('.abil-item').forEach(item => {
          if (!item.classList.contains('abil-hidden')) anyVisible = true;
        });
      });
      header.classList.toggle('abil-hidden', hiding && !anyVisible);
    });

    // Hide group headers and grid containers when all their children are hidden
    section.querySelectorAll('.abil-group-header').forEach(header => {
      const group = header.dataset.abilGroup;
      const siblings = section.querySelectorAll(`.abil-item[data-abil-key]`);
      // Find items in this group: they are in grid/num-grid containers with matching data-abil-group
      const groupContainers = section.querySelectorAll(`[data-abil-group="${group}"]`);
      let anyVisible = false;
      groupContainers.forEach(c => {
        if (c === header) return;
        if (c.classList.contains('abil-subgroup-header')) return;
        const groupItems = c.querySelectorAll('.abil-item');
        groupItems.forEach(item => {
          if (!item.classList.contains('abil-hidden')) anyVisible = true;
        });
      });
      header.classList.toggle('abil-hidden', hiding && !anyVisible);
    });

    // Hide empty grid containers
    section.querySelectorAll('.abil-grid').forEach(grid => {
      const items = grid.querySelectorAll('.abil-item');
      let anyVisible = false;
      items.forEach(item => {
        if (!item.classList.contains('abil-hidden')) anyVisible = true;
      });
      grid.classList.toggle('abil-hidden', hiding && !anyVisible);
    });

    const hasVisibleAbility = [...content.querySelectorAll('.abil-item')]
      .some(item => !item.classList.contains('abil-hidden'));
    section.classList.toggle('abilities-empty', hiding && !hasVisibleAbility);
  }
}

// Toggle show/hide all abilities for both panels
function toggleAllAbilities() {
  const sections = document.querySelectorAll('.abilities-section');
  const btns = document.querySelectorAll('.toggle-abil-btn');
  const isCurrentlyHiding = sections[0] && sections[0].classList.contains('hide-inactive');

  sections.forEach(s => s.classList.toggle('hide-inactive', !isCurrentlyHiding));
  btns.forEach(b => b.textContent = isCurrentlyHiding ? 'Hide inactive' : 'Show all abilities');
  updateAbilityVisibility();
}

// --- Event Wiring ---

// Build ability UI
buildAbilitiesUI('a');
buildAbilitiesUI('b');

// Unit type change -> update level availability
['a', 'b'].forEach(prefix => {
  const unitTypeSel = document.getElementById(prefix + 'Abil_unitType');
  if (unitTypeSel) {
    unitTypeSel.addEventListener('change', () => {
      updateCustomLevelState(prefix);
      recalculate();
    });
  }
});

document.getElementById('gameVersion').addEventListener('change', onVersionChange);
document.getElementById('swapBtn').addEventListener('click', swapAttackerDefender);
document.querySelectorAll('.toggle-abil-btn').forEach(btn => {
  btn.addEventListener('click', toggleAllAbilities);
});
document.getElementById('aUnit').addEventListener('change', () => {
  updateUnitLock('a');
  updateTypeVisibility();
  recalculate();
});
document.getElementById('bUnit').addEventListener('change', () => {
  updateUnitLock('b');
  updateTypeVisibility();
  recalculate();
});
initUnitCombobox('a');
initUnitCombobox('b');

document.getElementById('aLevel').addEventListener('change', () => {
  applyLevelBonuses('a');
  recalculate();
});
document.getElementById('bLevel').addEventListener('change', () => {
  applyLevelBonuses('b');
  recalculate();
});

// Global input/change handler for all fields
document.querySelectorAll('input, select').forEach(el => {
  el.addEventListener('input', () => { updateTypeVisibility(); updateAbilityVisibility(); recalculate(); });
  el.addEventListener('change', () => { updateTypeVisibility(); updateAbilityVisibility(); recalculate(); });
});

// Focus/blur on ability items: keep focused items visible, re-hide on blur
document.querySelectorAll('.abil-item').forEach(item => {
  item.addEventListener('focusin', () => {
    item.classList.remove('abil-hidden');
  });
  item.addEventListener('focusout', () => {
    // Delay to allow click on another element within the same item
    setTimeout(() => updateAbilityVisibility(), 100);
  });
});

// Generate preset buttons as a collapsible tree
(function buildPresetButtons() {
  const container = document.getElementById('presetButtons');

  function makeButton(name) {
    const preset = PRESETS[name];
    if (!preset) return null;
    const parts = preset.desc.split(/:\s*(.+)/);
    const title = parts[0];
    const sub = parts[1] || '';
    const exp = preset.expected;
    const expLine = exp ? `${exp.dmgToA != null ? `E[A]=${exp.dmgToA.toFixed(3)}` : ''}${exp.dmgToA != null && exp.dmgToB != null ? ' ' : ''}${exp.dmgToB != null ? `E[B]=${exp.dmgToB.toFixed(3)}` : ''}` : '';
    const btn = document.createElement('button');
    btn.onclick = () => { applyPreset(name); };
    btn.innerHTML = `${title}<br><small>${sub}</small>` +
      (expLine ? `<br><small style="color:var(--accent)">${expLine}</small>` : '');
    return btn;
  }

  for (const group of TEST_TREE) {
    const groupDetails = document.createElement('details');
    groupDetails.className = 'preset-group';
    groupDetails.open = true;
    const groupSummary = document.createElement('summary');
    groupSummary.textContent = group.name;
    groupDetails.appendChild(groupSummary);

    for (const sub of group.subs) {
      const subDetails = document.createElement('details');
      subDetails.className = 'preset-subgroup';
      subDetails.open = false;
      const subSummary = document.createElement('summary');
      subSummary.textContent = sub.name;
      subDetails.appendChild(subSummary);

      for (const key of sub.keys) {
        if (group.version) PRESET_VERSIONS[key] = group.version;
        const btn = makeButton(key);
        if (btn) subDetails.appendChild(btn);
      }
      groupDetails.appendChild(subDetails);
    }
    container.appendChild(groupDetails);
  }
})();

// Initial load
(function setDefaults() {
  document.getElementById('gameVersion').value = 'com2_1.05.11';
  onVersionChange();
  const db = unitDatabases['com2_1.05.11'] || [];
  const hmUnit = db.find(u => u.name === 'High Men Spearmen');
  const klUnit = db.find(u => u.name === 'Klackon Spearmen');
  if (hmUnit) { document.getElementById('aUnit').value = String(hmUnit.id); syncUnitDisplay('a'); updateUnitLock('a'); }
  if (klUnit) { document.getElementById('bUnit').value = String(klUnit.id); syncUnitDisplay('b'); updateUnitLock('b'); }
  updateTypeVisibility();
  updateAbilityVisibility();
  recalculate();
})();

// --- Cursor-following tooltip ---
(function initTooltip() {
  const tip = document.getElementById('tt');

  // Propagate data-tooltip from each label to the input/select siblings that follow it
  // in the same panel-fields grid, until the next label resets the current tooltip.
  document.querySelectorAll('.panel-fields').forEach(grid => {
    let cur = null;
    for (const child of grid.children) {
      if (child.tagName === 'LABEL') {
        cur = child.dataset.tooltip || null;
      } else if (cur && (child.tagName === 'INPUT' || child.tagName === 'SELECT')) {
        if (!child.dataset.tooltip) child.dataset.tooltip = cur;
      }
    }
  });
  document.addEventListener('mousemove', e => {
    let el = e.target;
    while (el && el !== document.documentElement) {
      if (el.dataset && el.dataset.tooltip) break;
      el = el.parentElement;
    }
    const text = el && el.dataset && el.dataset.tooltip;
    if (text) {
      tip.textContent = text;
      tip.style.display = 'block';
      const offX = 14, offY = 14;
      let x = e.clientX + offX;
      let y = e.clientY + offY;
      if (x + tip.offsetWidth > window.innerWidth)  x = e.clientX - tip.offsetWidth - 6;
      if (y + tip.offsetHeight > window.innerHeight) y = e.clientY - tip.offsetHeight - 6;
      tip.style.left = x + 'px';
      tip.style.top  = y + 'px';
    } else {
      tip.style.display = 'none';
    }
  });
  document.addEventListener('mouseleave', () => { tip.style.display = 'none'; });
})();

// --- Presets Drawer ---
(function() {
  const drawer = document.getElementById('presetsDrawer');
  const toggle = document.getElementById('presetsToggle');
  const overlay = document.getElementById('presetsOverlay');

  function open() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function close() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    drawer.classList.contains('open') ? close() : open();
  });
  overlay.addEventListener('click', close);
})();
