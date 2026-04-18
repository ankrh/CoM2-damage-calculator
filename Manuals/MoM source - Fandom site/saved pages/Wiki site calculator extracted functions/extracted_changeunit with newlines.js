"function changeunit(side) {
  var raceidx = parseInt(document.getElementById('race' + side).value);
  var unitidx = parseInt(document.getElementById('unit' + side).value);
  var unitimgx = document.getElementById('unitimg' + side);
  var figuresx = document.getElementById('figures' + side);
  var fixed_figuresx = document.getElementById('fixed_figures' + side);
  var levelx = document.getElementById('level' + side);
  var base_meleex = document.getElementById('base_melee' + side);
  var rangedx = document.getElementById('ranged' + side);
  var rangedtypex = document.getElementById('rangedtype' + side);
  var base_rangedx = document.getElementById('base_ranged' + side);
  var base_defensex = document.getElementById('base_defense' + side);
  var base_resistx = document.getElementById('base_resist' + side);
  var base_tohitx = document.getElementById('base_tohit' + side);
  var breathtypex = document.getElementById('breathtype' + side);
  var base_breathx = document.getElementById('base_breath' + side);
  var base_hpx = document.getElementById('base_hp' + side);
  var dtx = document.getElementById('dt' + side);
  var attslabelx = document.getElementById('attslabel' + side);
  var attselectx = document.getElementById('attselect' + side);
  var flyingx = document.getElementById('flying' + side);
  var noncorpx = document.getElementById('noncorp' + side);
  var lshieldx = document.getElementById('lshield' + side);
  var luckyx = document.getElementById('lucky' + side);
  var lrangex = document.getElementById('lrange' + side);
  var apx = document.getElementById('ap' + side);
  var fsx = document.getElementById('fs' + side);
  var negatefsx = document.getElementById('negatefs' + side);
  var missimmx = document.getElementById('missimm' + side);
  var magimmx = document.getElementById('magimm' + side);
  var illimmx = document.getElementById('illimm' + side);
  var weapimmx = document.getElementById('weapimm' + side);
  var deathimmx = document.getElementById('deathimm' + side);
  var fireimmx = document.getElementById('fireimm' + side);
  var coldimmx = document.getElementById('coldimm' + side);
  var stonimmx = document.getElementById('stonimm' + side);
  var poisimmx = document.getElementById('poisimm' + side);
  var poisonx = document.getElementById('poison' + side);
  var illusionx = document.getElementById('illusion' + side);
  var gazerangedx = document.getElementById('gazeranged' + side);
  var dgazex = document.getElementById('dgaze' + side);
  var sgazex = document.getElementById('sgaze' + side);
  var doomgazex = document.getElementById('doomgaze' + side);
  var immox = document.getElementById('immo' + side);
  var dispelevilx = document.getElementById('dispelevil' + side);
  var stouchx = document.getElementById('stouch' + side);
  var invisx = document.getElementById('invis' + side);
  var resistallx = document.getElementById('resistall' + side);
  var holybonusx = document.getElementById('holybonus' + side);
  var lifestealx = document.getElementById('lifesteal' + side);
  var regenx = document.getElementById('regen' + side);
  var fearx = document.getElementById('fear' + side);
  var lifeunitx = document.getElementById('lifeunit' + side);
  var deathunitx = document.getElementById('deathunit' + side);
  var chaosunitx = document.getElementById('chaosunit' + side);
  var natureunitx = document.getElementById('natureunit' + side);
  var sorcunitx = document.getElementById('sorcunit' + side);
  var imgxstr = '';
  base_rangedx.value = '0';
  rangedtypex.value = '0';
  base_tohitx.value = '0';
  base_breathx.value = '0';
  breathtypex.value = '0';
  base_hpx.value = '1';
  flyingx.value = '0';
  noncorpx.value = '0';
  lshieldx.value = '0';
  luckyx.value = '0';
  lrangex.value = '0';
  apx.value = '0';
  fsx.value = '0';
  negatefsx.value = '0';
  missimmx.value = '0';
  magimmx.value = '0';
  illimmx.value = '0';
  weapimmx.value = '0';
  deathimmx.value = '0';
  fireimmx.value = '0';
  coldimmx.value = '0';
  stonimmx.value = '0';
  poisimmx.value = '0';
  poisonx.value = '0';
  illusionx.value = '0';
  gazerangedx.value = '0';
  dgazex.value = '0';
  sgazex.value = '0';
  doomgazex.value = '0';
  immox.value = '0';
  dispelevilx.value = '0';
  stouchx.value = '0';
  invisx.value = '0';
  resistallx.value = '0';
  holybonusx.value = '0';
  lifestealx.value = '0';
  regenx.value = '0';
  fearx.value = '0';
  lifeunitx.value = '0';
  deathunitx.value = '0';
  chaosunitx.value = '0';
  natureunitx.value = '0';
  sorcunitx.value = '0';
  if (unitidx == 0) {
    unitimgx.innerHTML = '';
    dtx.style.display = 'none';
    levelx.style.display = 'none';
    if (raceidx == 1) {
      picks_and_artifacts_clear(side);
    }
    hide_normalench(side);
    cleardamage();
  } else {
    if (unitidx < 36) {
      levelx.style.display = 'inline';
      var guaranteed_mightx = document.getElementById('guaranteed_might' + side);
      var cur_mightx = document.getElementById('cur_might' + side);
      var guaranteed_arcanex = document.getElementById('guaranteed_arcane' + side);
      var cur_arcanex = document.getElementById('cur_arcane' + side);
      var guaranteed_bladex = document.getElementById('guaranteed_blade' + side);
      var cur_bladex = document.getElementById('cur_blade' + side);
      var guaranteed_leadx = document.getElementById('guaranteed_lead' + side);
      var cur_leadx = document.getElementById('cur_lead' + side);
      var guaranteed_agilex = document.getElementById('guaranteed_agile' + side);
      var cur_agilex = document.getElementById('cur_agile' + side);
      var guaranteed_constx = document.getElementById('guaranteed_const' + side);
      var cur_constx = document.getElementById('cur_const' + side);
      var guaranteed_prayerx = document.getElementById('guaranteed_prayer' + side);
      var cur_prayerx = document.getElementById('cur_prayer' + side);
      var guaranteed_charmx = document.getElementById('guaranteed_charm' + side);
      var cur_charmx = document.getElementById('cur_charm' + side);
      var guaranteed_casterx = document.getElementById('guaranteed_caster' + side);
      var cur_casterx = document.getElementById('cur_caster' + side);
      var guaranteed_armsx = document.getElementById('guaranteed_arms' + side);
      var guaranteed_legenx = document.getElementById('guaranteed_legen' + side);
      var guaranteed_noblex = document.getElementById('guaranteed_noble' + side);
      var guaranteed_sagex = document.getElementById('guaranteed_sage' + side);
      var pickctx = document.getElementById('pickct' + side);
      var picktypex = document.getElementById('picktype' + side);
      var hequipprofx = document.getElementById('hequipprof' + side);
      guaranteed_mightx.value = '0';
      guaranteed_arcanex.value = '0';
      guaranteed_bladex.value = '0';
      guaranteed_leadx.value = '0';
      guaranteed_agilex.value = '0';
      guaranteed_constx.value = '0';
      guaranteed_prayerx.value = '0';
      guaranteed_charmx.value = '0';
      guaranteed_casterx.value = '0';
      guaranteed_armsx.value = '0';
      guaranteed_legenx.value = '0';
      guaranteed_noblex.value = '0';
      guaranteed_sagex.value = '0';
      base_defensex.value = '5';
      base_resistx.value = '5';
      pickctx.value = '0';
      picktypex.value = '1';
      hequipprofx.value = '0';
      switch (unitidx) {
      case 1:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210304/masterofmagic/images/4/4c/Hero_Aureus.png';
        base_meleex.value = '5';
        base_rangedx.value = '5';
        rangedtypex.value = '1';
        base_defensex.value = '6';
        base_hpx.value = '5';
        guaranteed_casterx.value = '1';
        pickctx.value = '2';
        picktypex.value = '0';
        break;
      case 2:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210309/masterofmagic/images/thumb/9/9f/Hero_Bahgtru.png/60px-Hero_Bahgtru.png';
        base_meleex.value = '5';
        base_defensex.value = '4';
        base_breathx.value = '2';
        breathtypex.value = '1';
        base_hpx.value = '7';
        pickctx.value = '1';
        break;
      case 3:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210319/masterofmagic/images/thumb/4/48/Hero_Brax.png/60px-Hero_Brax.png';
        base_meleex.value = '4';
        base_defensex.value = '4';
        base_resistx.value = '9';
        base_hpx.value = '9';
        guaranteed_constx.value = '1';
        break;
      case 4:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210322/masterofmagic/images/thumb/9/92/Hero_BShan.png/60px-Hero_BShan.png';
        base_meleex.value = '3';
        base_rangedx.value = '3';
        rangedtypex.value = '4';
        base_defensex.value = '4';
        base_hpx.value = '5';
        hequipprofx.value = '1';
        break;
      case 5:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210328/masterofmagic/images/thumb/6/62/Hero_Fang.png/60px-Hero_Fang.png';
        base_meleex.value = '6';
        base_breathx.value = '4';
        breathtypex.value = '2';
        base_hpx.value = '7';
        flyingx.value = '1';
        guaranteed_mightx.value = '1';
        pickctx.value = '2';
        break;
      case 6:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210335/masterofmagic/images/thumb/a/a6/Hero_Greyfairer.png/60px-Hero_Greyfairer.png';
        base_meleex.value = '0';
        base_rangedx.value = '7';
        rangedtypex.value = '2';
        base_hpx.value = '4';
        guaranteed_casterx.value = '1';
        hequipprofx.value = '3';
        break;
      case 7:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210338/masterofmagic/images/thumb/d/d7/Hero_Gunthar.png/60px-Hero_Gunthar.png';
        base_meleex.value = '4';
        base_breathx.value = '2';
        breathtypex.value = '1';
        base_defensex.value = '3';
        base_hpx.value = '8';
        guaranteed_mightx.value = '1';
        break;
      case 8:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210343/masterofmagic/images/thumb/a/a0/Hero_Jaer.png/60px-Hero_Jaer.png';
        base_meleex.value = '0';
        base_rangedx.value = '5';
        rangedtypex.value = '2';
        base_hpx.value = '4';
        guaranteed_casterx.value = '1';
        missimmx.value = '1';
        pickctx.value = '1';
        picktypex.value = '2';
        hequipprofx.value = '3';
        break;
      case 9:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210349/masterofmagic/images/thumb/a/ad/Hero_Malleus.png/60px-Hero_Malleus.png';
        base_meleex.value = '0';
        base_rangedx.value = '7';
        rangedtypex.value = '1';
        base_resistx.value = '9';
        base_hpx.value = '4';
        guaranteed_arcanex.value = '1';
        guaranteed_casterx.value = '1';
        missimmx.value = '1';
        pickctx.value = '1';
        picktypex.value = '2';
        hequipprofx.value = '3';
        break;
      case 10:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210355/masterofmagic/images/thumb/e/e9/Hero_Marcus.png/60px-Hero_Marcus.png';
        base_meleex.value = '5';
        base_rangedx.value = '4';
        rangedtypex.value = '4';
        base_hpx.value = '7';
        guaranteed_mightx.value = '1';
        guaranteed_casterx.value = '1';
        hequipprofx.value = '1';
        break;
      case 11:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210537/masterofmagic/images/thumb/1/1a/Hero_Morgana.png/60px-Hero_Morgana.png';
        base_meleex.value = '0';
        base_rangedx.value = '7';
        rangedtypex.value = '1';
        base_resistx.value = '5';
        base_hpx.value = '4';
        guaranteed_charmx.value = '1';
        guaranteed_casterx.value = '1';
        missimmx.value = '1';
        pickctx.value = '2';
        picktypex.value = '2';
        hequipprofx.value = '3';
        break;
      case 12:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210542/masterofmagic/images/thumb/7/73/Hero_Rakir.png/60px-Hero_Rakir.png';
        base_meleex.value = '4';
        base_defensex.value = '4';
        base_hpx.value = '6';
        guaranteed_casterx.value = '1';
        break;
      case 13:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210548/masterofmagic/images/thumb/8/87/Hero_Reywind.png/60px-Hero_Reywind.png';
        base_meleex.value = '3';
        base_rangedx.value = '3';
        rangedtypex.value = '1';
        base_defensex.value = '4';
        base_hpx.value = '6';
        guaranteed_casterx.value = '1';
        pickctx.value = '1';
        picktypex.value = '0';
        hequipprofx.value = '2';
        break;
      case 14:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210555/masterofmagic/images/thumb/7/77/Hero_Serena.png/60px-Hero_Serena.png';
        base_meleex.value = '2';
        base_rangedx.value = '5';
        rangedtypex.value = '2';
        base_resistx.value = '6';
        base_hpx.value = '4';
        guaranteed_casterx.value = '1';
        pickctx.value = '1';
        picktypex.value = '2';
        break;
      case 15:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210559/masterofmagic/images/thumb/6/6a/Hero_Shalla.png/60px-Hero_Shalla.png';
        base_meleex.value = '6';
        base_breathx.value = '3';
        breathtypex.value = '1';
        base_defensex.value = '4';
        base_resistx.value = '5';
        base_hpx.value = '7';
        guaranteed_mightx.value = '1';
        guaranteed_bladex.value = '1';
        guaranteed_charmx.value = '1';
        pickctx.value = '1';
        break;
      case 16:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210604/masterofmagic/images/thumb/8/87/Hero_ShinBo.png/60px-Hero_ShinBo.png';
        base_meleex.value = '5';
        base_hpx.value = '6';
        guaranteed_bladex.value = '1';
        invisx.value = '1';
        pickctx.value = '2';
        break;
      case 17:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210610/masterofmagic/images/thumb/e/ee/Hero_Shuri.png/60px-Hero_Shuri.png';
        base_meleex.value = '4';
        base_rangedx.value = '3';
        rangedtypex.value = '4';
        base_defensex.value = '3';
        base_hpx.value = '6';
        guaranteed_bladex.value = '1';
        pickctx.value = '1';
        hequipprofx.value = '1';
        break;
      case 18:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210618/masterofmagic/images/thumb/e/ef/Hero_Spyder.png/60px-Hero_Spyder.png';
        base_meleex.value = '6';
        base_hpx.value = '7';
        guaranteed_leadx.value = '1';
        guaranteed_legenx.value = '2';
        pickctx.value = '1';
        break;
      case 19:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210643/masterofmagic/images/thumb/c/c3/Hero_Taki.png/60px-Hero_Taki.png';
        base_meleex.value = '5';
        base_hpx.value = '5';
        guaranteed_agilex.value = '2';
        pickctx = '1';
        break;
      case 20:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210649/masterofmagic/images/thumb/e/ec/Hero_Theria.png/60px-Hero_Theria.png';
        base_meleex.value = '4';
        base_resistx.value = '5';
        base_hpx.value = '6';
        guaranteed_agilex.value = '1';
        guaranteed_charmx.value = '1';
        break;
      case 21:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210654/masterofmagic/images/thumb/a/a8/Hero_Tumu.png/60px-Hero_Tumu.png';
        base_meleex.value = '2';
        base_hpx.value = '5';
        guaranteed_bladex.value = '1';
        poisonx.value = '5';
        pickctx.value = '1';
        break;
      case 22:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210661/masterofmagic/images/thumb/e/eb/Hero_Valana.png/60px-Hero_Valana.png';
        base_meleex.value = '3';
        base_hpx.value = '5';
        guaranteed_leadx.value = '1';
        guaranteed_casterx.value = '1';
        break;
      case 23:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210707/masterofmagic/images/thumb/4/43/Hero_Yramrag.png/60px-Hero_Yramrag.png';
        base_meleex.value = '0';
        base_rangedx.value = '7';
        rangedtypex.value = '1';
        base_resistx.value = '9';
        base_hpx.value = '4';
        guaranteed_casterx.value = '1';
        missimmx.value = '1';
        pickctx.value = '1';
        picktypex.value = '2';
        hequipprofx.value = '3';
        break;
      case 24:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120210713/masterofmagic/images/thumb/5/5f/Hero_Zaldron.png/60px-Hero_Zaldron.png';
        base_meleex.value = '0';
        base_rangedx.value = '5';
        rangedtypex.value = '3';
        base_defensex.value = '4';
        base_hpx.value = '4';
        guaranteed_casterx.value = '1';
        hequipprofx.value = '3';
        break;
      case 25:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120211129/masterofmagic/images/thumb/1/14/Hero_Aerie.png/60px-Hero_Aerie.png';
        base_meleex.value = '0';
        base_rangedx.value = '4';
        rangedtypex.value = '3';
        base_defensex.value = '4';
        base_hpx.value = '4';
        guaranteed_casterx.value = '1';
        missimmx.value = '1';
        illusionx.value = '1';
        pickctx.value = '2';
        picktypex.value = '2';
        hequipprofx.value = '3';
        break;
      case 26:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120211134/masterofmagic/images/thumb/8/85/Hero_Alorra.png/60px-Hero_Alorra.png';
        base_meleex.value = '4';
        base_rangedx.value = '7';
        rangedtypex.value = '4';
        base_defensex.value = '6';
        base_hpx.value = '5';
        guaranteed_bladex.value = '1';
        guaranteed_casterx.value = '1';
        guaranteed_arcanex.value = '2';
        pickctx.value = '3';
        picktypex.value = '0';
        hequipprofx.value = '1';
        break;
      case 27:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120211142/masterofmagic/images/thumb/a/a2/Hero_DethStryke.png/60px-Hero_DethStryke.png';
        base_meleex.value = '5';
        base_hpx.value = '9';
        guaranteed_mightx.value = '1';
        guaranteed_leadx.value = '1';
        guaranteed_constx.value = '1';
        guaranteed_armsx.value = '1';
        guaranteed_legenx.value = '1';
        pickctx.value = '1';
        break;
      case 28:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120211147/masterofmagic/images/thumb/d/df/Hero_Elana.png/60px-Hero_Elana.png';
        base_meleex.value = '1';
        base_rangedx.value = '7';
        rangedtypex.value = '2';
        base_resistx.value = '5';
        base_hpx.value = '4';
        guaranteed_arcanex.value = '1';
        guaranteed_prayerx.value = '2';
        guaranteed_charmx.value = '1';
        guaranteed_casterx.value = '1';
        missimmx.value = '1';
        hequipprofx.value = '3';
        break;
      case 29:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120211153/masterofmagic/images/thumb/6/6e/Hero_Mortu.png/60px-Hero_Mortu.png';
        base_meleex.value = '8';
        base_hpx.value = '9';
        guaranteed_mightx.value = '1';
        guaranteed_bladex.value = '1';
        guaranteed_constx.value = '1';
        guaranteed_legenx.value = '1';
        apx.value = '1';
        fsx.value = '1';
        magimmx.value = '1';
        pickctx.value = '1';
        break;
      case 30:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120211159/masterofmagic/images/thumb/c/c9/Hero_MysticX.png/60px-Hero_MysticX.png';
        base_meleex.value = '4';
        base_rangedx.value = '4';
        rangedtypex.value = '1';
        base_defensex.value = '4';
        base_resistx.value = '9';
        base_hpx.value = '7';
        guaranteed_casterx.value = '1';
        pickctx.value = '5';
        picktypex.value = '0';
        hequipprofx.value = '2';
        break;
      case 31:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120211206/masterofmagic/images/thumb/6/6a/Hero_Ravashack.png/60px-Hero_Ravashack.png';
        base_meleex.value = '0';
        base_rangedx.value = '6';
        rangedtypex.value = '1';
        base_hpx.value = '4';
        guaranteed_arcanex.value = '1';
        guaranteed_casterx.value = '1';
        missimmx.value = '1';
        lifestealx.value = '10';
        pickctx.value = '2';
        picktypex.value = '2';
        hequipprofx.value = '3';
        break;
      case 32:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120211221/masterofmagic/images/thumb/7/7f/Hero_Roland.png/60px-Hero_Roland.png';
        base_meleex.value = '8';
        base_hpx.value = '7';
        guaranteed_mightx.value = '2';
        guaranteed_prayerx.value = '1';
        guaranteed_legenx.value = '1';
        apx.value = '1';
        fsx.value = '1';
        magimmx.value = '1';
        pickctx.value = '1';
        break;
      case 33:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120211227/masterofmagic/images/thumb/d/db/Hero_SirHarold.png/60px-Hero_SirHarold.png';
        base_meleex.value = '7';
        base_hpx.value = '8';
        guaranteed_leadx.value = '2';
        guaranteed_constx.value = '1';
        guaranteed_legenx.value = '2';
        guaranteed_noblex.value = '1';
        pickctx.value = '1';
        break;
      case 34:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120211233/masterofmagic/images/thumb/7/74/Hero_Torin.png/60px-Hero_Torin.png';
        base_meleex.value = '11';
        base_defensex.value = '8';
        base_resistx.value = '11';
        base_hpx.value = '11';
        guaranteed_mightx.value = '2';
        guaranteed_constx.value = '1';
        guaranteed_arcanex.value = '2';
        guaranteed_prayerx.value = '1';
        guaranteed_casterx.value = '1';
        missimmx.value = '1';
        magimmx.value = '1';
        lifeunitx.value = '1';
        pickctx.value = '2';
        picktypex.value = '0';
        break;
      case 35:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120120211241/masterofmagic/images/thumb/9/99/Hero_Warrax.png/60px-Hero_Warrax.png';
        base_meleex.value = '7';
        base_rangedx.value = '7';
        rangedtypex.value = '1';
        base_resistx.value = '8';
        base_hpx.value = '7';
        guaranteed_arcanex.value = '1';
        guaranteed_constx.value = '1';
        guaranteed_casterx.value = '1';
        apx.value = '1';
        pickctx.value = '3';
        picktypex.value = '0';
        hequipprofx.value = '2';
        break;
      }
      cur_mightx.value = guaranteed_mightx.value;
      cur_arcanex.value = guaranteed_arcanex.value;
      cur_bladex.value = guaranteed_bladex.value;
      cur_leadx.value = guaranteed_leadx.value;
      cur_agilex.value = guaranteed_agilex.value;
      cur_constx.value = guaranteed_constx.value;
      cur_prayerx.value = guaranteed_prayerx.value;
      cur_charmx.value = guaranteed_charmx.value;
      cur_casterx.value = guaranteed_casterx.value;
      pick_and_artifact_init(side);
    } else if (unitidx > 1000) {
      var fixed_meleex = document.getElementById('fixed_melee' + side);
      var fixed_defensex = document.getElementById('fixed_defense' + side);
      var fixed_resistx = document.getElementById('fixed_resist' + side);
      var breathx = document.getElementById('breath' + side);
      var fixed_breathx = document.getElementById('fixed_breath' + side);
      var fixed_hpx = document.getElementById('fixed_hp' + side);
      var true_ranged = 0;
      var true_breath = 0;
      var true_tohit = 0;
      var true_melee;
      var true_defense;
      var true_resist;
      var true_hp;
      switch (unitidx) {
      case 1001:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120213191056/masterofmagic/images/f/f2/Tactical_GuardianSpirit.png';
        figuresx.value = '1';
        true_melee = 10;
        true_defense = 4;
        true_resist = 10;
        true_hp = 10;
        noncorpx.value = '1';
        resistallx.value = '1';
        lifeunitx.value = '1';
        break;
      case 1002:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120216232029/masterofmagic/images/0/06/Tactical_Unicorns.png';
        figuresx.value = '4';
        true_melee = 5;
        true_defense = 3;
        true_resist = 7;
        true_tohit = 20;
        true_hp = 6;
        poisimmx.value = '1';
        resistallx.value = '2';
        lifeunitx.value = '1';
        break;
      case 1003:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120225195352/masterofmagic/images/b/b6/Tactical_Angel.png';
        figuresx.value = '1';
        true_melee = 13;
        true_defense = 7;
        true_resist = 8;
        true_tohit = 20;
        true_hp = 15;
        flyingx.value = '1';
        illimmx.value = '1';
        holybonusx.value = '1';
        dispelevilx.value = '1';
        lifeunitx.value = '1';
        break;
      case 1004:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120229230555/masterofmagic/images/5/5e/Tactical_ArchAngel.png';
        figuresx.value = '1';
        true_melee = 15;
        true_defense = 10;
        true_resist = 12;
        true_tohit = 30;
        true_hp = 18;
        flyingx.value = '1';
        illimmx.value = '1';
        holybonusx.value = '2';
        lifeunitx.value = '1';
        break;
      case 1005:
      case 1044:
      case 1045:
      case 1046:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120314173903/masterofmagic/images/9/94/Tactical_Zombies.png';
        figuresx.value = '6';
        if (unitidx == 1005) {
          true_melee = 4;
          true_defense = 3;
          true_tohit = 10;
        } else {
          true_melee = unitidx - 1040;
          true_defense = unitidx - 1041;
          true_tohit = 20;
        }
        true_resist = 3;
        true_hp = 3;
        illimmx.value = '1';
        deathimmx.value = '1';
        coldimmx.value = '1';
        poisimmx.value = '1';
        deathunitx.value = '1';
        break;
      case 1006:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120301063325/masterofmagic/images/a/ac/Tactical_Skeletons.png';
        figuresx.value = '6';
        true_melee = 3;
        true_defense = 4;
        true_resist = 4;
        true_tohit = 10;
        true_hp = 1;
        missimmx.value = '1';
        illimmx.value = '1';
        deathimmx.value = '1';
        coldimmx.value = '1';
        poisimmx.value = '1';
        deathunitx.value = '1';
        break;
      case 1007:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120302190924/masterofmagic/images/f/f0/Tactical_Ghouls.png';
        figuresx.value = '4';
        true_melee = 4;
        true_defense = 3;
        true_resist = 6;
        true_tohit = 10;
        true_hp = 3;
        illimmx.value = '1';
        deathimmx.value = '1';
        coldimmx.value = '1';
        poisimmx.value = '1';
        poisonx.value = '1';
        deathunitx.value = '1';
        break;
      case 1008:
      case 1047:
      case 1048:
      case 1049:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120307185046/masterofmagic/images/f/fa/Tactical_Werewolves.png';
        figuresx.value = '6';
        if (unitidx == 1008) {
          true_melee = 5;
          true_defense = 1;
          true_tohit = 10;
        } else {
          true_melee = unitidx - 1042;
          true_defense = unitidx - 1046;
          true_tohit = 20;
        }
        true_resist = 6;
        true_hp = 5;
        illimmx.value = '1';
        weapimmx.value = '1';
        deathimmx.value = '1';
        coldimmx.value = '1';
        poisimmx.value = '1';
        regenx.value = '1';
        deathunitx.value = '1';
        break;
      case 1009:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120310031541/masterofmagic/images/4/42/Tactical_NightStalker.png';
        figuresx.value = '1';
        true_melee = 7;
        true_defense = 3;
        true_resist = 8;
        true_tohit = 10;
        true_hp = 10;
        illimmx.value = '1';
        deathimmx.value = '1';
        coldimmx.value = '1';
        poisimmx.value = '1';
        gazerangedx.value = '1';
        dgazex.value = '12';
        invisx.value = '1';
        deathunitx.value = '1';
        break;
      case 1010:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120312073544/masterofmagic/images/f/f0/Tactical_ShadowDemons.png';
        figuresx.value = '4';
        true_melee = 5;
        true_ranged = 4;
        rangedtypex.value = '1';
        true_defense = 4;
        true_resist = 8;
        true_tohit = 20;
        true_hp = 5;
        flyingx.value = '1';
        noncorpx.value = '1';
        illimmx.value = '1';
        weapimmx.value = '1';
        deathimmx.value = '1';
        coldimmx.value = '1';
        poisimmx.value = '1';
        regenx.value = '1';
        deathunitx.value = '1';
        break;
      case 1011:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120314102347/masterofmagic/images/4/45/Tactical_Wraiths.png';
        figuresx.value = '4';
        true_melee = 7;
        true_defense = 6;
        true_resist = 8;
        true_tohit = 20;
        true_hp = 8;
        flyingx.value = '1';
        noncorpx.value = '1';
        illimmx.value = '1';
        weapimmx.value = '1';
        deathimmx.value = '1';
        coldimmx.value = '1';
        poisimmx.value = '1';
        lifestealx.value = '13';
        deathunitx.value = '1';
        break;
      case 1012:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120315214551/masterofmagic/images/e/ed/Tactical_DeathKnights.png';
        figuresx.value = '4';
        true_melee = 9;
        true_defense = 8;
        true_resist = 10;
        true_tohit = 30;
        true_hp = 8;
        flyingx.value = '1';
        apx.value = '1';
        fsx.value = '1';
        illimmx.value = '1';
        weapimmx.value = '1';
        deathimmx.value = '1';
        coldimmx.value = '1';
        poisimmx.value = '1';
        lifestealx.value = '14';
        deathunitx.value = '1';
        break;
      case 1013:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120317153953/masterofmagic/images/2/2c/Tactical_Demon.png';
        figuresx.value = '1';
        true_melee = 14;
        true_defense = 5;
        true_resist = 7;
        true_tohit = 10;
        true_hp = 12;
        flyingx.value = '1';
        missimmx.value = '1';
        illimmx.value = '1';
        weapimmx.value = '1';
        deathimmx.value = '1';
        coldimmx.value = '1';
        poisimmx.value = '1';
        deathunitx.value = '1';
        break;
      case 1014:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120317135704/masterofmagic/images/4/48/Tactical_DemonLord.png';
        figuresx.value = '1';
        true_melee = 20;
        true_ranged = 10;
        rangedtypex.value = '1';
        true_defense = 10;
        true_resist = 12;
        true_tohit = 30;
        true_hp = 20;
        flyingx.value = '1';
        illimmx.value = '1';
        weapimmx.value = '1';
        deathimmx.value = '1';
        coldimmx.value = '1';
        poisimmx.value = '1';
        fearx.value = '1';
        lifestealx.value = '15';
        deathunitx.value = '1';
        break;
      case 1015:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120128201652/masterofmagic/images/5/55/Tactical_HellHounds.png';
        figuresx.value = '4';
        true_melee = 3;
        true_defense = 2;
        true_resist = 6;
        true_tohit = 10;
        true_breath = 3;
        breathtypex.value = '2';
        true_hp = 4;
        chaosunitx.value = '1';
        break;
      case 1016:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120131212726/masterofmagic/images/c/cd/Tactical_FireElemental.png';
        figuresx.value = '1';
        true_melee = 12;
        true_defense = 4;
        true_resist = 6;
        true_hp = 10;
        fireimmx.value = '1';
        stonimmx.value = '1';
        poisimmx.value = '1';
        chaosunitx.value = '1';
        break;
      case 1017:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120201000542/masterofmagic/images/2/20/Tactical_FireGiant.png';
        figuresx.value = '1';
        true_melee = 10;
        true_ranged = 10;
        rangedtypex.value = '5';
        true_defense = 5;
        true_resist = 7;
        true_tohit = 10;
        true_hp = 15;
        fireimmx.value = '1';
        chaosunitx.value = '1';
        break;
      case 1018:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120203045954/masterofmagic/images/d/d0/Tactical_Gargoyles.png';
        figuresx.value = '4';
        true_melee = 4;
        true_defense = 8;
        true_resist = 7;
        true_tohit = 10;
        true_hp = 4;
        flyingx.value = '1';
        stonimmx.value = '1';
        poisimmx.value = '1';
        chaosunitx.value = '1';
        break;
      case 1019:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120203181748/masterofmagic/images/a/aa/Tactical_DoomBat.png';
        figuresx.value = '1';
        true_melee = 10;
        true_defense = 5;
        true_resist = 9;
        true_tohit = 10;
        true_hp = 20;
        flyingx.value = '1';
        immox.value = '4';
        chaosunitx.value = '1';
        break;
      case 1020:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120204204743/masterofmagic/images/d/d0/Tactical_Chimeras.png';
        figuresx.value = '4';
        true_melee = 7;
        true_defense = 5;
        true_resist = 8;
        true_tohit = 10;
        true_breath = 4;
        breathtypex.value = '2';
        true_hp = 8;
        flyingx.value = '1';
        chaosunitx.value = '1';
        break;
      case 1021:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120205050546/masterofmagic/images/9/94/Tactical_ChaosSpawn.png';
        figuresx.value = '1';
        true_melee = 1;
        true_defense = 6;
        true_resist = 10;
        true_hp = 15;
        flyingx.value = '1';
        poisonx.value = '4';
        gazerangedx.value = '4';
        dgazex.value = '14';
        sgazex.value = '14';
        doomgazex.value = '4';
        fearx.value = '1';
        chaosunitx.value = '1';
        break;
      case 1022:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120205150948/masterofmagic/images/8/8f/Tactical_Efreet.png';
        figuresx.value = '1';
        true_melee = 9;
        true_ranged = 9;
        rangedtypex.value = '1';
        true_defense = 7;
        true_resist = 10;
        true_tohit = 20;
        true_hp = 12;
        flyingx.value = '1';
        fireimmx.value = '1';
        chaosunitx.value = '1';
        break;
      case 1023:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120206204708/masterofmagic/images/6/67/Tactical_Hydra.png';
        figuresx.value = '9';
        true_melee = 6; 
        true_defense = 4;
        true_resist = 11;
        true_tohit = 10;
        true_breath = 5;
        breathtypex.value = '2';
        true_hp = 10;
        regenx.value = '1';
        chaosunitx.value = '1';
        break;
      case 1024:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120209042057/masterofmagic/images/9/92/Tactical_GreatDrake.png';
        figuresx.value = '1';
        true_melee = 30;
        true_defense = 10;
        true_resist = 12;
        true_tohit = 30;
        true_breath = 30;
        breathtypex.value = '2';
        true_hp = 30;
        flyingx.value = '1';
        chaosunitx.value = '1';
        break;
      case 1025:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120103044527/masterofmagic/images/4/46/Tactical_WarBears.png';
        figuresx.value = '2';
        true_melee = 7;
        true_defense = 3;
        true_resist = 6;
        true_hp = 8;
        natureunitx.value = '1';
        break;
      case 1026:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120103210915/masterofmagic/images/2/20/Tactical_Sprites.png';
        figuresx.value = '4';
        true_melee = 2;
        true_ranged = 3;
        rangedtypex.value = '2';
        true_defense = 2;
        true_resist = 8;
        true_tohit = 10;
        true_hp = 1;
        flyingx.value = '1';
        natureunitx.value = '1';
        break;
      case 1027:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120104022007/masterofmagic/images/c/ca/Tactical_GiantSpiders.png';
        figuresx.value = '2';
        true_melee = 4;
        true_defense = 3;
        true_resist = 7;
        true_tohit = 10;
        true_hp = 10;
        poisonx.value = '4';
        natureunitx.value = '1';
        break;
      case 1028:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120104145348/masterofmagic/images/4/4e/Tactical_Cockatrices.png';
        figuresx.value = '4';
        true_melee = 4;
        true_defense = 3;
        true_resist = 7;
        true_tohit = 10;
        true_hp = 3;
        flyingx.value = '1';
        stouchx.value = '13';
        natureunitx.value = '1';
        break;
      case 1029:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120103221425/masterofmagic/images/7/76/Tactical_Basilisk.png';
        figuresx.value = '1';
        true_melee = 15;
        true_defense = 4;
        true_resist = 7;
        true_tohit = 10;
        true_hp = 30;
        gazerangedx.value = '1';
        sgazex.value = '11';
        natureunitx.value = '1';
        break;
      case 1030:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120104210409/masterofmagic/images/1/18/Tactical_StoneGiant.png';
        figuresx.value = '1';
        true_melee = 15;
        true_ranged = 15;
        rangedtypex.value = '5';
        true_defense = 8;
        true_resist = 9;
        true_tohit = 20;
        true_hp = 20;
        poisimmx.value = '1';
        stonimmx.value = '1';
        natureunitx.value = '1';
        break;
      case 1031:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120104231642/masterofmagic/images/a/ac/Tactical_Gorgons.png';
        figuresx.value = '4';
        true_melee = 8;
        true_defense = 7;
        true_resist = 9;
        true_tohit = 20;
        true_hp = 9;
        flyingx.value = '1';
        gazerangedx.value = '1';
        sgazex.value = '12';
        natureunitx.value = '1';
        break;
      case 1032:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120105140107/masterofmagic/images/e/ee/Tactical_EarthElemental.png';
        figuresx.value = '1';
        true_melee = 25;
        true_defense = 4;
        true_resist = 8;
        true_tohit = 10;
        true_hp = 30;
        poisimmx.value = '1';
        stonimmx.value = '1';
        natureunitx.value = '1';
        break;
      case 1033:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120104002332/masterofmagic/images/1/1a/Tactical_Behemoth.png';
        figuresx.value = '1';
        true_melee = 25;
        true_defense = 9;
        true_resist = 10;
        true_tohit = 20;
        true_hp = 45;
        natureunitx.value = '1';
        break;
      case 1034:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120105004051/masterofmagic/images/4/4e/Tactical_Colossus.png';
        figuresx.value = '1';
        true_melee = 20;
        true_ranged = 20;
        rangedtypex.value = '5';
        true_defense = 10;
        true_resist = 15;
        true_tohit = 30;
        true_hp = 30;
        fsx.value = '1';
        poisimmx.value = '1';
        stonimmx.value = '1';
        natureunitx.value = '1';
        break;
      case 1035:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120105010254/masterofmagic/images/a/a7/Tactical_GreatWyrm.png';
        figuresx.value = '1';
        true_melee = 25;
        true_defense = 12;
        true_resist = 12;
        true_tohit = 30;
        true_hp = 45;
        poisonx.value = '15';
        natureunitx.value = '1';
        break;
      case 1036:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120114063009/masterofmagic/images/3/39/Tactical_PhantomWarriors.png';
        figuresx.value = '6';
        true_melee = 3;
        true_defense = 0;
        true_resist = 6;
        true_hp = 1;
        noncorpx.value = '1';
        poisimmx.value = '1';
        stonimmx.value = '1';
        deathimmx.value = '1';
        illusionx.value = '1';
        sorcunitx.value = '1';
        break;
      case 1037:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120114213316/masterofmagic/images/d/d5/Tactical_Nagas.png';
        figuresx.value = '2';
        true_melee = 4;
        true_defense = 3;
        true_resist = 7;
        true_tohit = 10;
        true_hp = 6;
        fsx.value = '1';
        poisonx.value = '4';
        sorcunitx.value = '1';
        break;
      case 1038:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120116104905/masterofmagic/images/2/23/Tactical_PhantomBeast.png';
        figuresx.value = '1';
        true_melee = 18;
        true_defense = 0;
        true_resist = 8;
        true_tohit = 10;
        true_hp = 20;
        noncorpx.value = '1';
        poisimmx.value = '1';
        stonimmx.value = '1';
        deathimmx.value = '1';
        illusionx.value = '1';
        sorcunitx.value = '1';
        break;
      case 1039:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120121160349/masterofmagic/images/d/de/Tactical_StormGiant.png';
        figuresx.value = '1';
        true_melee = 12;
        true_ranged = 10;
        rangedtypex.value = '1';
        true_defense = 7;
        true_resist = 9;
        true_tohit = 20;
        true_hp = 20;
        apx.value = '1';
        sorcunitx.value = '1';
        break;
      case 1040:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120121180136/masterofmagic/images/a/af/Tactical_AirElemental.png';
        figuresx.value = '1';
        true_melee = 15;
        true_defense = 8;
        true_resist = 9;
        true_tohit = 10;
        true_hp = 10;
        flyingx.value = '1';
        weapimmx.value = '1';
        poisimmx.value = '1';
        stonimmx.value = '1';
        invisx.value = '1';
        sorcunitx.value = '1';
        break;
      case 1041:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120123155013/masterofmagic/images/d/da/Tactical_Djinn.png';
        figuresx.value = '1';
        true_melee = 15;
        true_ranged = 8;
        rangedtypex.value = '2';
        true_defense = 8;
        true_resist = 10;
        true_tohit = 30;
        true_hp = 20;
        flyingx.value = '1';
        sorcunitx.value = '1';
        break;
      case 1042:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120125011513/masterofmagic/images/a/a6/Tactical_SkyDrake.png';
        figuresx.value = '1';
        true_melee = 20;
        true_defense = 10;
        true_resist = 14;
        true_tohit = 30;
        true_breath = 20;
        breathtypex.value = '3';
        true_hp = 25;
        flyingx.value = '1';
        magimmx.value = '1';
        illimmx.value = '1';
        sorcunitx.value = '1';
        break;
      case 1043:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120317161125/masterofmagic/images/4/46/Tactical_MagicSpirit.png';
        figuresx.value = '1';
        true_melee = 5;
        true_defense = 4;
        true_resist = 8;
        true_hp = 10;
        noncorpx.value = '1';
        break;
      }
      fixed_meleex.innerHTML = '' + true_melee;
      document.getElementById('melee' + side).selectedIndex = true_melee;
      if (true_ranged > 0) {
        document.getElementById('fixed_ranged' + side).innerHTML = '' + true_ranged;
      } else {
        document.getElementById('fixed_ranged' + side).innerHTML = '';
      }
      if (true_breath > 0) {
        document.getElementById('fixed_breath' + side).innerHTML = '' + true_breath;
      } else {
        document.getElementById('fixed_breath' + side).innerHTML = '';
      }
      rangedx.selectedIndex = true_ranged;
      breathx.selectedIndex = true_breath;
      fixed_defensex.innerHTML = '' + true_defense;
      document.getElementById('defense' + side).selectedIndex = true_defense;
      fixed_resistx.innerHTML = '' + true_resist;
      document.getElementById('resist' + side).selectedIndex = true_resist;
      fixed_hpx.innerHTML = '' + true_hp;
      fixed_figuresx.innerHTML = '' + figuresx.value;
      change_fig_nc(side, true_hp);
      write_tohit(true_tohit, side);
    } else {
      levelx.style.display = 'inline';
      base_defensex.value = '2';
      base_resistx.value = '4';
      switch (unitidx) {
      case 37:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120319194020/masterofmagic/images/f/f4/Tactical_BarbarianSpearmen.png';
        figuresx.value = '8';
        base_meleex.value = '1';
        base_resistx.value = '5';
        base_breathx.value = '1';
        breathtypex.value = '1';
        break;
      case 38:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120319223015/masterofmagic/images/5/5a/Tactical_BarbarianSwordsmen.png';
        figuresx.value = '6';
        base_meleex.value = '3';
        base_resistx.value = '5';
        base_breathx.value = '1';
        breathtypex.value = '1';
        lshieldx.value = '1';
        break;
      case 39:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120320005347/masterofmagic/images/f/f8/Tactical_BarbarianBowmen.png';
        figuresx.value = '6';
        base_meleex.value = '1';
        base_rangedx.value = '1';
        rangedtypex.value = '4';
        base_defensex.value = '1';
        base_resistx.value = '5';
        break;
      case 40:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120323223106/masterofmagic/images/9/97/Tactical_BarbarianShamans.png';
        figuresx.value = '4';
        base_meleex.value = '2';
        base_rangedx.value = '2';
        rangedtypex.value = '2';
        base_defensex.value = '3';
        base_resistx.value = '7';
        break;
      case 41:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120320114907/masterofmagic/images/d/d3/Tactical_BarbarianCavalry.png';
        figuresx.value = '4';
        base_meleex.value = '4';
        base_resistx.value = '5';
        base_breathx.value = '1';
        breathtypex.value = '1';
        base_hpx.value = '3';
        fsx.value = '1';
        break;
      case 42:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120326094248/masterofmagic/images/4/4e/Tactical_Berserkers.png';
        figuresx.value = '6';
        base_meleex.value = '7';
        base_breathx.value = '3';
        base_defensex.value = '3';
        base_resistx.value = '7';
        breathtypex.value = '1';
        base_hpx.value = '3';
        break;
      case 43:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120319161629/masterofmagic/images/5/50/Tactical_Settlers.png';
        figuresx.value = '1';
        base_meleex.value = '2';
        base_defensex.value = '1';
        base_hpx.value = '10';
        break;
      case 44:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120326113252/masterofmagic/images/8/89/Tactical_GnollSpearmen.png';
        figuresx.value = '8';
        base_meleex.value = '3';
        break;
      case 45:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120326115020/masterofmagic/images/7/7a/Tactical_GnollSwordsmen.png';
        figuresx.value = '6';
        base_meleex.value = '5';
        lshieldx.value = '1';
        break;
      case 46:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120326124512/masterofmagic/images/f/ff/Tactical_GnollHalberdiers.png';
        figuresx.value = '6';
        base_meleex.value = '6';
        base_defensex.value = '3';
        negatefsx.value = '1';
        break;
      case 47:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120326131059/masterofmagic/images/7/70/Tactical_GnollBowmen.png';
        figuresx.value = '6';
        base_meleex.value = '3';
        base_rangedx.value = '1';
        rangedtypex.value = '4';
        break;
      case 48:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120327092232/masterofmagic/images/1/1e/Tactical_WolfRiders.png';
        figuresx.value = '4';
        base_meleex.value = '7';
        base_defensex.value = '3';
        base_hpx.value = '5';
        break;
      case 50:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120327102835/masterofmagic/images/a/a5/Tactical_HalflingSpearmen.png';
        figuresx.value = '8';
        base_meleex.value = '1';
        base_resistx.value = '6';
        luckyx.value = '1';
        break;
      case 51:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120327152904/masterofmagic/images/0/0f/Tactical_HalflingSwordsmen.png';
        figuresx.value = '8';
        base_meleex.value = '2';
        base_resistx.value = '6';
        lshieldx.value = '1';
        luckyx.value = '1';
        break;
      case 52:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120327154531/masterofmagic/images/5/59/Tactical_HalflingBowmen.png';
        figuresx.value = '6';
        base_meleex.value = '1';
        base_rangedx.value = '1';
        rangedtypex.value = '4';
        base_defensex.value = '1';
        base_resistx.value = '6';
        luckyx.value = '1';
        break;
      case 53:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120327172530/masterofmagic/images/a/a7/Tactical_HalflingShamans.png';
        figuresx.value = '4';
        base_meleex.value = '1';
        base_rangedx.value = '2';
        rangedtypex.value = '2';
        base_defensex.value = '3';
        base_resistx.value = '8';
        luckyx.value = '1';
        break;
      case 54:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120327210252/masterofmagic/images/1/10/Tactical_Slingers.png';
        figuresx.value = '8';
        base_meleex.value = '1';
        base_rangedx.value = '2';
        rangedtypex.value = '4';
        base_resistx.value = '6';
        luckyx.value = '1';
        break;
      case 56:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120328190357/masterofmagic/images/b/b2/Tactical_HighElfSpearmen.png';
        figuresx.value = '8';
        base_meleex.value = '1';
        base_resistx.value = '6';
        base_tohitx.value = '10';
        break;
      case 57:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120328193004/masterofmagic/images/8/8d/Tactical_HighElfSwordsmen.png';
        figuresx.value = '6';
        base_meleex.value = '3';
        base_resistx.value = '6';
        base_tohitx.value = '10';
        lshieldx.value = '1';
        break;
      case 58:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120328195853/masterofmagic/images/0/04/Tactical_HighElfHalberdiers.png';
        figuresx.value = '6';
        base_meleex.value = '4';
        base_defensex.value = '3';
        base_resistx.value = '6';
        base_tohitx.value = '10';
        break;
      case 59:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20130816235121/masterofmagic/images/c/cc/Tactical_HighElfCavalry.gif';
        figuresx.value = '4';
        base_meleex.value = '4';
        base_resistx.value = '6';
        base_tohitx.value = '10';
        base_hpx.value = '3';
        fsx.value = '1';
        break;
      case 60:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120331115635/masterofmagic/images/8/89/Tactical_HighElfMagicians.png';
        figuresx.value = '4';
        base_meleex.value = '1';
        base_rangedx.value = '5';
        rangedtypex.value = '1';
        base_defensex.value = '3';
        base_resistx.value = '10';
        base_tohitx.value = '10';
        break;
      case 61:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120329111642/masterofmagic/images/8/81/Tactical_Longbowmen.png';
        figuresx.value = '6';
        base_meleex.value = '1';
        base_rangedx.value = '3';
        rangedtypex.value = '4';
        base_resistx.value = '6';
        base_tohitx.value = '10';
        break;
      case 62:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120330103960/masterofmagic/images/2/27/Tactical_ElvenLords.png';
        figuresx.value = '4';
        base_meleex.value = '5';
        base_defensex.value = '4';
        base_resistx.value = '9';
        base_tohitx.value = '20';
        base_hpx.value = '3';
        apx.value = '1';
        fsx.value = '1';
        break;
      case 63:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120330130248/masterofmagic/images/4/40/Tactical_Pegasai.png';
        figuresx.value = '2';
        base_meleex.value = '5';
        base_rangedx.value = '3';
        rangedtypex.value = '4';
        base_defensex.value = '4';
        base_resistx.value = '8';
        base_tohitx.value = '10';
        base_hpx.value = '5';
        flyingx.value = '1';
        break;
      case 64:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120402121053/masterofmagic/images/a/a3/Tactical_HighMenCavalry.png';
        figuresx.value = '4';
        base_meleex.value = '4';
        base_hpx.value = '3';
        fsx.value = '1';
        break;
      case 65:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120402154541/masterofmagic/images/5/53/Tactical_HighMenMagicians.png';
        figuresx.value = '6';
        base_meleex.value = '1';
        base_rangedx.value = '5';
        rangedtypex.value = '1';
        base_defensex.value = '3';
        base_resistx.value = '8';
        missimmx.value = '1';
        break;
      case 66:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120402163503/masterofmagic/images/c/c4/Tactical_Paladins.png';
        figuresx.value = '4';
        base_meleex.value = '6';
        base_defensex.value = '5';
        base_resistx.value = '8';
        base_hpx.value = '4';
        apx.value = '1';
        fsx.value = '1';
        magimmx.value = '1';
        holybonusx.value = '1';
        break;
      case 68:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120402193914/masterofmagic/images/1/1b/Tactical_KlackonEngineers.png';
        figuresx.value = '6';
        base_meleex.value = '1';
        base_defensex.value = '1';
        base_resistx.value = '5';
        break;
      case 69:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120402192811/masterofmagic/images/7/72/Tactical_KlackonSpearmen.png';
        figuresx.value = '8';
        base_meleex.value = '1';
        base_defensex.value = '4';
        base_resistx.value = '5';
        break;
      case 70:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120402200210/masterofmagic/images/8/84/Tactical_KlackonSwordsmen.png';
        figuresx.value = '6';
        base_meleex.value = '3';
        base_defensex.value = '4';
        base_resistx.value = '5';
        lshieldx.value = '1';
        break;
      case 71:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120403092718/masterofmagic/images/2/24/Tactical_KlackonHalberdiers.png';
        figuresx.value = '6';
        base_meleex.value = '4';
        base_defensex.value = '5';
        base_resistx.value = '5';
        break;
      case 72:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120403112552/masterofmagic/images/c/cd/Tactical_StagBeetle.png';
        figuresx.value = '1';
        base_meleex.value = '15';
        base_defensex.value = '7';
        base_resistx.value = '6';
        base_breathx.value = '5';
        breathtypex.value = '2';
        base_hpx.value = '20';
        break;
      case 74:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120404102127/masterofmagic/images/b/bd/Tactical_LizardmenSpearmen.png';
        figuresx.value = '8';
        base_meleex.value = '1';
        base_defensex.value = '3';
        base_hpx.value = '2';
        break;
      case 75:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120404103941/masterofmagic/images/2/2d/Tactical_LizardmenSwordsmen.png';
        figuresx.value = '6';
        base_meleex.value = '3';
        base_defensex.value = '3';
        base_hpx.value = '2';
        lshieldx.value = '1';
        break;
      case 76:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120404110512/masterofmagic/images/f/ff/Tactical_LizardmenHalberdiers.png';
        figuresx.value = '6';
        base_meleex.value = '4';
        base_defensex.value = '4';
        base_hpx.value = '2';
        negatefsx.value = '1';
        break;
      case 77:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120404190422/masterofmagic/images/d/dc/Tactical_LizardmenShamans.png';
        figuresx.value = '4';
        base_meleex.value = '2';
        base_rangedx.value = '2';
        rangedtypex.value = '2';
        base_defensex.value = '3';
        base_resistx.value = '6';
        base_hpx.value = '2';
        break;
      case 78:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120404180109/masterofmagic/images/2/2f/Tactical_Javelineers.png';
        figuresx.value = '6';
        base_meleex.value = '4';
        base_rangedx.value = '3';
        rangedtypex.value = '4';
        base_defensex.value = '4';
        base_resistx.value = '5';
        base_hpx.value = '2';
        break;
      case 79:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120404195458/masterofmagic/images/a/a7/Tactical_DragonTurtle.png';
        figuresx.value = '1';
        base_meleex.value = '10';
        base_defensex.value ='8';
        base_resistx.value = '8';
        base_breathx.value = '5';
        breathtypex.value = '2';
        base_hpx.value = '15';
        break;
      case 80:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120406121723/masterofmagic/images/7/7c/Tactical_Rangers.png';
        figuresx.value = '4';
        base_meleex.value = '4';
        base_rangedx.value = '3';
        rangedtypex.value = '4';
        base_defensex.value = '4';
        base_resistx.value = '6';
        base_hpx.value = '2';
        break;
      case 81:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120405102151/masterofmagic/images/4/4b/Tactical_Horsebowmen.png';
        figuresx.value = '4';
        base_meleex.value = '4';
        base_rangedx.value = '2';
        rangedtypex.value = '4';
        base_resistx.value = '4';
        base_hpx.value = '3';
        break;
      case 82:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120406124812/masterofmagic/images/6/6d/Tactical_Griffins.png';
        figuresx.value = '2';
        base_meleex.value = '9';
        base_defensex.value = '5';
        base_resistx.value = '7';
        base_hpx.value = '10';
        flyingx.value = '1';
        apx.value = '1';
        fsx.value = '1';
        break;
      case 83:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120407111742/masterofmagic/images/4/41/Tactical_OrcHalberdiers.png';
        figuresx.value = '6';
        base_meleex.value = '4';
        base_defensex.value = '3';
        break;
      case 84:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120407113448/masterofmagic/images/5/56/Tactical_OrcCavalry.png';
        figuresx.value = '4';
        base_meleex.value = '4';
        base_hpx.value = '3';
        break;
      case 85:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120407114925/masterofmagic/images/b/b8/Tactical_OrcShamans.png';
        figuresx.value = '4';
        base_meleex.value = '2';
        base_rangedx.value = '2';
        rangedtypex.value = '2';
        base_defensex.value = '3';
        base_resistx.value = '6';
        break;
      case 86:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120407115846/masterofmagic/images/0/03/Tactical_OrcMagicians.png';
        figuresx.value = '4';
        base_meleex.value = '1';
        base_rangedx.value = '5';
        rangedtypex.value = '1';
        base_defensex.value = '3';
        base_resistx.value = '8';
        break;
      case 87:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120407134109/masterofmagic/images/4/48/Tactical_WyvernRiders.png';
        figuresx.value = '2';
        base_meleex.value = '5';
        base_defensex.value = '5';
        base_resistx.value = '7';
        base_hpx.value = '10';
        flyingx.value = '1';
        poisonx.value = '6';
        break;
      case 88:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120319161629/masterofmagic/images/5/50/Tactical_Settlers.png';
        figuresx.value = '1';
        base_meleex.value = '1';
        base_defensex.value = '1';
        base_resistx.value = '5';
        base_hpx.value = '20';
        break;
      case 89:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120407205352/masterofmagic/images/d/db/Tactical_BeastmenEngineers.png';
        figuresx.value = '6';
        base_meleex.value = '2';
        base_defensex.value = '1';
        base_resistx.value = '5';
        base_hpx.value = '2';
        break;
      case 90:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120407204161/masterofmagic/images/0/09/Tactical_BeastmenSpearmen.png';
        figuresx.value = '8';
        base_meleex.value = '2';
        base_resistx.value = '5';
        base_hpx.value = '2';
        break;
      case 91:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120408104937/masterofmagic/images/b/bb/Tactical_BeastmenSwordsmen.png';
        figuresx.value = '6';
        base_meleex.value = '4';
        base_resistx.value = '5';
        base_hpx.value = '2';
        lshieldx.value = '1';
        break;
      case 92:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120408110837/masterofmagic/images/a/a9/Tactical_BeastmenHalberdiers.png';
        figuresx.value = '6';
        base_meleex.value = '5';
        base_defensex.value = '3';
        base_resistx.value = '5';
        base_hpx.value = '2';
        break;
      case 93:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120408112222/masterofmagic/images/a/a9/Tactical_BeastmenBowmen.png';
        figuresx.value = '6';
        base_meleex.value = '2';
        base_rangedx.value = '1';
        rangedtypex.value = '4';
        base_defensex.value = '1';
        base_resistx.value = '5';
        base_hpx.value = '2';
        break;
      case 94:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120408114233/masterofmagic/images/d/d8/Tactical_BeastmenPriests.png';
        figuresx.value = '4';
        base_meleex.value = '4';
        base_rangedx.value = '4';
        rangedtypex.value = '2';
        base_defensex.value = '4';
        base_resistx.value = '8';
        base_hpx.value = '2';
        break;
      case 95:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120408120036/masterofmagic/images/f/f1/Tactical_BeastmenMagicians.png';
        figuresx.value = '4';
        base_meleex.value = '2';
        base_rangedx.value = '5';
        rangedtypex.value = '1';
        base_defensex.value = '3';
        base_resistx.value = '9';
        base_hpx.value = '2';
        missimmx.value = '1';
        break;
      case 96:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120408150841/masterofmagic/images/6/61/Tactical_Centaurs.png';
        figuresx.value = '4';
        base_meleex.value = '3';
        base_rangedx.value = '2';
        rangedtypex.value = '4';
        base_defensex.value = '3';
        base_resistx.value = '5';
        base_hpx.value = '3';
        break;
      case 97:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120408162826/masterofmagic/images/b/b1/Tactical_Manticores.png';
        figuresx.value = '2';
        base_meleex.value = '5';
        base_defensex.value = '3';
        base_resistx.value = '6';
        base_hpx.value = '7';
        flyingx.value = '1';
        poisonx.value = '6';
        break;
      case 98:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120408155828/masterofmagic/images/f/f8/Tactical_Minotaurs.png';
        figuresx.value = '2';
        base_meleex.value = '12';
        base_defensex.value = '4';
        base_resistx.value = '7';
        base_tohitx.value = '20';
        base_hpx.value = '12';
        lshieldx.value = '1';
        break;
      case 100:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120408235616/masterofmagic/images/b/bb/Tactical_DarkElfSpearmen.png';
        figuresx.value = '8';
        base_meleex.value = '1';
        base_rangedx.value = '1';
        rangedtypex.value = '1';
        base_resistx.value = '7';
        break;
      case 101:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120409001353/masterofmagic/images/8/80/Tactical_DarkElfSwordsmen.png';
        figuresx.value = '6';
        base_meleex.value = '3';
        base_rangedx.value = '1';
        rangedtypex.value = '1';
        base_resistx.value = '7';
        lshieldx.value = '1';
        break;
      case 102:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120409110545/masterofmagic/images/1/17/Tactical_DarkElfHalberdiers.png';
        figuresx.value = '6';
        base_meleex.value = '4';
        base_rangedx.value = '1';
        rangedtypex.value = '1';
        base_defensex.value = '3';
        base_resistx.value = '7';
        break;
      case 103:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120409112848/masterofmagic/images/1/14/Tactical_DarkElfCavalry.png';
        figuresx.value = '4';
        base_meleex.value = '4';
        base_rangedx.value = '1';
        rangedtypex.value = '1';
        base_resistx.value = '7';
        base_hpx.value = '3';
        fsx.value = '1';
        break;
      case 104:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120409115630/masterofmagic/images/3/36/Tactical_DarkElfPriests.png';
        figuresx.value = '4';
        base_meleex.value = '3';
        base_rangedx.value = '6';
        rangedtypex.value = '2';
        base_defensex.value = '4';
        base_resistx.value = '10';
        break;
      case 105:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120409145540/masterofmagic/images/3/36/Tactical_Nightblades.png';
        figuresx.value = '6';
        base_meleex.value = '4';
        base_defensex.value = '3';
        base_resistx.value = '7';
        poisonx.value = '1';
        invisx.value = '1';
        break;
      case 106:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120409142453/masterofmagic/images/1/11/Tactical_Warlocks.png';
        figuresx.value = '4';
        base_meleex.value = '1';
        base_rangedx.value = '7';
        rangedtypex.value = '1';
        base_defensex.value = '4';
        base_resistx.value = '9';
        missimmx.value = '1';
        break;
      case 107:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120409195511/masterofmagic/images/3/30/Tactical_Nightmares.png';
        figuresx.value = '2';
        base_meleex.value = '8';
        base_rangedx.value = '5';
        rangedtypex.value = '1';
        base_defensex.value = '4';
        base_resistx.value = '8';
        base_hpx.value = '10';
        flyingx.value = '1';
        break;
      case 109:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120410221117/masterofmagic/images/a/a7/Tactical_DraconianSpearmen.png';
        figuresx.value = '8';
        base_meleex.value = '1';
        base_defensex.value = '3';
        base_resistx.value = '6';
        base_breathx.value = '1';
        breathtypex.value = '2';
        flyingx.value = '1';
        break;
      case 110:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120411113260/masterofmagic/images/f/ff/Tactical_DraconianSwordsmen.png';
        figuresx.value = '6';
        base_meleex.value = '3';
        base_defensex.value = '3';
        base_resistx.value = '6';
        base_breathx.value = '1';
        breathtypex.value = '2';
        flyingx.value = '1';
        lshieldx.value = '1';
        break;
      case 111:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120411115155/masterofmagic/images/d/dc/Tactical_DraconianHalberdiers.png';
        figuresx.value = '6';
        base_meleex.value = '4';
        base_defensex.value = '4';
        base_resistx.value = '6';
        base_breathx.value = '1';
        breathtypex.value = '2';
        flyingx.value = '1';
        break;
      case 112:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120411121122/masterofmagic/images/0/0a/Tactical_DraconianBowmen.png';
        figuresx.value = '6';
        base_meleex.value = '1';
        base_rangedx.value = '1';
        rangedtypex.value = '4';
        base_resistx.value = '6';
        flyingx.value = '1';
        break;
      case 113:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120411130909/masterofmagic/images/2/29/Tactical_DraconianShamans.png';
        figuresx.value = '4';
        base_meleex.value = '2';
        base_rangedx.value = '2';
        rangedtypex.value = '2';
        base_defensex.value = '4';
        base_resistx.value = '8';
        flyingx.value = '1';
        break;
      case 114:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120411132253/masterofmagic/images/3/35/Tactical_DraconianMagicians.png';
        figuresx.value = '4';
        base_meleex.value = '1';
        base_rangedx.value = '5';
        rangedtypex.value = '1';
        base_defensex.value = '4';
        base_resistx.value = '10';
        flyingx.value = '1';
        break;
      case 115:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120411181646/masterofmagic/images/f/fe/Tactical_AirShip.png';
        figuresx.value = '1';
        base_meleex.value = '5';
        base_rangedx.value = '10';
        rangedtypex.value = '5';
        base_defensex.value = '5';
        base_resistx.value = '8';
        base_hpx.value = '20';
        flyingx.value = '1';
        break;
      case 116:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120411143428/masterofmagic/images/9/9d/Tactical_DoomDrakes.png';
        figuresx.value = '2';
        base_meleex.value = '8';
        base_defensex.value = '3';
        base_resistx.value = '9';
        base_breathx.value = '6';
        breathtypex.value = '2';
        base_hpx.value = '10';
        flyingx.value = '1';
        break;
      case 118:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120411231641/masterofmagic/images/e/e2/Tactical_DwarfEngineers.png';
        figuresx.value = '6';
        base_meleex.value = '1';
        base_defensex.value = '1';
        base_resistx.value = '8';
        base_hpx.value = '3';
        break;
      case 119:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120411203816/masterofmagic/images/6/66/Tactical_DwarfSwordsmen.png';
        figuresx.value = '6';
        base_meleex.value = '3';
        base_resistx.value = '8';
        base_hpx.value = '3';
        lshieldx.value = '1';
        break;
      case 120:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120412000744/masterofmagic/images/b/b6/Tactical_DwarfHalberdiers.png';
        figuresx.value = '6';
        base_meleex.value = '4';
        base_defensex.value = '3';
        base_resistx.value = '8';
        base_hpx.value = '3';
        break;
      case 121:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120412120748/masterofmagic/images/a/af/Tactical_Hammerhands.png';
        figuresx.value = '6';
        base_meleex.value = '8';
        base_defensex.value = '4';
        base_resistx.value = '9';
        base_hpx.value = '4';
        break;
      case 122:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120412124735/masterofmagic/images/f/f4/Tactical_Golem.png';
        figuresx.value = '1';
        base_meleex.value = '12';
        base_defensex.value = '8';
        base_resistx.value = '15';
        base_hpx.value = '20';
        poisimmx.value = '1';
        deathimmx.value = '1';
        break;
      case 123:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120412135509/masterofmagic/images/c/c2/Tactical_SteamCannon.png';
        figuresx.value = '1';
        base_meleex.value = '0';
        base_rangedx.value = '12';
        rangedtypex.value = '5';
        base_resistx.value = '9';
        base_hpx.value = '12';
        break;
      case 125:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120412160656/masterofmagic/images/b/bb/Tactical_TrollSpearmen.png';
        figuresx.value = '4';
        base_meleex.value = '3';
        base_resistx.value = '7';
        base_hpx.value = '4';
        regenx.value = '1';
        break;
      case 126:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120412172803/masterofmagic/images/2/2d/Tactical_TrollSwordsmen.png';
        figuresx.value = '4';
        base_meleex.value = '5';
        base_resistx.value = '7';
        base_hpx.value = '4';
        lshieldx.value = '1';
        regenx.value = '1';
        break;
      case 127:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120412202022/masterofmagic/images/1/18/Tactical_TrollHalberdiers.png';
        figuresx.value = '4';
        base_meleex.value = '6';
        base_defensex.value = '3';
        base_resistx.value = '7';
        base_hpx.value = '4';
        negatefsx.value = '1';
        regenx.value = '1';
        break;
      case 128:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120412223544/masterofmagic/images/c/ca/Tactical_TrollShamans.png';
        figuresx.value = '4';
        base_meleex.value = '4';
        base_rangedx.value = '2';
        rangedtypex.value = '2';
        base_defensex.value = '3';
        base_resistx.value = '8';
        base_hpx.value = '4';
        regenx.value = '1';
        break;
      case 129:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120415171540/masterofmagic/images/9/9b/Tactical_WarTrolls.png';
        figuresx.value = '4';
        base_meleex.value = '8';
        base_defensex.value = '4';
        base_resistx.value = '8';
        base_hpx.value = '5';
        regenx.value = '1';
        break;
      case 130:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120416155959/masterofmagic/images/c/c3/Tactical_WarMammoths.png';
        figuresx.value = '2';
        base_meleex.value = '10';
        base_defensex.value = '6';
        base_resistx.value = '9';
        base_hpx.value = '12';
        fsx.value = '1';
        break;
      case 800:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120401203148/masterofmagic/images/0/0a/Tactical_HighMenEngineers.png';
        figuresx.value = '6';
        base_meleex.value = '1';
        base_defensex.value = '1';
        break;
      case 801:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120407135513/masterofmagic/images/4/42/Tactical_HighMenSpearmen.png';
        figuresx.value = '8';
        base_meleex.value = '1';
        break;
      case 802:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20130816230335/masterofmagic/images/4/49/Tactical_HighMenSwordsmen.gif';
        figuresx.value = '6';
        base_meleex.value = '3';
        lshieldx.value = '1';
        break;
      case 804:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120402113761/masterofmagic/images/6/6c/Tactical_HighMenPikemen.png';
        figuresx.value = '8';
        base_meleex.value = '5';
        base_defensex.value = '3';
        base_resistx.value = '5';
        apx.value = '1';
        negatefsx.value = '1';
        break;
      case 805:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120402122035/masterofmagic/images/7/7a/Tactical_HighMenBowmen.png';
        figuresx.value = '6';
        base_meleex.value = '1';
        base_rangedx.value = '1';
        rangedtypex.value = '4';
        base_defensex.value = '1';
        break;
      case 806:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120402132155/masterofmagic/images/e/ef/Tactical_HighMenPriests.png';
        figuresx.value = '4';
        base_meleex.value = '3';
        base_rangedx.value = '4';
        rangedtypex.value = '2';
        base_defensex.value = '4';
        base_resistx.value = '7';
        break;
      case 899:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120331140919/masterofmagic/images/d/db/Tactical_Catapult.png';
        figuresx.value = '1';
        base_meleex.value = '0';
        base_rangedx.value = '10';
        rangedtypex.value = '5';
        base_hpx.value = '10';
        lrangex.value = '1';
        break;
      case 900:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120324110861/masterofmagic/images/3/32/Tactical_Trireme.png';
        figuresx.value = '1';
        base_meleex.value = '6';
        base_defensex.value = '4';
        base_hpx.value = '10';
        break;
      case 901:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120324201343/masterofmagic/images/7/72/Tactical_Galley.png';
        figuresx.value = '1';
        base_meleex.value = '8';
        base_rangedx.value = '2';
        rangedtypex.value = '4';
        base_defensex.value = '4';
        base_resistx.value = '6';
        base_hpx.value = '20';
        break;
      case 902:
        imgxstr = 'https://images.wikia.nocookie.net/__cb20120324231424/masterofmagic/images/e/e1/Tactical_Warship.png';
        figuresx.value = '1';
        base_meleex.value = '10';
        base_rangedx.value = '10';
        rangedtypex.value = '5';
        base_defensex.value = '5';
        base_resistx.value = '7';
        base_hpx.value = '30';
        lrangex.value = '1';
        break;
      }
      fixed_figuresx.innerHTML = '' + figuresx.value;
    }
    changerangedimg(side);
    changebreathimg(side);
    if (((unitidx < 1000) && (parseInt(base_rangedx.value) == 0)) || ((unitidx > 1000) && (parseInt(rangedx.value) == 0))) {
      attslabelx.style.display = 'none';
      attselectx.selectedIndex = 0;
      attselectx.style.display = 'none';
    } else if ((unitidx > 35) && (unitidx < 1000) && (parseInt(base_meleex.value) == 0)) {
      attslabelx.style.display = 'none';
      attselectx.selectedIndex = 1;
      attselectx.style.display = 'none';
    } else {
      attslabelx.style.display = 'inline';
      attselectx.selectedIndex = 1;
      attselectx.style.display = 'inline';
    }
    if (unitidx < 1000) {
      if (unitidx > 35) {
        change_fig_nc(side);
      }
      show_normalench(side);
      changelevel(side);
    } else {
      hide_normalench(side);
      calcdamage();
    }
    dtx.style.display = 'inline';
    unitimgx.innerHTML = '<img alt=\"\" src=\"' + imgxstr + '\" />';
  }
  refresh_abilities(side);
}"