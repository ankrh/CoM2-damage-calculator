**Insecticide**,
also known as Master of Magic 1.40 is a bugfix, AI improvement, and
general patch developed by Kyrub. Its last stable version is 1.40n,
while the last unstable release is 1.40o. **Insecticide** is now obsolete, having been superceded by the [Unofficial Patch 1.50](https://masterofmagic.fandom.com/wiki/Unofficial_Patch_1.50 "Unofficial Patch 1.50"), and later the [Community Patch](https://masterofmagic.fandom.com/wiki/Community_Patch "Community Patch"),
as the developer became inactive. However, a number of improvements
introduced in various builds of 1.40 are still active in the latter
patches. Since 1.40o was unstable and not widely used, this page
considers the 1.40n version the final **Insecticide**.

The following aims to be a complete list of changes contained in
this update. Since the developer did not make all of their changes
public, and sometimes the change log is inaccurate or outdated, all the
information below comes from disassembling and comparing the **Insecticide** files with the v1.31 files. **Insecticide** is still available for download through its original [Forum thread](http://realmsbeyond.net/forums/showthread.php?tid=3663), and is also included in the [Community Patcher](https://www.realmsbeyond.net/forums/showthread.php?tid=10492).

## **Bug fixes**

* Armies containing a [Wind Walking](https://masterofmagic.fandom.com/wiki/Wind_Walking "Wind Walking") unit now always show the correct amount of [Movement Allowance](https://masterofmagic.fandom.com/wiki/Movement_Allowance "Movement Allowance")
  remaining for the army, and can no longer get stuck having to wait for
  auto-selection if one of the other units runs out of moves before the
  Wind Walker does. (IW017)
* The *Magic Srceen* now shows the correct amount of [Spell Casting Skill](https://masterofmagic.fandom.com/wiki/Spell_Casting_Skill "Spell Casting Skill") points gained for [Archmages](https://masterofmagic.fandom.com/wiki/Archmage "Archmage"). (IW030)
* [Magical Items](https://masterofmagic.fandom.com/wiki/Magical_Item "Magical Item") found in [Treasure](https://masterofmagic.fandom.com/wiki/Treasure "Treasure") now correctly obey the value limits set out for them during map generation. (IW041)
* The [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Invisibility](https://masterofmagic.fandom.com/wiki/Invisibility_(Item_Power) "Invisibility (Item Power)")** Item Power now correctly prevents being targeted with spells and [Melee Attacks](https://masterofmagic.fandom.com/wiki/Melee_Attack "Melee Attack") in combat unless the [Hero](https://masterofmagic.fandom.com/wiki/Hero "Hero") is revealed by an adjacent unit or through [Illusions Immunity](https://masterofmagic.fandom.com/wiki/Illusions_Immunity "Illusions Immunity"). (IW045)
* The human player's armies can no longer enter battle while moving unless it is on their destination tile. (IW048)
* A [Fortress](https://masterofmagic.fandom.com/wiki/Fortress "Fortress") defender can now use magic in strategic combat even if they have over [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **16,383**. (IW051)
* Healing, enhancement, and direct damage magic now correctly
  contribute for both players in all phases of strategic combat. (IW051)
* Players no longer spend more [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** than they normally could in strategic combat. (IW051)
* Wizards with [Spellbooks](https://masterofmagic.fandom.com/wiki/Spellbook "Spellbook") in more than one [Realm](https://masterofmagic.fandom.com/wiki/Realm "Realm") now benefit from all of them during strategic combat. (IW052)
* The AI can no longer erroneously cast [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Possession](https://masterofmagic.fandom.com/wiki/Possession "Possession")** on Heroes. (IW054)
* [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Counter Magic](https://masterofmagic.fandom.com/wiki/Counter_Magic "Counter Magic")** now always properly loses power when countering a [Wizard](https://masterofmagic.fandom.com/wiki/Wizard "Wizard")'s spell. (IW056)
* [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Counter Magic](https://masterofmagic.fandom.com/wiki/Counter_Magic "Counter Magic")** no longer sometimes removes unrelated [Combat Enchantments](https://masterofmagic.fandom.com/wiki/Combat_Enchantment "Combat Enchantment") when countering a Wizard's spell. (IW056)
* [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Dispel Evil](https://masterofmagic.fandom.com/wiki/Dispel_Evil "Dispel Evil")** can no longer be cast on non-[Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Death](https://masterofmagic.fandom.com/wiki/Death "Death")** non-[Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")** units by the human player. (IW061)
* [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Life Drain](https://masterofmagic.fandom.com/wiki/Life_Drain "Life Drain")** can no longer be cast on units with [Death Immunity](https://masterofmagic.fandom.com/wiki/Death_Immunity "Death Immunity") by the human player. (IW062)
* AI units with the [Healing Spell](https://masterofmagic.fandom.com/wiki/Healing_Spell "Healing Spell") ability can now use that ability instead of simply wasting their turn when they try. (IW063)
* The AI no longer fails to assess the ranged strength of its own and the enemy army. (IW066, IW091)
* The AI no longer fails to make [Ranged Attacks](https://masterofmagic.fandom.com/wiki/Ranged_Attack "Ranged Attack") against [Invisible](https://masterofmagic.fandom.com/wiki/Invisibility "Invisibility") enemies with units that have [Illusions Immunity](https://masterofmagic.fandom.com/wiki/Illusions_Immunity "Illusions Immunity"). (IW068)
* [Demon Skin](https://masterofmagic.fandom.com/wiki/Chaos_Channels#Option_#1:_Demon-Skin_Armor "Chaos Channels") no longer applies its [Defense](https://masterofmagic.fandom.com/wiki/Defense "Defense") **Defense** bonus twice in combat. (IW073)
* Hero spells with indices over 127 no longer fail to be added to the list of spells available for casting. (IW074)
* Overland spells and [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Call Chaos](https://masterofmagic.fandom.com/wiki/Call_Chaos "Call Chaos")** no longer treat [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Chaos Channeled](https://masterofmagic.fandom.com/wiki/Chaos_Channels "Chaos Channels")** units as [Normal Units](https://masterofmagic.fandom.com/wiki/Normal_Unit "Normal Unit"). (IW078)
* The [Cause Fear](https://masterofmagic.fandom.com/wiki/Cause_Fear "Cause Fear") ability now affects the correct unit. (IW079)
* [Thrown Attack](https://masterofmagic.fandom.com/wiki/Thrown_Attack "Thrown Attack") **Thrown-** and [Breath Attack](https://masterofmagic.fandom.com/wiki/Breath_Attack "Breath Attack") **Breath Attacks** no longer ignore ranged [To Hit](https://masterofmagic.fandom.com/wiki/To_Hit "To Hit") **To Hit** modifiers. (IW080, IW085)
* Extra chance [Defense Roll](https://masterofmagic.fandom.com/wiki/Defense_Roll "Defense Roll") **To Block** no longer reduces the enemy's chance [To Hit](https://masterofmagic.fandom.com/wiki/To_Hit "To Hit") **To Hit** with [Melee Attacks](https://masterofmagic.fandom.com/wiki/Melee_Attack "Melee Attack") in addition to its normal effect. (IW081)
* Defending units no longer get an automatic [Defense](https://masterofmagic.fandom.com/wiki/Defense "Defense") **+3** during sieges in strategic combat. (IW084)
* [Regenerating](https://masterofmagic.fandom.com/wiki/Regeneration "Regeneration") no longer moves recalled units back to the battle location. (IW088)
* Units without [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Endurance](https://masterofmagic.fandom.com/wiki/Endurance "Endurance")** no longer sometimes gain an extra point of movement during combat. (IW093)
* Defending units no longer lose all their remaining [Movement Allowance](https://masterofmagic.fandom.com/wiki/Movement_Allowance "Movement Allowance") after combat. Due to turn order, this prevented the AI from using those units for the turn at all. (IW089)
* The [Charismatic](https://masterofmagic.fandom.com/wiki/Charismatic "Charismatic") [Retort](https://masterofmagic.fandom.com/wiki/Retort "Retort") now applies before checking whether the player can afford to hire a [Hero](https://masterofmagic.fandom.com/wiki/Hero "Hero") or a group of [Mercenaries](https://masterofmagic.fandom.com/wiki/Mercenaries "Mercenaries"). (IW098)
* Dispel-type spells cast by units in combat now always attempt to remove the intended spells instead of the player's own. (IW103)
* Having [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Holy Arms](https://masterofmagic.fandom.com/wiki/Holy_Arms "Holy Arms")** in play no longer prevents dispelling combat-cast [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Holy Weapon](https://masterofmagic.fandom.com/wiki/Holy_Weapon "Holy Weapon")** from enemy units. (IW105)
* [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Animate Dead](https://masterofmagic.fandom.com/wiki/Animate_Dead "Animate Dead")** now correctly sets the overland owner of the animated unit. (IW108)
* [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Call Lightning](https://masterofmagic.fandom.com/wiki/Call_Lightning "Call Lightning")** now ignores units with [Magic Immunity](https://masterofmagic.fandom.com/wiki/Magic_Immunity "Magic Immunity") rather than units with [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Wraith Form](https://masterofmagic.fandom.com/wiki/Wraith_Form "Wraith Form")**. (IW112)
* [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Armageddon](https://masterofmagic.fandom.com/wiki/Armageddon "Armageddon")** and [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Great Wasting](https://masterofmagic.fandom.com/wiki/Great_Wasting "Great Wasting")** no longer cancel the pacifying effect of [Town Buildings](https://masterofmagic.fandom.com/wiki/Town_Building "Town Building"). (IW128)
* Having over [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **16,383** no longer prevents the AI from casting spells when defending its [Fortress](https://masterofmagic.fandom.com/wiki/Fortress "Fortress"). (IW131)
* The AI now tries to keep up with the player in [Spell Research](https://masterofmagic.fandom.com/wiki/Spell_Research "Spell Research") as intended. (IW135)
* Having [Barbarian Spearmen](https://masterofmagic.fandom.com/wiki/Barbarian_Spearmen "Barbarian Spearmen") no longer prevents the AI from casting [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Incarnation](https://masterofmagic.fandom.com/wiki/Incarnation "Incarnation")**. (IW144)
* The AI can no longer cast [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Heroism](https://masterofmagic.fandom.com/wiki/Heroism "Heroism")**, [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Holy Armor](https://masterofmagic.fandom.com/wiki/Holy_Armor "Holy Armor")**, or [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Black Channels](https://masterofmagic.fandom.com/wiki/Black_Channels "Black Channels")** on [Fantastic Units](https://masterofmagic.fandom.com/wiki/Fantastic_Unit "Fantastic Unit") overland. (IW146)
* The AI is no longer prevented from producing [Trade Goods](https://masterofmagic.fandom.com/wiki/Trade_Goods "Trade Goods") when it has more than 3 [Towns](https://masterofmagic.fandom.com/wiki/Town "Town"). (IW149)
* The AI no longer fails to cancel its troop movement as intended when passing by a lightly defended rival City. (IW156)
* [Lo Pan](https://masterofmagic.fandom.com/wiki/Lo_Pan "Lo Pan") has 1 fewer [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")** books because the total picks was over 11. (IM176)
* Starting [Towns](https://masterofmagic.fandom.com/wiki/Town "Town") can no longer occasionally be created on top of an [Encounter Zone](https://masterofmagic.fandom.com/wiki/Encounter_Zone "Encounter Zone"). (IM183)
* Having the [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Basilisk](https://masterofmagic.fandom.com/wiki/Basilisk "Basilisk")** – or [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Pathfinding](https://masterofmagic.fandom.com/wiki/Pathfinding "Pathfinding")** for [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Life](https://masterofmagic.fandom.com/wiki/Life "Life")** – spell in their [Spellbook](https://masterofmagic.fandom.com/wiki/Spellbook "Spellbook") no longer prevents AI [Wizards](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") from getting their guaranteed [Uncommon](https://masterofmagic.fandom.com/wiki/Uncommon_Spell "Uncommon Spell") [Summoning Spells](https://masterofmagic.fandom.com/wiki/Summoning_Spell "Summoning Spell") from non-[Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")** primary [Realms](https://masterofmagic.fandom.com/wiki/Realm "Realm") on higher *Difficulties*. (IM197)
* AI Wizards starting with [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[11](https://masterofmagic.fandom.com/wiki/Life "Life")** or [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[11](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")** no longer begin the game with less spells than intended. (IM197)
* [Alorra the Elven Archer](https://masterofmagic.fandom.com/wiki/Alorra_the_Elven_Archer "Alorra the Elven Archer") and [Torin the Chosen](https://masterofmagic.fandom.com/wiki/Torin_the_Chosen "Torin the Chosen") are no longer eligible for [Arcane Power](https://masterofmagic.fandom.com/wiki/Arcane_Power "Arcane Power"). (IM200)
* Default [Magical Items](https://masterofmagic.fandom.com/wiki/Magical_Item "Magical Item"), as well as those created through ITEMMAKE will now have the correct [Spellbook](https://masterofmagic.fandom.com/wiki/Spellbook "Spellbook") requirements. (ITEMDATA.LBX, ITEMMAKE.EXE)

## **AI changes**

* Changed the AI's [Objective](https://masterofmagic.fandom.com/wiki/Objective "Objective")-based [Town](https://masterofmagic.fandom.com/wiki/Town "Town") production priorities. (IW006)
* AI players can now find [Magical Items](https://masterofmagic.fandom.com/wiki/Magical_Item "Magical Item") in [Treasure](https://masterofmagic.fandom.com/wiki/Treasure "Treasure"). (IW040)
* It is no longer easier to convince an AI player to declare war on someone they have a [Wizard's Pact](https://masterofmagic.fandom.com/wiki/Wizard%27s_Pact "Wizard's Pact") with than intended. (IW042)
* AI armies now consider tiles with other players' units passable at
  "Restless" (below -20) as opposed to the original "Troubled" (below -60)
  relations during pathfinding (as long as there are fewer units on the
  tile than the AI is moving). The human player's units are also actively
  sought out in this case, treating their tiles as if they were Enchanted
  Roads that cost no movement. (IW048)
* The AI is no longer allowed to flee during the first turn of combat. (IW049)
* The AI no longer forms lines with its units or moves them in a group. (IW067)
* When targeting [Melee Attacks](https://masterofmagic.fandom.com/wiki/Melee_Attack "Melee Attack"), the AI now also prioritizes more damaged enemies over less damaged ones, the same way as they do with [Ranged Attacks](https://masterofmagic.fandom.com/wiki/Ranged_Attack "Ranged Attack"). (IW069)
* The AI no longer receives a further discount beyond the regular maintenance modifier on the [Gold](https://masterofmagic.fandom.com/wiki/Gold "Gold") **Gold** upkeep of its units on the highest *Difficulty* settings. (IW075)
* The AI now assigns additional close combat target value to damaged
  enemies that can be reached, but will no longer do the same for [sleeping](https://masterofmagic.fandom.com/wiki/Black_Sleep "Black Sleep") ones. (IW087)
* Increased the army strength ratio at which the AI will consider
  itself slightly superior as opposed to slightly inferior from 66% to
  75%. (IW092)
* AI [Wizards](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") have a 10% lower chance to raze a City if was taken from another AI Wizard. (IW095)
* The AI now prefers razing more if enemy forces are present in larger
  amount nearby, implying it's hard to keep the City – instead of the
  opposite, razing if own forces are superior. (IW096)
* AI players will now refuse offers to hire [Heroes](https://masterofmagic.fandom.com/wiki/Hero "Hero") whose ID is lower than four times the number of Heroes they already own to preserve the slots for stronger ones. (IW099)
* The AI now uses spells' in-realm index to determine their trade priority – as opposed to the previous [Research Cost](https://masterofmagic.fandom.com/wiki/Spell_Research#Research_Cost "Spell Research")
  –, and applies an extra desirability modifier as well. The value of
  spells already up for research is now only 50% instead of 90%. (IW101,
  SPELLDAT.LBX)
* The AI is now less likely to cast defensive spells when losing or
  direct damage spells when winning, and is more likely to cast offensive
  buffs when at a slight advantage. (IW115)
* The AI now considers dispelling [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Call Lightning](https://masterofmagic.fandom.com/wiki/Call_Lightning "Call Lightning")** and [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Wrack](https://masterofmagic.fandom.com/wiki/Wrack "Wrack")** to be of utmost priority. (IW116, IW124)
* The AI is now less likely to cast [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Vertigo](https://masterofmagic.fandom.com/wiki/Vertigo "Vertigo")**, [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Warp Creature](https://masterofmagic.fandom.com/wiki/Warp_Creature "Warp Creature")**, [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Immolation](https://masterofmagic.fandom.com/wiki/Immolation "Immolation")**, or [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Weakness](https://masterofmagic.fandom.com/wiki/Weakness "Weakness")** when losing; less likely to cast [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Terror](https://masterofmagic.fandom.com/wiki/Terror "Terror")** in general; more likely to use [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Haste](https://masterofmagic.fandom.com/wiki/Haste "Haste")** and [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Heroism](https://masterofmagic.fandom.com/wiki/Heroism "Heroism")**; and more likely to use [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Dispel Evil](https://masterofmagic.fandom.com/wiki/Dispel_Evil "Dispel Evil")** if there are enemy [Fantastic Units](https://masterofmagic.fandom.com/wiki/Fantastic_Unit "Fantastic Unit") with an effective [Resistance](https://masterofmagic.fandom.com/wiki/Resistance "Resistance") of [Resistance](https://masterofmagic.fandom.com/wiki/Resistance "Resistance") **8** or less against it. (IW120)
* The AI will not cast [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Mana Leak](https://masterofmagic.fandom.com/wiki/Mana_Leak "Mana Leak")**
  after the third turn in combat, but on turns 2 and 3, is much more
  likely to use it if there is any kind of wall present in the battle.
  (IW123)
* The AI considers [Immolation](https://masterofmagic.fandom.com/wiki/Immolation "Immolation") to be less of a threat when considering whether to cast [Realm](https://masterofmagic.fandom.com/wiki/Realm "Realm")-based protective spells, and is much less likely to use such spells in general. (IW125, IW130)
* The AI can now hire [Mercenaries](https://masterofmagic.fandom.com/wiki/Mercenaries "Mercenaries") from turn 40 rather than 50, but will limit its [Gold](https://masterofmagic.fandom.com/wiki/Gold "Gold") **Gold** expenditure more strictly. It will always accept [Engineers](https://masterofmagic.fandom.com/wiki/Engineers "Engineers") as long as it can afford them, but will never hire [Spearmen](https://masterofmagic.fandom.com/wiki/Spearmen "Spearmen") or [Swordsmen](https://masterofmagic.fandom.com/wiki/Swordsmen "Swordsmen"), and increases the minimum unit value it accepts as the game goes on. (IW129)
* The AI no longer waits to run out of [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** before using [Alchemy](https://masterofmagic.fandom.com/wiki/Alchemy "Alchemy") without the [Retort](https://masterofmagic.fandom.com/wiki/Retort "Retort"), and has an increased preference towards [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** in general. (IW137)
* The AI now places a higher emphasis on creating [Settlers](https://masterofmagic.fandom.com/wiki/Settlers "Settlers") for longer from the start, and will keep at least twice as many around in general (IW139, IW151, IW153)
* The AI now considers [Engineers](https://masterofmagic.fandom.com/wiki/Engineers "Engineers")
  an absolute top priority throughout the game if it can get them, and
  will keep at least twice as many around in general (IW139, IW151, IW153)
* The AI will never use a previously saved path if there are adjacent enemy units when it would start the turn's movement. (IW140)
* The AI now [prioritizes its research differently](https://masterofmagic.fandom.com/wiki/User_blog:Drake178/AI_Spell_Research "User blog:Drake178/AI Spell Research"). (IW141, IW143, SPELLDAT.LBX)
* Increased the amount of [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** the AI needs to have or get each turn to allow casting expensive overland spells. (IW142)
* The AI no longer uses exponential weights of casting costs to
  determine what to summon. Instead, some creatures are much more likely
  to be used than others. (IW144)
* The AI will never cast [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Summon Hero](https://masterofmagic.fandom.com/wiki/Summon_Hero "Summon Hero")** when it already has 4 or more [Heroes](https://masterofmagic.fandom.com/wiki/Hero "Hero"). (IW144)
* The AI no longer cancels all [Global Enchantments](https://masterofmagic.fandom.com/wiki/Global_Enchantment "Global Enchantment") when it runs out of [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** – only [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Suppress Magic](https://masterofmagic.fandom.com/wiki/Suppress_Magic "Suppress Magic")** and [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Time Stop](https://masterofmagic.fandom.com/wiki/Time_Stop "Time Stop")**. (IW145)
* The AI will never cast a [Unit Enchantment](https://masterofmagic.fandom.com/wiki/Unit_Enchantment "Unit Enchantment") on anything other than its [Heroes](https://masterofmagic.fandom.com/wiki/Hero "Hero") unless they either all already have it, or can't be targeted by it. The only exceptions are [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Water Walking](https://masterofmagic.fandom.com/wiki/Water_Walking "Water Walking")**, [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Flight](https://masterofmagic.fandom.com/wiki/Flight "Flight")**, and [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Planar Travel](https://masterofmagic.fandom.com/wiki/Planar_Travel "Planar Travel")**, which will be cast on [Settlers](https://masterofmagic.fandom.com/wiki/Settlers "Settlers") first. (IW146)
* The AI now prefers [Fantastic Units](https://masterofmagic.fandom.com/wiki/Fantastic_Unit "Fantastic Unit") with the stronger enchantments that can affect them, and [Ranged Missile Attack](https://masterofmagic.fandom.com/wiki/Ranged_Missile_Attack "Ranged Missile Attack") **Ranged Missile** units with spells which improve that [Attack Type](https://masterofmagic.fandom.com/wiki/Attack_Type "Attack Type"). (IW146)
* The AI now tries to move its [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Summoning Circle](https://masterofmagic.fandom.com/wiki/Summoning_Circle "Summoning Circle")** much more often. (IW147)
* The AI no longer buys [Production](https://masterofmagic.fandom.com/wiki/Production "Production") **Production** unless some of it is already done. (IW148)
* The AI is much less likely to produce [Trade Goods](https://masterofmagic.fandom.com/wiki/Trade_Goods "Trade Goods") than before unless it has at least 24 Cities. (IW150)
* Halved the AI's chance of enforcing unit production in Cities that are on its home continent. (IW150, IW152)
* The AI now builds the [Smithy](https://masterofmagic.fandom.com/wiki/Smithy "Smithy") before the [Builders' Hall](https://masterofmagic.fandom.com/wiki/Builders%27_Hall "Builders' Hall"), and the [Granary](https://masterofmagic.fandom.com/wiki/Granary "Granary") before the [Shrine](https://masterofmagic.fandom.com/wiki/Shrine "Shrine"). (IW152, IW153)
* The AI now buys [Production](https://masterofmagic.fandom.com/wiki/Production "Production") **Production** much less often – the bigger a City, the less likely. (IW155)
* The AI now considers minerals more important when settling. (IW158)
* The AI now abandons continents more readily on smaller *Land Size* settings if it can't attack anything. (IW162)
* The AI will not disband units just because its [Gold](https://masterofmagic.fandom.com/wiki/Gold "Gold") **Gold** or [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** income is negative if it can still afford them for at least 32 turns. (IW164)
* The AI no longer receives a discount on [Town Building](https://masterofmagic.fandom.com/wiki/Town_Building "Town Building") maintenance, regardless of *Difficulty*. (IW167)
* Changed the AI's preference of spell picks at the start of the game
  (also affects the default spells selected for the human player). (IM177)
* The AI is no longer prohibited from selecting [Barbarians](https://masterofmagic.fandom.com/wiki/Barbarians "Barbarians"), [Gnolls](https://masterofmagic.fandom.com/wiki/Gnolls "Gnolls"), [Lizardmen](https://masterofmagic.fandom.com/wiki/Lizardmen "Lizardmen"), or [Orcs](https://masterofmagic.fandom.com/wiki/Orcs "Orcs") as its starting [Race](https://masterofmagic.fandom.com/wiki/Races "Races") on higher *Difficulty* settings. (IM185, reversed in the [Community Patch](https://masterofmagic.fandom.com/wiki/Community_Patch "Community Patch"))
* Changed some of the modifiers that [Retorts](https://masterofmagic.fandom.com/wiki/Retort "Retort") have on the AI's [Personality](https://masterofmagic.fandom.com/wiki/Personality "Personality") and [Objective](https://masterofmagic.fandom.com/wiki/Objective "Objective") selection. (IM198)

## **Gameplay and interface changes**

* The *unit statistics window* now displays bonus [To Hit](https://masterofmagic.fandom.com/wiki/To_Hit "To Hit") **To Hit** and [Defense Roll](https://masterofmagic.fandom.com/wiki/Defense_Roll "Defense Roll") **To Defend** in the top right corner. [To Hit](https://masterofmagic.fandom.com/wiki/To_Hit "To Hit") **To Hit** is no longer listed as a unit ability. (IW001, IW007)
* The budget costs of several creatures as [Rampaging Monsters](https://masterofmagic.fandom.com/wiki/Rampaging_Monsters#Insecticide "Rampaging Monsters") have been altered. (IW002, reversed in the [Community Patch](https://masterofmagic.fandom.com/wiki/Community_Patch "Community Patch")).
* [Triremes](https://masterofmagic.fandom.com/wiki/Trireme "Trireme") and [Galleys](https://masterofmagic.fandom.com/wiki/Galley "Galley") now have a transport capacity of [Ground Movement](https://masterofmagic.fandom.com/wiki/Ground_Movement "Ground Movement")**8**. (IW003)
* Renamed option: "Strategic Combat Only" to "Automatic Combat". (IW009, IW097, IM175, HELP.LBX)
* Removed option: "End of Turn Wait" – it is no longer available. (IW010, IW097, IM175, HELP.LBX)
* Removed option: "Auto Unit Information" – it is now always active. (IW010, IW097, IM175, HELP.LBX)
* Added new option: [Revolting Raiders](https://masterofmagic.fandom.com/wiki/Raiders#v1.40_Changes "Raiders"). (IW010, IW011, IW097, IM175, HELP.LBX)
* Added new option: [Monsters Gone Wild](https://masterofmagic.fandom.com/wiki/Rampaging_Monsters#Insecticide "Rampaging Monsters"). (IW010, IW011, IW097, IM175, HELP.LBX)
* [Rampaging Monsters](https://masterofmagic.fandom.com/wiki/Rampaging_Monster "Rampaging Monster") now start appearing on Turn 40 instead of 50, and will always do so on that turn on all *Difficulties* except "Easy", unless there are no zones eligible to spawn a group. (IW010)
* Changed the dialog when entering an [Encounter Zone](https://masterofmagic.fandom.com/wiki/Encounter_Zone "Encounter Zone") to indicate that there are four or more of the primary guardians present. (IW013)
* Added a hotkey for the "PATROL" button ('L'). (IW014)
* Units stationed on the tile of a [Tower of Wizardry](https://masterofmagic.fandom.com/wiki/Tower_of_Wizardry "Tower of Wizardry") no longer get auto-selected unless their last recorded position is on the active [Plane](https://masterofmagic.fandom.com/wiki/Plane "Plane") or there are no more idle units left there. (IW016)
* Added a hotkey to cycle through the player's Cities ('X') on the *City Screen*. (IW019, IW020)
* Added a hotkey to enter the *Cities* overview screen ('T'). (IW024)
* The strength of direct damage magic during strategic combat was cut
  in half, and the strength of enhancement magic reduced to a third.
  (IW052)
* Reduced the value of effective [Hit Points](https://masterofmagic.fandom.com/wiki/Hit_Points "Hit Points") **Hit Points** both in strategic combat, and in AI threat and targeting priority calculations. (IW053)
* [Resistance](https://masterofmagic.fandom.com/wiki/Resistance#Spell_Save_Penalties "Resistance") **Spell Save** modifiers now apply to [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Life Drain](https://masterofmagic.fandom.com/wiki/Life_Drain "Life Drain")**, [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Death Spell](https://masterofmagic.fandom.com/wiki/Death_Spell "Death Spell")**, and [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Holy Word](https://masterofmagic.fandom.com/wiki/Holy_Word "Holy Word")**. (IW057)
* The Magical Items of fallen Heroes will now be received by the victor after strategic combat. (IW064)
* Added a hotkey for the right icon arrow on the item creation screen (right arrow key). (IW070)
* [Magical Items](https://masterofmagic.fandom.com/wiki/Magical_Item "Magical Item") found in Treasure or received through the Gift [Event](https://masterofmagic.fandom.com/wiki/Event "Event") are no longer themed to the profile of the player they are being awarded to. (IW072)
* [Conjurer](https://masterofmagic.fandom.com/wiki/Conjurer "Conjurer") now rounds maintenance reduction fractions up from .5 instead of always rounding them down. (IW076)
* Units standing on the central tiles of a [Town](https://masterofmagic.fandom.com/wiki/Town "Town") with [City Walls](https://masterofmagic.fandom.com/wiki/City_Walls "City Walls") in combat now receive [Defense](https://masterofmagic.fandom.com/wiki/Defense "Defense") **+3** as though there were intact walls there. (IW082)
* Defending units now get [Defense](https://masterofmagic.fandom.com/wiki/Defense "Defense") **+2** during sieges in strategic combat if the City has either [City Walls](https://masterofmagic.fandom.com/wiki/City_Walls "City Walls") or a [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Wall of Fire](https://masterofmagic.fandom.com/wiki/Wall_of_Fire "Wall of Fire")**. (IW084)
* [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Chaos Channeled](https://masterofmagic.fandom.com/wiki/Chaos_Channels "Chaos Channels")** units can now gain [Experience](https://masterofmagic.fandom.com/wiki/Experience "Experience") **Experience** in battles. (IW090)
* Limited the amount of [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")** spells available for [Spell Research](https://masterofmagic.fandom.com/wiki/Spell_Research "Spell Research") at any given time to at most 3 unless there are no other spells left. (IW100)
* [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Chaos Channels](https://masterofmagic.fandom.com/wiki/Chaos_Channels "Chaos Channels")** can no longer roll Chaos Breath for units with low strength [Thrown Attack](https://masterofmagic.fandom.com/wiki/Thrown_Attack "Thrown Attack") **Thrown Attacks**. (IW102)
* [Merging](https://masterofmagic.fandom.com/wiki/Merging "Merging") now provides immunity to [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Cracks Call](https://masterofmagic.fandom.com/wiki/Cracks_Call "Cracks Call")** (IW106)
* [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Suppress Magic](https://masterofmagic.fandom.com/wiki/Suppress_Magic "Suppress Magic")** no longer counters the [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Spell of Return](https://masterofmagic.fandom.com/wiki/Spell_of_Return "Spell of Return")**. (IW114)
* [Population Growth](https://masterofmagic.fandom.com/wiki/Population_Growth "Population Growth") is no longer reported in Cities with 8,000+ residents. (IW133, reversed in 1.50)
* Reduced the amount of [Gold](https://masterofmagic.fandom.com/wiki/Gold "Gold") **Gold** players need to have for [Magical Items](https://masterofmagic.fandom.com/wiki/Magical_Item "Magical Item")
  to be offered to them by merchants, from triple of the item's value to
  double. The AI now also gets offers. It will always buy the items, and
  pays only half the price. (IW134)
* Neutral Cities now have a higher chance of producing [Town Buildings](https://masterofmagic.fandom.com/wiki/Town_Building "Town Building"), and will always construct the [Builders' Hall](https://masterofmagic.fandom.com/wiki/Builders%27_Hall "Builders' Hall") and the [Granary](https://masterofmagic.fandom.com/wiki/Granary "Granary") before any others. (IW154)
* The left and right arrow keys can now be used to flip pages in the **Apprentice (F3)** spellbook. (IW165)
* Added another hotkey (Space) for the "Quit" button on the Save/Load screen. (IW173)
* Added new *Land Size* setting : "Huge". (IM178, IM180, IM186)
* Renamed *Magic* settings "Weak" to "0.5x", "Normal" to "1.0x", and "Powerful" to "1.5x". (IM178)
* Added new *Magic* settings : "2.0x" and "2.5x". (IM178, removed in the [Community Patch](https://masterofmagic.fandom.com/wiki/Community_Patch "Community Patch"))
* The [encounter budgets](https://masterofmagic.fandom.com/wiki/Encounter_Zone#Encounter_Zone_Budgets "Encounter Zone") for both weak and strong lairs have been increased. (IM187, reversed in the Community Patch).
* Colored Lairs ([Abandoned Keep](https://masterofmagic.fandom.com/wiki/Abandoned_Keep "Abandoned Keep"), [Dungeon](https://masterofmagic.fandom.com/wiki/Dungeon "Dungeon"), [Monster Lair](https://masterofmagic.fandom.com/wiki/Monster_Lair "Monster Lair"), and [Mysterious Cave](https://masterofmagic.fandom.com/wiki/Mysterious_Cave "Mysterious Cave")) now feature [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**Chaos** monsters 50% of the time. 1.31 code is botched and yields [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**Nature** enemies all the time (instead of its intended ratio of 40% [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**Death**, 40% [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**Chaos**, and 20% [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**Nature**). (IM188, replaced with an actual fix in the Community Patch)
* Divisor roll maximum range for secondary monsters in [Encounter Zones](https://masterofmagic.fandom.com/wiki/Encounter_Zone "Encounter Zone")
  reduced by 1 (9-[primary count] instead of 10-[primary count]). Slight
  increase in average secondary monster strength at the cost of a decrease
  in variety. (IM189)
* Neutral [Towns](https://masterofmagic.fandom.com/wiki/Town "Town") start out with up to one more close combat unit at the beginning of the game. (IM192)
* Starting neutral Cities now get a [Granary](https://masterofmagic.fandom.com/wiki/Granary "Granary") at 6 [Population](https://masterofmagic.fandom.com/wiki/Population "Population") instead of at 7, and [Stables](https://masterofmagic.fandom.com/wiki/Stables "Stables") at 7 instead of 8. (IM193)
* The [Research Cost](https://masterofmagic.fandom.com/wiki/Spell_Research#Research_Cost "Spell Research") reduction of the [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Spell of Mastery](https://masterofmagic.fandom.com/wiki/Spell_of_Mastery "Spell of Mastery")** for [Wizards](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") starting the game with 11 [Spellbooks](https://masterofmagic.fandom.com/wiki/Spellbook "Spellbook") of the same [Realm](https://masterofmagic.fandom.com/wiki/Realm "Realm") has been increased from [Research Points](https://masterofmagic.fandom.com/wiki/Research_Points "Research Points") **3,000** to [Research Points](https://masterofmagic.fandom.com/wiki/Research_Points "Research Points") **36,000**. (IM195, reversed in the Community Patch)

## Hotkey changes

* Overland "WAIT" button: 'W' -> Space. (IW012)
* *City Screen* "Ok" button: 'O' -> Space (Escape works regardless). (IW021)
* Close City View window: Escape -> Space. (IW022)
* [Production](https://masterofmagic.fandom.com/wiki/Production "Production") screen "Ok" button: 'O' -> Space. (IW023)
* *Cities* overview screen "Ok" button: 'O' -> Space (Escape works regardless). (IW025)
* *Cities* overview screen scroll up: 'U' -> Up arrow key. (IW026)
* *Cities* overview screen scroll down: 'D' -> Down arrow key. (IW026)
* *Armies Screen* "Ok" button: 'O' -> Space (Escape works regardless). (IW027)
* *Armies Screen* scroll up: 'U' -> Up arrow key. (IW028)
* *Armies Screen* scroll down: 'D' -> Down arrow key. (IW028)
* Close **Mirror (F9)** / Enemy wizard profile window: Escape -> Space. (IW031)
* *Items Screen* "Ok" button: 'O' -> Space (Escape works regardless). (IW032)
* Close **Historian (F4)**: Escape -> Space. (IW033)
* Close **Astrologer (F5)**: Escape -> Space. (IW034)
* **Cartographer (F2)** [Plane](https://masterofmagic.fandom.com/wiki/Plane "Plane") switch button: 'N' -> 'P'. (IW035)
* Close **Cartographer (F2)**: 'C' -> Space (Escape works regardless). (IW036)
* *Magic Screen* "Ok" button: 'O' -> Space (Escape works regardless). (IW037)
* [Alchemy](https://masterofmagic.fandom.com/wiki/Alchemy "Alchemy") window slider reverse: Space -> 'A'. (IW038)
* Alchemy window "Cancel" button: 'C' -> Space (Escape works regardless). (IW039)
* **Surveyor (F1)** "Cancel" button: 'C' -> Space (Escape works regardless). (IW046)
* Item crafting screen "Ok" button: Escape -> 'O'. (IW071)
* Close the **Apprentice (F3)** spellbook: Escape -> Space. (IW166)
* *Settings Screen* "Ok" button: 'O' -> Space (Escape works regardless). (IW168)
* Close **Chancellor (F6)** / *End Turn Summary*: Escape -> Space. (IW169)
* Close the overland spellbook: Escape -> Space. (IW170)
* Overland spellbook previous page: 'B' -> Left arrow key. (IW171)
* Overland spellbook next page: 'F' -> Right arrow key. (IW171)
* Cancel list selection dialogs (without choosing an option): Escape -> Space. (IW172)

## Botched fixes

* Floating Island no longer has [Death Immunity](https://masterofmagic.fandom.com/wiki/Death_Immunity "Death Immunity"), but gains the standard unit flag, displaying its "race" in the *unit statistics window*. Probably unintended. (IW004, fixed in the [Unofficial Patch 1.50](https://masterofmagic.fandom.com/wiki/Unofficial_Patch_1.50 "Unofficial Patch 1.50"))
* Added new *Difficulty* setting: "Extreme" – removed "Intro".
  While this works on a most basic level (e.g. AI resource advantages),
  many finer mechanics were adjusted incorrectly or not at all. (IW005,
  IM178, IM182, IM190, IM191, IM196, IM199)
* The [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Endurance](https://masterofmagic.fandom.com/wiki/Endurance_(Item_Power) "Endurance (Item Power)")** [Item Power](https://masterofmagic.fandom.com/wiki/Magical_Item "Magical Item")
  no longer claims to duplicate the effects of the non-existent
  "Swiftness" spell. But it doesn't refer to the spell it does duplicate
  either. (IW008)
* Casting [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Nature Awareness](https://masterofmagic.fandom.com/wiki/Nature_Awareness "Nature Awareness")** now also automatically casts [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Detect Magic](https://masterofmagic.fandom.com/wiki/Detect_Magic "Detect Magic")**. (IW015, fixed in 1.50)
* The [Gold](https://masterofmagic.fandom.com/wiki/Gold "Gold") **Gold**, [Food](https://masterofmagic.fandom.com/wiki/Food "Food")**Food**, and [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana**
  incomes shown when no army is selected in the overland view no longer
  sometimes list incorrect values once all units have moved for the turn.
  However, they still might before that, and the recalculation causes
  interface lag in the later stages of the game. (IW018)
* The [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Wraithform](https://masterofmagic.fandom.com/wiki/Wraithform_(Item_Power) "Wraithform (Item Power)")** Item Power now grants the expected [Non-Corporeal](https://masterofmagic.fandom.com/wiki/Non-Corporeal "Non-Corporeal") movement. But only if it's on the last [Hero](https://masterofmagic.fandom.com/wiki/Hero "Hero") in the stack, and then it applies to the entire stack. (IW029, fixed in 1.50)
* Looting an [Encounter Zone](https://masterofmagic.fandom.com/wiki/Encounter_Zone "Encounter Zone")
  now reseeds the RNG to the AI turn's seed which, at launch, is a static
  value. This causes all subsequent actions taken in the same order to
  have the exact same random outcome. (IW041, fixed in 1.51)
* The AI is now much less likely to accept diplomatic proposals from
  the leader of an overwhelming invasion force, and much more likely to
  form treaties with a lesser invading empire. This is the opposite of the
  intended behaviour. (IW043, replaced in 1.50)
* The AI is now much more likely to declare war on a rival that has
  superior military on the AI's home continent, and much less against
  minor invaders. This is the opposite of the intended behaviour. (IW043,
  replaced in 1.50)
* Attempting diplomacy with an AI player that currently has no units
  on their home continent now crashes the game. (IW043, replaced in 1.50)
* Dispelling [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Confusion](https://masterofmagic.fandom.com/wiki/Confusion "Confusion")**
  no longer turns its control change effect permanent. But neither does
  it always return control of the unit to the original owner. (IW044)
* Attempted to fix non-building [Engineers](https://masterofmagic.fandom.com/wiki/Engineers "Engineers") reducing the time it takes to construct [Roads](https://masterofmagic.fandom.com/wiki/Roads "Roads"). Unfortunately, this change has no effect. (IW047)
* In strategic combat, all units with [Defense](https://masterofmagic.fandom.com/wiki/Defense "Defense") **50** or less now have the same chance of taking [Damage Points](https://masterofmagic.fandom.com/wiki/Damage_Points "Damage Points") **damage**, regardless of their actual [Defense](https://masterofmagic.fandom.com/wiki/Defense "Defense") score. (IW050)
* The dispel strength enhancement effect of [Runemaster](https://masterofmagic.fandom.com/wiki/Runemaster "Runemaster") now stacks additively with [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Dispel Magic True](https://masterofmagic.fandom.com/wiki/Dispel_Magic_True "Dispel Magic True")** and [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Disenchant True](https://masterofmagic.fandom.com/wiki/Disenchant_True "Disenchant True")** instead of multiplicatively. But only in combat. (IW055, removed in 1.50)
* [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Haste](https://masterofmagic.fandom.com/wiki/Haste "Haste")** is now ignored by the AI when deciding on what to target with [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Dispel Magic](https://masterofmagic.fandom.com/wiki/Dispel_Magic "Dispel Magic")**. Hasted units with no other enchantments are now invalid targets for dispelling. (IW058, IW121)
* There can now only be at most 4 [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Magic Vortices](https://masterofmagic.fandom.com/wiki/Magic_Vortex "Magic Vortex")** summoned in a battle. Except, there was nothing wrong with the original limit of 10. (IW059, MESSAGE.LBX)
* The animation of AI units using the [Doom Bolt Spell](https://masterofmagic.fandom.com/wiki/Doom_Bolt_Spell "Doom Bolt Spell") ability is now misaligned. (IW063, fixed in 1.50)
* The AI is no longer allowed to advance its melee line if it has
  ranged superiority in combat. IW067 prevents the AI from forming a line
  altogether, so this change has no effect. (IW065)
* Added a down arrow button (hotkey: Space) to the item crafting
  screen to exit without creating anything. Removed the right icon arrow
  to do so. (IW070, reversed in the [Community Patch](https://masterofmagic.fandom.com/wiki/Community_Patch "Community Patch"))
* [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Wind Mastery](https://masterofmagic.fandom.com/wiki/Wind_Mastery "Wind Mastery")** now doubles the [Movement Allowance](https://masterofmagic.fandom.com/wiki/Movement_Allowance "Movement Allowance")
  of the caster's ships on the overland map, but no longer affects those
  of other players – creating a discrepancy between overland and combat
  movement, since this change doesn't apply to the latter. (IW077)
* [Weapon Immunity](https://masterofmagic.fandom.com/wiki/Weapon_Immunity "Weapon Immunity") no longer overrides [Missile Immunity](https://masterofmagic.fandom.com/wiki/Missile_Immunity "Missile Immunity"). However, Weapon Immunity now raises [Defense](https://masterofmagic.fandom.com/wiki/Defense "Defense") to [Defense](https://masterofmagic.fandom.com/wiki/Defense "Defense") **50** instead of [Defense](https://masterofmagic.fandom.com/wiki/Defense "Defense") **10** against non-melee attacks. (IW083, fixed in 1.51)
* The AI now considers melee targets that it could exactly reach as unreachable that turn in combat. (IW086, fixed in 1.50)
* Lawful AI [Wizards](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") no longer raze Cities taken from a rival they have a positive [Hidden Relation](https://masterofmagic.fandom.com/wiki/Hidden_Relation "Hidden Relation") towards. But will still do so at the default – and most common – 0 value. (IW094, fixed in 1.50)
* "Overland Spell Events" is now disabled by default. Since this setting has no effect, neither does the change. (IW097, IM179)
* Non-[Famous](https://masterofmagic.fandom.com/wiki/Famous "Famous") players are no longer limited in their [Fame](https://masterofmagic.fandom.com/wiki/Fame "Fame") **Fame** contribution to hiring [Heroes](https://masterofmagic.fandom.com/wiki/Hero "Hero"). Those that do have the [Retort](https://masterofmagic.fandom.com/wiki/Retort "Retort") are still capped to 10% before the existing Hero count adjustment. (IW099)
* Attempted to fix combat-cast [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Spell Lock](https://masterofmagic.fandom.com/wiki/Spell_Lock "Spell Lock")** having no effect against dispelling. Unfortunately, it didn't work. (IW104)
* Attempted to fix [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Invulnerability](https://masterofmagic.fandom.com/wiki/Invulnerability "Invulnerability")** granting immunity against-, and not being possible to dispel in combat. Sadly, it still does, and is not. (IW105)
* [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Possession](https://masterofmagic.fandom.com/wiki/Possession "Possession")** can now be dispelled by its caster to retain control of the unit. (IW105)
* Casting [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Raise Dead](https://masterofmagic.fandom.com/wiki/Raise_Dead "Raise Dead")** or [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Animate Dead](https://masterofmagic.fandom.com/wiki/Animate_Dead "Animate Dead")**
  no longer corrupts memory every time. Unfortunately, they are far from
  safe still, and do prevent accurate reporting of any sound errors
  afterward. (IW107)
* Summoning a [Hero](https://masterofmagic.fandom.com/wiki/Hero "Hero")
  now reseeds the RNG to the AI turn's seed which, at launch, is a static
  value. This causes all subsequent actions taken in the same order to
  have the exact same random outcome. (IW109, IW110, fixed in 1.51)
* Attempted to fix [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Wrack](https://masterofmagic.fandom.com/wiki/Wrack "Wrack")** causing squared [Damage Points](https://masterofmagic.fandom.com/wiki/Damage_Points "Damage Points") **damage**. Introduced a memory curruption bug instead. (IW111)
* The AI is no longer prevented from casting [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Enchant Item](https://masterofmagic.fandom.com/wiki/Enchant_Item "Enchant Item")** or [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Create Artifact](https://masterofmagic.fandom.com/wiki/Create_Artifact "Create Artifact")**.
  However, another change restricts the spells to beyond turn 180, with a
  minuscule chance of ever being selected. (IW113, IW144)
* Fixed the AI looking at the wrong spell Realms for deciding on casting [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Bless](https://masterofmagic.fandom.com/wiki/Bless "Bless")**, [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[True Sight](https://masterofmagic.fandom.com/wiki/True_Sight "True Sight")**, [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Resist Elements](https://masterofmagic.fandom.com/wiki/Resist_Elements "Resist Elements")**, [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Righteousness](https://masterofmagic.fandom.com/wiki/Righteousness "Righteousness")**, or [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Elemental Armor](https://masterofmagic.fandom.com/wiki/Elemental_Armor "Elemental Armor")** in combat. Since the modifier for this is still 0, it ultimately has no effect. (IW117)
* Reduced the AI's chance of trying to cast [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Wall of Stone](https://masterofmagic.fandom.com/wiki/Wall_of_Stone "Wall of Stone")** in battle. Considering it is not even a combat spell, this has no effect. (IW118)
* Reduced the AI's chance of casting [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Wall of Fire](https://masterofmagic.fandom.com/wiki/Wall_of_Fire "Wall of Fire")** in combat. Unfortunately, since it is unable to do so anyway, this change has no effect. (IW118)
* Changed the AI's category for [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Web](https://masterofmagic.fandom.com/wiki/Web "Web")**, [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Iron Skin](https://masterofmagic.fandom.com/wiki/Iron_Skin "Iron Skin")**, [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Counter Magic](https://masterofmagic.fandom.com/wiki/Counter_Magic "Counter Magic")**, [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Guardian Wind](https://masterofmagic.fandom.com/wiki/Guardian_Wind "Guardian Wind")**, [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Warp Wood](https://masterofmagic.fandom.com/wiki/Warp_Wood "Warp Wood")**, [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Disintegrate](https://masterofmagic.fandom.com/wiki/Disintegrate "Disintegrate")**, [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Invulnerability](https://masterofmagic.fandom.com/wiki/Invulnerability "Invulnerability")**, [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Black Prayer](https://masterofmagic.fandom.com/wiki/Black_Prayer "Black Prayer")**, [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Wall of Darkness](https://masterofmagic.fandom.com/wiki/Wall_of_Darkness "Wall of Darkness")**, and [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Wrack](https://masterofmagic.fandom.com/wiki/Wrack "Wrack")**
  to the group originally containing the offensive buffs, which is the
  most independent of the AI's comparison of its own army strength with
  that of the enemy - most of these changes are rather insignificant,
  except that of the two damage spells, which will now no longer be cast
  when the AI is at an overwhelming disadvantage. That is normally a bug.
  (IW119, IW120, IW121)
* The AI can no longer cast [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Flame Strike](https://masterofmagic.fandom.com/wiki/Flame_Strike "Flame Strike")**, [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Holy Word](https://masterofmagic.fandom.com/wiki/Holy_Word "Holy Word")**, [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Death Spell](https://masterofmagic.fandom.com/wiki/Death_Spell "Death Spell")**, [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Banish](https://masterofmagic.fandom.com/wiki/Banish "Banish")**, [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Word of Death](https://masterofmagic.fandom.com/wiki/Word_of_Death "Word of Death")**, [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Creature Binding](https://masterofmagic.fandom.com/wiki/Creature_Binding "Creature Binding")** or [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Possession](https://masterofmagic.fandom.com/wiki/Possession "Possession")** when it is at an overwhelming disadvantage. (IW120)
* The AI can no longer cast [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Dispel Magic](https://masterofmagic.fandom.com/wiki/Dispel_Magic "Dispel Magic")** or [Sorcery](https://masterofmagic.fandom.com/wiki/Sorcery "Sorcery")**[Dispel Magic True](https://masterofmagic.fandom.com/wiki/Dispel_Magic_True "Dispel Magic True")** if the human player has [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Holy Arms](https://masterofmagic.fandom.com/wiki/Holy_Arms "Holy Arms")** active. (IW121)
* Attempted to improve how the AI disbands obsolete units. Now it
  dismisses up to 2 random units from each city garrison every 20 turns
  starting on the 80th, and will almost never disband anything else.
  (IW126)
* Cities can no longer gain [Population](https://masterofmagic.fandom.com/wiki/Population "Population") if already above the maximum. Except, now they can't lose any eihter. (IW127, fixed in 1.50)
* Attempted to allow Cities keeping excess Population when growing by a
  unit of 1,000. Unfortunately, it doesn't work. (IW132, corrected in
  1.50)
* Attempted to fix the AI not allocating the intended amount of [Power](https://masterofmagic.fandom.com/wiki/Power "Power") **Power** towards [Spell Research](https://masterofmagic.fandom.com/wiki/Spell_Research "Spell Research") while researching the [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Spell of Mastery](https://masterofmagic.fandom.com/wiki/Spell_of_Mastery "Spell of Mastery")**. It still won't. (IW135)
* The AI now overallocates [Power](https://masterofmagic.fandom.com/wiki/Power "Power") **Power** by 10%, typically resulting in less [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** than planned. (IW135)
* The AI can no longer set a [Tax Rate](https://masterofmagic.fandom.com/wiki/Tax_Rate "Tax Rate") lower than 30%. (IW138)
* The AI no longer cares about [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** reserves or income when deciding to cast the [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Spell of Mastery](https://masterofmagic.fandom.com/wiki/Spell_of_Mastery "Spell of Mastery")**. (IW142)
* The AI now considers summoning spirits to [Meld](https://masterofmagic.fandom.com/wiki/Meld "Meld") with [Nodes](https://masterofmagic.fandom.com/wiki/Nodes "Nodes") more important. But still not competitive with late game summons. (IW144)
* The AI now has different priorities for choosing [Unit Enchantments](https://masterofmagic.fandom.com/wiki/Unit_Enchantment "Unit Enchantment"). Not necessarily better ones, unfortunately. (IW144)
* The AI now cancels its [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Evil Omens](https://masterofmagic.fandom.com/wiki/Evil_Omens "Evil Omens")** immediately after casting it. (IW145)
* The AI can no longer override [Trade Goods](https://masterofmagic.fandom.com/wiki/Trade_Goods "Trade Goods") and [Housing](https://masterofmagic.fandom.com/wiki/Housing "Housing") projects with unit production. (IW153)
* The AI can no longer produce [Settlers](https://masterofmagic.fandom.com/wiki/Settlers "Settlers") in Cities with less than 4 [Population](https://masterofmagic.fandom.com/wiki/Population "Population") regardless of any other factors. (IW153)
* The AI can no longer create more than 3 ships altogether. (IW153)
* The AI now keeps up to 33% less units in garrisons, yet does not get
  any better at building stacks due to other, unnoticed bugs. (IW157)
* AI [Settlers](https://masterofmagic.fandom.com/wiki/Settlers "Settlers") no longer have a chance to ignore nearby non-own units when trying to create an [Outpost](https://masterofmagic.fandom.com/wiki/Outpost "Outpost").
  Instead, they now have a chance to override targeting to try to go to a
  new colony, wasting between 1 to 11 turns doing nothing. (IW158)
* AI [Settlers](https://masterofmagic.fandom.com/wiki/Settlers "Settlers") on the tile of a [Tower of Wizardry](https://masterofmagic.fandom.com/wiki/Tower_of_Wizardry "Tower of Wizardry") now prevent that Tower from being considered as a gateway for Settlers on either side. (IW158)
* Single-tile lakes no longer allow building the [Shipwrights' Guild](https://masterofmagic.fandom.com/wiki/Shipwrights%27_Guild "Shipwrights' Guild"), show up on the *cityscape* as [Rivers](https://masterofmagic.fandom.com/wiki/River "River"), and the **Surveyor (F1)** no longer converts their River inflow to a [River Mouth](https://masterofmagic.fandom.com/wiki/River_Mouth "River Mouth"). They are now also valid [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Plane Shift](https://masterofmagic.fandom.com/wiki/Plane_Shift "Plane Shift")** targets for land-only AI units. (IW159)
* Attempted to ensure AI hostility towards anyone casting the [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Spell of Mastery](https://masterofmagic.fandom.com/wiki/Spell_of_Mastery "Spell of Mastery")**. Unsuccessfully. (IW160)
* Attempted to fix the AI not being able to load its units into transport ships. It works slightly more often now. (IW161)
* The AI now considers the human player's garrisons 4 times weaker than they actually are. (IW163)
* The AI can now attack the [Cities](https://masterofmagic.fandom.com/wiki/Town "Town") of any player it feels hostile towards, not just those it is at war with. (IW163)
* Increased the required [Maximum Population](https://masterofmagic.fandom.com/wiki/Maximum_Population "Maximum Population") for starting [Fortress](https://masterofmagic.fandom.com/wiki/Fortress "Fortress")
  locations from 8 to 11. Unfortunately, this increases the chance of the
  map generator freezing, particularly on smaller maps. (IM183, reversed
  in 1.50)
* Narrowed the range of Y coordinates in which starting [Cities](https://masterofmagic.fandom.com/wiki/Town "Town")
  can be placed. However, combined with IM183, this has no practical
  positive effect, but decreases the average distance between capitals,
  and increases the chance of map generation failure. (IM184)
* Cities on [Myrror](https://masterofmagic.fandom.com/wiki/Myrror "Myrror") now correctly have Enchanted [Roads](https://masterofmagic.fandom.com/wiki/Roads "Roads") on their tile. But so does every [Town](https://masterofmagic.fandom.com/wiki/Town "Town") on [Arcanus](https://masterofmagic.fandom.com/wiki/Arcanus "Arcanus"). (IM194, fixed in 1.50)

## Other

* Made it possible to alter the [Resistance](https://masterofmagic.fandom.com/wiki/Resistance "Resistance") penalty of spells with an original penalty of **0** in the [Real-Time Game Tweaker](https://www.realmsbeyond.net/forums/showthread.php?tid=3657). (IW060)