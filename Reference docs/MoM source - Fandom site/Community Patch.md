[Slitherine's Master of Magic launcher allows playing separate copies of v1.31 and the Community Patch, as well as Caster of Magic if purchased.](https://static.wikia.nocookie.net/masterofmagic/images/6/66/MoM_Launcher.png/revision/latest?cb=20200226000017)

Slitherine's *Master of Magic* launcher allows playing separate copies of v1.31 and the **Community Patch**, as well as *Caster of Magic* if purchased.



The *Master of Magic* **Community Patch** is a collaboration between the current owner of the *Master of Magic* franchise, [Slitherine Software UK Limited](https://en.wikipedia.org/wiki/Slitherine_Software), and the creators of the [Unofficial Patches v1.50 and v1.51](https://masterofmagic.fandom.com/wiki/Unofficial_Patch_1.50 "Unofficial Patch 1.50"). Unlike [Insecticide](https://masterofmagic.fandom.com/wiki/Insecticide "Insecticide")
and the aforementioned two, it is an official release, included with
all new purchases of the game along with the last version produced by
Simtex, v1.31. The current version number of the patch is 1.60.

While the **Community Patch**
is based on, and can be considered the continuation of, the previous
unofficial versions, a number of default feature changes have been
either removed entirely or made optional to provide a game experience
closer to the last Simtex version. Most notably, [Encounter Zone](https://masterofmagic.fandom.com/wiki/Encounter_Zone "Encounter Zone") and [Treasure](https://masterofmagic.fandom.com/wiki/Treasure "Treasure")
generation has been almost completely reverted to its v1.31 state;
players can once again gain half of their opponent's remaining [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** crystals when conquering their [Fortress](https://masterofmagic.fandom.com/wiki/Fortress "Fortress");
and the keyboard shortcuts to activate certain GUI elements are no
longer different than the original's. See below for a detailed list.

In addition to keeping up with the habit of trying to make each change individually reversible, the **Community Patch**
breaks up the previously single-file Insecticide, allowing all of its
changes to also be applied or removed separately. However, it should be
noted that some fixes and improvements do depend on earlier or more
generic ones, which can still prevent them from being reverted on their
own.

As noted above, the **Community Patch** is bundled with all new purchases of the game. It is also available freely through a [Differential Updater](https://www.realmsbeyond.net/forums/showthread.php?tid=10492),
although it should be noted that in this case, no documentation or
individual patches are included – instead, the player is referred to
this wiki for change logs, while components are only possible to remove
separately if their relevant text files can be obtained through other
means.

## Change Log

### v1.60

#### World

* The map generator now uses a more appropriate full-cycle [feedback function](https://en.wikipedia.org/wiki/Linear-feedback_shift_register) for generating random numbers.
* [Towers of Wizardry](https://masterofmagic.fandom.com/wiki/Tower_of_Wizardry "Tower of Wizardry")
  now connect to land on both-, but at least one end whenever possible,
  without spawning closer to each other than absolutely necessary
  (reverses and obsoletes 009).
* Towers of Wizardry are now again always at least 4 tiles away from magical Nodes.
* Magical [Nodes](https://masterofmagic.fandom.com/wiki/Node "Node") are now created on land whenever possible (replaces 012).
* The map generator now places mandatory objects (starting cities,
  towers, nodes, and encounters) on the map in a most restrictive to least
  restrictive order by default. However, it is also possible to force it
  into "legacy mode", where the objects are placed using the 1.31 order,
  observing the original mechanics. Triggering this mode has the following
  requirements: the *Custom Worlds*, *Old Node Generator*, and *Old Tower generator* *patch features* must be enabled and, on both Planes if applicable, *Land Tiles* have to be at least 360, *Continent Size Limit* must be zero, *Single Continent* needs to be off, *Terrain Height* must be Low or Normal, and all of *Tundra Reach*, *Max Swamps*, and *Max Deserts* have to be 8 or lower. Any other features and settings may be freely adjusted.
* [Encounter Zones](https://masterofmagic.fandom.com/wiki/Encounter_Zone "Encounter Zone")
  are again not allowed to be adjacent to each other, unless this is
  required to finish creating the map (reverses and obsoletes 014).
* Encounter Zones are no longer created adjacent to starting [Cities](https://masterofmagic.fandom.com/wiki/Town "Town").
* Nodes, Towers, and islands created by them can no longer sometimes merge into the polar caps.
* [Rivers](https://masterofmagic.fandom.com/wiki/River "River") no longer sometimes end abruptly with no outflow tiles.
* [Tundra](https://masterofmagic.fandom.com/wiki/Tundra "Tundra") tiles adjacent to rivers now always have the correct terrain transitions (obsoletes 800).
* Starting Cities can no longer occasionally have a [Maximum Population](https://masterofmagic.fandom.com/wiki/Maximum_Population "Maximum Population") lower than 5.
* [High Elf](https://masterofmagic.fandom.com/wiki/High_Elves "High Elves") starting Cities are now always on [Forest](https://masterofmagic.fandom.com/wiki/Forest "Forest") tiles (replaces 594).
* Neutral Cities no longer ignore Maximum Population imposed by terrain (obsoletes 521).
* [Barbarian Spearmen](https://masterofmagic.fandom.com/wiki/Barbarian_Spearmen "Barbarian Spearmen") can now appear as initial units in neutral garrisons.
* [Halfling](https://masterofmagic.fandom.com/wiki/Halflings "Halflings"), [Beastmen](https://masterofmagic.fandom.com/wiki/Beastmen "Beastmen"), and [Nomad](https://masterofmagic.fandom.com/wiki/Nomads "Nomads")
  neutral Cities no longer start with bigger garrisons than intended when
  their population is above a certain treshold (reverses IM192).
* [Dark Elf](https://masterofmagic.fandom.com/wiki/Dark_Elves "Dark Elves") neutral Cities no longer start with smaller garrisons than intended (obsoletes IM192).
* Encounters eligible for two picks' worth of [special treasure](https://masterofmagic.fandom.com/wiki/Treasure#Specials "Treasure") no longer sometimes only yield one.
* Randomly generated [Magical Items](https://masterofmagic.fandom.com/wiki/Magical_Item "Magical Item") now always have the intended amount Powers.
* Restored the 1.31 mechanics for generating [Raiders](https://masterofmagic.fandom.com/wiki/Raiders "Raiders") and [Rampaging Monsters](https://masterofmagic.fandom.com/wiki/Rampaging_Monster "Rampaging Monster"),
  with the exception of an upward shift of Impossible in Difficulty-based
  formulae (it being replaced by Extreme). All other changes introduced
  in the unofficial patches have been rolled into *Revolting Raiders* and *Monsters Gone Wild*. However, do note that these are now *patch features*, and must be set when creating the game. They can no longer be toggled in ongoing campaigns.
* Starting or loading an Easy *Difficulty* game no longer prevents Random [Events](https://masterofmagic.fandom.com/wiki/Event "Event") from occurring, possibly turning off the related setting globally as well (bug introduced in v1.40).

#### Combat

* Normal *Difficulty* no longer incorrectly allows fleeing combat with no losses (bug introduced in v1.40).

#### Wizards

* Finding the [Famous](https://masterofmagic.fandom.com/wiki/Famous "Famous") Retort in [Treasure](https://masterofmagic.fandom.com/wiki/Treasure "Treasure") now correctly awards its [Fame](https://masterofmagic.fandom.com/wiki/Fame "Fame") **10**.
* Finding the [Artificer](https://masterofmagic.fandom.com/wiki/Artificer "Artificer") Retort in Treasure now awards the corresponding [Item Crafting](https://masterofmagic.fandom.com/wiki/Item_Crafting "Item Crafting") spells if not known already.
* [Divine Power](https://masterofmagic.fandom.com/wiki/Divine_Power "Divine Power") and [Infernal Power](https://masterofmagic.fandom.com/wiki/Infernal_Power "Infernal Power") are now correctly prevented from being awarded to [Wizards](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") possessing opposite [Spellbooks](https://masterofmagic.fandom.com/wiki/Spellbook "Spellbook").

#### Spells

* Retorts that decrease the [Casting Cost](https://masterofmagic.fandom.com/wiki/Casting_Cost "Casting Cost") of crafting spells no longer make those spells easier to counter.

#### AI

* Computer players no longer occasionally start the game with more than 6 [Retorts](https://masterofmagic.fandom.com/wiki/Retort "Retort").
* Computer players are no longer prevented from disbanding obsolete
  units for several turns when a game is loaded from the main menu.

#### User Interface

* Corrected the casting cost of [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Bless](https://masterofmagic.fandom.com/wiki/Bless "Bless")** in the context-based help.
* The error prompts on the [Wizard](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") customization screen are now consistent in their display, and no longer sometimes cause graphic glitches when clicked away.
* The "Custom" Wizard button is now framed correctly.
* [Cities](https://masterofmagic.fandom.com/wiki/Town "Town") can now be renamed from the *City Screen*.
* Cities can now be cycled through from the *City Screen*.
* Having exactly 12, 18, or 24 active enchantments on a City no longer
  prevents upward scrolling from wrapping to the last page of them.
* The [Food](https://masterofmagic.fandom.com/wiki/Food "Food")**Food**, [Gold](https://masterofmagic.fandom.com/wiki/Gold "Gold") **Gold**, and [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** income displays of the main overland view now always show accurate values.
* Having no units selected in the main overland view no longer causes a
  drop in frame rate and responsiveness in the later stages of the game
  (bug introduced in v1.40).
* The quick save function no longer uses the same slot as the auto save.
* The game no longer sometimes fails to re-select a stack from which a unit used the [Meld](https://masterofmagic.fandom.com/wiki/Meld "Meld") or Build ([Outpost](https://masterofmagic.fandom.com/wiki/Outpost "Outpost")) commands.
* Units with no moves remaining can no longer be given movement orders using the opposite [Plane](https://masterofmagic.fandom.com/wiki/Plane "Plane").
* Trying to assign an invalid destination to an already finished (out of moves) army no longer deselects that army.
* Clicking the Plane button during spell targeting no longer deselects the active stack, if any.
* Receiving a [pick reward](https://masterofmagic.fandom.com/wiki/Treasure#Specials "Treasure") no longer prevents the last list separator from being added to the Treasure text.
* Trying to issue a build order to [Engineers](https://masterofmagic.fandom.com/wiki/Engineers "Engineers") while viewing the opposite Plane now automatically centers on them instead.
* Non-selected Engineers no longer count into the build time
  prediction when planning a Road, unless they are already building on the
  origin tile.
* The **Surveyor (F1)**, **Cartographer (F2)**, **Apprentice (F3)**, **Historian (F4)**, and **Astrologer (F5)** advisors, as well as the *Mirror*, the combat-, and the overland spellbooks may now also be closed with the same key bindings that are used to open them.
* The [item creation](https://masterofmagic.fandom.com/wiki/Item_Crafting "Item Crafting") screen now features context-based help.
* Deleting the item name during creation now always assigns a new default.
* Pressing both mouse buttons at the same time will no longer trigger inappropriate interface elements.
* The mouse pointer no longer snaps to interface elements triggered through a key binding. This behaviour is now optional instead.
* The directional keys no longer snap the mouse pointer to interface
  elements in the indicated direction. This behaviour is now optional
  instead.
* Pressing a key that can't be interpreted by the game will no longer snap the mouse pointer to inappropriate interface elements.
* Ctrl + key press combinations are no longer misinterpreted by the game as other input.
* Interface elements with an assigned key binding are no longer ignored by the (now legacy) mouse pointer movement functionality.
* Right-clicking during a confirmation dialog no longer triggers
  context- based help on the screen behind it (causing a crash when the
  dialog is then closed on certain screens).
* Ability help trigger areas no longer overlap in the hiring dialogs.
* The *game settings screen* is now multi-page, and highlights the option being moused over.

:   :   * Restored the **End of Turn Wait** setting (removed in v1.40).
        * Restored the **Auto Unit Information** setting (removed in v1.40).
        * Restored the **Show Node Owners** setting (removed in v1.50).
        * Reverted "Automatic Combat" to the original **Strategic Combat Only**.
        * The **Backup Saves** setting now has the appropriate help text.
        * "[Revolting Raiders](https://masterofmagic.fandom.com/wiki/Raiders#v1.40_Changes "Raiders")" is now a *patch feature* instead of a game setting.
        * "[Monsters Gone Wild](https://masterofmagic.fandom.com/wiki/Rampaging_Monster#Insecticide "Rampaging Monster")" is now a *patch feature* instead of a game setting.
        * Added setting: **Allow Duplicate Keys** - binding a key that is already in use on the same screen does not remove the previous binding.
        * Added setting: **Legacy Pointer Movement** - restores mouse
          pointer movement to key-activated interface elements, and directional
          snapping to adjacent controls using the legacy bindings.
        * Added setting: **Screen Edge Scrolling** - moving the mouse to an edge of the screen scrolls the main overland map in that direction.
        * Added setting: **Edge Scroll Delay** - adds a short delay between moving the mouse to a screen edge and the start of scrolling.
        * Added setting: **More Random Items** - half of all items are
          created from scratch instead of using defaults, and items created this
          way have access to the full range of Item Powers, not just attribute
          increases.

* Added a key binding interface. It can be reached from the *game settings screen*.

:   :   * All of the original non-debug hotkeys have been
          re-implemented as dynamic bindings, with the exceptions of the 'A' key
          used to accept Hero offers, which has been merged into the generic
          "Ok/Yes/Accept" bindings instead; and the 'N' key used to switch planes
          in the Cartographer, which now uses the overland view's switch plane
          ("Plane" button) binding.
        * Added key binding: "Quick Load" (overland) - loads from the quick save slot (SAVE10.GAM).
        * Added key binding: "Quit Without Saving" (overland) - exits without preforming an auto / continue save.
        * Added key binding: "Default Item Editor" (overland) - invokes an in-game default item editor (replaces [ITEMMAKE.EXE](https://masterofmagic.fandom.com/wiki/Magical_Item#ITEMMAKE "Magical Item")).
        * Added key bindings: "Find Next / Previous Army" (overland) - cycyles
          the view through the player's non- garrison armies (no selection is
          made).
        * Added key bindings: "Save / Recall Location" (overland) - stores and
          recalls up to 8 map locations that are also saved with the game.
        * Added key bindings: "Next / Previous City" (overland) - cycles the view through the player's cities (without entering them).
        * Added key bindings: "Scroll Map Up / Down / Left / Right" (overland) - scrolls the overland map in the indicated direction.
        * Added key bindings: "Next / Previous Control" (interface) - cycles
          through the visible interface elements in a non-directional fashion (by
          index).

#### Sound

* Playing event music or changing the background track no longer sometimes causes persistent glitches in the synthesizer.
* The "Good Event" and "Building Complete" music tracks no longer loop indefinitely.
* The negative [Food](https://masterofmagic.fandom.com/wiki/Food "Food")**Food** upkeep dialog is no longer missing its event music.

#### Patch Features

* Added a "Patch" button to the *New Game Menu* that opens an interface for enabling and disabling *patch features*.

:   :   * Added an optional "Last" button to the *New Game Menu* that allows quickstarting a game with the last used [Wizard](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") profile.
        * Added patch feature: "*Custom Worlds*" - toggles the availability of the map generator customizer.
        * Added patch feature: "*Different Planes*" - toggles whether map generation is customized globally or per-[Plane](https://masterofmagic.fandom.com/wiki/Plane "Plane").
        * Added patch feature: "*Last Profile Reload*" - toggles the availability of the "Last" button.
        * Added patch feature: "*Load Last Banner*" - toggles whether the "Last" button stops on the banner selection screen or not.
        * Added patch feature: "*No AI Race Restriction*" - toggles the high difficulty [Arcanus](https://masterofmagic.fandom.com/wiki/Arcanus "Arcanus") AI race restrictions (obsoletes 757REV and the optional IM185).
        * Added patch feature: "*v1.51 Treasure*" - toggles v1.51 budget and [treasure rules](https://masterofmagic.fandom.com/wiki/Encounter_Zone#Treasure_Types "Encounter Zone") (obsoletes 777REV and the optional TREASURE.TXT).
        * Added patch feature: "*Extra Node Power*" - toggles +1 [Node Power](https://masterofmagic.fandom.com/wiki/Node#Node_Power_Output "Node") per tile of influence (obsoletes 768REV and the optional IM181).
        * Added patch feature: "*No Double Towers*" - prevents any two [Towers of Wizardry](https://masterofmagic.fandom.com/wiki/Tower_of_Wizardry "Tower of Wizardry") within 10 tiles from connecting to the same continents.
        * Added patch feature: "*Common Elves*" - removes the restrictions on using [High Elves](https://masterofmagic.fandom.com/wiki/High_Elves "High Elves") as a neutral Race.
        * Added patch feature: "*More Precise Neutrals*" - allows scaling the distance requirement between neutral [Cities](https://masterofmagic.fandom.com/wiki/Town "Town") and [Encounter Zones](https://masterofmagic.fandom.com/wiki/Encounter_Zone "Encounter Zone") based on *Land Size*.
        * Added patch feature: "*Old Tower Generator*" - disables land-enforcement of Towers of Wizardry, reverting to their original placement mechanics.
        * Added patch feature: "*Old Node Generator*" - disables land-enforcement of magical Nodes, reverting to their original placement mechanics.
        * Added patch feature: "*Life And Death*" - [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Life](https://masterofmagic.fandom.com/wiki/Life "Life")** and [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Death](https://masterofmagic.fandom.com/wiki/Death "Death")** [Spellbooks](https://masterofmagic.fandom.com/wiki/Spellbook "Spellbook") are not mutually exclusive.
        * Added patch feature: "*2-Pick Myrran*" - the [Myrran](https://masterofmagic.fandom.com/wiki/Myrran "Myrran") [Retort](https://masterofmagic.fandom.com/wiki/Retort "Retort") costs only 2 picks.
        * Added patch feature: "*Non-11 Book Matching*" - if you don't start with [11 books](https://masterofmagic.fandom.com/wiki/11-Book_Strategy "11-Book Strategy") in the same [Realm](https://masterofmagic.fandom.com/wiki/Realm "Realm"), neither will the computer players.
        * Added patch feature: "*More 11-Book AIs*" - increases the odds of the computer players starting with 11 books in the same Realm.
        * Added patch feature: "*Strict Retort Reqs*" - Computer players must obey the Spellbook requirements for selecting Retorts. So does [treasure](https://masterofmagic.fandom.com/wiki/Treasure#Specials "Treasure"), however.
        * Added patch feature: "*No Snow Swimming*" - [Water Movement](https://masterofmagic.fandom.com/wiki/Water_Movement "Water Movement")**Swimming** units don't move cheaper across [Tundra](https://masterofmagic.fandom.com/wiki/Tundra "Tundra") tiles than ground units.
        * Added patch feature: "*No Deep Tundra*" - All-surround Tundra tiles have the same [movement costs](https://masterofmagic.fandom.com/wiki/Movement_Allowance "Movement Allowance") as all other Tundra tiles.
        * Added patch feature: "*Mountains Of Grass*" - [Mountaineers](https://masterofmagic.fandom.com/wiki/Mountaineer "Mountaineer") don't suffer a movement penalty when crossing [Grasslands](https://masterofmagic.fandom.com/wiki/Grassland "Grassland").
        * Added patch feature: "*Lesser Hero Powerup*" - Less useful [Heroes](https://masterofmagic.fandom.com/wiki/Hero "Hero") gain additional [Random Abilities](https://masterofmagic.fandom.com/wiki/Random_Abilities "Random Abilities"). The [Healer](https://masterofmagic.fandom.com/wiki/Serena_the_Healer "Serena the Healer") and [Golden One](https://masterofmagic.fandom.com/wiki/Aureus_the_Golden_One "Aureus the Golden One") can equip staves.
        * Added patch feature: "*v1.51 Default Relations*" - [Starting Relations](https://masterofmagic.fandom.com/wiki/Starting_Relation "Starting Relation") are set using the 1.50/1.51 formula.
        * Added patch feature: "*Item Theming*" - Restores the Spellbook requirements of [Magical Item](https://masterofmagic.fandom.com/wiki/Magical_Item "Magical Item") rewards (removed in v1.40 and v1.50).
        * Added patch feature: "*Cheaper Misc Stats*" - Attribute boost Item Powers don't cost twice as much on [miscellaneous items](https://masterofmagic.fandom.com/wiki/Magical_Item#Miscellaneous_Items "Magical Item") than on weapons and armor.
        * Added patch feature: "*Five Power Items*" - Increases the number of [Powers](https://masterofmagic.fandom.com/wiki/Magical_Item#Reference_List_of_Item_Powers "Magical Item") that can be imbued into items to 5.
        * Added patch feature: "*Charge Any Weapon*" - Allows [Spell Charges](https://masterofmagic.fandom.com/wiki/Spell_Charges_(Item_Power) "Spell Charges (Item Power)") to be imbued into any type of weapon, not just [Staves](https://masterofmagic.fandom.com/wiki/Staff "Staff") and [Wands](https://masterofmagic.fandom.com/wiki/Wand "Wand").
        * Added patch feature: "*Better Failed Rewards*" - Failed specials award the discarded budget's worth of Treasure, failed spells and prisoners are replaced with [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** and [Gold](https://masterofmagic.fandom.com/wiki/Gold "Gold") **Gold** respectively, and [finding nothing](https://masterofmagic.fandom.com/wiki/Treasure#Failed_Prisoners "Treasure") in treasure is no longer possible.
        * Added patch feature: "*Adamant Alchemy*" - the [Alchemy](https://masterofmagic.fandom.com/wiki/Alchemy_(Retort) "Alchemy (Retort)") Retort costs 2 picks, but also allows using [Mithril](https://masterofmagic.fandom.com/wiki/Mithril_Ore "Mithril Ore") and [Adamantium Ores](https://masterofmagic.fandom.com/wiki/Adamantium_Ore "Adamantium Ore").

* Added an optional "World" button to the *New Game Menu* that opens an interface for altering additional map settings.

:   :   * Added map setting: "*Land Tiles*" - controls the amount of land tiles to be generated (obsoletes IM186).
        * Added map setting: "*Max Continent Size*" - sets out how big each continent or island can be (replaces 547).
        * Added map setting: "*Single Continent*" - forces the creation of a single continent.
        * Added map setting: "*Inland Lakes*" - controls whether inland lakes can appear on the map or not (replaces 480).
        * Added map setting: "*Terrain Height*" - controls the ratio of [Grasslands](https://masterofmagic.fandom.com/wiki/Grassland "Grassland") vs [Hills](https://masterofmagic.fandom.com/wiki/Hill "Hill")/[Mountains](https://masterofmagic.fandom.com/wiki/Mountain "Mountain").
        * Added map setting: "*Dynamic Elevations*" - forces the base terrain ratio to be that of a Medium Land Size map.
        * Added map setting: "*Polar Caps*" - allows removing the polar [Tundra](https://masterofmagic.fandom.com/wiki/Tundra "Tundra") caps.
        * Added map setting: "*Tundra Reach*" - controls how far from the top and bottom Tundra tiles can appear.
        * Added map setting: "*Max Desert Regions*" - controls the amount of [Desert](https://masterofmagic.fandom.com/wiki/Desert "Desert") regions the game will try to create.
        * Added map setting: "*Max Swamp Patches*" - controls the amount of [Swamp](https://masterofmagic.fandom.com/wiki/Swamp "Swamp") regions the game will try to create.
        * Added map setting: "*Max Rivers*" - controls the amount of [Rivers](https://masterofmagic.fandom.com/wiki/River "River") the map generator will try to create.
        * Added map setting: "*All-Terrain Rivers*" - allows Rivers to be created over Hills, Mountains, and Deserts.
        * Added map setting: "*Non-Grass Islands*" - controls whether Node and Tower isle expansions can feature non-Grassland terrain by default.
        * Added map setting: "*Capital Pop Priority*" - controls the importance of starting locations' [food availability](https://masterofmagic.fandom.com/wiki/Maximum_Population "Maximum Population") versus mutual distance (obsoletes IM183, IM184, 010, and 791).
        * Added map setting: "*Capital Roads*" - allows starting [cities](https://masterofmagic.fandom.com/wiki/Town "Town") to be connected to the initial neutral [road network](https://masterofmagic.fandom.com/wiki/Roads "Roads").
        * Added map setting: "*Max Road Length*" - controls the maximum distance over which initial Roads can span.
        * Added map setting: "*Mineral Density*" - controls the amount of [Terrain Specials](https://masterofmagic.fandom.com/wiki/Terrain_Special "Terrain Special") placed by the map generator.
        * Added map setting: "*Mineral Quality*" - controls the quality of [Minerals](https://masterofmagic.fandom.com/wiki/Mineral "Mineral") placed by the map generator.
        * Added map setting: "*High Value Nodes*" - forces [Nodes](https://masterofmagic.fandom.com/wiki/Node "Node") to always use the "1.5x" *Magic* setting [budgets](https://masterofmagic.fandom.com/wiki/Encounter_Zone#Encounter_Zone_Budgets "Encounter Zone") for encounters and [Treasure](https://masterofmagic.fandom.com/wiki/Treasure "Treasure").
        * Added map setting: "*Tower Budget X*" - increases the encounter budgets of [Towers of Wizardry](https://masterofmagic.fandom.com/wiki/Tower_of_Wizardry "Tower of Wizardry").
        * Added map setting: "*Strong Lair Budget X*" - increases the encounter budgets of strong lairs.
        * Added map setting: "*Weak Encounter Budget X*" - increases the encounter budgets of weak lairs.
        * Added map setting: "*Monster Lair Realms*" - controls which Realms of creatures can appear in ["colored" lairs](https://masterofmagic.fandom.com/wiki/Encounter_Zone##Weak_and_Normal_Lairs "Encounter Zone") (obsoletes IM188 and 778).
        * Added map setting: "*Encounter Diversity*" - controls the possible amount of variety in [encounter guardians](https://masterofmagic.fandom.com/wiki/Encounter_Zone#Defenders "Encounter Zone") (obsoletes IM189, 015, and 779).
        * Added map setting: "*Max Neutral Cities*" - controls the amount of neutral Cities the map generator will attempt to create (obsoletes the optional 026).
        * Added map setting: "*Neutral Population*" - controls the starting population ranges of neutral Cities.
        * Added map setting: "*Advanced Neutrals*" - allows neutral cities to start with more advanced [buildings](https://masterofmagic.fandom.com/wiki/Town_Building "Town Building") (obsoletes IM193).

#### Other

* Fixed several graphics engine bugs that had no effect on the vanilla game, but may impact modded ones.
* Slightly reduced the game's conventional memory footprint. It should
  now be possible to run native with sound on most Windows XP desktop
  computers, as well as notebooks that allow writing to base memory
  segment $E000 (i.e. no onboard device ROM is mapped there, or they can
  be disabled).
* [ITEMMAKE.EXE](https://masterofmagic.fandom.com/wiki/Magical_Item#ITEMMAKE "Magical Item")
  is no longer supported. A feature-complete in-game editor is provided
  instead. At the same time, the game will now auto-correct all the known
  bugs created by ITEMMAKE on load, so it can still be used if desired, it
  just won't get any updates.
* The IW009, IW010, IW011, IW012, IW014, IW015, IW016, IW018, IW019,
  IW020, IW021, IW022, IW023, IW024, IW025, IW026, IW027, IW028, IW029,
  IW031, IW032, IW033, IW034, IW035, IW036, IW037, IW038, IW039, IW041,
  IW046, IW071, IW072, IW097, IW113, IW165, IW166, IW168, IW169, IW170,
  IW171, IW172, IW173, IM175, IM176, IM179, IM181, IM183, IM184, IM185,
  IM186, IM187, IM188, IM189, IM190, IM191, IM192, IM193, IM194, IM200,
  M003, M004, M005, M006, M009, M010, M012, M013, M014, M015, M016, M017,
  M018, M019, M020, M021, M022, M023, M024, M025, M026, M027, M031, W044,
  W053, W054, W134, W135, W178, W270, W325, W352, W364, M442, M475, M480,
  M484, W520, M521, M537, M547, M594, M659, W735, W748, W753, W756, M757,
  W761, M763, M768, W776, M777, M778, M779, M788, M790, M791, M800, W795,
  W798, HOTKEY.TXT, and TREASURE.TXT patches are now obsolete and can no
  longer be applied or removed. In addition, IM178, IM180, W304, M473,
  W473, W508, W565 and W733 are not possible to reverse anymore without
  editing them.

### v1.52.03

#### World

* Random [Events](https://masterofmagic.fandom.com/wiki/Event "Event") are no longer prevented from occurring in the first five turns after entering a game from the main menu (810).
* Random Events no longer sometimes happen more frequently than intended when saving and loading games (810).
* [Node](https://masterofmagic.fandom.com/wiki/Node "Node") bonus auras are again correctly applied in combat (811, fixes a bug introduced in 755).
* Razing a [City](https://masterofmagic.fandom.com/wiki/Town "Town") now correctly reverts the movement costs of the tile it stood on (818).
* Altering terrain now correctly changes the tile's movement costs (818).

#### Units

* The [Chaos Warrior](https://masterofmagic.fandom.com/wiki/Warrax_the_Chaos_Warrior "Warrax the Chaos Warrior") may now gain Super [Arcane Power](https://masterofmagic.fandom.com/wiki/Arcane_Power "Arcane Power") as one of his [Random Abilities](https://masterofmagic.fandom.com/wiki/Random_Abilities "Random Abilities") instead of losing a pick whenever he rolls it (801, 806).
* [Arcane Power](https://masterofmagic.fandom.com/wiki/Arcane_Power "Arcane Power") can now again upgrade normally to the super version (806, fixes a bug introduced in 801).
* Eligible [Heroes](https://masterofmagic.fandom.com/wiki/Hero "Hero") rolled to gain Arcane Power no longer erroneously get both the normal and super versions (806, fixes a bug introduced in 801).
* [Overland pathfinding](https://masterofmagic.fandom.com/wiki/User_blog:Drake178/Overland_Pathfinding "User blog:Drake178/Overland Pathfinding") now uses [Djikstra's shortest path algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) (816, reverses and obsoletes 371, 411, 487, 489, and IW140).

#### Spells

* [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Change Terrain](https://masterofmagic.fandom.com/wiki/Change_Terrain "Change Terrain")** and [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Gaia's Blessing](https://masterofmagic.fandom.com/wiki/Gaia%27s_Blessing "Gaia's Blessing")** can now use all available Grassland graphics (818).

#### AI

* The AI is no longer prevented from utilizing [Towers of Wizardry](https://masterofmagic.fandom.com/wiki/Tower_of_Wizardry "Tower of Wizardry") that have no units in them but were last used by an allied player (808).
* The AI can no longer occasionally bring back units on the corner tiles of [City Walls](https://masterofmagic.fandom.com/wiki/City_Walls "City Walls") in combat with [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Raise Dead](https://masterofmagic.fandom.com/wiki/Raise_Dead "Raise Dead")** or [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Animate Dead](https://masterofmagic.fandom.com/wiki/Animate_Dead "Animate Dead")** (812).
* The AI can again target [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Transmute](https://masterofmagic.fandom.com/wiki/Transmute "Transmute")** as intended without possibly causing crashes or memory corruption (817).

### v1.52.02

#### World

* The map generator can now use every intended [Tundra](https://masterofmagic.fandom.com/wiki/Tundra "Tundra") graphic (799).
* [Hill](https://masterofmagic.fandom.com/wiki/Hill "Hill") tiles that spawn a [Terrain Special](https://masterofmagic.fandom.com/wiki/Terrain_Special "Terrain Special") will no longer sometimes erroneously be turned into [Grassland](https://masterofmagic.fandom.com/wiki/Grassland "Grassland") (800).

#### Units

* The [Chaos Warrior](https://masterofmagic.fandom.com/wiki/Warrax_the_Chaos_Warrior "Warrax the Chaos Warrior") may now gain Super [Arcane Power](https://masterofmagic.fandom.com/wiki/Arcane_Power "Arcane Power") as one of his [Random Abilities](https://masterofmagic.fandom.com/wiki/Random_Abilities "Random Abilities") instead of losing a pick whenever he rolls it (801).
* **New bug:** [Heroes](https://masterofmagic.fandom.com/wiki/Hero "Hero") with [Arcane Power](https://masterofmagic.fandom.com/wiki/Arcane_Power "Arcane Power") that roll it as a [Random Ability](https://masterofmagic.fandom.com/wiki/Random_Abilities "Random Abilities")
  now lose their pick without gaining any trait, while those without it
  get both the normal and super versions for one pick (801).
* [Heroes](https://masterofmagic.fandom.com/wiki/Hero "Hero") without a [Ranged Magical Attack](https://masterofmagic.fandom.com/wiki/Ranged_Magical_Attack "Ranged Magical Attack") **Ranged Magical Attack**
  will never get Arcane Power as a Random Ability, but all Heroes with
  one are now eligible for it (801 – replaces IM200, which applied
  specifically only to [Alorra the Elven Archer](https://masterofmagic.fandom.com/wiki/Alorra_the_Elven_Archer "Alorra the Elven Archer"); the second part is only relevant if modding Heroes).

#### Spells

* Overland spells may now be cast (or channeled [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** into) on the first game turn (802).
* Sound playback no longer glitches when casting [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Lycanthropy](https://masterofmagic.fandom.com/wiki/Lycanthropy "Lycanthropy")** (805).

#### AI

* The secondary [Realms](https://masterofmagic.fandom.com/wiki/Realm "Realm") of AI [Wizards](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") are no longer set wrong when their primary is [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")** (803).

#### User Interface

* The "Previous Icon" button on the *item creation screen* is now again working as intended (795, 798 – cumulative fixing of compatibility issues introduced in 761).
* Units selected on the [Plane](https://masterofmagic.fandom.com/wiki/Plane "Plane") not currently in view may no longer be moved with the keyboard (796).
* The ordering of [Realms](https://masterofmagic.fandom.com/wiki/Realm "Realm") when selecting and displaying [Spellbooks](https://masterofmagic.fandom.com/wiki/Spellbook "Spellbook") during [Wizard](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") customization is now consistent and matches the order used everywhere else in the game (797, also supercedes and replaces 004).
* Selecting less than 6 [Retorts](https://masterofmagic.fandom.com/wiki/Retort "Retort")
  with long enough names during Wizard creation no longer causes them to
  not be displayed in the profile overview on the left (804).

### v1.52

#### World

* [Rampaging Monsters](https://masterofmagic.fandom.com/wiki/Rampaging_Monster "Rampaging Monster") are again prohibited from destroying a player's [Fortress](https://masterofmagic.fandom.com/wiki/Fortress "Fortress") [Town](https://masterofmagic.fandom.com/wiki/Town "Town") (767, reverses 283 which could cause memory corruption).
* [Node](https://masterofmagic.fandom.com/wiki/Node "Node") [Power](https://masterofmagic.fandom.com/wiki/Power "Power") **Power** options "2.0" and "2.5" are no longer included by default, but are available as an optional patch instead (768, reverses [Insecticide](https://masterofmagic.fandom.com/wiki/Insecticide "Insecticide") change IM181).
* [Rampaging Monster](https://masterofmagic.fandom.com/wiki/Rampaging_Monster "Rampaging Monster") costs have been reverted to their v1.31 values, although they are still different than their [Encounter Zone](https://masterofmagic.fandom.com/wiki/Encounter_Zone "Encounter Zone") costs (769, reverses [Insecticide](https://masterofmagic.fandom.com/wiki/Insecticide "Insecticide") change IW002).
* The experimental [Swamps](https://masterofmagic.fandom.com/wiki/Swamp "Swamp")-in-combat feature is now optional instead of default (773).
* Capturing [Towns](https://masterofmagic.fandom.com/wiki/Town "Town") again yields the intended amount of [Gold](https://masterofmagic.fandom.com/wiki/Gold "Gold") **Gold** (775, replaces 162).
* [Encounter Zone](https://masterofmagic.fandom.com/wiki/Encounter_Zone "Encounter Zone") and [Treasure](https://masterofmagic.fandom.com/wiki/Treasure "Treasure") generation has been reverted to its v1.31 state, and the [Insecticide](https://masterofmagic.fandom.com/wiki/Insecticide "Insecticide") and [Unofficial Patch 1.50](https://masterofmagic.fandom.com/wiki/Unofficial_Patch_1.50 "Unofficial Patch 1.50")
  modifications combined into a single optional patch. Overall, this
  means less guardians and less Treasure, but the player is no longer
  penalized for playing on a lower *Difficulty*, and the chance for acquiring new [Spellbooks](https://masterofmagic.fandom.com/wiki/Spellbook "Spellbook") and [Retorts](https://masterofmagic.fandom.com/wiki/Retort "Retort") is higher (777).
* [Abandoned Keeps](https://masterofmagic.fandom.com/wiki/Abandoned_Keep "Abandoned Keep"), [Dungeons](https://masterofmagic.fandom.com/wiki/Dungeon "Dungeon"), [Monster Lairs](https://masterofmagic.fandom.com/wiki/Monster_Lair "Monster Lair"), and [Mysterious Caves](https://masterofmagic.fandom.com/wiki/Mysterious_Cave "Mysterious Cave") now have the intended and documented [Realms](https://masterofmagic.fandom.com/wiki/Realm "Realm") of creatures (778).
* The more expensive [Encounter Zone](https://masterofmagic.fandom.com/wiki/Encounter_Zone "Encounter Zone") guardians are now always the primaries - the ones that may be scouted without entering (779).
* [Towers of Wizardry](https://masterofmagic.fandom.com/wiki/Tower_of_Wizardry "Tower of Wizardry") no longer bypass the budget check for their guaranteed spell. If the rolled [Rarity](https://masterofmagic.fandom.com/wiki/Spell_Rarity "Spell Rarity") is too high, it is instead lowered to fit the budget (780).
* When multiple spell [Treasure](https://masterofmagic.fandom.com/wiki/Treasure "Treasure")
  items are generated, their rarities are no longer either added together
  or discarded if too high. Instead, the game will check if a higher
  rarity fits the remaining budget, and adjust the reward accordingly
  (781).
* Small islands housing magical [Nodes](https://masterofmagic.fandom.com/wiki/Node "Node") and [Towers of Wizardry](https://masterofmagic.fandom.com/wiki/Tower_of_Wizardry "Tower of Wizardry") are no longer erroneously prevented from extending to their intended size (790).
* Starting [Town](https://masterofmagic.fandom.com/wiki/Town "Town") selection no longer miscalculates the [Food](https://masterofmagic.fandom.com/wiki/Food "Food")**Food** and [Maximum Population](https://masterofmagic.fandom.com/wiki/Maximum_Population "Maximum Population") contribution of [Swamps](https://masterofmagic.fandom.com/wiki/Swamp "Swamp") and [Nature Nodes](https://masterofmagic.fandom.com/wiki/Nature_Node "Nature Node") (791).

#### Wizards

* [Conjurer](https://masterofmagic.fandom.com/wiki/Conjurer "Conjurer") now again always rounds the reduced [Upkeep Cost](https://masterofmagic.fandom.com/wiki/Upkeep_Cost "Upkeep Cost") up (762, reverses [Insecticide](https://masterofmagic.fandom.com/wiki/Insecticide "Insecticide") change IW076, now available as an optional instead).
* [Banishing or defeating](https://masterofmagic.fandom.com/wiki/Spell_of_Return#Banishment_vs_Defeat "Spell of Return") a [Wizard](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") now again allows looting half of their remaining [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** crystals by the victor (771, reverses 105, now available as an optional instead).

#### Units

* Units created at the start of the game no longer occasionally have extra [Experience](https://masterofmagic.fandom.com/wiki/Experience "Experience") **Experience** (792).

#### Spells

* [11-Book](https://masterofmagic.fandom.com/wiki/11-Book_Strategy "11-Book Strategy") [Wizards](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") no longer receive a disproportionate discount on the [Research Cost](https://masterofmagic.fandom.com/wiki/Spell_Research#Research_Cost "Spell Research") of the [Arcane](https://masterofmagic.fandom.com/wiki/Arcane "Arcane")**[Spell of Mastery](https://masterofmagic.fandom.com/wiki/Spell_of_Mastery "Spell of Mastery")** (758, reverses [Insecticide](https://masterofmagic.fandom.com/wiki/Insecticide "Insecticide") change IM195).
* [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Entangle](https://masterofmagic.fandom.com/wiki/Entangle "Entangle")** now again works on [Non-Corporeal](https://masterofmagic.fandom.com/wiki/Non-Corporeal "Non-Corporeal") [Non-Corporeal](https://masterofmagic.fandom.com/wiki/Non-Corporeal "Non-Corporeal") units (760, reverses 045).
* [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Armageddon](https://masterofmagic.fandom.com/wiki/Armageddon "Armageddon")** and [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Great Wasting](https://masterofmagic.fandom.com/wiki/Great_Wasting "Great Wasting")** now cause more [Unrest](https://masterofmagic.fandom.com/wiki/Unrest "Unrest") to compensate for no longer negating the pacifying effects of [Town Buildings](https://masterofmagic.fandom.com/wiki/Town_Building "Town Building") (770, reverses an 1.31 change that failed to fix the actual mistake).
* [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Webs](https://masterofmagic.fandom.com/wiki/Web "Web")** may now correctly be damaged by [Ranged Magical Attack](https://masterofmagic.fandom.com/wiki/Ranged_Magical_Attack "Ranged Magical Attack") **Ranged Magical-** rather than [Ranged Missile Attack](https://masterofmagic.fandom.com/wiki/Ranged_Missile_Attack "Ranged Missile Attack") **Ranged Missile Attacks** (784).

#### Diplomacy

* The calculation of [Starting Relations](https://masterofmagic.fandom.com/wiki/Starting_Relation "Starting Relation") has been reverted to the v1.31 state. The v1.50 modifications are now available as an optional patch instead (763).

#### AI

* AI [Wizards](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") again always get a guaranteed – not starting – [Uncommon](https://masterofmagic.fandom.com/wiki/Uncommon_Spell "Uncommon Spell") [Summoning Spell](https://masterofmagic.fandom.com/wiki/Summoning_Spell "Summoning Spell") in their primary [Realm](https://masterofmagic.fandom.com/wiki/Realm "Realm") (replaced 028).
* The AI will again only use a restricted selection of [Arcanian](https://masterofmagic.fandom.com/wiki/Arcanus "Arcanus") [Races](https://masterofmagic.fandom.com/wiki/Races "Races") on the highest *Difficulty* settings (757, reverses [Insecticide](https://masterofmagic.fandom.com/wiki/Insecticide "Insecticide") change IM185).
* Enemies are again allowed to flee during the first turn of combat (759, reverses [Insecticide](https://masterofmagic.fandom.com/wiki/Insecticide "Insecticide") change IW049, now available as an optional instead).
* The AI will no longer consider various situational abilities when calculating unit strength for decisions (765).
* The AI will no longer fail to employ a [Air Movement](https://masterofmagic.fandom.com/wiki/Air_Movement "Air Movement")**flying** "stall" tactic when necessary while attacking an enemy [Fortress](https://masterofmagic.fandom.com/wiki/Fortress "Fortress") (772).
* The AI will no longer target sleeping or shattered units with [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Healing](https://masterofmagic.fandom.com/wiki/Healing "Healing")** (782).
* The AI is now able to recognize up to 200 targets per continent for land-based attacks instead of 25 (783).
* [Oberic](https://masterofmagic.fandom.com/wiki/Oberic "Oberic") may now combine his [Spellbooks](https://masterofmagic.fandom.com/wiki/Spellbook "Spellbook") into a single [Realm](https://masterofmagic.fandom.com/wiki/Realm "Realm") on higher *Difficulty* settings just like all other [Wizards](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") (787).
* The AI no longer automatically detects [Invisibility](https://masterofmagic.fandom.com/wiki/Invisibility "Invisibility") [Invisible](https://masterofmagic.fandom.com/wiki/Invisibility "Invisibility") units standing on the "gate tile" in non-siege battles (793).
* [Sss'ra](https://masterofmagic.fandom.com/wiki/Sss%27ra "Sss'ra") will now select his [Realms](https://masterofmagic.fandom.com/wiki/Realm "Realm") at random every time instead of giving up his [Myrran](https://masterofmagic.fandom.com/wiki/Myrran "Myrran") [Retort](https://masterofmagic.fandom.com/wiki/Retort "Retort") to avoid higher *Difficulty* games too often featuring the same Myrran profile (794, replaces the previous 031).

#### User Interface

* The 'Escape' key is again the keyboard shortcut for closing windows (756, 776).
* There is now again a "Previous Icon" button on the *item creation screen* (761, reverses [Insecticide](https://masterofmagic.fandom.com/wiki/Insecticide "Insecticide") change IW070).
* [Wizard](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") customization may now be reset from past the spell selection screen even if there were no spells to select (786).
* Trying to select the [Myrran](https://masterofmagic.fandom.com/wiki/Myrran "Myrran") [Retort](https://masterofmagic.fandom.com/wiki/Retort "Retort") with less than 3 remaining picks now displays the correct error message (788).
* The context-based help has been revised and updated to match the current state of the game (HELP.LBX).

#### Optionals

* The main [Encounter Zone](https://masterofmagic.fandom.com/wiki/Encounter_Zone "Encounter Zone") and [Treasure](https://masterofmagic.fandom.com/wiki/Treasure "Treasure") changes of [Insecticide](https://masterofmagic.fandom.com/wiki/Insecticide "Insecticide") and the [Unofficial Patch 1.50](https://masterofmagic.fandom.com/wiki/Unofficial_Patch_1.50 "Unofficial Patch 1.50") have been combined into a single optional file, which contains:

:   :   * Zone budgets are greatly increased across the board, resulting in more monsters but also more loot (IM187, 013, 017, 537).
        * Monsters to Treasure ratio is now fixed to 100% on [Arcanus](https://masterofmagic.fandom.com/wiki/Arcanus "Arcanus") and 125% on [Myrror](https://masterofmagic.fandom.com/wiki/Myrror "Myrror")
          (originally 50-125% and 76-175% respectively), but there is no longer a
          reverse difficulty adjustment, yielding less Treasure on lower *Difficulties* (016).
        * When [Gold](https://masterofmagic.fandom.com/wiki/Gold "Gold") **Gold** or [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** Treasure is generated, they will now be larger amounts (019).
        * When [Magical Item](https://masterofmagic.fandom.com/wiki/Magical_Item "Magical Item") Treasure is generated, the maximum value range is higher, and the budget cost is 17% lower than the actual value (020).
        * Spell Treasure now costs significantly more budget points (022).
        * Special Treasure now costs less budget points, and no longer discards all other Treasure (024).
        * Treasure weights have been redistributed, significantly reducing the
          chance of finding Special Treasure, slightly reducing the chance for
          Magical Items, and increasing the chance for [Gold](https://masterofmagic.fandom.com/wiki/Gold "Gold") **Gold**, [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana**, and spells, although this last one is somewhat offset by the higher cost (023, 025).

* Enemies are not allowed to flee during the first turn of combat (IW049, this was previously an included patch).
* [Conjurer](https://masterofmagic.fandom.com/wiki/Conjurer "Conjurer") rounds its reduced [Upkeep Costs](https://masterofmagic.fandom.com/wiki/Upkeep_Cost "Upkeep Cost") more favorably, with fractions of 0.25 and 0.5 being rounded down instead of up (IW076, this was previously an included patch).
* [Node](https://masterofmagic.fandom.com/wiki/Node "Node") [Power](https://masterofmagic.fandom.com/wiki/Power "Power") **Power** per tile of influence zone may now be set to 2.0 and 2.5 (IM181, this was previously an included patch).
* The AI is allowed to select any [Race](https://masterofmagic.fandom.com/wiki/Races "Races") on the higher *Difficulty* settings (IM185, this was previously an included patch).
* [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Life](https://masterofmagic.fandom.com/wiki/Life "Life")** [Wizards](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") are no longer automatically advantaged, and [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Death](https://masterofmagic.fandom.com/wiki/Death "Death")** players are no longer always penalized when calculating [Starting Relations](https://masterofmagic.fandom.com/wiki/Starting_Relation "Starting Relation"). Instead, [Life](https://masterofmagic.fandom.com/wiki/Life "Life")**[Life](https://masterofmagic.fandom.com/wiki/Life "Life")** and [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")** Wizards are considered "good"-aligned, while [Death](https://masterofmagic.fandom.com/wiki/Death "Death")**[Death](https://masterofmagic.fandom.com/wiki/Death "Death")** and [Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**[Chaos](https://masterofmagic.fandom.com/wiki/Chaos "Chaos")**
  ones are "evil", with the two groups opposing each other to create a
  new formula, as described in the article (027, this was previously an
  included patch).
* [Banishing or defeating](https://masterofmagic.fandom.com/wiki/Spell_of_Return#Banishment_vs_Defeat "Spell of Return") a [Wizard](https://masterofmagic.fandom.com/wiki/Wizard "Wizard") no longer allows looting half of their remaining [Mana](https://masterofmagic.fandom.com/wiki/Mana "Mana") **Mana** crystals by the victor (105).
* [Swamps](https://masterofmagic.fandom.com/wiki/Swamp "Swamp") can now be represented in combat by turning half of the tiles into [River](https://masterofmagic.fandom.com/wiki/River "River") ones with a different animation (774, experimental feature).
* [Nature](https://masterofmagic.fandom.com/wiki/Nature "Nature")**[Webs](https://masterofmagic.fandom.com/wiki/Web "Web")** now take damage from [Immolation](https://masterofmagic.fandom.com/wiki/Immolation "Immolation") [Immolation](https://masterofmagic.fandom.com/wiki/Immolation "Immolation") (785).
* The 'Space' key is now the shortcut for closing various windows and
  ordering units to wait; Patrol is changed from 'P' to 'L', the direction
  change button during [Alchemy](https://masterofmagic.fandom.com/wiki/Alchemy "Alchemy") from 'Space' to 'A', [Plane](https://masterofmagic.fandom.com/wiki/Plane "Plane") swap in the **Cartographer (F2)** from 'N' to 'P', the OK button on the *item creation screen* from 'Escape' to 'O', and the Quit button on the *load/save screen* from none to 'F1' (HOTKEY.TXT).

### v1.51

See the *italic* entries of [Unofficial Patch 1.50](https://masterofmagic.fandom.com/wiki/Unofficial_Patch_1.50 "Unofficial Patch 1.50").

### v1.50

See the regular entries of [Unofficial Patch 1.50](https://masterofmagic.fandom.com/wiki/Unofficial_Patch_1.50 "Unofficial Patch 1.50").

### v1.40

See [Insecticide](https://masterofmagic.fandom.com/wiki/Insecticide "Insecticide").