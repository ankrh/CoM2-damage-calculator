
Spells

The spell system is by far the most important part of the game. I tried to make sure every realm plays well as is, picking no spellbooks from others, while at the same time, many good spell combos between different realms exist so both single and multi realm wizards are equally playable. Single realm wizards offer the reliability of always getting all of your spells (assuming you did pick the maximal amount of books of course) while not getting much out of trading. Dual and Triple realm wizards play less predictable but more diverse games, but they can benefit more from trading and can potentiallt have much more spells overall than single realm wizards could. While changing the tiers and number of spells per tier would have been next to impossible without having the source code, I believe there was no need to. Any more spell tiers would drag out the game too long and would make the jump from one tier to the next less satisfying. More spells would make each indiviual spell less relevant and fun to obtain. I've tried my best to make sure every spell has a major impact and the player has to consider their strategic options each time they or their enemies obtain new spells - unless those spells are from an obsolete tier of course. Game economy has been entirely adjusted to serve the intended design goal of each tier of spells becoming discovered after roughly 6 years dominated by the previous tier, and research costs have been set to match those calculations. This ensures players have the intented number of turns, mana and casting skill resources to actually take advantage of their spells before they get obsoleted by higher tiers. Of course, I made sure to include as many utility spells that remain valuable for the entire game as possible, but for obvious reasons, creatures or direct damage spells will not be used very often once you have a better tier available. I've also tried to make sure each realm is equally potent on the whole, and tried to eliminate spells that directly aim to hinder specific realms as such types of magic indirectly make the affected realms worse and most importantly less fun to play. Pretty much the only kind of such spells remaining are protective spells that make sure enemy destructive magic can't hurt your cities or armies.


Arcane Magic

This realm obviously serves the purpose of having spells that are necessary for smooth gameplay and every player has to be able to obtain them. As there are much fewer spells here, it doesn't have so well defined tiers as other realms, nonetheless, they are each treated as a specific tier for various purposes such as order of research or appearance in treasure.


1. Magic Spirit

Cost : 30 MP, 1 MP/turn

Research : None

Creature : 4 melee, 5 defense, 5 resistance, 2 movement, 10 health, 1 figure, Non-Corporeal, Poison Immunity.

This is a necessary spell to be able to meld nodes. It's also a decent early game scout, as it can move through any terrain at the same speed, although it doesn't really stand out as much as it seems - building the lowest tier ship or a few calvary is cheap and they can explore even faster. These used to threaten the AI though by destroying their freshly planted outposts, literally denying the AI players from having any cities other than their starting one at minimal cost, and if sea was in the way, at no risk of retaliation. Fortunately, this issue was solved by making freshly created outposts spawn a swordsmen unit which is enough to defend them against lone magic spirits. You still start the game with this spell, so even if you picked no overland spells you have something to cast. The AI has been significantly improved and is now able to summon and send more than one of these towards unclaimed magical nodes at the same time.


2. Dispel Magic

Cost : 10-50 MP

Research : 640 RP

All spells on the target unit have a Cost/(Dispel Cost+Cost) chance to resist, otherwise they are dispelled.

This is necessary to make sure the super powerful buff stacking strategies are kept in control. In particular, highly buffed units tend to take no damage, allowing their owner to destroy even very powerful enemies without losing anything in the process. This is far too efficient as you can pretty much destroy a full enemy stack each turn by a single one of your units. However, Dispel Magic ensures you lose something : the buffs themselves, in the process, and will need to constantly resupply your “forces” by recasting those enchantments, similarly to how regular strategies need to build new troops as reinforcements after a major battle. More importantly it also ensures you can't risk letting a single unit fight a whole army : getting hit by a successful Dispel Magic at that timing will likely spell doom for the entire unit. So you still need to dedicate a reasonable amount of resources towards winning battles and can't excessively snowball. Dispel Magic has a fairly high research cost for a “common' tier spell, ensuring there is a small timeframe to enjoy unit enchantments before having to worry about it, giving Life wizards who have nothing else, a bit of a breathing room. Furthermore, it ensures those unit curses AI players employ to cause the player to lose units, such as Confusion, will be an efficient deterring factor as intended at least for the very early turns when snowballing too much would have critically unbalancing consequences. The formula for the dispelling was kept as is, so it's not very effective against single spells, but very powerful on targets that have many enchantments stacked. Additionally, a new rule was added that unit curses have double the normal resistance : this is necessary because to cast a unit curse it needs to succceed at a resistance roll itself, meaning it requires a lot more effort to use than the cost would otherwise imply. Without this rule Dispel Magic was far too effective at negating Confusion or other similar effects. It's still pretty good at it, but not good enough that you can consistently expect to survive getting hit by those spells. Of course this applies for the early game - later dispelling those is trivial as more mana and skill is available to do so.


3. Summoning Circle

Cost : 0 MP

Research : 160 RP

Move your Summoning Circle.

It really makes no sense that you have to spend time and cast a spell just to be able to change the city of summoning, when you can summon ANYWHERE during combat. To make it worse, you can end up having to wait a turn to cast it, and forgetting why and where you wanted to move/ what you wanted to summon. Note that the two spells that could have been abused by this cost : Recall Hero and Word of Recall are not available. Finally, the zero cost makes it AI friendly, as the AI lacks the concept of a long term plan and needs to move their circle frequently to ensure they'll have relevant forces everywhere. (The AI moves the circle every turn, to one of three possible targets at a 1/3 chance each : their Fortress, their selected “Frontier City” or the next city in their queue of moving the circle through every city one at a time. This ensures AI forces will be concentrated where they are needed most, but each city also gets a few summoned creatures in their garrison. The Frontier City is the AI's city that's located on a continent where the AI has the fewest and other wizards the most number of cities, the exact formula I don't remember but it's likely in the changelog somewhere.)

I wouldn't mind moving the circle to be a UI feature instead, but having to pay a small research cost to get the ability makes sense and I like to keep this idea. The important part is to be able to move it for free once you learn how.


4. Disenchant Area

Cost : 50-250 MP

Research : 1280 RP

Dispel overland curses on the target map tile.

Mass dispelling is contrary to the design goal of making magic matter and has no place to exist in Arcane. It should only be available in the realm that specialzies in dispelling which is Sorcery, and even there is needs limitations. Also note the ability to spend 250 mana on this was insane. Nonetheless, the players need the ability to dispel one particular thing, and that's curses on their cities and nodes. So Disenchant Area has been reassigned for that role and can't dispel anything else.


Recall Hero

Removed from the game.

Part of the “heroes shouldn't be too easy to move around as that's too broken” design. Moving the Summoning Circle is too easy (even if it does have a mana cost) so this doesn't really serve what the original developers intended - it's not a way to save heroes but one that allows them to teleport long distances on the world map.


Heroic Shout

This spell used to exist for a while but not anymore. It was an all figure hitting neutral attack that required a hero to be present. However it was replaced by a much more elegant spell to promote the early game usage of heroes :


5. Heroic Heart (new)

Cost : 18 MP

Research : 440 RP

Target hero unit is healed 3 HP in combat.

Realms other than Life have a very hard time keeping heroes alive, and this simple spell can fix that problem. Heroes are for everyone, even if Life is best at using them!


6. Detect Magic

Cost : 200 MP

Research : 320 RP

See the spells being cast by other players while this enchantment is in effect.

While it looks like a waste of resources, the information gained through this can be a lifesaver, as it allows the player to adapt to enemy wizards obtaining new spells faster. It's also essential to use Spell Blast properly. The AI will only cast Spell Blast intentionally against specific spells when they have already cast Detect Magic, and having Spell Blast is the only case when they'll bother to cast Detect Magic. This can also let the player know when the enemy is casting an expensive spell during which they won't have the opportunity to use their Spell Blast.


7. Enchant Item

Cost : Variable MP

Research : 320 RP

Enables creating Item tier magical items.

Obviously necessary to be available for every player. Item tier means only powers that cost 400 or less can be used.


8. Summon Hero

Cost : 240 MP

Research : 1280 RP

Summons a random hero, ignoring Fame requirements.

Sometimes luck isn't on your side and you don't get the hero(es) you want as fast as you want. In that case, this helps. I was hesitating a lot about the casting cost, but ended up with a medium amount. It really shouldn't be too expensive as the summoned hero might not be the type you really needed, but it can't be too cheap either as that allows summoning almost every hero and makes it too trivial to fill all your 6 slots with the perfect heroes for your strategy quickly.


Awareness

Removed from the game. If finding enemy cities is required for cursing them there really shouldn't be a spell everyone gets that finds them anyway. Also, there exists a specialized spell for this in the Nature realm which is really the correct realm for exploration spells. Others should use their armies to scout.


9. Disjunction

Cost : 375-1875 MP

Research : 6000 RP

Disjunction Cost/(1.5*Cost) chance to dispel target global enchantment.

Unlike regular dispelling effects, Disjunction costs a large amount of irreplacable overland casting skill, so random chance on this is not acceptable, especially when the targets tend to be powerful effects that will need to be removed as soon as possible, if removed at all. It costs more than the target, and the AI typically has higher casting skill, so it's rarely economic to use and in most cases the player should attempt to instead deal with the enchantment either by eliminating the wizard, or accepting the effects and working around them. Nonetheless, a few spells are meant to be dispelled, and the AI will have a reduced chance to recast these to ensure the dispelling is meaningful. Likewise, the AI's chance to use Disjunction against the player's enchantments is heavily regulated to ensure the intended gaming experience, each enchantment having different chances to get targeted during various diplomatic situations. As a general rule the AI will prioritize removing military enchantments during war, economic ones during peaceful relations and leave enchaments cast by allied players alone completely. However priority is also scaled by the severity of the enchantment and its impact on the AI's playstyle, so expect Meteor Storm to get dispelled a lot, while AEther Binding will be mostly overlooked. I'd like to specifically mention that the AI holding back is a type of design I almost always avoid, but in this case it's inevitable. Disjunction directly puts the player's resources against the AI's, which the AI typically has a lot more of, as well as the AI being up to 4 other players so if the AI was serious about removing enchantments, they'd be unusuable which is the opposite of the intended goal of all spells being powerful tools, especially the endgame global enchantments. In fact, aggressive disjunction would also result in AI players removing each other's enchantments, resulting in those having no relevance even when cast by the AI. Disjunction in general is somewhat undesirable in the game but the 1.5x cost will discourage the human player from using it too much and keeps it a strategic spell that can sometimes turn the tables but more often it's detrimental to cast. It's definitely worth keeping as part of the game, especially as it's essential for Runemaster's relevance. The high research cost ensures obtaining this can't be taken lightily and players only go for it when it's really worth using. The AI will postpone researching this until after they researched most other rare spells, so rare and below global enchantments will typically not have to worry about getting dispelled at all for a while.


10. Create Artifact

Cost : Variable MP

Research : 4000 RP

Create an “Artifact” tier magical item.

See more details at the Artificer retort and the item chapter.


11. Summon Champion

Cost : 600 MP

Research : 4000 RP

Summon a Champion hero.

Similar role as Summon Hero except this has a very steep cost so carelessly using it when the player's strategy does not demand heroes can be very detrimental. Nonetheless, Champion heroes are very powerful and when they are indeed a valuable addition to your strategy, the spell is well worth the high cost.


12. Plane Shift

Cost : 120 MP

Research : 8000 RP

Targeted stack is instantly transported to the other plane.

After a very long discussion on the forums about the intended role of planes and planar travel spells, the conclusion was that planar travel shouldn't really exist until the very late game to ensure the planes remain separate, unless the player opens up towers themselves. Plane Shift was chosen from the various methods of planar movement (Planar Travel, Astral Gate and Plane Shift) even though it was originally removed from the mod, because it's by far the most playable for the AI which can use it to target their best stack of units and send the whole thing across without risking to split up important stacks as some units change planes and others do not. We have also discussed whether we like the strategy of blocking all towers in the game or not, and my final decision was that it should be a good, but imperfect solution that can contain enemy invasions somewhat but should not completely deny the possibility of receiving enemy attacks which would basically allow the human player to not employ any garrisons at all, resulting in tremendous savigs on resources. Plane Shift solves this by enabling the AI to send troops through the blockade in regulated quantities to provide the perfect playing experience matching the game difficulty. Thus the AI will typically research this very late, around the time they go for their first very rare spell, so in most cases, around the time they'd open up towers naturally, +/- a few years. Nonetheless, if the human player researches this spell early to attempt to conduct a one sided invasion where the AI can't reach their plane, all the AI players will start to prioritize the research of this spell to participate in that strategy. Towers by the way will not be broken by AI players unless the human player opened one themselves or the game reached the appropriate turn count to ensure unexpected “guests” from the other plane won't show up during midgame, bulldozing the entire world with their superior Myrran units no one can stop that early, in best case Kill Stealing the human player's intended targets, in worst, stomping the human player into the ground. Both of these are actual experiences I had during playtesting that can absolutely ruin the 10-12 hours invested into devising the proper strategy to overcome the players on my own plane and progressing the game to where it starts to turn fruitful. Of course, the option to start an interplanar war early still exists, but the “switch” is in the hand of the human player. If they don't want to unleash the “final boss” enemy on the world at the time everyone is still busy dealing with things on their own plane, they don't have to. Nonetheless, opening the towers early and successfully subduing the enemy on that plane (or just stealing a portion of the plane for yourself) is a massive advantage so while it's high risk, it's also high reward.


13. Spell of Mastery

Cost : 15000 MP

Research : 440000 RP

Win the Game. Your combat spells can't be countered if you researched this.

While the effect has been left unchanged, the Spell of Mastery has received a super large research cost boost to ensure sufficient time exists between getting very rare spells and the game ending to properly enjoy them. The AI has learned in which cases it is beneficial to accelerate their research production and attempt this type of victory, and when is it better to ignore it and dedicate their magic power towards winning through their other spells like vast armies of very rare creatures. As Sorcery dominates endgame strategies by design, Sorcery wizards are able to stop others from casting this thanks to Spell Blast, or can cast it themselves in a way others can't interfere through Time Stop. Nonetheless, a second effect has been added to make this valuable against Sorcery wizards who otherwise are extremely difficult to attack during the endgame due to the Spell Ward city enchantment - while outright victory is not possible, it still at least opens up the possibility to subdue the Sorcery wizard through conventional militaristic methods. As the highest number possible for research costs is unfortunately 65535, this spell utilizes a trick, the actual cost is set lower, but the research production while it's being researched is cut down to 1/8 of the normal amount, resulting in the same effective cost. The displayed number of remaining turns takes this adjustment into account. The original game mechanic of the cost getting reduced by every spell researched by the player was kept to ensure the total time it takes to reach is the same for all players. Casting cost was also drastically increased to ensure the AI does have the time to reach the player's fortress in time to put up a final desperate attempt of resistance... which might actually be successful if the player underestimates it. The AI was improved in many areas of the overland troop movement process and diplomacy to ensure this “Final War” does not get stalled and as many troops reach the player's fortress as possible. Of course the AI won't be nearly as effective as a human player in this invasion, but it still is good enough to sometimes overwhelm and banish the player if the AI had the upper hand in very rare creatures and stocked mana crystals. Either way, I spent a massive amount of time and effort on ensuring the AI does everything it can to prevent a Spell of Mastery victory. I will no longer do silly things like respect peace treaties or wait a dozen turns before declaring war. The player is given a grace period of typically 1-3 turns to cancel their spell though, in which case they can get away with merely receiving a massive diplomacy penalty for attempting the spell - however as soon as they've spent 1500 or more mana crystals into it (10% completion) the war starts immediately, ignoring everything else. In fact, a mostly unimplemented fourth AI hostility state was salvaged and properly implemented to ensure this works properly. Research costs have been standardized between realms and tiers : each tier gets4 spells with a medium research cost, and 3 each with gradually higher and lower costs. In the uncommon tier this scaling is especially significant to enable a few specific uncommon spells to take advantag of the guaranteed turn 1 research availability better while the more powerful spells get available for use through that strategy later.




Nature Magic


The elemental forces of nature are traditionally the realm associated with summoning, terrain and versatility.

Strengths

    Powerful fantastic creatures

    Great versatility, has effects in most areas

    Nature magic often ignores protective spells or abilities

    Spells dealing with terrain and exploration

    Strong early game

    Tends to be more effective than usual at countering Chaos wizards


Weaknesses

    Many spells are weaker than their counterparts in other realms

    Many effects are only available in the form of a single spell so missing out on spells is usually more detrimental than in other realms and disables access to certain startegies entirely.

    Tends to struggle when fighting Death wizards.



Common

1. Resist Elements

Cost : 5/25 MP

Research : 440 RP

Enchanted unit gains +4 defense against magical ranged attacks, breath attacks or spells, and 4 resistance against Nature realm effects.

In other words, resist petrify and defend against magical damage. Packs more punch than it seems as that extra 4 defense can be very relevant against the AI's most preferred magical ranged garrison units. It's also super useful for the AI, as it can be cast in combat, often resulting in situations where otherwise seemingly easy battles turn into a nightmare because the human player only brought magical ranged damage. Due to this high potential utility for early-midgame conquest, the RP cost is in the higher category for a common spell. In the original game this only affected Chaos and Nature magic, a limitation that made it counterintuitive as many units were associated with a realm used ranged attacks that belonged to another - for example Shadow Demons use Chaos projectiles. Resisting petrification effects was kept though, as it makes sense for the realm to be able to resist its own magic.


Stone Skin

Giant Strength

+1 attack or defense is anything but impressive. Waste of a spell slot.


Wall of Stone

You can build these and they're not even expensive, so using magic to create them completely lacks in being awesome or even worth anything for gameplay.


2. Fairy Dust (new)

Cost : 12 MP

Research : 320 RP

Target unit suffers a Strength 7, Armor Piercing Cold attack on each figure.

A weak direct damage spell that's effective at removing fragile multi-figure early game units. Plays into the theme of Nature having all kinds of effects but being mediocre at them, this is their common direct damage spell.


Call Centaurs

This used to be a new spell, but summoning fast ranged units in combat offered way too much abuse potential, not necessarily through damage output, but being able to stall out battles as the enemy couldn't reach the centaur's speed. Also while not dealing threatening amounts of damage that often, having to chase down and corner 1-3 of these every time the player attacked a Nature wizard was super annoying and a huge time waster.


3.Wild Boars

Cost : 15 MP

Research : 320 RP

Combat only summon : 6 melee, +1 To Hit, 5 defense, 5 resistance, 3 movement, 5 health, 3 figures

A much more suitable spell for Nature realm : a summoning spell for battles they lacked which offers decent brute force that can put up some fight and deal relevant amounts of damage to lower tier enemies. Better damage pontential than the eliminated centaurs while having much less abuse potential for stalling as it has less movement speed.


4. Earth Lore

Cost : 40 MP

Research : 160 RP

Reveal all overland terrain and lair/node contents on the targeted map area.

A scouting spell wouldn't be much of a scouting spell if you still needed to send scouts to all lairs in the area. However with this modification, this becomes a potent addition to Nature's spell arsenal, and a great combo with Sprites.


5. Water Walking

Cost : 20 MP

Research : 260 RP

Enchanted unit gains Water Walking movement.

Useful to get a smaller amount of units through the ocean, or enable them to fight enemies on water tiles. There is a downside though, it's fairly easy to dispel, which causes the unit to drown. It mostly shines at enabling early settlers to reach other continents without requiring a ship, and is critically important for the AI for that purpose, as it's possible to start with the spell already known. It can also work well to dodge enemy naval superiority as there is no need to rely on vulnerable transports to cross.


6. War Bears

Cost : 55 MP, 1 MP/turn

Research : 260 RP

Creature : 7 melee, +1 To Hit, 5 defense, 6 resistance, 3 movement, 7 health, 3 figures, Forester

As Nature specializes in strong summoned creatures, this creature is by far the most cost effective among all common summoning spells, and also packs the most raw fighting power, but no special abilities. Much stronger than a swordsmen tier unit, this creature can even stay relevant after Halberdiers have entered the game, but it's not powerful enough to take down larger armies by itself and isn't unstoppable.


7. Sprites

Cost : 80 MP, 2 MP/turn

Research : 320 RP

Creature : 2 melee, 4 Magical Ranged, +1 To Hit, 2 defense, 8 resistance, 2 movement, 1 health, 5 figures, Forester, Flying

Unlike bears, Sprites are a more tactical unit - they fly and shoot but are extremely fragile. Their cost and vulnerability to any direct damage spell makes them pretty bad to use against other wizards as each Sprite unit lost to an enemy spell will set your army size back by several turns, and this keeps in check the huge strategic potential of having a flying ranged attacker. What Sprites truely excel at is claiming nodes and treasure for their owner, as nonflying melee monsters can't do a thing while the Sprites destroy them slowly, one at a time. Many test games were played to ensure sprites are neither overpowered treasure hunters that return with vast riches, nor a situational useless unit that every once in a while manages to salvage a few gold coins. While it seems like it works without issues, a lot of fine tuning and specific details had to be added to the lair monster generation algorhitm to guarantee the chance of generating targets that are vulnerable to the Sprite strategy are frequent enough for the startegy to be reliable, but don't include extremely high reward targets too often. For that reason, spawning Great Wyrms had to require them to never be alone or grouped with other sprite-vulnerable monsters. In the later phases of development, the gold and mana crystal loot from treasure has been halved as the originally planned amounts proved way too much, which reduced the efficiency of this strategy somewhat, but it's still a good strategy nonetheless - while it won't yield enough resources to build up a vast military on that alone, it will still provide you with enough to be relevant, and of course, the treasure you fight might include other, more valuable things like good artifacts, spells, or even spellbooks or heroes. This fine tuning of monster generation however, was well worth the effort, as it also ensures diverse contents in the encounter zones that provide players with some good targets for all kinds of strategies.


8. Nature's Eye

Cost : 40 MP

Research : 200 RP

Enchanted city has an increased scouting radius and produces 4 RP.

While the increased scouting radius is nice and helps detecting approching enemies a turn earlier, it's nowhere near good enough to be worth a spell slot by itself. With the added ability to produce a small amount of research for free, this spell will be more desired by players, and will give a slight edge to AI opponents by letting them reach Uncommon tier spells a bit earlier, something that's extremely critical for AI Nature wizards. While their common creatures are good, they are also fairly easy to counter, especially the Sprites which the AI uses as garrison for a very long time, lacking better options. This has also been a recurring discussion, but no, unfortunately, using bears, spiders or even cockatrices would not work better as those creatures are a lot more valuable for the AI when sent out to conquer and the AI lacks the insight to be able to use the same unit for both roles well - it determines the units to stay in their garrison based on a simple list of priorities that includes every possible unit type. (which is by the way is exclusive to Caster of Magic, as the original AI didn't care much and simply kept the most expensive units in garrison.)


9. Earth to Mud

Cost : 20 MP

Research : 380 RP

A 7x7 area in combat is turned into mud.

The area had to be increased to ensure the larger movement allowance on units doesn't make it too trivial to go around the affected area, and also to guarantee when cast, most of the enemy army will be affected. This spell isn't particularly good otherwise, as even one or two melee units avoiding it and reaching your fragile archers or magicians can cause losing the battle. As is, this is now an excellent spell to cast when your ranged army faces fast melee units that would otherwise destroy them, and although it's much less effective when you're the aggressor and they already managed to move freely on turn one, it can still be enough to turn the tides of battle.


10. Web

Cost : 10 MP

Research : 480 RP

Target unit cannot act for (12/melee attack) turns and loses flying.

Most likely the best common spell in the game and many player's favorite, this unassuming but brutally powerful spell has been left intact to ensure maximal enjoyment, especially as it requires proper tactical use making it interesting. The main role is to counter Flying - at common this enables players to take 2 Nature books to start with this spell, so strategies otherwise having no means to deal with Flight can become playable at this reasonable but significant cost. However there is a lot more to this spell, as it can also prevent enemies from outrunning your slower armies, or completely disabling enemy ranged attackers.



Uncommon

1. Ice Bolt

Cost : 25 MP

Research : 1280 RP

A strength 35 Cold attack to the target unit in combat.

A decent but mediocre direct damage spell, the only such in Nature's arsenal that is single figure hitting. It still manages to deal enough damage to be a threat.


2. Giant Spiders

Cost : 90 MP, 2 MP/turn

Research : 420 RP

Creature : 6 melee, +1 To Hit, 5 defense, 9 resistance, 5 movement, 5 health, 4 figures, Web Spell, Poison 3

A creature that's somewhat weak by Uncommon standards but extremely cost effective, the role of Spiders is to counter enemy ranged armies, or low tier units with poor resistance - in general, to counter every normal unit that might be used in the first 30-40% of the game. After some playtesting, the defense stat had to be raised to ensure they survive one turn of being shot at, and can engage poison vulnerable enemies without getting obliterated in the process. Their high speed makes them excellent for early expansion strategies, paired with the “guaranteed turn 1 research” mechanic and low RP cost, this creature offers an alternate way to start the game instead of the obvious choice of picking one of the common creatures as a starting spell. Due to its ability to provide you with Web spells without having to use up your one casting opportunity per turn, it remains a valuable tactical option to have even during the later phases of the game when its fighting ability is already obsolete. This is one of the units that contributes to the high relevance of the Poison game mechanic, which is effective against Life buff stacking strategies and pretty much the only one to keep those in check when dispelling is ineffective, as well as providing a fairly good counter to Werewolves, another early and powerful uncommon creature that could dominate the game otherwise. Poison also serves well in keeping the Undead game mechanic from spiraling out of control, as Undead units are now vulnerable to it and typically have poor resistance. Spiders also have high magic resistance, providing a good all-around option against Death wizards who otherwise dominate Nature wizards accross the board.


Basilisk

3. Great Lizard

Cost : 200 MP, 5 MP/turn

Research : 2140 RP

Creature : 18 melee, +2 To Hit, 7 defense, 7 resistance, 3 movement, 30 health, 1 figure, Regeneration 2

Originally the Basilisk, this lizard lost its Stoning ability because it was extremely redundant - all 3 creatures in uncommon Nature and even one of the rares had a resistance based attack, 3 of which were save or die stoning effects. This made Nature better at instant death attacks than even Death itself which was definitely not appropriate for the realm. Out of the four, the lizard's ability was the most redundant, providing the exact same gaze ability as gorgons with a slightly lower modifier. Being uncommon, at this phase of the game most enemy units still have low resistance, so such a gaze attack was also way too effective, but the real problem was making the realm extremely one-sided and in a direction it isn't expected to take. Thus, the lizard was redesigned to provide what Nature is expected to have, a strong giant monster that has great physical power. Regeneration being a core theme in Nature, yet being unavailable until the final tier, this creature was granted that ability, especially as lizards are known to be able to partially regenerate in real life! While this raised the concern of game balance : a midgame creature with regeneration does seem a bit too good, testing has proved that isn't the case and the game contains enough counters to this strategy so losing units of lizards is often inevitable nonetheless mainly thanks to its low resistance. Furthermore, the relatively high cost of the unit makes sure the player can only summon so much of them and expand so far before rare spells that outclass and destroy this creature easily show up.


4. Nature's Cures

Cost : 50 MP

Research : 1280 RP

Target overland stack becomes fully healed.

A quite powerful spell that allows human players to expand faster by cancelling the time needed to let units heal naturally in battle. Nature is meant to be good at early game aggression, and this spell both enables fully taking advantage of the powerful creatures and support normal troops in the somewhat less likely case the player aims to utilize those instead. The research cost of 1280 ensures this spell won't be available to players in the Common spell phase of the game, and obtaining it early enough requires a major investment into researching, which keeps the potential of overexpanding in check. Casting cost is low as this really only provides the player with the advantage of not having to wait 1-4 turns to recover lost health instead of a more permanent benefit like summoning an additional creature. Still, 50 is relevant enough in those early stages of the game to make a difference, if the spell has to be used too frequently. Most importantly, at 50, you will be able to cast it instantly in most of the Uncommon phase of the game, so you can respond to one of your important armies or garrisons getting a ambushed and wounded in time. At this time, this is the only spell in the game the AI is unable to cast, as it is very unlikely to have massively damaged armies worth targeting, and even then it can afford simply waiting for them to recover naturally. The AI prioritizes the strategy of quantity over quality, and has many troops, instead of focusing on getting the maximal potential out of a single stack. (That said, the AI does have a new function that is responsible for building up doomstacks on the overland map, but it is a time consuming process and nowhere near as efficient as a human player would be at the same thing.)


5. Construct Catapult (New)

Cost : 30 MP

Research : 1600 RP

Summon a Catapult in combat.

Another new spell to fill the missing combat summon capabilitiy of Nature I'd expect to have from a summoning focused realm. It both helps in siege to bring out Nature's strong early expansion feature, provides an alternate option for breaking walls if Crack's Call is not available, and has good synergy with Earth to Mud or strong melee creatures that can protect the catapult from incoming enemy forces. Perhaps it might be a good idea in the future to replace this with a functionally identical creature that's more Nature-like, for example a tree creature hurling rocks.


6. Crack's Call

Cost : 25 MP

Research : 1600 RP

Destroy any wall on the targeted combat map tile. If a unit was there, there is a 25% chance it takes 21 damage, or 5 damage on each of its figures, whichever is higher. The damage is irrecoverable.

This spell is quite unpopular due to its powerful effect and unpredictability, but it serves some pretty major roles in the design. First of all it plays into Nature's role of providing spells that can't be defended against : it targets the ground so not even Magic Immunity can help survive it, and defenses, regeneration or other measures are ineffective. Second, Nature literally has no other way to deal with powerful, highly buffed units from Life wizards - beyond the early game, poison stops being effective, and even strong summoned monsters can't compete with a midgame unit that has 5+ different buffs on. Crack's call is ineffective against non-corporeal units however, improving the “Most Nature spells are bad against the Death realm” theme of the design, which the Cold Immunity present on all Death units and undead and the low resistance of Nature creatures makes inevitable anyway. That said, Nature isn't without tools as Death is weak to petrificiation effects, due to its creatures lacking magic resistance even more than Nature ones and generally relying on being immune to most effects instead.


7. Change Terrain

Cost : 32 MP

Research : 960 RP

Change target overland tile from Mountain to Hill, Hills, Swapms or Deserts to Grasslands, Grasslands to Forests, Forests to Grasslands, or Volcanoes to Mountains.

A popular spell in the original game I decided to leave unchanged (other than its costs). It's quite a lot less powerful in Caster of Magic as the faster pacing and generally better population growth rates make changing a single tile play a smaller part in the big picture, still it's a very powerful tool to have for economy based strategies that avoid military conflict, as it allows the less fertile spots the AI priorizes to settle last to be as valuable as the good areas for the Nature player. It is also the only spell in the game capable of erasing a Volcano, opening up the possibility of creating Mountains or terraforming Tundra tiles for Chaos/Nature wizards which no one else is capable of. Casting this on enemy territory has no diplomacy consequences as it would be pretty hard to determine whether the effect is beneficial for the other player or harmful.


8. Transmute

Cost : 60 MP

Research : 1920 RP

Transform target ore :

Silver->Mithril->Quork->Iron-> Silver

Gold->Adamantium->Crysx->Coal->Gold

This splits ores to two groups, the second group having the same effect as the first but double the resource output. The spell keeps the ore at the same tier, but allows any ore to be transformed into any other as desired. In most cases though the only really beneficial transformation is to create mithril or adamantium in military centers, or crystals for Dwarves who lack the ability to produce magical power but get a double effect from ores. Nonetheless, if nothing more important can be cast, Transmute on resources can still be a valuable benefit even on any other transformation, it's just rarely the case, as there is always a huge demand for overland spellcasting ability by design. Other than playing into Nature's terraforming role, this spell also represents Nature's ability to mimic Life in buffing normal units, indirectly by enabling them to wield adamantium, even on the Arcanus plane where this is rarely possile. The research cost is very high as Adamantium is a fairly major bonus which would be way too powerful to unlock early. This spell also has a quite exceptional trading value for obvious reasons, as it enables AI players to mass produce adamantium troops as well - the AI will use this spell for military purposes and transform their ores into Mithril and Adamantium. Transforming for economy purposes isn't important enough and difficult to create efficient AI rules for, and on higher difficulties the AI typically has enough resources that resource production from ores becomes marginal to them. Like Change Terrain, this also has no diplomacy effect as it would be difficult to judge which transformation is beneficial or harmful. The possibility to teach the AI to use this offensively was considered but I decided not to, as there are enough ways to disable ores from being effective even without that, and having too much undermines the importance of the ore game mechanic. It would also be unflavorful for a Nature wizard to use their magic to intentionally ruin natural resources.


9. Cockatrices

Cost : 150 MP

Research : 1280 RP

Creature : 4 melee, +1 To Hit, 5 defense, 7 resistance, 3 movement, 7 health, 4 figures, Stoning Touch -4, Flying.

A very specialized creature that has weak stats but extremely strong petrification effects, the Cockatrice is most useful at eliminating medium resistance targets with high health and low figure count. Flying is typically unavailable for Nature as it prefers to web enemies to bring them down to ground level, this creature is an exception and its primary role is to allow hurting ghost enemies that can't be webbed - basically Nature's only way out against enemies using Shadow Demons or Wraiths. The main reason to keep them in the game other than that is their combo potential - touch attacks work at range so casting Focus Magic on this unit enables it to petrify at range - a very powerful combination that makes the game quite a bit more interesting especially as the AI is aware of the combo and will use it if able. I've played several test games to ensure this combo is not too powerful, thankfully the high research cost, the high cost of creating one such unit (150+80 mana for only one) the limited amount of shots, and the constant need to recover health for the cockatrice as its ability to petrify weakes with each lost figure meant the combo is healthy for the game.


Pathfinding

10. Land Linking

Cost : 50 MP

Research : 640 RP

Enchanted unit gains Pathfinding. If it is fantastic, it gains +2 attack and defense.

Nature specializes in fantastic creatures so it also needs a spell that buffs them. Pathfinding is boring and unimpressive by itself as it no longer doubles overland movement speed which was entirely too powerful in the original game - remember the time it takes to move units is a major balancing factor that keeps otherwise unstoppable stacks from dominating the game too much - so adding the ability to it to also buff fantastic units seemed to be a good solution. This also makes up for losing the weak Stone Skin and Giant Strength spells, instead providing an uncommon alternative with a meaningful effect.


Rare


1. Elemental Armor

Cost : 18/90 MP

Research : 3000 RP

Enchanted unit gains +12 defense against magical ranged attacks, breath attacks and spells.

The upgraded version of Resist Elements, this spell provides a massive protection against damage from magical sources, enabling Nature wizards to break through magician garrions. Like Resist Elements, this too applies to all realms now to ensure it's reliable and fair. Beware of the Caster ability on those magicians though, as there is more to use it for than just direct damage spells. While this might feel too powerful and against the “powerful magic” theme of the mod, in reality over 95% of the magic in the game are not direct damage spells, and while some summoned creatures do use magic ranged attacks, they typically are effective at melee combat as well, so this really only outclasses the normal units that use magical attacks, and rare spells are meant to be doing that : Common magic outclasses the lowest tier normal units, Uncommon outclassess the medium tier like halberiders, and rare spells outclass most normal units, even the highest tier ones. Very rare spells are typically global game-changers that aren't even comparable to single units.


2. Stone Giant

Cost : 275 MP

Research : 3500 RP

Creature : 20 melee, 20 Ranged (3 ammo) +2 To Hit, 12 defense, 10 resistance, 3 movement, 25 health, 1 figures, Stoning Immunity, Poison Immunity, Wall Crusher, Mountaineer.

As the name implies, Stone Giants have been given the role of being the rare summoned creature that has the highest defense. It also has slightly better magic resistance than Nature's other rare creature, and even has ranged attacks which is also unusual for the realm, making it very versatile, but it isn't nearly as powerful as Gorgons are overall and is most effective against units that can't effectively deal damage through its armor.


3. Gorgons

Cost : 360 MP

Research : 4500 RP

Creature : 15 melee, +2 To Hit, 7 defense, 9 resistance, 3 movement, 14 health, 3 figures, Stoning Gaze -3

Gorgons fill the role of being Nature's exceptionally powerful melee creature, having stats that make it halfway between the rare and very rare tier - it isn't immediately obvious but having 3 figures means this unit has a total health pool of 42 and attacks at strength 15 three times. Multiple figures of course mean the unit loses from its potential as it takes more damage, nonetheless, its Stoning Gaze ensures it can easily destroy most normal units and even other rare or weaker summoned creatures. The original design of this creature in Master of Magic was a flying bull and I personally dislike that, especially because Flight is something Nature is traditionally bad at, being the anti-flight realm, which is represented by the spell Web even in this game, fortunately, Hadriex has been nice enough to provide me with graphics for this new, more traditional interpretation of the creature. While no longer flying themselves, thanks to the gaze attacks, the Gorgons keep their ability to attack other flying creatures at will. While the creature is very powerful, it isn't without weak points : mediocre magic resistance and movement speed needs to be considered when using or fighting against this creature.


4. Survival Instinct (new)

Cost : 600 MP

Research : 5000 RP

Global enchantment : All of the caster's fantastic creatures gain 1 defense, +1 To Hit and 2 magic resistance.

If I'm serious about making Nature the best realm for using summoned creatures, having a global enchantment to buff them is pretty much a requirement. While the buffs are not particularly large, the resistance is extremely good as it removes the greatest weakness of most Nature creatures and this spell also offers great combo potential with other realms who might have ways to convert their normal units into fantastic ones. Being a rare spell, it also increases the relevance of researching Disjunction early, which you might want to do before starting a war against a wizard who already has this global enchantment, especially if you plan to take advantage of resistance based effects.

Ice Storm

5. Blizzard

Cost : 120 MP

Research : 4000 RP

All units on the target overland map tile are hit by a strength 14 armor piercing cold attack

Almost identical to Fire Storm in the original, I changed this to use a different mechanic. Dealing Armor Piercing damage but not multifigure damage means this spell can be effective at dealing damage against stronger or single figure targets, but the damage will be way less than needed to kill them so it mostly serves only as a slight advantage before engaging in combat. Of course if the target has extremely low hit points, like magicians, the spell can be more potent and even kill the units. A decent but expensive spell to take down otherwise too difficult garrisons, it mainly exists to diversify the realm's options and to deal with enemies whose combat spellcasting ability far exceeds the Nature wizard's, something Nature doesn't particularly excel at - although they are by no means weak at it either. The name was changed to alarm the players that the effect uses a new damage dealing mechanic.


6. Earthquake

Cost : 150 MP

Research : 2500 RP

All non-flying, corporeal units in the target city have a 4% chance to die and each bulding has a 40% chance to be destroyed.

Unit destruction chance has been massively reduced from the original, as at higher percentages, this spell was pretty much guaranteed to kill multiple, possibly very expensive and high tier units for a single use, and of course, it was possible to keep using it until most of the forces died and the city became easy to conquer. This mostly was an issue at fortresses, nonetheless, remotely killing units of a higher tier than the spell itself, at no risk, is unacceptable. This isn't like Crack's Call, where you have to participate in combat and risk losing units to be able to cast the spell at all. At 4% the chance is low enough that a risk is introduced - you might need to sacrifice signficant amounts of time and spellcasting and possibly still don't get the intended outcome. Of course this would have made the spell unusable, so it had to be rebranded as a building destruction spell, giving Nature its only way to hurt enemy economy. 40% seems excessively high but building destruction does not include replaced buildings, so typically, 20-50% of the cities buildings ignore the effect. Either way, this spell can give the Nature wizard an efficient way to hurt enemy economy, or destroy Amplifying Towers to weaken the enemy spellcasting capacity.


7. Earth Elemental

Cost : 50 MP

Research : 5500 RP

Combat Summon : 25 melee, +1 To Hit, 4 defense, 8 resistance, 1 movement, 30 health, 1 figures, Stoning Immunity, Poison Immunity, Wall Crusher.

A brutally powerful combat summoned creature that can destroy most enemies unfortunate enough to be in their range, this represents the realm's full might of summoning in combat. Its low armor and speed ensures it's not too difficult to kill, but definitely will make anything that engages it in physical combat take lots of damage.


8. Petrify

Cost : 20 MP

Research : 4000 RP

Each figure in the target unit has to resist at -3 or irrecoverably die.

A simple save or die combat spell, the only such in Nature. It targets each figure separately so it's not that easy to actually kill the entire unit. Nature's best weapon against higher tier Death creatures which have low resistance but are usually immune to all other Nature spells. The low cost enables Magicians to use this spell, making it more potent than it initially seems. One of the spells that serve a major role in keeping Regeneration from being too powerful. Save modifier of -3 seems powerful but is at best average for a rare tier spell.



9. Gaea's Blessing

Cost : 250 MP

Research : 4000 RP

Increase the maximal population of the enchanted city by 50%. Reduces unrest by 2. Forest tiles are worth triple production. Chance to remove corruption or convert deserts to grasslands, volcanoes to mountains.

Mostly unchanged from the original spell, this is the greatest enabler of economy based Nature strategies. It also protects Nature cities from the bad influence of Armageddon and Doomsday, making it probably the only realm that can safely overlook a Chaos wizard reaching the late game and get along with them peacefully. Nature tends to be good against Chaos on the whole, as Regeneration and high amount of hit points make it good against direct damage. The only change is increasing the bonus on Forest tiles, which can make the otherwise overlooked Grasslands->Forest option on Change Terrain useful and fits the flavor of Nature wizards preferring forests.


10. Iron Skin

Cost : 24/120 MP

Research : 4000 RP

Enchanted unit gains +5 defense.

One of the few spells that were completely unchanged from the original, this buff fits the theme of Nature having extremely tough units. Not as powerful as Invulnerability, but like always, Nature can do things other realms specialize in, but isn't as good as those at it.



Very Rare


1. Earth Gate

Cost : 125 MP

Research : 6000 RP

Units can teleport between any two cities on the same plane enchanted by this.

While the mod does remove too powerful overland options, this spell is fortunately very rare, and by that time the snowballing potential of fast movement is gone. Nonetheless, this is a very very good spell that can help mobilizing your forces for the big endgame wars more effectively. It is immensely helpful for AI players, as I've implemented the ability for the AI to use this spell, and they will take advantage of it to even out the garrisons in their cities. This ensures the player can't take out those cities by repeatedly attacking it each turn, as it'll get refilled with units, and any failed attempt to conquer it in one turn will mean the city's defenses are as good as they were before the attack. It might even help the AI build up good stacks of high end creatures, as any creature pulled from the garrison to build a new stack will be replaced by another (if available elsewhere) and next turn that can also be added to the stack and so on until the stack is complete.



Nature's Awareness

Clairvoyance

Nature's Wrath

2. Seismic Mastery

Cost : 1000 MP

Research : 9000 RP

Reveals the map, increases node power production by 15 each, and whenever the wizard casts a cost 370 or higher spell, it autocasts an Earthquake spells for free.

While having a global enchantment that shows the entire map is impressive, it is by no means powerful, thus Nature's Awareness was given the additional benefit of getting more power from nodes, something one would expect Nature to have, nodes being major junctions of power on the planet afterall, at which time it was renamed Clairvoyance. We've removed Nature's Wrath from the game, as it was extremely unfun - I did change it to affect all realms to be in line with the philosophy of no spells that target only specific realms. The new effect was to cause the earthquake effect only when the other player used a high casting cost spell, but the problem with that is that it punishes players for using their big spells or to be more precise, prevent them from using it as doing so is pretty much suicide. This basically meant Nature's Wrath was no different from a “dispel this if you want to keep playing the game and have fun” type of effect, which is obviously not fun and dispelling isn't fun either - worse, it meant the spell was unusable for human players because the AI was also forced to dispel it ASAP obviously. So that spell had to be scrapped but its parts were salvaged as two separate ideas : a spell that makes the user benefit from others casting expensive spells - which really is the same thing except both sides are happy, so using big spells remains a viable option as long as the user can deal with the consequence - and another spell that somehow plays into the theme of the “causes large scale earthquakes” to use the nice original art, as well as something to use the other idea, a spell that rewards yourself for casting your own big spells. The first gave birth to the spell Fairy Ring, while the second and third ideas were used in Seismic Mastery - a spell that casts a free Earthquake for each large spell being cast by the wizard. I obviously didn't have room for two global enchantments after removing one as modding is done by hex editing lacking the source code, and the latter wasn't nearly powerful enough by itself as an effect (it's a “win more” spell which are sometimes fun to use but not particularly good design) so the solution was to merge the Clairvoyance and Seismic Mastery effect together, giving birth to this spell which has 3 seemingly unrelated but flavor-wise matching effects - worldwide scouting, nodes and earthquakes all have to do with the mastery of the earth, the manipulation of the planet itself. The spell cost to trigger the effect was carefully set to ensure only truely big spells can take advantage of it, and this also plays into the role of Nature's “missing out on spells hurts more than usual”, as not having access to one of the very rare summoning spells means this enchantment is much less useful. Using the earthquake effect is optional - while the spell will always be cast automatically, the cancel button on target selection allows the player to not use the effect, which can be important as Earthquake obviously has a diplomacy penalty. As the AI will not target players with hostile spells unless they are hostile towards the player, Seismic Mastery will bring no harm to you if you don't get into a fight with the owner. If you do though, you better disjunction it or end the conflict as soon as possible.


3. Fairy Ring

Cost : 1200 MP

Research : 24000 RP

Whenever another player casts a spell that costs 301 or more, a random creature you are able to summon appears at your summoning circle for free.

Nature lacked a really impressive big global enchantment - Nature's Wrath failed to fill that intended role due to how unfun it was to play with or against, so when it was replaced, I wanted to make sure the new spell is something amazing. As Nature specializes in summoned creatures, what better could it do than become even more efficient at summoning them? Honestly, I don't remember the entire 4-5 pages of forum discussion and brainstorming but in the end this spell was made as it filled all the intended roles. It is summoning themed - you get free creatures. It keeps the old Nature's Wrath theme of “casting big spells against Nature will get you in trouble” but in a way that doesn't reduce the fun factor of the game - sure free enemy creatures WILL escalate the situation but if you can already deal with some, you can deal with more... or can you? That is an exciting decision the player has to be able to make correctly. It also promotes friendly strategies - you get free creatures even if an ally casts the spell. It can also be perfectly balanced to fit the “AI has more resources” design because “random creature” can use a formula to determine the creature in a way that works well. Designing the right formula wasn't trivial because the number of times the other side is expected to cast a spell that triggers it is also different (AI players cast more spells) - for those who want to know, the formula is [(Overland casting skill including AI skill modifier/30)+5 for AI players] number of D10 dice rolls, for each roll that comes up as 1, the creature's tier increases by one (default is common). Once the tier is determined, a random available creature is chosen from that tier. If none are available, the tier below is chosen and so on.


4. Entangle

Cost : 50 MP

Research : 21000 RP

All corporeal enemy units in combat have 2 lower movement speed.

Movement reduction had to be doubled to match the movement change on most other units. I don't really have much else to say other than the AI has been enabled to use this spell, unlike the original game, which makes a really big difference. Flying enemies are affected to ensure the spell is reliable, but Noncorporeals are not to play into the “Death realm is not affected by most of Nature's spells” theme.


5. Call Lightning

Cost : 60 MP

Research : 15000 RP

At the end of each combat turn, 3-5 strengh 10 armor piercing lightning bolts hit random enemy units.

Another unique, one-of-the-kind effect, for damage over time. Feels quite weird in this realm if you think about it, especially as it actually is the best such spell in the game, however considering Nature does have the theme of stalling for time - Web, Earth to Mud and Entangle are all such spells - damage over time is really the perfect kind of direct damage spell for it. As Nature typically only gets one damage spell per spell tier and each of them use a different mechanic, more powerful than the previous, this surprisingly fits well, and is perfect for Nature's theme of “missing out on unique spells hurt” as missng either this or Entangle has serious consequences and you typically need both to compete with other realms in the area of combat spellcasting.


6. Regeneration

Cost : 32/160 MP

Research : 12000 RP

Enchanted unit gains Regeneration 2

While unit buffs are typically not powerful enough to be very rares as they only affect a single unit, this is an exception to that rule - getting back dead units for free is that powerful, especially as this can be cast in battle. However to match this level of rarity, this spell restores 2 hit points each turn unlike the item ability which only does one, but becomes available earlier.


7. Herb Mastery

Cost : 1000 MP

Research : 15000 RP

All of the caster's units are fully healed at the end of combat, take no overland damage and restore 2 health per turn in combat.

Another global spell that was good but failed to impress. As it already was something like a global Regeneration, taking this idea further to add health recovery in battle seemed ideal. Not as potent as Charm of Life as in the late game, waiting turns to regenerate hit points only results in the enemy casting brutally damaging spells at the unfortunate armies, but still, any additional hit points gained are valuable. Obviously, adding Regeneration's “dead unit comes back” effect would have been way too powerful. One more nice consequence which I don't think was part of the original intention of the designers but exists notheless is that Nature wizards will not lose units to damage from Meteor Storm, meaning they can prevent most of the damage from all three Chaos globals as Gaea's Blessing already fixes the effects from Armageddon and Doomsday. This makes resarching and casting these spells especially important when Chaos wizards are in the game and can help becoming the laughing third while the Chaos AI's enchantments slowly eliminate everyone else but you. Of course this approach is risky and might backfire if the Chaos wizard becomes too powerful in the process, but Nature's regenerative powers tend to make it effective at fighting Chaos wizards so the risk isn't inherently too high. It might be worth noting that unlike Life, Nature magic can heal the undead, making this a very good spell to have for a Death/Nature dual realm wizard.


8. Colossus

Cost : 450 MP

Research : 1800 RP

Creature : 25 melee, 25 Ranged (4 ammo) +3 To Hit, 12 defense, 15 resistance, 3 movement, 37 health, 1 figures, Stoning Immunity, Poison Immunity, Wall Crusher, Pathfinding, First Strike, Illusion Immunity, Supernatural.

An upgrade to Stone Giant and an all-around efficient, versatile creature with no particular weaknesses that works well in almost all combat situations but has no outstanding strengths either. Only its Illusion Immunity is worth mentioning, as this is the only way for the realm to properly fight Invisible enemies, although the Entange+Call Lightning combo can at least help against the less threatening ones, it won't do much against an entire stack of powerful creatures.


9. Great Wyrm

Cost : 500 MP

Research : 15000 RP

Creature : 36 melee, +3 To Hit, 8 defense, 14 resistance, 3 movement, 45 health, 1 figures, Merging, Armor Piercing, Supernatural, Poison 40.

Great Wyrms offer insane damaging ability paired with instanteous movement to ensure the strongest creature from the most summoning focused realm is really impressive and brutal. However, they lack the versatility of a Colossus or Behemoth's ability to shrug off damage like nothing. They also can't deal with flying enemies by their own, and while Webs are an easy way out for the Nature player, it can be too slow and inefficient against an entirely flying enemy army. Noncorporeal flying units most often - but not only - found in Death armies are the Wyrms worst nightmare, as it can't do anything meaningful while the enemy wizard keeps throwing spells at it, slowly but surely destroying it. The poison ability is mostly for flavor - anything that doesn't get destroyed by the Wyrms attack is unlikely to have low enough resistance to get affected by it. Still, overlooking it and accidentally engaging the wyrm with a powerful unit that lacks resistance for any reason can be unexpectedly leathal.


10. Behemoth

Cost : 480 MP

Research : 15000 RP

Creature : 25 melee, +2 To Hit, 15 defense, 13 resistance, 3 movement, 42 health, 1 figures, Regeneration 3, Caster 40, Supernatural.

Behemoth is Nature's third option for a very rare creature, as the best summoner realm deserves to have that many. It's uniqueness is in having by far the best durability of any unit in the game, having extrmely high defense, decent amount of high points and fast hit point regeneration. While its attack strength is weak for a Nature creature of this tier, it's still impressive for a creature overall, and with this level of durability the Behemoth is expected to be able to attack many times before it goes down, assuming that ever happens. On top of this, Behemoths can cast Nature spells, making them more effective against all flying enemy armies than the Wyrms. For all of these amazing benefits they also suffer from two minor flaws - their resistance is mediocre for a very rare creature and while unlikely, they might end up getting instantly destroyed by a spell that prevents regeneration in some cases, and their movement speed isn't that great either, although with the help of Webs and Entangle this rarely causes problems.





Life Magic


Life magic specializes in healing and buffing normal military units and cities.

Strengths

    Good at buffing units, especially normal units

    Most effective at using Heroes

    Has various spells that boost resource producion of various types. Especially good at increasing gold and production output both directly and indirectly.

    Good at healing

    Benefits most from maintaining peaceful relations

    High availability of resistance buffs makes it strong against Death magic in general.


Weaknesses

    Below average summoning spells

    Can't use direct damage spells on normal units, mediocre at direct damage spells against Fantastic units.

    Can have a very hard time against Sorcery magic due to extreme reliance on enchantments

    Heavy reliance on using normal units

    Low versatility in the early game

    Many situational uncommon spells that might not be relevant for every strategy

Common

1. Star Fires

Cost : 12 MP

Research : 160 RP

Perform a strength 23 attack on target fantastic creature in combat.

While Life is not expected to be able to do direct damage on normal units which it is meant to protect, treating summoned units as non-life and harming them is perfectly acceptable and is the only type of damage spell the realm gets.

2. Bless

Cost : 7/35 MP

Research : 320 RP

Enchanted unit gains +5 defense and resistance against Chaos and Death realm spells, breath, gaze, or touch attacks. (Reminder : petrification is a Nature realm effect)

This spell no longer adds defense against physical attacks coming from creatures of the listed realms, nor against magical ranged attacks belonging to those realms. For a while it used to do the latter, but even that was far too powerful, making it almost as good as Resist Magic and Resist Elements combined. While I usually avoid spells working against specific realms, this is an exception as the majority of relevant harmful spells do come from those two realms, and most importantly, there is exactly one such spell remaning for each realm : Resist Elements resists Nature spells, True Sight resists Sorcery spells and this resists the remaning two. (Life has no spells that need to be resisted that affect normal units and many fantastic creatures were designed with their vulnerability to life magic in mind, so a spell to resist life would be a very bad idea.)

While Sorcery and Nature also have spells that might hurt a unit, they tend to have effects that would ignore this spell anyway (Illusion damage, Crack's Call, Web etc) so excluding those realms makes very little difference here, literally only being relevant for Confusion and Vertigo in the early game, both of which are Sorcery, the realm Life is actually intended to be weak against.



3. Healing

Cost : 15 MP

Research : 320 RP

Target unit recovers 5 hit points in battle.

To be perfectly honest, this might be one spell that isn't perfectly balanced yet, as restoring 5 hit points has an entirely different meaning on a big very rare tier monster and a common swordsmen unit. However, this also makes the spell equally useful for the entire game and means it scales with the game progress which is important : spells do need to have increasingly higher relevance to be still worth using up a combat turn on casting them, and in that sense healing is perfectly balanced. While the target has better defenses, the enemy also has better damaging spells as the game progresses, allowing Healing to fill roughly the same role in being able to cancel out a certain percentage of incoming spell damage. For these two reasons, I decided to not nerf this spell in the end. I tried to ensure that healing is less efficient than damage spells on typical targets, so attempting to counter damage can only do so much before the damage piles up and destroys the unit. Still, the time it buys is often enough to end the battle and guarantee the safety of the unit. Fortunately, the original amount of 5 hit points healed worked perfectly in practice, although that's just a coincidence as both the damage output of damage spells and the hit pints of units were updated.


4. Endurance

Cost : 60 MP (overland)

Research : 380 RP

Enchanted unit gains +1 movement and +2 defense.

This spell originally only provided 1 movement which I believed to be too unimpressive. While now I realize movement is extremely valuable, I still think providing an additional effect wasn't a mistake, as Life magic, being bad at summoning creatures, deperately needs ways to improve their normal units to the level of good common summoned units and beyond - especially beyond, as casting multiple buffs on a unit is way more expensive than summoning a single creature - yet it has to be due to buffs' versatility of being possible to apply on any unit, even those where it has much more outstanding benefits. So in order for Life to have something competent during the first few years of the game, I had to make sure those fragile basic units like swordsmen, can be enhanced to the point where they can actually fight units like hounds or bears evenly and survive spells like Fire Bolt. The only way to have that happen is through extra defense, and while Holy Armor does provides some as well as extra levels from Heroism, a third layer seemed necessary. More importantly, while + To Defend was a stat, there were no targeted buffing spells in the game to provide any so it felt intuitive to include it here.As a consequence, Life became able to create virtually unkillable early units but at an extremely high cost, by putting all of their buffs on them. This was enjoyable to play but came with balance problems, so I had to make sure the strategy doesn't work on all possible enemies - against some using more units with fewer buffs each becoming more effective. As none of Life's spells are really effective against it, Poison ended up serving this purpose, making the mass-buffing strategy weak against Sorcery (Nagas have high poison) and risky against Death (Ghouls have low poison but convert the unit to their side if killed) wizards. This solved the early game problem but another issue became apparent eventually : Endurance was way too powerful on late game fantastic creatures. Considering many options, I decided on swapping the defensive effects between Holy Armor and Endurance, making sure the summoned creatures “only” get the 2 armor, not the much more superior +1 To Defend bonus which can on high end units be as good as 5 defense. It also resulted in Holy Armor and Holy Weapon becoming a proper symmetric pair of spells, one providing +1 To Hit and the other +1 To Defend.


5. Holy Armor

Cost : 50 MP (overland)

Research : 320 RP

Enchanted unit gains +1 To Defend. However if it has 5 or less defense, it gains +2 defense instead.

As explained above, this is now a symmetric spell to Holy Weapon, but I also had to make sure it retains the original functionality of being beneficial to low armor units, by making it provide the old 2 armor on those. I have some doubts about that decision now, as it was originally meant to have a low MP cost early game combat spell for defense in the game, but allowing the spell to be cast in combat was too powerful for the midgame, where +1 To Defend is a more sizable bonus and being able to instantly recast it when dispelled was entirely too good, although the real problem was it was a lot more economical to simply not cast the spell and only use it in combat if the target was fighting alone and could reliably expect to survive a turn without major damage, freeing up overland casting capacity entirely, and going against the intended design that buffing has to deal with losing enchantments thorugh dispel magic in exchange for the massively powerful units it can create.


6. Holy Weapon

Cost : 8/40 MP

Research : 260 RP

Enchanted unit gains +1 To Hit and can bypass Weapon Immunity.

This still works like the original and is Life's way to buff damage output, in contrast to Chaos which adds attack strength instead. Being one of the 3 common spells that enable the bypassing of weapon immunity, it ensures that game mechanic is powerful but not unbeatable in the early game. Without that it wouldn't be possible to allow that ability to be part of the early game which would be very bad because it's definitely not good enough for any phase of the game later, as Alchemist Guilds are already built everywhere by then.


True Light

There aren't enough Life creatures for a spell exclusively buffing them to be worth existing, especially considering the design of Life is “bad at summoned creatures”. The other half of the effect, debuffing Death creatures, could be useful but goes against the design of not selectively penalizing realms, thus this spell is removed.


7. Heroism

Cost : 15/75 MP

Research : 320 RP

Enchanted unit is elite.

In the earlier stages of the mod, a significant amount of complaints were posted saying this spell is too powerful. The possibility to replace it with something else was considered. This spell is somewhat special because it fills the role of being a major buff that doesn't stack which makes is super useful for the early game of the realm, yet, as it doesn't stack with unit levels obtainable through normal means, doesn't raise the overall potential units can reach by putting all the buffs available on them. As overbuffing is a serious game balance threat, this valuable design had to be kept. Other ideas were considered but they either didn't solve the issue of stacking too many buffs, were redundant with existing spells, or weren't able to provide the same level of benefit for the early game as Heroism. However, when discussion about what makes Heroism too powerful despite the fact it actually does not give any bonus you can't gain through leveling the unit (which isn't particularly difficult) - and level-up bonuses were slightly lower than in the original Master of Magic already - started, I realized the issue is not the spell itself, but its potential interaction with heroes. In particular, a hero who has a level scaling resource producing ability such as Sage, Ritual Master or Legendary, produces a huge amount of resources which is game-changing at that phase of the game - the additional 30-50 income per turn causes a massive snowballing effect. As a consequence we realized the root problem is heroes being available from turn 1 - there simply is no way to make it balanced to hire a hero who might have abilities such as Noble which generates 20 gold a turn, at a time when the player's only town produces less than 10 gold a turn. Resource producing abilities aren't the only problem though - a hero with good abilities at a time most other players can still only produce settlers and build outposts or summon common creatures is a potential game winner. So as it has already been explained in the Heroes chapter, the solution turned out to restrict heroes to appear at turn 30 or later only and cost more gold to hire, instead of changing Heroism. Later, the economy rebalancing to slightly improve how the early game economy plays and provide players with enough resources to actually be able to play the game properly and have choices, further mitigated this issue as typical early game towns were slightly more productive on the whole, nonetheless the restriction of turn 30 on heroes remained in respect of their military potential and also to reduce the luck factor present - even if a turn 5 hero is a game winner, it's entirely up to luck whether the player gets an offer and can amass enough gold to pay for it so better to not have that chance to begin with.



8. Just Cause

Cost : 150 MP

Research : 480 RP

Gain 10 fame. All cities have 1 lower unrest.

Life being “the” enchantment realm, having a global common spell is good design, especially as it allows players to be familiar with the concept immediately. The Fame bonus can make it relevant for hero strategies, while the unrest redution is overall good for economy, but fairly balanced by the fact in the early game the total population is too low for increased tax rates to make a gamebreaking difference, and later, unrest reduction buildings and garrisons are easily avalable and make this spell quite a lot less important but still useful thanks to the larger number of cities potentially affected.


9. Heavenly Light

Cost : 60 MP

Research : 440 RP

Enchanted city produces 3 religious power. Units defending the enchanted city gain +1 attack, defense and resistance during combat, and if they do not have magical weapons, they also receive a bonus equivalent to having them.

Originally providing the effect of True Light at a higher tier of rarity, this spell had to be completely redesigned, as True Light was also removed and binding it to city defense only made the spell even less playable. Life being the least aggressive realm, if felt intuitive to give them a city defense spell that can be used in the early game and provides a benefit without any special condition. As Life struggles more than other realms at expanding early due to lacking summoning and combat spell options, this can at least help them be the top dog at avoiding conflict and defending their territory obtained through settlers. Later on though when Life becomes able to build stacks the enemy can't stop or even meaningfully damage, a strong higher tier city defense spell, while matching the flavor of the realm, would be very bad for game balance : the only thing that keeps expansion limited in this stage of the game is the need to provide decent garrioson for all the conquered cities, and a better city defense spell would reduce the need for doing that significantly. This means common is the only spell tier a city defense spell in Life can exist at, and honestly, I think one has to exist for flavor reasons. As city defense spells are not particularly popular among players preferring an aggressive playstyle, and this spell was designed before the addition of Magic Markets, which made Life wizards extremely mana starved due to high buffing costs and no summoned creatures to conquer nodes, a power production of 3 was added albeit at a cost of 1 maintenance. While this effect isn't as important nowadays, the power counting as a Religious source makes it still highly relevant in specific combinations : Cult Leader and Dark Rituals.



10. Guardian Spirit

Cost : 60 MP, 1 MP/turn

Research : 200 RP

Creature : 7 melee,+3 To Hit, 6 defense, 10 resistance, 2 movement, 10 health, 1 figure, Non-Corporeal, Poison Immunity, Resistance to All+1, Meld with Node. Melded nodes are affected by the effect of Heavenly Light, buffing garrions and producing 3 additional power.

While the creature's stats have been improved, it is still fairly weak as it should be for a Life creature. Poison Immunity however can make it relevant in providing the Life wizard one way to deal with poisonous enemy creatures which hard counter Life's main strategy. The Spirit itself is not strong enough to be efficient at fighting them, but being hard to take down through Poison Immunity and providing resistance to all other units at the same time, it is extremely helpful to have one in battles against multiple Poison units. Providing a global buff in combat that comes at no additional cost, while 1 resistance is unassuming, this can be a significant addition to any armies that need resistance in the early game nonetheless. The main function of the spirit however has always been to provide a better way to meld nodes than the default. Originally the spirit provided a 80% chance to prevent the melding of the node by others, which was a very problematic effect : It was extremely annoying to have such a luck based feature from the human players perspective, often requiring to summon 10 or more spirits to meld the node, while at other times needing only one, mainly because you had to guess how many spirits you needed before sending them to the node, if it wasn't located right next to your cities. Underestimating the amount resulted in missing out on the node until your second pack of spirits reached it, and overestimating left you with useless spirits and wasted spellcasting power. This was even worse from the AI's perspective though - as the AI sends sprits one at a time and isn't smart enough to summon them close to the node, it was able to seriously hinder the AI's ability to take the node, while still frustrating the player if they assumed their node is safe but luck was on the AI's side. Ultimately the effect was meaningless : you had to still garrison the node because the protection failed 20% of the time and the enemy could keep trying until it worked. So this effect was eliminated and instead an effect that's useful for players and AI alike and helps defending the node through conventional means was added. It's also worth noting that effects based on pure random chance belong to the Chaos realm and have no business being in Life whatsoever - Nature only gets one because it's the “can do everything” realm.


Uncommon


Dispel Evil

1. Exorcise

Cost : 20 MP

Research : 640 RP

All figures in target unit in combat must resist at -1 or be irrecoverably destroyed. Additional resistance penalty of -3 for undead.

Following the same process as Star Fires, this too has been changed to work on all fantastic creatures. The save penality is low, but so is the casting and research cost, to make sure it's useful early when low resistance creatures are still abundant. It's existence is a major balancing factor for several uncommon Death creatures especially the two that Regenerate and have very low magic resistance but huge military potential. Undead penalty was kept because destroying undead is definitely something Life realm is expected to be good at, and the Undead game mechanic is extremely powerful and definitely needs some counters to keep it in check : players are essentially receiving free units without having to produce them or spend resources or maintenance on them.


Astral Gate

Originally a very rare spell, this was moved to uncommon to match the rarity of the other two plane travel spells, as really, it isn't any more powerful than them and does the same thing. However, later at the time the role of planes and planar travel was reconsidered, all such spells have been removed from the Life Realm and now the only planar movment spell is Arcane, giving each realm an equal access to it. While being able to send settlers to the other plane did support peaceful strategies achieved through economic superiority, it was simply a far too large advantage to be able to both gain roughly half of a plane for yourself without contest, AND weaken the “final boss” enemy by the same amount at the same time. It also encouraged risk instead of strategy, as entering the other plane could potentially result in meeting a hostile wizard who not only prevented building any cities there due to being superior in military, but often even using various curses and hostile spells on the player such as Drain Power, Dispelling Wave and Fire Storm. While city based curses were not available without scouting the player's territory, spells that do not target cities have no such restriction. This also worked in the reverse : AI players throwing units onto the other plane from Myrror often resulted in a situation when superior enemy forces “spawned” deep in the players territory, in worst case destroying the cities, and in best case, opening up the possibility for the AI to use curses on them, while the player still had no way to go to the other plane unless they were lucky enough to find a weak tower.


Planar Travel

See above.


Plane Shift

Now an Arcane spell.


Planar Seal

This spell was another one that had to go, as it literally did nothing relevant for most part of the game, only to get immediately dispelled as soon as it would have became relevant. Originally the AI lacked the understanding to use or dispel it at the appropriate time, and while that could be possible now, the spell would still not serve any interesting purpose. Spells that say “you can't use this part of the game” without any more meaningful effect are generally a bad idea anyway.


2. True Sight

Cost : 15/60 MP

Research : 420 RP

Enchanted creature gains Illusion Immunity.

While Bless protects Life wizards from Chaos and Death, this spell works against Sorcery to ensure the game is fair and all realms are equally covered. More importantly, this effect can ensure heroes remain playable and don't get wiped out by the common tier, but very powerful Illusion ability which entirely ignores their armor. While it seems like it goes against the design of Life being weak to Sorcery, there is a catch - being an enchantment itself, the Sorcery player can and will dispel it on all but hero units wielding artifacts with this spell. However the spell is priced low enough in research cost to give Life players the possibility to fight a successful war against Sorcery wizards, if they manage to do it in the timeframe between researching this, and the Sorcery player researching their more potent dispelling magic. Other than requiring a way to counter Illusion, which unlike Doom comes at the beginning of the game, this spell is also extremely important in ensuring Invisibility has enough answers and doesn't dominate the game too much, making Life one of the realms that are good at countering it.


3. Prayer

Cost : 40 MP

Research : 2140 RP

All units in combat gain +1 To Defend, To Hit and Resistance.

By far the most powerful global combat buff of its tier in the game and likely one of the best Uncommons overall, this spell wasn't changed because buffing is exactly the intended strength of the realm. Being a global combat spell, it is also one of those very few advantages Sorcery wizards can't remove by dispelling it (as that ability was removed from all dispel type spells in the game). As it's impossible to have an integer amount fewer than 1, there wasn't really any room to make this spell weaker numerically other than redesigning the entire To Hit and To Defend mechanic, something that was considered but Caster of Magic was far too ahead in development to go through with such a massive change to a core game mechanic. More importantly, the effect of this spell was the baseline for similar global spells in other realms, of course, taking into account that they have to be overall less powerful than it, as Life is the realm that specializes in buffing.


4. Raise Dead

Cost : 40 MP

Research : 1280 RP

Target dead normal unit in combat is revived with half hit points. The same unit can't be revived or healed until the end of combat and counts as a fantastic unit (with no realm) until the end of combat.

This was mostly fine as is, except for one detail - it made it literally impossible to lose heroes to damage and more importantly, it allowed heroes to fight and kill powerful units, come back, and do it again and again and again, enabling one hero to take out any number of units equally powerful as itself. Restricting the unit to be revived only once per battle means the player either has to avoid relying on the dead hero until the enemy runs out of threats, or requires extreme caution to ensure it doesn't die again - sending it to attack other strong units is out of question. Converting to fantastic is both for flavor reasons (the unit is halfway back from the grave explaining why it isn't affected by healing properly yet) and because it makes them vulnerable to fantastic unit hitting spells such as Banish or Exorcise both of which can destroy the unit permanently, finally it's also the way the game's coding knows the unit is under this effect, by setting its race code to this new special value. Most of these changes only really matter for reviving heroes, as other normal units were usually only revived with the intention to prevent suffering losses in the battle after it was decided in your favor, not to let the newly raised unit engage the enemy again.


5. Sanctify (new)

Cost : 70 MP

Research : 960 RP

Enchanted unit has no gold maintenance and produces 3 power.

A completely new spell that plays into the role of Life wanting to avoid conflict, this makes your garrisons (or treasure hunters) also serve as an economic investment. Needless to say, entering a war and risking to lose these units on a battlefield is not a smart thing to do. To be perfectly honest, this spell was created to fill the hole caused by removing Planar Travel which already happened at a time when it was concluded Life doesn't need a new unit enchantment and most possible options would be redundant and unbalanced. However a spell had to exist so I tried to design one that has an effect that will be popular for human players without being particularly powerful, and playing into the underused theme of peaceful economic victories which are much harder to achieve and less often attempted in Caster of Magic compared to Master of Magic mainly due to the fixed diplomacy system and AI which means the player does need to put effort into staying on good terms with others and can't expect to easily manipulate all AI players into signing a peace treaty when the player's forces are obviously inferior and the AI could expect to win the war, nor can they expect to see no enemy forces showing up after a war declaration anymore. As people often hate paying maintenance costs with passion, a spell that removes that seemed intuitive. There was another design goal though - AI players tended to underperform when using mono-Life due to the lack of summoned creatures early on and generarally not AI friendly themes later (heroes, intelligent use of buffs, building doomstacks) - so I wanted to make a spell that also gives an edge to AI players behind the scenes. While the AI already pays reduced maintenance costs on higher difficulties, they also receive a difficulty scaled bonus to their power income and overland casting ability, the two of which combined makes this spell a lot more beneficial for the AI as they can both get more power out of the spell and cast it more times for the same investment, albeit in exchange for the maintenance elimination being less relevant. To ensure the AI doesn't lose the units enchanted by this spell in lairs or other battles, it prioritizes casting it on spellcasting units such as magicians which typically stay behind to garrison their towns.



6. Altar of Peace (new)

Cost : 120 MP (4 MP/turn)

Research : 1280 RP

Enchanted city produces additional research between 0 and 24 depending on your average diplomatic relation with other players.

Created even before Sanctify, all options were considered and research was the only area Life wizards were not able to buff much on cities. For roughly the same reasons described above, this spell was designed to open up that option if, and only if, the Life player was indeed aiming for a peaceful, economic and research superiority strategy. This also fills the role of helping AI Life players out, as AI players who survive typically maintain good relations with each other - if they did not, they wouldn't be around in the game long enough to care about bonus research, unless they won their war(s) quickly and efficiently in which case they really don't need any further help from the spell system : they already control two wizard's worth of territory. The maintenance ensures the player has to carefully consider his diplomacy options, as casting this then ending up in a large scale war can easily turn the spell into a net engative. Having these two spells opens up a new way to play the Sorcery/Life dual realm as well, as Sorcery excels at manipulating diplomacy to their favor and has the strongest late game so research and magic power are extremely valuable for it.


7. Unicorns

Cost : 200 MP (4 MP/turn)

Research : 1280 RP

Creature : 6 melee,+2 To Hit, 4 defense, 7 resistance, 4 movement, 8 health, 4 figures, Poison Immunity, Resistance to All+2, Teleporting

Unicorns are the only uncommon creature in Life, and mainly excel at providing the significant +2 Resistance bonus to your army while also having high hit points for maximal survivability. Their teleportation allows them to avoid engaging stronger units in melee and also allows them to take out any ranged attackers that could still damage them. Their attack power is fairly low and their high To Hit score makes them not benefit from Prayer as much, while their cost of summoning is quite high. Thanks these downsides, the Unicorns manage to fill the role of “Life is weak at summoning” while still providing a useful, valuable, and quite impressive spell. Poison Immunity also allows the Unicorn to single-handedly counter the poison vulnerability of Life once it reaches this spell, as it is both immune to it, strong enough to kill those weaker creatures, and adds enough resistance to allow the rest of the army to do so as well. While Life is not a good realm for a Conjurer based strategy, picking Unicorns for research on turn 1 is viable enough to enable that, and while researching it is time consuming, the creature is capable of countering pretty much every common creature, and especially Life's traditional weaknesses, as well as being super efficient at dismantling garrisons with a few magicians, which could be hard to deal with otherwise. I doubt this strategy is anywhere near top tier but it should be at least playable for medium levels of difficulties which is already a big deal considering it's the realm's weakness.


8. Stream of Life

Cost : 120 MP

Research : 1280 RP

Doubles population growth in enchanted city, reduces unrest by 3 and each unit in the city is fully healed at the end of the turn.

With the faster pacing of the mod in population growth, a rare spell isn't very good for that purpose as by then most of the player's cities already reached a large size and there is no room left on the map for more, making it only really beneficial for a raze and rebuild strategy which would be far too late to start at that time. For this reason the spell was moved to be an Uncommon, the casting cost was reduced, and the unrest reduction was limited to a much more reasonable 3 to ensure unrest generating spells in other realms, while not as great against Life as usual, still do something. This spell really helps out the realm's peaceful economic potential, and being an uncommon, picking it as a guaranteed early research is possible, although the high research cost keeps this a balanced strategy, quite different from the original Master of Magic's ability to start with the spell already researched with 11 books.


9. Resurrection

Cost : 325 MP

Research : 1600 RP

Revives an dead hero on the overland map.

It was suggested to move this into Arcane but that would go against the design goal to keep heroes a very powerful but difficult to play mechanic where keeping them alive is super important. As Life is good at using heroes, I allowed it to keep the spell, but the casting cost is pretty high to punish losing heroes and make sure players can't use strategies that involve regularly sending heroes on suicide missions to do massive damage as they go down.


10. Divine Order (new)

Cost : 250 MP

Research : 1920 RP

Effect applies to all players.

City and unit enchantments are 25% cheaper. Global enchantments are 10% cheaper. Summons are 10% more expensive. Combat spells are 20% more expensive. Multiple copies from different players are cumulative but at a halved effect.

A new global enchantment to replace the removed Planar Seal spell, this spell aims to take advantage of Life's supposedly diplomatic theme. Seemingly affecting everyone equally, it's pretty obvious that spells Life wizards use most are reduced in costs while spells other realms specialize in, are more expensive. Casting this spell can improve your relations with other Life wizards, or worsen it with Chaos and Death. AI players will take your treaty status with everyone into account and prefer to cast this spell if on the whole it helps their friends and hurts their foes more than the opposite. It's worth noting that while seemingly harmful for the more combat magic oriented realms, I've made sure they have options that can take advantage of, or ignore this spell, so in a game map with many Life wizards and copies of the spell, they can rely on those options more than usual. In particular, Death city curses are enchantments, so they'll cost less, as well as their Lycanthropy spell which is an enchantment used for summoning the werewolf creature. Combat unit curses are reduced in cost too, making Black Sleep or Possession more threatening. Chaos can take advantage of it by spamming their fairly decent buffs like Flame Blade and Chaos Channels, or curses like Shatter and Warp Creature, although I have to admit they are hurt by this spell the most. The spell's casting cost is low and the AI doesn't have a high priority to recast it, so dispelling it can be often viable. While Life mostly benefits, even they can sometimes be negatively affected, so carelessly casting this before summoning a bunch of Unicorns or relying on heavy use of Exorcise or Holy Word can backfire and punish players. It's worth mentioning the AI is aware of the effect and will prioritize spells that get around this effect more - so you can seriously expect them to throw a lot of curses in respose, or Sorcery wizards might try to take advantage of the situation and make entire stacks of units invisible so while the benefits can be singificant, the risks to consider are, too. Especially if all those friendly AI players helping you by casting the spell manage to reap the benefit better overall and get way ahead of you economically.




Rare


Righteousness

This spell really was no different from saying “chaos and death loses the game”. Completely unfair and other than that also completely unbalanced. Even Magic Immunity isn't so broken to block all damage completely from all creatures from the realm on top of all spells. Players can protect their units using buffs and healing, I believe that area is well covered without requiring a spell like this.


1. Incarnation

Cost : 700 MP

Research : 5500 RP

Summons the Chosen

And iconic and powerful spell in the original, and the peak of enjoyment for hero users, I had to make sure this spell stays amazing. Obviously the unremovable Magic Immunity had to go, and simply having a hero with good combat stats isn't such a big deal, so this hero received a different role : he has pretty much every single global army buffing hero ability, including the new ones to ensure whichever army the hero travels with is a significant force. Nonetheless he still has good combat abilities as well, and can fight on his own if necessary. Such a powerful and outright immortal unit - you can resummon him even if he was lost to irrecoverable damage, the only such hero in the game! - obviously can't be cheap so the cost of summoning him stands out, being even higher than the best summoned creatures in the game. Worth it. The unusual side effect that he counts as a Life creature during battle only was kept, as this made losing him a significant event - Raise Dead can't revive fantastic creatures so you had to pay the full overland summoning cost.


2. Inspirations

Cost : 200 MP

Research : 5000 RP

Enchanted city gains +100% Production.

This was originally very rare and while certainly is extremely powerful, city production hardly matters at that time of the game when very rare spells already dominate. Buffing cities isn't what you want to do right before winning or losing the game. The bonus is additive, meaning that on typical endgame cities already having ~50-100% production bonus, this doesn't really double production which would be far too powerful, more like increases it by half. High research cost as this spell is really that good, being able to produce troops 50% faster is no joke.


3. Prosperity

Cost : 175 MP

Research : 2500 RP

Enchanted city produces +50% gold.

Not as potent as Inspirations but gold is much more versatile so it's better that way. Research cost is lower as unlike production to prepare yourself for a game deciding endgame, boosting economy is something relevant earlier, and also because this spell simply produces less resources overall.


4. Invulnerability

Cost : 30/150 MP

Research : 4000 RP

Whenever enchanted unit takes damage, it takes 2 less damage. Enchanted unit gains Weapon Immunity.

While Weapon Immunity is rarely relevant this late in the game, the damage reduction is as good as 6.66 additional defense, making this by far the best purely defensive spell in the game. This effect even reduces damage that would ignore or reduce armor fully, only the effect of Doom can bypass this reduction. Life having the best defense buff in the game definitely the correct design, so nothing had to be changed here except the casting cost.


5. Lion Heart

Cost : 36/180 MP

Research : 4000 RP

Enchanted unit gains +3 attack, +3 resistance, and hit points equal to 8 divided by the number of figures, rounded down.

Originally giving 3 hit points per figure, this spell was insanely powerful on multi-figure units. While it still is very good for them thanks to the attack bonus, now the additional hit points are reasonably the same total amount regardless of figure count. This made this spell a lot more relevant for single figure units, including heroes, which now gain a full 8 additional health from it. While this does give Life two powerful defensive unit buffs at rare, it is the primary strength of the realm so this many is expected.


6. Mass Healing

Cost : 35 MP

Research : 3500 RP

All of your units in combat are healed for 5.

Rare is the tier AOE effects start to appear at, so AOE healing should, too, there was no need to change that.


7. Altar of Battle

Cost : 300 MP

Research : 4500 RP

All units produced in the city are Elite.

Pretty much the late game vesion of heroism, this is a buff that affects a large amount of units, yet doesn't increase their maximal potential. The buff is quite significant compared to the usual rare spells that affect multiple units, and this can pretty much affect all of your units produced after obtaining the spell, so keeping the cost high seemed like the best idea.


8. Exaltation (new)

Cost : 30 MP

Research : 3000 RP

Target unit in combat gains 8 additional hit points.

An improved healing spell that is less effective on MP/HP but can restore more in one use, and allows overchanging the unit above its maximal health, so it works well as preventative measure. It can also bypass irrecoverable damage by adding new hit points instead of healing that damage, making this functionally superior to normal healing spells. Nonetheless the amount healed is slightly less than the amount of damage a spell of this tier is expected to do, just like the basic Healing Spell.


9. Holy Word

Cost : 60 MP

Research : 4000 RP

All enemy fantastic creature figures in all units must resist at -2 or be irrecoverably dead. Undead suffer an additional -3 penalty.

All enemy targeting version of Exorcise, with slightly better save modifier. Ensures summoning stacks of 9 rare creatures isn't always the correct answer to everything. While pretty much unchanged from the original this spell was a perfect fit for both the realm's role and game balance. At this rarity, mass production of Undead for free through Zombie Mastery is available, so countering them is still fair and despite the efficiency, it's an economic benefit to the Death player who doesn't need to pay nearly as much for creating the zombies as it costs to destroy them even with this spell.



10. Angel

Cost : 310 MP (8 MP/turn)

Research : 4000 RP

Creature : 18 melee,+2 To Hit, 9 defense, 11 resistance, 5 movement, 27 health, 1 figure, Holy Bonus 1, Illusion Immunity, Exorcise, Caster 24

Although the damage output of Angels is not better than an uncommon creature to play into Life's “weak at summoning” role, Angels still offer a formidable movement speed that can take out ranged units easily, have natural Illusion Immunity to provide a tool against Sorcery magic which the realm needs badly, and can support your army through Holy Bonus and casting spells. Angels are also surprisingly effective against other rare creatures, as they are typically single figure and the Exorcise ability might destroy them instantly. Even with all those perks though, this creature isn't as powerful as it appears to be : Unicorns are faster, Sorcery will be able to use Banish to eliminate it, and Holy Word is usually more effective against enemy creatures even though Exorcise has a better save modifier. The unit does stand out in one role though, and that's support, being durable enough itself and able to do relevant damage to most normal units, while providing a passive boost to the offensive and defensive power of the entire army.


Very Rare


Tranquility

A spell that literally has the effect “Chaos wizards aren't allowed to play” this had to be removed without a question.



1. Life Force (new)

Cost : 900 MP

Research : 15000 RP

All of the caster's cities produces 1 magic power for each unit of population.

Like Tranquility, this too was removed as countering all Death spells is not acceptable. The two spells were reassigned to be resource production spells that depend on population, something that is very suitable for Life and helps playing the realm peacefully as well. One spell was decided to produce magic power, the other research, as these two resources are difficult to increase through Life magic in the previous tiers. The power production spell ended up using the same name the removed spell had as it matched the new effect perfectly. The research producing spell had to be renamed though.


2. Enlightenment (new)

Cost : 900 MP

Research : 6000 RP

All of the caster's cities produces 2 research for each unit of population.

All of the caster's heroes gain +10 EXP each turn instead of 1.

The research producing version of Life Force, this spell has a lower RP cost to ensure it's viable to research it before other very rares, as doing it afterwards is quite pointless, having no spells left to research other than the Spell of Mastery. The experience boosting ability was added to help AI players make their heroes a threat, way before the difficulty based AI hero experience modifier even existed as an idea, but it's also very useful for human players who want to replace their high level but obsolete tier heroes with champions that would have no experience, and suits the realm's hero theme.


3. Crusade

Cost : 1200 MP

Research : 18000 RP

All of the caster's units gain a level.

This spell was perfectly suitable for the design goal of big, impressive and powerful spells and required no change. It also supports the AI's “overwhelm with a large amount of units” strategy very well.


4. Charm of Life

Cost : 1500 MP

Research : 24000 RP

All of the caster's units gain +25% hit points (but a minimum of 1)

Same as Crusade this spell was good as is, although it has been given the highest RP cost slot and a high casting cost because the effect is quite significant and usually more powerful than Crusade's extra level.


5. Holy Arms

Cost : 600 MP

Research : 12000 RP

All of the caster's units gain Holy Weapon

Slightly underwhelming compared to the other two mass army buffs, this spell still provides a relevant boost that's usually around 25% extra in damage output, but does not stack with Holy Weapon itself, nor is it beneficial to magical ranged units, this fills the role of a more accessible and cheaper mass army buffing spell that supports relying on numerical superiority instead of using few, super powerful stacks. I believe that's about right because it does support the correct theme and gameplay goals, without escalating the problem of unstoppable stacks. While the effect is only good but not outstanding, every unit in the player's army gaining the white Life buff aura makes it look very impressive. Overall, I believe these 3 military purpose global enchantments were well designed in the original.


6. Consecration

Cost : 200 MP

Research : 9000 RP

Enchanted city is protected from Chaos and Death magic, and corruption nearby has a chance to be removed each turn.

Although it only affects Chaos and Death spells, this is still fair, because it does not really do so based on realms, they merely happen to be the ones who have such spells. Life definitely should have a spell to protect their cities from curses. As Nature's theme is bypassing protections, especially using Earth magic, its only spell that harms cities, Earthquake, is not affected by Consecration, and neither Sorcery nor Life has any such spells at all.


7. High Prayer

Cost : 70 MP

Research : 15000 RP

All units in combat gain +1 To Defend, +1 To hit, 3 attack, 3 resistance and 2 defense.

I don't have much to say, this improved version of Prayer which isn't cumultive with it is by far the most powerful in-combat buffing spell for raw stats, and is what the Life realm is expected to have, so I didn't change it. As combat enchantments are the one thing that cannot be dispelled in Caster of Magic, this can be helpful even in situations when the other, overland spells are not, however the steep casting cost, especially if range penalties are involved, can quickly drain the player's mana reserves if they get overwhelmed by a large amount of battles.


8. Call to Arms

Cost : 70 MP

Research : 15000 RP

Combat summon a unit of Paladins.

One particular thing Life struggles with is ensuring they actually have units in combat worth buffing. Lacking direct damage spells and combat summoning entirely, Life is very reliant on their units, and while this works fine for most of the game, in the endgame when losing large portions of armies is often inevitable, Life does need something to deal with the issue. At 70 MP this is fairly overpriced for a combat summon that's nowehere near as powerful as an Earth Elemental, but it does fill the role of enabling Life players to participace in the combat spellcasting game even if buffs or healing are not an option. Due to the Holy Bonus, it also works well as a combat buffing spell, in which role the 70 cost is much more reasonable, while the buff itself isn't that powerful, it comes with an additional, pretty good unit in one package. This spell became much better at that after these types of bonus effects have been updated to immediately apply instead of only at the beginning of the next combat turn.


9. Supreme Light (new)

Cost : 70 MP

Research : 15000 RP

All of the caster's Life creatures and magic user units gain +2 melee and ranged attack, Defense equal to 1/3 of their magic resistance, and the units will be able to regenerate at the end of combat.

While Life is outstanding at buffing, the original design missed one important group of targets : fragile magical ranged units didn't really benefit much from any of the buffs in Life other than those granting extra health. This provides Life with a spell that can increase the damage output of magical ranged units, most other spells can't do, while also making the glass cannon magicans a lot more viable to use, as they can expect to survive even if killed at no additional cost. Nonetheless, when attacking enemies, the spell won't be active on the first turn, so any units lost then stay dead unless revived by other means. This spell also makes the otherwise mediocre Life creatures a viable strategy, as they typically have high resistance and thus gain a lot of extra armor, and even the traditional “stack of 9 summoned creatures” stategy can become playable for the realm due to the units effectively gaining regeneration, increasing the realm's versatility in the late game to that of other realms.


10. Arch Angel

Cost : 600 MP (18MP/Turn)

Research : 21000 RP

Creature : 21 melee,+4 To Hit, 12 defense, 18 resistance, 4 movement, 37 health, 1 figure, Holy Bonus 2, Illusion Immunity, Wind Walking, Caster 40, Negate First Strike, Supernatural, Primal Force

The final tier of creature spells in Life, Arch Angels represent the qualities you'd expect from such a creature : it's very difficult to destroy, having the highest natural magic resistance score in the game and reasonably high defense. Its damage output is okay but not outstanding for a very rare creature and its movement speed of 4 is also average. However it shines at supporting other units, not only buffing them with Holy Bonus 2 but ensuring they can keep up on the overland map thanks to the added Wind Walking ability. Negate First Strike also tries to bring out the “good at defending itself” quality, and finally, Primal Force has been added for flavor. As Nature, Sorcery and Chaos have nodes, one might wonder where the planes of Life and Death connect to and influece the worlds? The answer is through theses creatures - Arch Angels and Demon Lords represent the connection and thus, like nodes, generate magic power pouring from those planes of existence. Arch Angels are amazingly good and versatile creatures, their main downside being the extremely high summoning cost, which makes them the second most expensive creature spell in the game even though they are nowhere near that powerful, so through the price, they still manage to achieve the “Life is not that good at summoning” role despite being a really outstanding creature.




Sorcery Magic


Sorcery magic specializes in manipulating magic itself, and is best at tactical defensive magic and taking control.

Strengths

    Counter, Dispel or manipulate other wizard's spells

    Has only diplomacy purpose spell in the game

    Neutral on the alignment scale which often helps diplomatic relations

    Extremely powerful in the late game

    Strong against Life wizards due to dispelling power

    Strong at killing fantastic creatures

    Good at combat summoning

    Has diverse tactical options for combat spellcasting

    Has spells to increase Casting Skill

    Good at dominating naval battles


Weaknesses

    Almost completely lacks spells that buff or debuff economy

    Unit buffs don't increase combat stats, instead provide tactical benefits

    Direct damage spells are below average

    Overland summoning is mediocre at best


Common


Word of Recall

Same problem as Recall Hero, no need for further explanation.


Dispel Magic True

Triple effectiveness is way too much but more importantly, the three “Dis... True” spells made Sorcery a highly redundant realm as it provided the same functionality as the identical Arcane spells. For that reason, two of them has been removed and one has been given unique dispelling ability the Arcene counterpart no longer has, and the “strong at dispelling” theme was achieved by adding a new global enchantment that makes all of the wizard's dispelling attempts more effective.


1. Focus Magic (new)

Cost : 80 MP

Research : 440 RP

The enchanted unit gains 15 additional MP casting ability and gains +3 magical ranged or breath attack. If it did not have one, but had thrown or another type of ranged attack, it is converted to a magical ranged attack of equal strength. If the unit had neither, it gains a strength 3 magical ranged attack with 3 ammo.

The game had plenty of spells to buff various attack types on a target unit, but nothing buffed magical ranged attacks or MP capacity. Both of these fit Sorcery the best. This spell also unlocks great combo potential, as adding a ranged attack to a unit enables it to use touch attack effects at range, which is most effective on creatures of other realms, but Sorcery can also utilize it by casting it on Nagas. Both the Focus Magic Nagas and Cockatrices strategy was tested and wasn't too powerful, thanks to the high casting cost of Focus Magic itself.


2. Resist Magic

Cost : 8/40 MP

Research : 320 RP

Enchanted unit gains +5 resistance against magic spells or effects.

Poison being the only efffect that doesn't count magical but checks magic resistance this is a fairly good protection spell that covers more realms than Bless but does not protect from spells that deal damage, or breath attacks. Still, these are the less valuable parts of the effect and being able to becomes mostly immune to resistance based spells from all realms is definitely worth the slightly higher cost. For most of the development time this spell had a cost of 25 but that cost made it way too trivial to negate the disadvantage of using low resistance creatures or races. Like on most of these spells, the amount of bonus was increased because situational buffs that don't even provide reliable amounts of resistance are worthless, and resistance is typically situational.



3. Guardian Wind

Cost : 6/30 MP

Research : 200 RP

Enchanted unit gains Missile Immunity.

Another one of those situational buffs that gives a complete immunity to one specific threat. This and Warp Wood ensures the otherwise usually most efficient bow units in the early game aren't a universal solution to everything. Casting cost was reduced because you usually need to cast this on your whole army to be relevant, otherwise the unbuffed units will still get targeted and killed by missile atacks.


4. Nagas

Cost : 73 MP

Research : 320 RP

Creature : 5 melee,+1 To Hit, 4 defense, 7 resistance, 3 movement, 5 health, 3 figures, First Strike, Poison 3, Water Walking

Nagas offer mediocre combat stats at a fairly high price but signficant tactical advantages, as expected from the realm of Sorcery. Poison allows them to deal damage regardless of armor, First Strike can help them engage enemies without suffering too much damage in retaliation, and fast water movement enables them to attack targets from unexpected directions early in the game, increasing the role of proper garrisoning, as well as making them excellent scouts. The unit's existence also serves as a major balancing factor against super-buffed Life units, Undead, and Werewolves as well as making sure the Poison game mechanic appears on just the right amount of units in the early game when it can be relevant without making it overly dominant. For a while they used to have 4 poison but that made them way too good for what they meant to be after the Poison mechanic was buffed. I considered all ways to make the unit less powerful, but pretty much every stat on it was the lowest amount possible without losing the unit's intended functionality. In the end, reduction of poison by 1 was selected, as calculations showed even 3x3 poison is enough for the intended goal of countering the mentioned Life and Death early strategies.


5. Phantom Warriors

Cost : 14 MP

Research : 320 RP

Creature : 3 melee, 0 defense, 4 resistance, 2 movement, 1 health, 7 figures, Illusion, Poison Immunity, Death Immunity, Stoning Immunity, Non-Corporeal

Although a summoning spell, it offers extremely vulnerable troops whose only real purpose is to deal defense ignoring damage to anyone daring to get too close the the Sorcery wizard's half of the battlefield and dying in the process immediately. While this makes them act like a direct damage spell, using them trades away the ability to target any unit on the battlefield at any time, in exchange dealing slightly better damage that also scales with the presence of global unit buffs, such as a Sorcery node aura or Paladin. This scaling effect is amplified by the very high figure count, while the zero armor and 1 hit point ensures the unit will not survive the encounter in most cases. Cost has been raised by 4 MP which might not seem much but is a 40% difference from the original, ensuring the spell to remain powerful but more fairly balanced. Being non-corporeal, this creature and all Sorcery summons in general, can be used in naval combat, helping the realm to dominate on the seas as intended.


6. Psionic Blast

Cost : 20 MP

Research : 380 RP

Perform a strength 18 Illusion attack on a target during combat.

By far the least cost effective common direct damage spell, this offers a mere 0.24 damage per MP invested on average, in exchange for the tactical advantage of completely ignoring armor. While this makes it the only such spell that can't outdamage healing, and the cost of 20 MP makes it prohibitively expensive in the early game, allowing only one use per combat, remember that Sorcery is the realm weakest at raw direct damage spells and ignoring armor, while not especially useful in the early game, is extremely valuable later. This MP cost also makes this spell avalable for Magicians, significantly increasing the value of those units in hands of Sorcery players. Slider cost have been removed from most spells in the mod as it typically worked poorly, and this decision is extra relevant on this particular spell, limiting the armor ignoring damage potential at the intended amount. The ability to pump the spell literally made it a top tier late game direct damage spell in the original Master of Magic, something a Sorcery Common spell has no business being.


7. AEther Sparks

Cost : 12 MP

Research : 260 RP

Perform a strength 20 attack on the target unit in combat. If it has MP or magical ammo, halve them.

A mediocre direct damage spell that offers much less attack strength at a higher cost than Fire Bolt, but comes with the tactical advantage of countering magical units, which can often make it useful even on targets where the damage would be not relevant like high end fantastic creatures. However against targets having only a reasonable amount of armor it is often more cost efficient than Psionic Blast, and this spell isn't influenced by Illusion Immunity, making it the only way a Sorcery player can deal with certain units before reaching Rare tier spells.


8. Floating Island

Cost : 45 MP

Research : 160 RP

Summons a Floating Island : 3 movement transport that does not participate in battles and cannot move the turn it was summoned.

A good early game replacement of ships, saving you the trouble of building a town near sea and a ship wright's guild. On top of these, your walking units can participate in sea battles when using these, while in ships, they can only watch the ship getting sunk by the enemy and die. The Floating Island itself cannot fight, but the army carried by it will most likely be stronger than the ship you would use otherwise to carry it, even if they cannot move, making sure this spell improves Sorcery's ability to dominate naval combat. The low casting cost makes it a very reasonable choice instead of using a ship, and not being able to move on the turn of summoning ensures it can't be abused as a oneshot “this stack can move an additional 3 tiles” spell on stacks that can already move over water on their own.



9. Confusion

Cost : 18 MP

Research : 320 RP

Target enemy unit in combat must save at -2 or get confused : Each turn there is a 25% chance for the unit being under enemy control/under your control/moving randomly/being unable to move. At end of combat, if the unit was still confused, it dies irrecoverably.

Along with Crack's Call this spell isn't very popular but serves a major purpose in game balance by being able to permanently destroy the early game regenerating units, and ensuring players suffer losses and pay the proper price for their expansion if targeting the Sorcery wizard's empire in the early game for conquest, a most reasonable and common strategy. Beyond the early game, Dispel Magic can keep the spell's efficiency manageable, but it still makes resistance a relevant thing to consider when fighting Sorcery wizards. While from a viewpoint of fighting against it, the spell might feel too powerful, ultimately it has the same save modifier as Black Sleep, a higher casting cost, and singificantly more chance for the unit to survive the effect as it's not going to instantly die the moment it is attacked, giving a much more reasonable chance of dispelling to the player. Meanwhile, from the other side, if the player is the one using Confusion, while it can potentially turn enemy units against each other, the spell is quite unpredictable and will often result in the unit merely failing to engage or even outright attacking the player as if it was unaffected. Guaranteed destruction of the unit after combat sounds like a great benefit, but isn't particularly useful except as a last resort when winning would be hopeless otherwise, or an efficient removal spell in cases when the player already managed to make sure their units and cities are safe from the enemy attacking them. The random nature of the spell is more appropriate for the Chaos realm, but Chaos already has reliable ways to destroy enemies through direct damage and would find such a “trickery” spell useless.


10. Blur

Cost : 25 MP

Research : 480 RP

There is a 20% chance each point of damage that would be dealt to your units in combat will have no effect, applied before defense rolls.

This spell received a fairly major overhaul. Originally an uncommon reducing 10% damage, it was entirely too weak even considering Sorcery isn't as good at defensive spells as Life. Still, compared to Prayer's effective 25% damage and 33% defense increase on most units, a 10% reduction with no damage bonus was extremely lackluster. The spell was moved to common rarity both to ensure it's not as powerful and game defining as Prayer, and also because that enables a better combo potential for a player taking a limited amount of Sorcery books to stack this bonus with other defensive advantages. Obviously, a global damage reduction is still a very good effect so it received the highest common RP cost and a fairly high casting cost, while providing a benefit that is appropriate for the tier and realm : 20%. The initial amount was 25% but further testing and calculations implied that was a bit too much. This also made it into one of those common spells that remain useful for most of the game, as a stacking damage reduction is a valuable ability even in the endgame whenever the player can spare a combat turn to cast it. The spell's outstanding usefulness is greatly diminished by the abundance of units with Illusion Immunity to ensure it isn't as universal and potent as other global combat buffs from realms more specialized at those effects.


Uncommon


1. Aura of Majesty

Cost : 200 MP

Research : 420 RP

Each turn, the diplomatic relation of the caster improves with each other player.

The amount of relation improved by turn depends on the existing relation, the lower, the stronger the effect, so this spell is very good at staying on good terms with most wizards, but will not push relation to the point where it's easy to get a wizard's pact or alliance by itself on wizards opposing the player's realm. The initial relation gain that happens when the spell is cast was reduced to 4 to ensure re-casting the spell many times instead of casting it once and maintaining it does not become a more effective strategy.


2. Counter Magic

Cost : 50 MP

Research : 1280 RP

Create a counter magic pool of 70 in battle. Each enemy spell has a (cost/pool) chance to be successfully cast, otherwise they are countered and the pool decreases by 10.

This spell was somewhat tricky to design right because two opposing goals meet here. On one side, spells getting countered isn't fun so this spell had to still offer ways for the other player to cast them often enough. On the other side however, Counter Magic had to be reliable enough to be worth using - a control spell that fails to actually take control and only occasionally works is a failure. Obviously, for something as major as stopping enemy spells entirely, to be efficient was too powerful at the original common spell tier, so the spell was moved up to Uncommon, and to ensure both goals are met, I decided to use a formula that is very likely to counter spells of lower tiers, but unlikely or outright unable to counter spells of a higher tier than itself. That makes it fit the role of spell tiers and thanks to the presence of many common spells that remain useful even in the late game, don't undermine the value of the spell - Counter Magic's caster can be sure the other party won't be using their low cost spells he wanted to prevent, while that other party can still have fun playing the game through casting bigger spells that won't be countered instead. The new forumla ensures chance to counter is 0% if the cost of the spell exceeds the counter pool so most very rare spells will be unaffected and even most rares have a very high chance to work and will always work after one or at worst two failures. This design also gives a choice to the other player : they can use low cost spells for a while to weaken Counter Magic, sacrificing a few turns but not losing much in casting skill and mana crystals, or take the risk of using medium cost spells that are immediately beneficial if successful but a major loss otherwise. Of course only if they have no expensive, high tier spells which will always be successful.


3. Spell Lock

Cost : 100 MP

Research : 1280 RP

Enchantments on the enchanted unit can't be dispelled until Spell Lock was dispelled. Enchanted fantastic unit is unaffected by “banishing” type magic.

A powerful spell to support the already powerful but extremely dispel vulnerable unit buff stacking strategies, Spell Lock serves the unusual specialized role of being a counter to a counter and it is still good enough to be worth player attention, showing how good and popular buffing based strategies actually are. While powerful, disabling the ability to recast it in battle ensures the dispelling of Spell Lock will get followed up by losing more enchantments on the unit, instead of providing unremovable protection. The AI's ability to properly use Dispelling Wave on the overland map further acts as a way to keep these strategies under control, as an entire stack of buffed units will definitely lose several copies of Spell Lock and hundreds of mana worth of spells when targeted. Protecting fantastic units is a nice and often overlooked effect that makes the spell useful even for those who have no buffs to protect, and works against Exorcise, Holy Word, Banish and even Great Unsummoning.


4. Spell Blast

Cost : 50 MP

Research : 2140 RP

Target overland spell is countered. Lose mana equal to the mana already spent on that spell.

Another spell that caused some major headache, Sorcery is full of those. On one side, spells getting countered is super unfun, and consistently getting countered is even worse. On the other, the human player will want to be able to somehow prevent those big endgame spells that would make them lose - it wouldn't be a late game focused defensive realm if it had no choice but to let Armageddon or worse Spell of Mastery get cast by another wizard without having an ability to interfere. Higher success rate of Dispelling is nice but many of the threats are not enchantments and even those that are, might do too much damage during the turn it takes to remove them. Also, while not fun for the receiving end, being able to counter the spells of others is fun. The problem was unsealed from the bottle when Hadriex complained the Sorcery AI wasn't stopping the other AI from winning through Spell of Mastery even though it had Spell Blast, so he lost the game. He was right, the AI should have been able to use Spell Blast intelligently to counter the spells that would be a threat to them, at least from enemy wizards. (The AI doesn't cast curse type spells, which includes Spell Blast, at targets they aren't hostile towards)

So a list of spells the AI will always attempt to counter was made. However that meant (human) players can't cast those spells at all when a Sorcery wizard is present - extremely unfun and completely opposes the design goal. Worse, curse type spells are also randomly used against enemies for no other reason than to be mean, and the frequency of this is regulated by the AI's personality trait, so getting into a war - or simply not having a wizard's pact with - a maniacal Sorcery wizard could often lead into the situation when the player's spells were countered almost every turn, regardless of what they were. As making Spell Blast itself worse wasn't an option - I still wanted human players to be able to stop spells effectively when playing Sorcery - the issue was solved through adjusting AI behavior.

    The AI will only use Spell Blast against spells if Detect Magic was cast. The player can dispel Detect Magic (Disjunction isn't on the list of spells to counter as the AI has no way of knowing in advance what the player intends to target) and then the AI will stop intentionally countering their spells, until the AI recasts Detect Magic which has a fairly low priority.

    The AI will not cast Spell Blast randomly as a “curse” during hostilities at all if the human player's overland casting skill is below 200. This ensures the player already has enough skill to instantly cast most spells, only being unable to do so for higher end bigger spells, and can expect to be able to have most of their spells be instant reasonably often if prioritizing raising casting skill.

    The AI receives a 40% casting cost penalty for casting most global enchantments and a few similar spells. This ensures when casting those there is a few turns of gap during which the human player has the chance to push through their own big spells. Note this penalty is on top of the difficulty based bonus they receive to overland spellcasting so even despite it they aren't casing the spells slower than if they had no bonus in the first place for most difficulties, but they do it slow enough to let the player get a breathing room to cast something. (this also applies in the reverse, if the player wants to keep spell blasting they can only cast their own big spells when the AI is busy casting theirs slightly reducing the power level of the spell)


5. Vertigo

Cost : 10 MP

Research : 640 RP

Target enemy unit in combat must resist at -4 or loses -3 To Hit and -1 To Defend.

Added a major save modifier and reduced the casting cost to make this underwhelming spell worthy of being an uncommon. Compare it to Shatter - reducing attack power to 1 is as good as eliminating completely, while penalties on to hit still leaves the unit with at least 1/4 of its original damage output. So the effect isn't as good and its higher tier, but the much better save modifier and the To Defend reduction makes up for it. (The original version reduced defense instead, this was changed to To Defend to make it more potent.)


6. Dispelling Wave

Cost : 25-125 MP

Research : 1920 RP

Attempt to dispel enemy spells on the target map square. Additionally, when cast in combat, remove all enemy unit enchantments. Formula for dispelling is the same as Dispel Magic but the dispelling power is only half of the mana spent.

This is pretty much Disenchant Area except now area dispelling is only allowed for the Sorcery realm. Long forum discussion and plenty of calculations were done to ensure dispelling power matches my intended design goal of being a very effective counter to mass-buffing stacks. On top of that, the AI's priority to cast this spell (and target it on the overland map) scales with the number of enchantments for this same purpose although note combat and overland casting decisions use entirely different algorhitms. The original, possibly buggy behavior that combat dispelled city enchantments “respawn” after combat was kept as it works much better for gameplay. The ability to dispel combat global enchantments was removed because I disagree with the original design that made everything dispellable. There has to be at least a few groups of spells players can turn towards when their enemy specializes in dispelling power. For this same reason, Magic Vortexes are no longer affected by this spell either.


7. Flight

Cost : 22 MP

Research : 1280 RP

Enchanted unit gains Flying movement and a minimal speed of 3.

A good spell that didn't need changes. While suggestions to nerfing flight in general have been posted, I believe flight as is, is a valuable and good game mechanic that enhances and deepens the tactical gameplay. Being able to avoid getting attacked and retreating to safety as combat turns run out is a feature, not an exploit. Being able to defend cities using flying units is a nice tactic that enhances the game and makes wall breaking relevant, as then units can enter and destroy buildings and population even if they have to retreat after battle. While some people perceive this too as an exploit, the harsh reality is the most you can gain from this is losing many of your buildings and having to deal with the same enemy attacking again next turn and their now refilled combat spellcasting ability. In some cases that can be outright worse than losing and reconquering the city, and is by no means able to produce any benefit.


Wind Mastery

While I agree with having naval superiority as a theme in Sorcery, doubling the speed of transportation would undermine the design concept of limited presence behind heroes and doomstacks in general, enabling them to reach new targets way too quickly. Furthermore, while I improved and fixed the AI to use transports almost as well as a human player, the AI still lacks the ability to plan ahead so they need to spend a signficant amount of time to mobilize and transport their forces after a war begins. Doubling the time this takes would be unacceptable and again would undermine the design concept that the player has to deal with incoming AI forces and survive it even if they have one strong enough stack that can steamroll the AI's cities one at a time.


8. Water Elemental (new)

Cost : 150 MP

Research : 1280 RP

Creature : 14 melee, 14 magical ranged (4 ammo), +2 To Hit, 7 defense, 7 resistance, 3 movement, 15 health, 1 figure, Poison Immunity, Fire Immunity, Weapon Immunity, Water movement

Sorcery had no uncommon creature at all, which made the realm extremely hard to play in the early and midgame which hits AI players even harder. At the time the mod's first intended design of “very weak early game but almost unbeatable late game” was toned down because nobody liked AI Sorcery wizards reaching late game equaling an automatic game over, the need to provide at least one mediocre uncommon creature for the realm surfaced to improve their early/midgame. Water is the most suitable element and the only one of the four that had no “Elemental” creature, it seemed logical to choose that. While the other elementals are combat only, Water is the primary element of the world - 60-90% of the planes are covered by ocean and just like in the real world, most lifeforms have a large percentage of water in their bodies so consideirng the worlds water based planes would be reasonable. The creature itself has stats similar to but slightly worse than Fire Giant overall, another mediocre uncommon creature, but excels at tactical use by having good water movement speed, weapon immunity (which Sorcery 8+ book strategies might even get early enough to take advantage of), poison immunity which counters several common tier creatures and one pretty good uncommon one, and most importantly, good magic ranged attack ability. While not very strong by itself, this creature can still form powerful stacks in larger groups as you'd expect from a general purpose uncommon creature.


9. AEther Binding

Cost : 400 MP

Research : 960 RP

All dispel type spells cast are twice as effective. Gain SP equal to the current turn count each turn.

The game almost entirely lacked spells that increase casting skill, and Sorcery is definitely the best realm for that. This spell's effect grows over time both playing into the role of “Sorcery is stronger in the late game” and ensuring the effect is neither overpowered early, nor irrelevant late in the game. It's also how the realm now achieves the “Strong at dispelling” role, without requiring additional spell slots for the “True” spells.


10. Phantom Beast

Cost : 35 MP

Research : 1600 RP

Combat Creature : 18 melee, +1 To Hit, 0 defense, 6 resistance, 2 movement, 25 health, 1 figure, Illusion, Poison Immunity, Death Immunity, Stoning Immunity, Non-Corporeal

An improved version of Phantom Warriors, the beast is still very fragile and often goes down in a single attack against multi-figure units due to having no armor, it's quite a bit more effective against single figure units, where it can expect to survive a few attacks and keep doing damage. With its 25 health it's also able to provide combat presence to avoid the combat ending with a defeat, although in this case extreme caution is needed to ensure the beast doesn't get killed immediately due to its lack of armor. While most of the time better, it isn't always the best option, as phantom warriors can still be the superior choice when global buffs improve their attack power on each figure, ensuring it won't cause that spell to be entirely obsolete.


Rare


1. Mind Storm

Cost : 35 MP

Research : 4500 RP

Enchanted unit in combat loses 5 resistance, 5 defense, 5 ranged and 3 melee attack.

A personal favorite of mine, this spell is an excellent combo enabler. While one would think curses belong to the Death realm, especially those that reduce resistances, I have to disagree. Death realm is good enough at instantly killing units that any high tier curses to weaken them would be perceived as worthless and uninteresting for a Death player. Death also is based on the “resistance matters” theme so giving them access to the game's most potent resistance reduction spell would be a mistake. However, as a rare Sorcery spell it encourages taking Sorcery along with Death, Chaos or Nature, all of which offer some powerful resistance based spells without making this extremely powerful combo overly accessible. While it's quite potent and allows killing almost any unit in the game, it has to be pointed out it comes at a high price, as you need to both cast Mind Storm and whichever spell you intend to actually destroy the unit, and spending 2 turns and a sizeable amount of combat spellcasting skill on killing a single unit while still top tier, allows the other player to have time to participate in the game at least when they use larger stacks of units for combat. Also, the abundant presence of Illusion Immunity ensures even this combo isn't omnipotent and there are some units that can withstand it. Of course, combo isn't the only way to use the spell, as a spell that reduces defense and attack power without a save modifier this is a potent combat effect by itself, in fact it was so powerful the attack reduction had to be limited to 3. While 5 defense reduction seems overpowered, consider that this realm can ignore defense using common spells, so it is only following that theme and doesn't stand out as much as it would in any other.


Disjunction True

See Dispel Magic True


2. Invisibility

Cost : 30/150 MP

Research : 3500 RP

Enchanted unit is invisibile : cannot be targeted by ranged attacks, and applies the effect of Blur when receiving attacks. If Blur is also in effect, the chance to prevent damage is increased to 30%. The unit also can't be seen and targeted by enemy wizards unless they have a unit with Illusion Immunity in battle.

As explained previously, this effect was way too powerful for the early game, fortunately being a rare spell this is not a concern to worry about here, although it did contribute to my decision to ensure rare tier spells also don't appear in treasure before a certain game turn and get replaced by an appropriately valueable other treasure.

However the damage reduction the original had was way too powerful - reducing enemy chance to hit - especially the way it stacked with Blur -so this was modified, and Invisibility now applies the exact same effect as Blur and stacking the two has only 1.5 times the effect, not double.

While this spell is very powerful, it's also very fun and a major source of interesting new tactics. Keeping them in the game is essential, however it's outright gamewinning if the AI isn't aware of how to react to it. Thus many significant improvements were necessary for the AI - if no visible targets exists, the AI will now move randomly to try to find and engage the enemy units, and will prioritize casting spells that either provide Illusion Immunity or can affect all enemy units, thus also hitting the invisible ones. Furthermore the AI also had to learn to take advantage of the Invisibility ability and try to hide their units from enemies to stall for time when they can't expect to win through a direct approach. Fortunately I already implemented this AI tactic for flying and high movement speed units so only the right conditions had to be added to also trigger it on invisible ones.

This spell is a perfect example of how Sorcery fights : not increasing stats on the unit at all yet making it extremely difficult to kill regardless.

It's worth mentioning again : while the AI will pretend to not know where invisible units are when fighting against them, this feature is limited to combat. They'll still be aware of the location of invisible units on the overland map as implementing them not to see these would be extremely difficult (there are hundreds of places in the code where the AI checks for the presence of units to decide on various forms of movement) and wouldn't really make the game better, it would only open up a lot of abuse potential by tricking the AI into attacking unbeatable invisible forces and wasting their troops regularly. This would also have a negative influence on the human player - currently finding the path towards a destination will consider invisible units and will not accidentally bump into them on the way which can easily escalate into a war, so such accidents can only happen when the player directly clicks the tile with the invisible enemy unit. Taking advantage of this pathfinding feature enables the human players a limited ability to find where invisible units are, likewise in combat they can find them through the fact tiles occupied by them are not available for movement and show an “invalid target” type cursor. Finally, the AI will know where your invisible units are when summoning combat creatures and will often summon next to them to reveal their location : this tries to simulate the fact you can't summon on the tile of the invisible unit which reveals the location, similarly how the human player can do the same on unit movement.


3. Air Elemental

Cost : 50 MP

Research : 4000 RP

Combat Creature : 15 melee, +1 To Hit, 7 defense, 9 resistance, 5 movement, 10 health, 1 figure, Poison Immunity, Weapon Immunity, Stoning Immunity, Non-Corporeal, Invisible, Flying

Unlike Phantom Beast, the Air Elemental has very little hit points and less damage output, but has high movement and armor, weapon immunity, can fly, and is invisible, making it a much more tactical option. While it can be great for killing medium tier multifigure units which would kill the phantom beast way too quickly, the main advantage is countering ranged units even better than Guardian Wind, Magic Immunity or even Invisibility itself can, and to stall for time to cast more spells. Originally it had pretty high abuse potential as the AI didn't attempt to find it, nor did they try to enter the city to damage buildings, so summoning one was a guaranteed way of defending the city without losing anything of value in the process. However thanks to the AI updates, this is no longer the case and assuming the enemy units can enter the city, they'll cause massive damage, only prolonging the inevitable defeat next turn. Nonetheless, when you ensured they can't enter your city, and have enough casting power, an Air Elemental will buy you the time to eliminate the attackers and keep your city safe, which is something Sorcery needs to be good at even more than any other realm. Of course this applies in the reverse - when the player attempts to conquer a city from a Sorcery AI, they will need a plan to deal with any Air Elementals that might show up. Also, this creature is the reason why Non-corporeal creatures can't raise as undead other than flavor - you need a body to make it undead!-, as already explained, Invisibility in the early game is too powerful and raising neutral Air Elemenals as undead is one way to achieve that - and to make it worse the AI often did that too.


4. Wind Walking

Cost : 200 MP

Research : 5000 RP

Enchanted unit gains Wind Walking.

While still powerful, the overpowered nature of this spell has been eliminated by ensuring the availability of + movement items on heroes is not excessive. Its relevance was further lowered as transportation is fixed to work correctly on flying ships, enabling them to transport troops over land tiles, providing nearly identical functionality.


5. Banish

Cost : 35 MP

Research : 4000 RP

All figures in target fantasic unit in combat must resist at -4 or be irrecoverably dead.

Another example where removing the slider option made the spell much more reasonably balanced. This is a higher tier than Exorcise and is also in a realm that is strong at removal spells targeting fantastic creatures, so the save modifier is much higher, although in exchange, so is the casting cost. This spell makes Sorcery wizards a major threat in battle as normal units can have a hard time dealing with all their tactical effects and buffs, but fantastic units are difficulty to keep alive against them. This versatility ensures Sorcery is very powerful in the late game as intended and the ability to combine Mind Storm with Banish enables Sorcery wizards to stop even the most powerful creatures if they lack Illusion Immunity. Fortunately, all realms have such a creature, except Chaos which doesn't rely on them and dominates battle through spells of mass destruction.


6. Magic Immunity

Cost : 36/180 MP (10 MP/turn)

Research : 5500 RP

Enchanted unit gains Magic Immunity : 100 defense and resistance against all spells, and magical ranged, gaze or touch attacks.

Probably the only form of Magic Immunity not removed from Caster of Magic, this spell has been one of the major reasons for Sorcery's late game potential. While powerful, in this case reducing the casting cost made the spell more balanced as it's more likely to get dispelled that way, which is the most effective (and often only) way to deal with it. Nature magic still provides a few spells that can bypass this, and it no longer offers additional defense from breath attacks, giving a role for Elemental Armor that Magic Immunity isn't able to replicate. It's worth noting the still high cost comes with literally no benefits in combat stats and efficiency (unless against units with magical ranged attacks which the realm can already counter using Invisibility anyway) so while extremely good when used properly, overusing it can be a disadvantage. In fact this spell has by far the highest maintenance cost of any unit enchantments in Caster of Magic making investing into it even less trivial.


7. Stasis

Cost : 25/125 MP

Research : 3000 RP

All units on target overland map tile can't move for a turn, and must resist at -5 on consequent turns to break out of that status. When cast in combat, the targeted single unit must resist at -5 or become unable to move until the end of combat.

The first thing to mention here is in the original game casting this on low resistance units made the AI disband those units, even if they were part of a city garrison, resulting in undefended cities. That oversight has been fixed.

Stasis provides players with the unique ability to stop an approching enemy stack they aren't prepared to fight, however the original casting cost was way too high and in those situations the player usually only has one turn to react and stop the unit, so the cost was reduced to make it easier to cast instantly. As this ultimately only stalls the enemy army for a few turns, I'm sure the lower cost doesn't have any real abuse potential : casting this at all means not casting other, more permanent spells.

However, this effect is very situational and rarely relevant so an additional combat usage has been added that's offering a much better save modifier than Black Sleep but costs more and doesn't erase the unit's defenses or ability to counterattack in melee making it a more tactical option and less like a “save or die” spell.


8. Flying Fortress

Cost : 200 MP

Research : 2500 RP

City tiles during combat in enchanted city can't be entered by nonflying enemy units. All owned units in combat gain Flying. The city is unaffected by Earthquake.

This spell was moved down to Rare from Very Rare and the unreasonable costs were reduced making it worth using. Like invisibility, special instructions were given to the AI to use spells that can solve this in combat. It's still a very potent city defense spell, and one that fits the role of Sorcery perfectly. Defenders gaining flight was added because the AI was often hurting itself by locking its own land units into their city, where being unable to leave, they got slaughtered easily by the human player's ranged forces or spells - something that of course could even happen to the human player limiting the value of this spell as it was outright harmful for melee nonflying garrisions.


9. Uranus' Blessing (new)

Cost : 200 MP

Research : 4000 RP

Enchanted city starts combat with a strength 60 Counter Magic in effect.

Magic Market and Wizard's Guild in enchanted city produces 11 more power.

Amplifying Tower in enchanted city produces 4 more skill.

Units built in the city have magical weapons even if the city does not have an Alchemist Guild.

An antithesis of Gaea's Blessing that improves natural resources, this spell improves unnatural ones, in particular resources related to magic. While primarily designed for flavor reasons as well as having a free city enchantment and rare sorcery spell slot, the extra power and casting skill is definitely needed by the very MP and skill hungry Sorcery realm and the added Counter Magic improves the realm's city defense capability. Still, the spell's main benefit is contributing to the strong late game of the realm, as by the time you buff all your cities up using this, you most likely reach the very rare tier, giving you a large jump in both the quality and quantity of spells you can cast at the same time. This also offers players a way to buff non-religious city power production, while other effects boost religious.


10. Storm Giant

Cost : 330 MP

Research : 4000 RP

Creature : 18 melee, 18 magical ranged (5 ammo), +2 To Hit, 7 defense, 9 resistance, 3 movement, 25 health, 1 figure, Armor Piercing, Missile Immunity, Wall Crusher

The only rare creature in Sorcery, this one serves as a generic heavy magical ranged unit. While Armor Piercing makes it particularly dangerous, its attack strength and health is on the low end of the spectrum for a rare creature considering it has only one figure. Magic resistance isn't good either although Sorcery can easily improve that, and available ammo is also mediocre - better than the other giants who are more melee combat oriented but worse than true magical ranged units like Efreets or Shadow Demons. Originally they had 4 ammo but during testing it became quickly obvious that amount was far too little to be a reliable unit. Missile Immunity was added as the creature obviously uses the powers of Wind, and due to its low armor and health (for a rare creature) its vulnerability to bows and especially slings was a real problem.



Very Rare


1. Spell Binding

Cost : 1200 MP

Research : 21000 RP

Select any global enchantment any other wizard is able to cast. You learn to cast that spell permanently. This spell can only be cast 5 times per game and has a cooldown period of 12 turns initially and 36 on any further uses.

By far the most difficult spell to properly design in the game was this one. Stealing global enchantments from others was and is the top selling point of Sorcery and by far the best spell in the realm, in fact the realm has only a few truely outstanding very rares, and this was one of them, so the original functionality had to be preserved. However, the original design, literally stealing spells already in effect, came with several serious implications. First, it punished players for casting those spells which is bad design, and second, Spell Binding effectively acted as a package of a 100% success rate underpriced Disjunction as well as the ability to gain the targeted spell which made it both unfun to play against and way too underpriced for this double effect. There was a very very long forum discussion on how to solve this problem and after a while I was able to decide Sorcery does not need the functionality to have a “dispel” effect that entirely bypasses usual formulas and dispel resistance special abilities, something I originally insisted to keep due to the “strong at dispelling” theme. Changing Spell Binding to duplicate the spells instead of simply stealing them means there will be more copies of global enchantments in play which escalates the implications of them and increases the role of global enchantments which can help making the late game even more intense. While I was worried about this a little, I decided to take the risk especially because this late in the game it's unlikely to still have a high number of relevant wizards in play - usually at least some will be already eliminated. The second issue was that this spell granted access to literally all global enchantments other players had which is far too good for researching a single spell. On the other hand Sorcery itself had fewer very rare global enchantments and in generel fewer outstanding very rares than other realms, so limiting it to only one or two spells would have been too much of a nerf. So the solution was to allow up to 5 spells which is amazingly good but not unlimited, and the reuse cooldown ensures this power is unlocked over time, and not all at once.

In the original game the AI wasn't able to use this spell due to a bug, and while that bug was fixed in the 1.51 patch, Caster of Magic made sure to recode the entire AI Spell Binding target selection and priority system along with the Disjunction one to ensure the AI will always “steal” the best available enchantment and doesn't waste the spell on worthless targets like Just Cause.


2. Mass Invisibility

Cost : 80 MP

Research : 18000 RP

All of the caster's units in this combat are invisible.

I had no reason to change this spell, it's very powerful but the changes to Invisibility itself made sure the “Mass” version has no problems either. The only thing that needed special attention was AI as usual.


3. Creature Binding

Cost : 50 MP

Research : 6000 RP

Target fantastic creature in combat must resist at -4 or you control it for the rest of the combat.

One of the underwhelming Sorcery very rares this is basically Banish except you gain control of the creature instead of killing it. That's much better indeed but unfortunately while Banish isn't affected by Illusion Immunity, this was. So I removed that restriction and the spell is now definitely much less disappointing.


4. Haste

Cost : 50 MP

Research : 15000 RP

Enchanted unit gains double movement speed and each time it attacks, it attacks twice while the enemy only gets one chance to retaliate.

This was the spell that was entirely too powerful to be a Rare, as it both allowed any melee units to reach enemies and deal double damage at the same time, and also allows ranged units to reliably stay out of enemy range and also deal double damage (although at the cost of using up ammo faster). Additionally, the effect to allow counterattacking twice was removed, getting an extra attack per turn is powerful, but getting many extra attacks is simply broken. As very rare, this spell is well balanced but still amazing.


5. Great Unsummoning

Cost : 700 MP

Research : 12000 RP

All enemy fantastic units on the overland map must resist at -3 or be irrecoverably destroyed.

This spell will not affect most other very rare creatures, but can cause massive damage to rares and uncommons, ensuring it's powerful but doesn't make the impressive late game summoning spells worthless. It's specifically good at countering Death wizards whose hordes of undead creatures are fantastic and even their regular summoning spells have somewhat weak resistance, but can also cause great harm to Chaos wizards who carelessly cast Doom Mastery without ensuring they produce high resistance units. If you might think eliminating a lot of lower tier creatures is not good enough, doing so both ensures less enemy attacks so you can save a lot of mana crystals on combat spellcasting, and reduces the overall army strength of the enemy players which is beneficial for long term diplomacy. For short term diplomacy though, casting this spell will trigger a warning and small relation reduction - not a significant amount, but spamming this spell too often can have bad consequences if the victims still have enough surviving forces left to be a threat.



6. Spell Ward

Cost : 150 MP

Research : 9000 RP

Spells of the chosen realm cannot be cast in combat in the enchanted city. Fantastic creatures of that realm lose -2 To Hit, 4 defense and 4 resistance. City curses of that realm targeting the city are countered.

The ultimate city defense spell, and one of the spells that makes late Sorcery exceptionally powerful. In fact this spell is so good, an indirect way to nerf it was necessary : Players who already finished researching Spell of Mastery can cast combat spells that cannot be countered (by this spell or otherwise), which gives a role for Spell of Mastery against Sorcery wizards who would Spell Blast it, as well as a path that can be taken to conquer the otherwise often unbeatable Sorcery cities. This turns the game back to the economy race for Spell of Mastery, and whoever had the better and larger empire before Spell Ward stopped military conflict being effective will likely win this game. Of course this benefits Sorcery more than others, but if the Sorcery wizard's territory is reasonably smaller than the human player's it still opens up a path to victory that otherwise doesn't exist beyond the point the AI buffs all their cities with this. Obviously, other Sorcery players are not really affected : Warding against Sorcery will hurt both parties equally, and Sorcery players will have Dispelling Wave to remove it as well. Racing the AI for the treasure hunting aspect of the game and finding Sorcery spellbooks can also open up this path for those who didn't start with Sorcery books. Only 2 of them are necessary to enable learning Dispelling Wave. The original spell completely disallowed fantastic units from entering the city which was way too powerful but most importantly, was something the AI had no way to be able to deal with - the AI isn't aware of the contents of its stacks at that level of detail and will try to attack the cities anyway, failing to do so and pretty much becoming unable to use those stacks at all as it tries to attack the city and keeps failing to do so. It's important to note that while complete prevention of combat spells is against the mod's design, this effect is limited to defensive city battles - so any fights taking place at the non-sorcery player's cities, at nodes, or anywhere else on the map, still allow proper use of combat spells, ensuring they get the spotlight they deseve and that the Sorcery player can ONLY hold their position but not further expand through this spell.


Suppress Magic

7. Power Link

Cost : 1200 MP

Research : 15000 RP

Whenever another player casts a weak overland spell, if the base cost of that spell is below 100, gain 4 times that much power at the end of that turn, or if the cost is below 500, gain 500 minus the cost. The link misdirects the effect of Drain Power and Spell Blast, countering those spells, and has no effect on spells costing 500 or higher, or during Time Stop.

The original Suppress Magic indiscriminately countered all overland spells, although the way the Dispel Magic formula worked, chance to dispel was much higher on low cost spells than high cost ones. For a long time this was kept although using a linear formula that ensures most very rare spells will be unaffected and only lower tier spells will get countered. Nonetheless, countering spells globally is very unfun and against the design philosophy of the mod, but the last straw was when I realized this effect can literally make it impossible to cast spells needed to avoid losing to other engame spells like Final Wave or Great Unsummoning. So the same approach was taken as with Nature's Wrath, to convert it into a new spell that “punishes” using low priced spells not by countering them but by making the owner of the enchantment more powerful, which also solved the problem that using this spell wasn't fun either. The formula for the amount of gained power was carefully enginieered to ensure the closer the spells are in casting cost to the common tier, the more severe the consequences are, yet they are still proportional to the amount and quality of spells used and can't result in producing power nearing infinity as the casting cost gets closer to zero. After careful examination only two low cost spells in the game were found that Sorcery wasn't able to properly deal with and wanted to counter, those were included as exceptions and will still be countered. Being spells that counter/drain magic themselves, this actually increases the relevance of magic instead of reducing it. It's important to put emphasis on that this isn't like Fairy Link in that casting the “forbidden” spells will only allow the other party to gain a similar level of advantage, on the contrary. Using a lot of low cost spells without a very good reason to do so will provide a massive benefit to the owner of the enchantment and this carelessness will allow them to win the game more often than not. For such a spell, extreme caution has to be exercised when implementing the AI's reaction : the AI will consider this enchantment being in play and will massively reduce or even completely eliminate the chance of casting the lower cost spells on a case by case basis for each spell in the game, while it'll prioritize high cost spells more. A similar AI has been implemented for Fairy Link and Meteor Storm as well although those influence the priority of fewer spells, they do make quite a few of them a very bad choice to use. Power Link is thus the most potent when other players don't have any very rare (creature) spells yet and has no choice but to cast lower cost spells and trigger the spell, in which case functioning as a “win more” spell ensuring the Sorcery player already ahead, keeps this advantage - win more spells generally have low relevance for game balance itself, enabling the strategic nature of the spell to be in focus - will the player be able to judge which of their low cost spells are worth casting despite this, or not? This and Fairy Link also introduces an interesting element in diplomacy : you can trigger your ally's spells to make them more powerful intentionally, but this does come with the risk they grow too much and end up becoming too powerful to beat once they are the last one standing in the way of your victory.


8. Time Stop

Cost : 2000 MP

Research : 24000 RP

Stops the passage of time for all enemy wizards and their troops and spells. Only the casting wizard may move units. No income or production is generated and no maintenance has to be paid except for this spell. The maintenance of Time Stop increases by 30 mana for each turn in effect. Conquering a town is a major event that attempts to set history in motion, increasing the maintenance by 150. No gold can be looted from cities while time is stopped.

Easily the most powerful spell in the game, this needed some major revisions to not be a guaranteed “I win” button even more potent than Spell of Mastery itself. This spell has two different uses : during peacetime, it allows gaining extra turns, effectively multiplying the available overland casting capacity at the cost of sacrificing a lot of mana crystals. A lot of calculations have been done to ensure this use of the spell works as intended and is a better investment of magic power once casting skill is higher than a certain amount and the game is expected to end within a certain amount of turns., basically, when long term investment in casting skill no longer is worth doing because the game will end soon enough. Casting cost and maintenance has been adjusted for this purpose alone. Meanwhile the spell also offers a military purpose - you can conquer enemy cities without having to care about retalation while it's in effect. The adjustment to maintenance on conquest and prevention of looting gold serve the purpose to ensure the spell remains reasonable for that role as well, not allowing the player to conquer a 50 city empire with a single stack of units while the entire enemy force is frozen in time and can't retaliate. Nonetheless, this is still an amazing spell that stands out as exceptionally powerful and allows the player to experience reeeally large scale magic. The ever increasing upkeep cost also ensures AI players can't maintain this too long and the human player gets to play a turn without having to wait half an hour.


9. Djinn

Cost : 375 MP

Research : 15000 RP

Creature : 18 melee, 15 magical ranged (8 ammo), +3 To Hit, 8 defense, 12 resistance, 4 movement, 29 health, 1 figure, Teleporting movement, Caster 35, Wind Walking, Flying

Djinn are a versatile tactical unit that's equally good at ranged and melee combat, can transport armies and support them by casting ability, and is extremely hard to kill thanks to its ability to teleport and even turn itself invisible, making both melee and ranged combat options ineffective. Its raw stats are somewhat low for a very rare creature and its magic resistance is also low by very rare standards but Djinn are still a powerful force in the hands of Sorcery wizards who can buff them with Haste or Magic Immunity on top of taking advantage of shooting 8 fairly good ranged attacks each combat. Djinn are a more defense oriented and tactical creature while Efreets focus on dealing raw damage at range and are not that great at physical combat and are overall weaker due to being in a lower spell tier.


10. Sky Drake

Cost : 500 MP

Research : 15000 RP

Creature : 28 melee, 21 Lightning Breath, +3 To Hit, 10 defense, 14 resistance, 4 movement, 30 health, 1 figure, Magic Immunity, Flying, Illusions Immunity

Having a reputation of being the best creature in the game due to the included Magic Immunity, Sky Drakes are still more on the tactical side, albeit pack more punch than Djinn. While definitely not weak on the offense, 10 defense and 30 hit points are subpar for a higher cost very rare, and the drake is easily overwhelmed by a large amount of lesser units, if they can find a way to attack it which is definitely not trivial thanks to its ability to fly and immunity to magic ranged attacks.





Death Magic


Death believes in strength through numbers, controlling large hordes of efficient, low cost creatures or disposable undead and utilitizing spells that hinder enemy economy or kill enemy troops to ensure a smooth conquest.

Strengths

    Easy to gain lots of weak, but free undead units

    Summoning costs are low and the creatures are durable

    Strongest early game

    Powerful against Nature wizards

    Slows down enemy economy through curses to maintain the advantage obtained early on

    Second best at defending own cities

    Creatures have immunity to a wide range of spells and abilities

    Very good at destroying normal units with spells.


Weaknesses

    Death creatures have low resistance

    Lacks defensive buffs almost entirely, can't protect its own units

    Combat spells very reliant on enemy resistance score

    Most combat spells are ineffective against other Death wizards

    Undead units can't heal naturally and are vulnerable to Life magic


Common


1. Skeletons

Cost : 25 MP

Research : 160 RP

Creature : 3 melee, +1 To Hit, 4 defense, 3 resistance, 2 movement, 1 health, 7 figures, Missile Immunity, Death Immunity, Cold Immunity, Illusion Immunity, Poison Immunity, Cannot heal

Skeletons are barely better than a unit of swordsmen, but their cost is extremely low so summoning them in larger numbers is trivial. Their main advantage is having no maintenance cost though, making them ideal for early garrisoning (remember, they do reduce unrest in Caster of Magic!) and expansion. Being immune to Missiles, they also provide an option against bow wielding enemies which can be abundant in the early game. Skeletons can be effective in combat in larger numbers especially when buffed by the also common Darkness spell, and their natural immunity to poison can make them a cost-effective way to fight the much more expensive Nagas or Giant Spiders, although don't expect TOO much. Having no maintenance makes this unit very popular, but overestimating that advantage can hurt when superior forces knock on the player's door asking where the REAL garrison was stationed. Due to their role as a weak, cheap, disposable unit very much like raised undead, Skelestons don't heal naturally, however all other Death realm summoned creatures now do as this downside is unaccaptable on the more expensive, non-disposable units.


2. Darkness

Cost : 20 MP

Research : 320 RP

All Death creatures in this combat gain +1 attack, defense and resistance. All Life creatures lose -1 of those stats.

A common spell to buff all Death units is the perfect way to take advantage of the realm's “many low cost units” design. Life creatures are not very likely to appear in larger numbers making the second ability not particularly relevant but it can help Death overcome Life's “Resistance to All” and “Holy Bonus” abilities by making the creature granting them a little more vulnerable which was enough reason to keep the ability. Life still has more Death penalizing spells than one for already explained reasons so it feels fair to keep this one too.


3. Black Sleep

Cost : 15 MP

Research : 320 RP

Target unit in combat must resist at -2 or fall asleep : cannot act and all attacks against it deal maximal damage. Sleeping units can't be raised as undead.

The lowest tier “save of die” spell in the game it doesn't outright kill the target but makes it “almost” dead by ensuring any attacks reaching it will deal enough damage to get the job done. Unfortunately this made converting medium and even relatively high end units to undead possible with only common spells and as testing showed that completely unbalanced the game, so sleeping units don't raise as undead as a consequence. Unfortunately the sleep spell destroys the nerves in the body which are required to animate it as undead, or if you can come up with a better explanation, use that :)


4. Weakness

Cost : 7 MP

Research : 200 RP

Target unit in combat must resist at -7 or lose 3 attack strength. This spell ignores Death Immunity.

Compared to other attack reduction curses like shatter, losing only 3 is not that great but in exchange this will have a 100% chance of working on most lower tier units. Death being unable to cast anything useful against other Death wizards was a problem and this was selected to be one of the spells that can fix that problem. Most early Death units have low enough resistance and the loss of 3 attack is relevant for them making this quite useful for that situation.


5. Cloak of Fear

Cost : 12 MP

Research : 260 RP

All figures attacking the enchanted unit must save at -3 or not attack.

To make this spell playable, only the save modifier had to be improved, as being able to avoid melee attacks is a quite good ability, even if situational. What makes this spell really useful is the effect isn't “one time” like Black Sleep or most similar spells, but triggers as many times as your unit gets attacked, so an entire army of low resistance units can be countered by a single casting of this spell as long as your unit is capable of killing them and only had problems surviving the encounter.


6. Life Drain

Cost : 10 MP

Research : 320 RP

Target enemy unit in combat must resist at -5 or take undead creating damage for each point the resistance roll was failed by. If the spell was cast by a unit, it gains hit points equal to the damage.

Undead being the main theme of Death, enough spells need to exist in the realm that can create them. This resistance based direct damage spell is perfect for that role and didn't need major changes. Only the save modifier and cost needed an adjustment to ensure the damage dealt is similar to other common tier direct damage magic on average enemies, but being resistance based this enables player decision making as on higher resistance enemies normal damage spells like Fire Bolt work better while on lower resistance enemies Life Drain might even exceed Fire Bolt damage. Casting the spell no longer generates SP - while I liked the idea and even increased the amount at first, this proved to be entirely too abusable and most importantly, making the spell too good as it gave the player 3 effects for the price of one : damage, undead and SP. Now it only generates undead and damage which still makes it more effective than usual spells but as Death's theme is “get additional undead for (almost) free”, tha's acceptable. It still heals the unit casting it and is Death realm's main way to keep their heroes alive lacking healing spells and buffs, especially as Life Drainx4 items can new be created early on and the Spell Charges option is available on any weapon type.


7. Ghouls

Cost : 88 MP

Research : 380 RP

Creature : 5 melee, 4 Magical ranged (4 ammo), 3 defense, 6 resistance, 2 movement, 3 health, 4 figures, Death Immunity, Cold Immunity, Illusion Immunity, Poison Immunity, Poison 1, Create Undead

Ghouls are another main source of undead for Death wizards. They've been converted to a ranged creature to ensure they actually function at this role : at melee, gaining the undead would usually cost the ghoul unit too much damage and would be inefficient due to low attack power - yet the attack power can't be high as it would make it possible to convert higher tier creatures that would completely unbalance the early game. At range, but with limited ammo and still putting itself at some risk (of being hit by enemy spells or ranged attacks) the Ghouls can function as a reliable but reasonably balanced source for Undead creation. Concerns have been raised that the unit is too powerful but testing showed this isn't the case and the high cost of the Ghoul unit itself ensures balance.Finally, the Poison on Ghouls ensures they are the third source of this ability in the early game, while weak, being a ranged creature typically used in larger groups by the AI, the Poison can still be effective enough achieve its design goals. Having no bonus To Hit the Ghouls benefit less than usual from being buffed, ensuring the undead creating powers won't escalate too much.


8. Zombies (new)

Cost : 20 MP

Research : 320 RP

Combat Summon : 4 melee, +1 To Hit, -1 To Defend, 3 defense, 3 resistance, 1 movement, 3 health, 6 figures, Death Immunity, Cold Immunity, Illusion Immunity, Create Undead

Zombies are the other combat spell to create undead, and also double as the realm's combat summoning spell. Zombies are very tough for a common creture as they have 3 hit points per figure, but their inherent To Defend penalty ensures they aren't overly difficult to kill and greatly reduces their potential when buffed which was high enough that a single, well buffed zombie past midgame could convert entire enemy armies of high end normal units to undead. While very durable for a common creature, their slow movement speed makes them easy to avoid or kill at range. Do note they did not have Create Undead in Master of Magic, even though you'd expect them to. Poison Immunity was removed however, as that made zombies way too effective against Nagas, literally making this 20 mana spell able to convert more than one 73 mana overland creatures to your side at once.


9. Wraith Form

Cost : 13/65 MP

Research : 440 RP

Enchanted unit gains Weapon Immunity, Non-corporeal and it can bypass Weapon Immunity as though it had magic weapons.

This spell was moved down from rare to common because Weapon Immunity stops being relevant as soon as Alchemist Guilds are built. Enabling movement on all terrain for a single unit is fair at this rarity as Water Walking has a similar effect. Non-Corporeal also gives immunity to Web and Crack's Call, which fits Death's “good against Nature” role without being overly relevant. Finally, the ability to bypass weapon immunity has been added to ensure there is a proper answer against that in every realm : Life, Death and Chaos have a buff to bypass it, while Nature is reliant on summoned creatures who can naturally do so and Sorcery has tools to ignore the armor bonus entirely. Of course this does not diminish the relevance of the ability as combat spellcasting in the early game is limited, merely makes sure a single unit with Weapon Immunity won't be a game winner all by itself. The spell used to enable ships to move onto land and carry units like Flying ships but this ability has been proven to be too powerful this early in the game unfortunately - unlike the Flight spell that requires a major investment in research, this is a common spell that's available at the beginning of the game. As a consequence movement type stacking rules had to be altered to make sure Sailing takes priority and ghost ships don't carry arrmies onto land. In early phases of development this also granted Poison Immunity for flavor but once the importance of the Poision mechanic was realized, this had to be removed as well.


10. Mana Leak

Cost : 20 MP

Research : 480 RP

All enemy caster units in combat lose 5 Mp each turn, and all units with magical ranged attacks lose 1 ammo. All enemy wizards lose 5 mana crystals per turn.

Massively reducing the efficiency of magicians and magical ranged units, this spell ensures Magicians while extremely good, aren't always the best choice for your garrison. While a bit too good for a common, it has low relevance in the early game as magical ranged units are usually midgame or later, and this rarity ensures it'll be part of the game more often.



Uncommon


Black Channels

Originally an overland spell, but limited to normal units only, and makes them unable to heal which really defeats the purpose of having a buffed unit. Due to the low numbers on the bonus, this only benefitted units with a high number of figures and low enough stats where the +1s are still relevant like Spearman, Swordsman etc. Unfortunately, casting Lycanthropy on those is a much superior option. The idea to turn a unit undead to remove maintenance and grant immunities is nice though so it was included in a new spell -its just that the amount of buff provided by this spell wasn't worth the disadvantage of no healing (unless it was cast on Trolls of course)


Berserk

Doubling attack power was entirely too powerful, enabling mediocre units to take down very rare creatures, and it was also a risk from the programming perspective, bringing some hero units dangerously near to the highest available shortint of 127 on attack power. To solve this problem a similar but different new spell was added. The spell was a problem for the AI to use correctly as well because casting it was a massive disadvantage if the unit affected wasn't in range to do a melee attack immediately after the spell was cast.


1. Blood Lust (new)

Cost : 50 MP

Research : 640 RP

Enchanted unit is undead. Enchanted unit deals double melee damage against normal units.

This new spell contains the fun parts of Black Channels and Berserk while making sure it suffers from none of its problems. Limiting to overland only ensures the player can't use it to grant immunities to units on the fly and also makes sure players don't end up with permanently undead units for such a temporal benefit (as undead is not a combat effect, it remains on the unit forever), nor can they cast the spell directly prior to attacking which the AI isn't capable of doing either. The spell no longer reduces defense as that would be too much of a penalty for a permanent enchantment, but the double damage only applies against normal units where its powerful but doesn't threaten the design of magical creatures being superior. The spell can be used on fantastic units though, so making Undead bloodthirsty regenerating werewolves that do double damage on regular troops becomes possible, as well as the original “undead trolls” strategy allowed by Black Channels. While not obvious, Heroes are normal units as well, so this spell gives Death wizards a way to counter heroes, and punishes careless human players who think their hero can mow down anything in their way without even looking at them - yet it only takes minimal effort to avoid engaging the bloodlusted units in melee in most cases to avoid that outcome so it still allows players who know what they're doing to dominate the game with heroes as intended.


Subversion

Completely worthless in the original game's 1.31 version due to the dysfunctional diplomacy system, this spell would be brutally overpowered now that the system works. Turning all other players into fighting an eternal war against each other while you sit back and watch is just too beneficial to be allowed to remain in the game, especially now that the AI does put proper effort into their wars and will lose a lot of troops and resources doing that.


2. Syphon Life (new)

Cost : 30 MP

Research : 1280 RP

Target enemy unit in combat must resist at -11 or take undead creating damage for each point the resistance roll was failed by. If the spell was cast by a unit, it gains hit points equal to the damage.

This is Life Drain at uncommon. While I usually prefer to avoid redundant spells like this, this spell was added to ensure undead creation stays relevant for the whole game and Death has a stronger spell to use for this role than the commons. The high save penalty enables this to do damage to more resistant targets Life Drain can't expect to hurt, but converting them to undead will still require multiple castings of the spell which introduces a reasonable mana cost of doing so (while still enabling the Death player to obtain the units without spending overland skill on summoning them). However it doesn't make Life Drain obsolete as Life Drain remains more cost-effective on low resistance targets.


3. Reaper Slash (new)

Cost : 32 MP

Research : 1280 RP

Perform a strength 42 attack on target unit in combat. This counts as a poison type attack.

Death needed to have at least one damage spell that isn't resistance based - high resistance races are a thing. The spell also ensures Poison Immunity remains a relevant ability in the mid and late game where most cretures causing Poison damage are obsolete. It also means the spell can't be used to easily get around the “Resistance to All” bonus from Unicorns or Guardian Spirits by killing the creature using direct damage. The spell also makes sure Death wizards will be a threat to Charmed heroes through spellcasting, while enough armor and healing magic can cancel out the damage as usual enabling hero strategies to function.


4. Possession

Cost : 35 MP

Research : 1280 RP

If target normal unit fails to resist at -3 during combat, you control it. (this spell can't be dispelled)

This spell serves well in the role of Death being strong against Normal units, and makes using Fantastic units to avoid its greatest threat a viable strategy. Save modifier is higher than Black Sleep to ensure this is perceived as the higher tier “save or die” spell it is meant to be. As control changing spells are a stronger version of “save or die” spells than outright killing the unit, the “bug” of being unable to properly dispel these was kept as a feature.


5. Lycanthropy

Cost : 105 MP

Research : 420 RP

Target normal unit turns into Werewolves : 6 melee, +2 To Hit, 3 defense, 4 resistance, 3 movement, 5 health, 6 figures, Death Immunity, Cold Immunity, Weapon Immunity, Regeneration 0.

Lycanthropy was given the role of being Death's “rush uncommon” creature that can be researched fairly quickly through the guaranteed turn 1 research feature. Originally too powerful, careful attention was paid to making sure this unit becomes balanced. They no longer retain the adamantium, mithril or magical weapons from the original unit to reduce the luck factor and power level, instead their natural To Hit chance was raised to ensure they're as good as if they still had the magical weapons. Defense was kept low but increased from the original 1 to 3 which makes them still take a lot of damage in combat but not so much that their huge pool of hit points becomes irrelevant. Regeneration is of course the main strength of this unit, but comes at a bonus health gain of 0, as even 1 would mean the 30 effective health of the wolves turns into 55 which would double the combat potential of the unit - the main unbalancing factor was that this unit was far too efficient even when used alone in stacks of one, which allowed expanding in many directions at once and protecting conquered cities with ease. Removal of Poison Immunity made sure the Werewolf is no longer unreasonably powerful against Nagas and Ghouls, those very commonly faced creatures in the early game, and lack of Illusion Immunity ensures the creature isn't a generic answer to everything and is only strong against Nature, Chaos and Death wizards, while Sorcery and Life can destroy them despite the regeneration thanks to Confusion and Exorcise. Removal of Death Immunity instead was considered which would have made them weak to death wizards instead of Sorcery, but doing so would have introduced the issue of being able to create undead werewolves by raising them directly from the enemy army, which, due to their regeneration ability, is definitely undesired and would mean Death AI wizards basically counter themselves by providing their enemy with undead werewolf troops that, being undead, gain the Death Immunity ability and thus will defeat the AI wizard who summoned them. That said this Sorcery weakness can be overcomed by researching the Blood Lust spell which grants Illusion Immunity but doing that delays the expansion and snowballing as well as increases the total cost of one such unit by a relevant amount. Natural Weapon Immunity also makes this unit a perfect candidate for this early game role.


6. Drain Power

Cost : 100 MP

Research : 960 RP

Target wizard loses 180 mana crystals and an additional 3% of their mana reserve. You gain SP equal to this amount.

The original spell only drained mana which made it a net negative to use : you spent your mana AND your overland casting capacity to make the enemy player lose mana only. This and the fact lowering the resources of one player at the cost of yours isn't very good strategy when multiple opponents exist, made me change this spell to give the player the mana drained. However I didn't want to risk the spell becoming a source of free mana crystals either so this drained amount was transferred as SP. Percentage effect was added to make this spell also useful in the late game. This spell can give a taste of what it means to be on bad terms with a Death wizard to players early on, as losing mana crystals in large quantities in the midgame can be painful. To make sure it isn't crippling though, the AI will not prioritize researching this spell too high and it won't usualy come into play before the player can deal with it. Still, paying attention to the Personality of Death wizards is extremely important as a Maniacal or other curse trigger happy wizard can seriously ruin one's day by spamming the spell. In that case forming a treaty or eliminating them in a rapid war can become neccessary.


7. Black Prayer

Cost : 35 MP

Research : 1600 RP

All enemy units in combat lose 1 attack, 1 defense and 2 resistance.

Nowhere near as good as Prayer for military potential, this spell mainly functions to enable resistance based spells to work better and affect more targets at the cost of spending one turn (and skill and mana) for that. This is a key spell to playing Death but also has great combo potential with other realms who have their own resistance based spells but don't specialize in them. The resistance stat on late game units has been designed considering the existence of this spell to ensure they have the intended amount of vulnerability.


8. Wall of Darkness

Cost : 30/90 MP

Research : 1280 RP

Ranged attacks can't be done from outside the wall to the inside.

One of the two spells that made Death good at defending cities. While the spell itself was fine, AI needed significant improvements to be able to recognize it. The idea to move this into Sorcery which might be more suitable was considered but I decided to keep it in Death to ensure the combo potential between the two realms and also because Sorcery already has plenty of ways to counter magical ranged attacks. Wall of Darkness combined with Mana Leak can guarantee enemy ranged attacks won't get used even after the units walk inside the wall, so keeping the two spells in the same realm was important.



9. Night Stalker

Cost : 225 MP

Research : 1920 RP

Creature : 7 melee, +1 To Hit, 5 defense, 8 resistance, 3 movement, 13 health, 1 figure, Death Immunity, Cold Immunity, Illusion Immunity, Poison Immunity, Weapon Immunity, Death Gaze -3.

While the idea of an invisible unit that attacks with instant death attacks is great and fitting the realm, the implementation left a lot to desire, in particular, the creature needed more hit points and defense to ensure they are able to withstand the retaliation from those few enemy figures that made their resistance rolls. Weapon Immunity was added for the same purpose and to fit among the other uncommon or better creatures in the realm who all have it. This is the only uncommon source of Invisibility, and thus it was considered to be moved to the rare tier but instead the creature's research cost and casting cost was raised from what I initially had in mind to ensure the timeframe during which the early invisibility can be taken advantage of is limited and comes with a large sacrifice - producing this much RP instead of investing magical resources into mana and skill to summon creatures and expand is a big deal. 8 book guaranteed 1st turn research Night Stalkers are still a decent strategy, but no longer unreasonably powerful due to how slowly the strategy can start deploying them.


10. Shadow Demon

Cost : 175 MP

Research : 2140 RP

Creature : 5 melee, 5 Magical Ranged +2 To Hit, 4 defense, 6 resistance, 2 movement, 5 health, 4 figures, Death Immunity, Cold Immunity, Illusion Immunity, Poison Immunity, Weapon Immunity, Flying, Non-Corporeal, Regeneration 2, Plane Shift

An iconic creature that's probably the best uncommon summoning spell in Caster of Magic, Shadow Demons offer a lot of good abilities with mediocre stats but extreme strategic potential. Regeneration ensures they suffer no losses in most battles even from spells or ranged attacks while they fly outside of reach of melee enemies and shoot their large amount of ammo at their victims. Regeneration 2 then allows them to be relevant participants of melee combat despite their low defense and attack strength, although the potential here is limited by the turns used up in ranged combat and their slow movement speed. While almost entirely unkillable in the early and even some of the midgame, their very high research cost and semi-high casting cost means they come late enough that this doesn't enable conquering the entire game using them, especially thanks to their slow movement speed, and their very low magic resistance ensures at least one realm - Life - can be more difficult to beat this way than the others who typically have no tools to permanently destroy a Shadow Demon before rare spells. Like in case of all regenerating creatures, of course you need to be winning the battles, so trying to save on costs and using them in smaller groups to expand faster is a very risky maneouver that can easily backfire. As the role of Planar Travel was completely redefined, the Plane Shift ability on this unit also had to be altered : now it only allows shifting planes if the player already opened up the other plane either by breaking their first tower or researching the Plane Shift spell.


Rare


1. Evil Presence

Cost : 180 MP

Research : 2500 RP

All religious buildings (including Oracle) in the target city no longer reduce unrest. All Barracks, Alchemist Guilds and War Colleges have no effect on units produced.

All of the Death rare curses suffered from the same problem, they were very powerful and unfun to play against when used by the AI, while offering very little the human player would really want to use, other than completely covering the enemy empire with them and winning by that resulting in having no resources at all to stay in the game - a difficult to achieve task as the AI stuggled against this and used Disenchant Area more and more. For this reason they have all been redesigned as well as the AI which is now willing to overlook a certain amount of curses depending on their personality before starting to use Disenchant Area.

On Evil Presence the chosen solution is to stop affecting magic power (the unfun part) and instead disable the military functions of the city : that is one effect even human players can use to their advantage and it can make Weapon Immunity relevant in the late game. Elimination of a major source of unrest removal makes the tax rate game mechanic, interracial unrest mechanic and spells that increase unrest more relevant.


Famine

2. Drought

Cost : 150 MP

Research : 3000 RP

Reduces the maximal population of the target city by 6 and sets percetange production bonus to zero. If the city exceeds maximal population, it'll shrink by 120/turn. If cast on a neutral city, the garrisoning units will desert.

Reducing food is a problematic mechanic because without food, units can't be maintained, so Famine was making the game nearly unplayable in some cases. The human player mostly used this to reduce the enemy population by combining this with other curses to ensure the city can't even feed itself and shrinks, or to reduce productivity by forcing more people to be farmers instead of workes. So the new spell will produce those results directly, without relying on food production changes. It's fairly important to note cities don't shrink when exceeding their maximal population normally, only if the total food production is lower than the population, which made Famine especially hard to use. Removing percentage production bonus makes the spell have a more reliable effect as well compared to turning workers to farmers, while it can't cripple production rates so much the city becomes unable to build anything.


Cursed Lands

This production reducing spell was removed because Famine already reduced production (indirectly) making this redundant.


3. Warp Node

Cost : 120 MP

Research : 4000 RP

Half the power produced by target node is transferred to the caster of Warp Node.

Total elimination of power was way too unfun (especially combined with the original Evil Presence erasing city power it could outright make players lose to having no magic power remaning at all) but this even added insult to injury by reducing power production below zero. To fix that the power reduction was halved and to make this a spell human players enjoy to cast, the effect of transferring that power was introduced.


Black Wind

After a lot of considerations this spell was removed because it is pretty much impossible to have a targeted overland “save or die” spell that's both efficient enough at killing units to be desirable for the human player, and balanced enough as well as not feeling redundant and worthless.


4. Dark Ritual

Cost : 150 MP

Research : 4000 RP

Triple the power production of religious buildings in the target city and increase unrest by 1.

This used to be a common spell but the effect was far too good for that as early doubling of power can lead into some serious snowballing especially when combined with the religious power retort. More importantly, reducing popolation growth early on, without even having the proper buildings built to have anything to double, was obviously not viable as a plan so having this spell as early as common tier was pointless.

Moving this into a rare spell slot allowed moving Wraith Form down to common. Power production was changed from double to triple because now only half of the city power is religious : Wizard's Guilds and Magic Markets are not affected. Population growth penalty was removed because as a rare spell there is no need for a large downside like that, but the unrest increase was kept for flavor.


5. Cloud of Shadow

Cost : 200 MP

Research : 3500 RP

All combats taking place in enchanted friendly city start with Darkness, Terror, Black Prayer and Mana Leak already cast.

A rare spell that is limited to city defense only needs to do way more than casting Darkness (an effect you might not even have a use for if your garrison is living troops), so additional effects were added. This makes Cloud of Shadow a powerful defensive enchantment, second only to Sorcery's Flying Fortress and Spell Ward.



6. Terror

Cost : 40 MP

Research : 4000 RP

All enemy units in combat must resist at -3 each turn or become unable to move for that turn. All enemy units lose -1 To Hit.

Initially a common, this too was moved up in rarity because a global spell making the enemy skip turns is either too powerful for a common or too useless, having horrible save modifiers. Loss of 1 Hit was added to ensure Death does have a spell at rare that can do something that doesn't rely on resistance and to make sure it remains useful even if the enemy is lucky on their resistance roll(s).


Wrack

7. Gate of Hades

Cost : 40 MP

Research : 4000 RP

All enemy figures in combat must resist at -1 at the end of each turn or take 1 point of irrecoverable damage. This spell ignores Death Immunity.

Death desperately needed more spells that are effective against other Death wizards, especially something to counter Shadow Demons. This seemed like the best candidate for that purpose because it's a somewhat situational spell that's very powerful when the time is right but often sees no play at all - now it's much more likely to find use every game. Spell was renamed to make the functional change more obvious and to have a spell name that has appropriate flavor for bypassing the immunity.



8. Zombie Mastery

Cost : 800 MP

Research : 5000 RP

At end of combat, all dead normal units are transformed to zombies under your control.

An often underestimated spell that's frequently a game winner. Zombies themselves aren't particularly powerful, although with spell support, Darkness and/or other buffs they can be capable of killing enemy stacks, consequently transforming them to undead or more zombies, the real strength of this spell is economic potential. Enemy wizards will spend a lot of mana on killing all those zombies you received for free, which will result in them either running out of mana crystals or reducing their research and SP spending. Of course the military role shouldn't be underestimated either - investing effort into making sure the zombie armies win battles can cause a massive snowballing effect of converting enemy troops into yours in wide areas. Not as powerful for this role if the enemy already has rare or better spells and can wipe out zombies easily, but even in that case the economy role is a lot more significant than one would expect.


9. Wraiths

Cost : 350 MP

Research : 4500 RP

Creature : 10 melee, +2 To Hit, 6 defense, 8 resistance, 5 movement, 8 health, 4 figures, Death Immunity, Cold Immunity, Illusion Immunity, Poison Immunity, Weapon Immunity, Flying, Non-Corporeal, Life Steal -4

Wraiths are the only Rare creature in the realm but they are definitely powerful enough for that role. They are very fast and can regain a massive amount of hit points while doing massive amounts of damage thanks to the powerful Life Steal abilty, however as testing and adjusting ensured, they are also vulnerable enough that careless use of them can cause losing the unit, especially when engaging an enemy stack that has no low resistance units to feed on. On the other hand the Wraith can wipe out entire enemy stacks of lower resistance units alone, converting many of them to undead in the process with the help of Black Prayer reducing the resistances even further. Life Steal damage does need to exceed the fairly high melee damage of Wraiths, so using Darkness or other spells that make Wraiths deal more physical damage is not recommended if that's the player's goal and casting Black Prayer is especially important to make the undead.


10. Wave of Despair (new)

Cost : 72 MP

Research : 5000 RP

Performs an Irrecoverable Cold attack with equal to (255/(2+enemy unit count)-10-target resistance) on all enemies. This attack ignores defense or conditional resistance modifiers. This spell is unaffected by casting cost modifiers.

Death needed a spell to deal with powerful high end units that typically have too much resistance to instantly kill (and enabling that would be far too unbalanced anyway), is more effective than the uncommon Repear Slash (which simply does not do enough damage to kill something like an Archangel) but is balanced despite that large power. Death also had no area damage spells and although it needed to be worse at that than Chaos' Flame Strike, it defintely deserved to have one. So a “reversed flame strike” spell was designed which is more effective when cast on smaller groups of enemies and weaker on larger armies. The damage formula was adjused a few time to reach a perfectly balanced version. The spell ignores Death Immunity which matters for intended targets like Archangels, but is affected by Cold Immunity so it won't be useful against Death creatures and gives this seldomly used damage type a new source. This spell is Death's answer to powerful heroes : the human player must use their heroes in a large enough army to ensure they survive, and using the “immortal” hero alone against larger AI armies for maximal snowballing will immediately be punished by this spell as soon as the AI reached the rare tier spells. Of course, heroes are meant to be a good strategy so this is not impossible to counter : other than the obvious solution of bringing another 8 units along, items with Inner Fire can provide the Cold Immunity needed to withstand this spell. Finally, the spell being unaffected by cost modifiers both ensures it remains as expensive to use as intended (being a fairly universal and powerful solution against medium and smaller armies with only the price being the deterring factor of overusing it) and also provides Death with another spell that isn't negatively affected by Divine Order.



Very Rare


Word of Death

1. Annihilate

Cost : 41 MP

Research : 15000 RP

All figures in the target unit in combat must resist at -5 or become irrecoverably dead. Normal units suffer an additional -2 save penalty. This spell ignores Death Immunity.

This is the ultimate save-or die spell expected to exist in the realm, having kept the very high save modifier of the original game, and further increased it on normal units, which this spell should be able to kill with a very high reliability. Cost of 41 is relevant being the lowest possible cost that won't make the spell available for Caster 40 units. Save modifier of -7 can make this a threat to heroes if the player is too careless and assumes the usual amount of 14-15 resistance will be sufficient. The resistance of very rare creatures has been carefully adjusted to have the intended interaction with this spell - a low or medium chance of killing them at most but some are entirely immune to it. It wouldn't be fair to kill 400-500 mana creatures with a single use of a combat spell. Many very rare Death spells were renamed simply because the original names were uninspired and not very expressive : Death Spell, Word of Death or Death Wish all basically only tell the tale they are spells that kill stuff. In fact, “Death Spell” is literally so generic it could refer to any spell in the Death realm. I wonder if these were even intended to be the final spell names or simply got stuck that way initially being a development codename.



Death Spell

2. Massacre

Cost : 60 MP

Research : 15000 RP

All figures in all enemy units in combat must resist at -2 or die.

Not much to say here, this is expected to existing in Death Very Rare and the save modifier is reasonable so I had no reason to make changes.


Death Wish

3. Final Wave

Cost : 1000 MP

Research : 18000 RP

All enemy normal units must resist or die.

The adjustments done to unit resistance globally made this spell quite worthwhile to cast so additional improvements were unnecessary. Casting cost was raised though as 500 mana for killing hundreds of units is far undercosted. Like Great Unsummoning, a diplomacy penalty was added, although it's not as harsh as one would expect from such large scale murder to ensure the spell is usually safe to cast if used in moderation.


Cruel Unminding

A spell that reduces casting skill is unfun, extremely hard to properly balance due to the difference in human and AI resources as well as the non-linear nature of Casting Skill and goes against the philosophy of the mod that spellcasting, especially at this tier, should be dominating gameplay. For the same reason, spells that reduce enemy research efficiency were never added even though the idea was considered.


4. Pestilence

Cost : 250 MP

Research : 9000 RP

Each turn if the population of enchanted city exceeds a D10, population is reduced by 1. Unrest is increased by 2.

Unlike the rare city curses, this very rare city curse serves the role of a game-winning spell and wasn't made any weaker. While the casting cost makes it somewhat time consuming to cast it on an entire enemy empire and the effect also takes time to shrink the city, this spell is capable of reducing an entire empire's gold and production output drastically, almost entirely denying them the ability to rely on producing and maintaining normal units. While it doesn't directly reduces magic power, the building maintenance on magical buildings can and will cause the player's economy to collapse given long enough time, meanwhile still allowing them to retaliate using their magical armies and spells and even obtain money from war to keep their economy alive long enough to eliminate the enemy and win the game. Reseach cost is low among very rares - due to the delayed nature of the effect it needs to be used as early as possible to be the most effective.


5. Evil Omens

Cost : 1250 MP

Research : 15000 RP

All spells cast by other wizards costs 50% more.

This simple and elegant spell provides Death the global “everyone else is cursed” effect where it matters the most, spellcasting. The cost increase provides both an economic and strategic disadvantage to everyone else, without obstructing or denying their ability to still properly particpate in the spellcasting aspect of the game which would make things no longer fun. Originally this was an anti-life/nature spell but removing those realm specific spells is part of the design.


6. Animate Dead

Cost : 50 MP

Research : 15000 RP

Raises a dead unit in combat as undead with the buff : Animated (+1 attack, hit, defense and weapon immunity). If the unit wasn't originally the caster's it disappears after combat and units that were already undead can't be targeted.

While the unit becoming undead makes this a bad idea to cast on a hero, ensuring Death doesn't get similar levels of hero support as Life, this spell works on fantastic creatures, even those immune to Death Magic if they were initially your own, allowing the Death wizard to use all their fantastic creatures twice before they truely die, or turn enemy units against their own army after killing them for the duration of the battle, both of which amazingly powerful effects suitable for a combat spell at this tier.


7. Eternal Night

Cost : 800 MP

Research : 21000 RP

All combats are under the effect of the Darkness spell.

All enemy religious buildings produce halved power.

All nondeath enemy units lose 1 resistance.

The first and original effect is useful as it allows the Death wizard to play without requiring to spend their first combat turn on casting the Darkness spell which they most likely already have, this was nowhere near good enough for a spell of this tier. Halving enemy power was added then to provide a secondary, economy benefit which isn't very powerful but can be still relevant. Still being somewhat boring, finally the resistance reduction was added which is a huge benefit for any Death wizard and makes most of their spells more potent, escalating the combat relevance. Being an overland global resistance modifier, this spell also applies to Final Wave unlike any other, making wizards who invest enough picks to get both spells quite a lot more powerful.


8. Death Knights

Cost : 420 MP

Research : 12000 RP

Creature : 12 melee, +3 To Hit, 9 defense, 10 resistance, 5 movement, 8 health, 4 figures, Death Immunity, Cold Immunity, Illusion Immunity, Poison Immunity, Weapon Immunity, Flying, Non-Corporeal, Life Steal -5, Armor Piercing, First Strike, Supernatural

Similar to Wraiths but even more powerful, Death Knights offer the realm an excellect creature to carry out offensive maneuvers and finish off the remaining enemies in the military way. The creature is almost impossible to kill thanks to its decent armor and very powerful Life Steal, having the only weak point of suffering from extremely low magic resistance which can make it less optimal against Sorcery players, and gives a tiny sliver of hope to Nature players who can attempt to petrify the unit which is immune to all other forms of Nature magic. Non-corporeal was added to ensure using them is not a downgrade in any way from the Wraiths who already had the ability.


9. Summon Demon (new)

Cost : 41/123 MP

Research : 6000 RP

Combat or Overland Creature : 14 melee, +1 To Hit, 5 defense, 7 resistance, 2 movement, 12 health, 1 figure, Death Immunity, Cold Immunity, Illusion Immunity, Poison Immunity, Weapon Immunity, Missile Immunity, Flying, Caster 40 OR {Death Touch -4 and Life Steal -4}

Having the Summon Demon ability of Demon Lord in the game, one might wonder why this creature can't be summoned directly. This spell makes it possible and while it doesn't offer a powerful creature, it's extreme verstaility makes it great. Having all of Flight and Illusion and Missile Immunity, being able to combat summon this creature is a big deal, and there is a high chance it is literally free as it offers casting power equal to its own cost (minus one to ensure it can't summon more copies of itself). Unfortunately due to coding limitations combat summoning a Caster unit isn't always possible, in which cases (or when the die roll comes up unlucky) A Death Demon is summoned instead which has two powerful touch abilities. The true power in the Demon though lies in the fact it gives access to all rare and below combat spells from the realm, making it very valuable for players who picked fewer Death books and missed them - Death had no Caster creature in the game unlike all the other realms. Finally the creature can be summoned overland, being an excteption to the rule that summon spells can either be combat or overland but not both, where it offers a cheap, by this phase of the game spammable utility creature that can support the player's armies with significant spellcasting ability - the overland summoned Demons are always the Caster 40 version.


10. Demon Lord

Cost : 666 MP (18 MP/Turn)

Research : 24000 RP

Creature : 25 melee, 20 magical ranged (8 ammo) +3 To Hit, 8 defense, 13 resistance, 4 movement, 35 health, 1 figure, Death Immunity, Cold Immunity, Illusion Immunity, Poison Immunity, Weapon Immunity, Missile Immunity, Flying, Summon Demon 3, Quick Casting, Supernatural, Life Steal -2, Primal Force.

The most expensive creature in the game, Demon Lords offer by far the most versatile and powerful very rare unit in terms of abilities, although in raw stats Nature and Chaos dominates. Quick Casting was added to ensure summoning demons doesn't deny the creature the ability to also attack, or that demons can be summoned in a timely fashion instead of waiting 3 full turns for them. Missile Immunity was also added as regular Demons have that ability. I added Doom Bolt spell at first but that was entirely too much, as a stack of Demon Lords could deal enough damage in one turn to wipe out up to 5-6 other very rare creatures. They also had more immunities added and had 10 armor, both of which had to be toned down as it made the creature almost impossible to hurt for the AI. It's still a very very powerful creature that can be expected to take down enemy cities or most armies with ease when used in smaller groups but it's now vulnerable enough that doing so might cost one of them against a fully prepared and powerful enemy. It works even better on the defense though, where it can utilize the summoning and ranged attack before enemies even get a turn to damage it using spells AND generate power for their owner through Primal Force in addition. The price? Well, unleashing multiples of these on the world will likely come with severe consequences, but that's something a Death wizard won't be worried about for sure, especially after winning the game and eliminating all rivals.




Chaos Magic


Chaos doesn't care much about anything and does what it wants to... set things on fire or blow them up most of the time.

Strengths

    Second most powerful in the late game.

    Best direct damage spells and destructive combat spells.

    Good at increasing attack power on units

    Destruction on the world map : cities, units, terrain.

    Powerful but simple creatures


Weaknesses

    Early game spells offer versatility but aren't powerful.

    Relies on random chance slightly more than other realms

    Offers very few spells for defensive play, extremely focused on offense and aggression

    Lack of spells to improve own economy

    Very few spells that target magic resistance or deal irrecoverable damage, so when regular damage is ineffective, Chaos can have problems.


Common


1. Fire Bolt

Cost : 10 MP

Research : 320 RP

Perform a strength 24 Fire attack on target enemy unit in combat.

Chaos being the top direct damage realm, this is the most cost-effective common direct damage spell, as well as the baseline for balancing all other such spells in Chaos or otherwise. Deals 7.2 damage on average before applying enemy defense.


2. Hell Hounds

Cost : 40 MP (1 MP/turn)

Research : 160 RP

Creature : 4 melee, 4 Fire Breath, +1 To Hit, 2 defense, 5 resistance, 3 movement, 4 health, 4 figures.

Hell Hounds offer a fragile creature with high damage output thanks to 4 figures dealing damage 2 times each. While it can deal a lot of damage thanks to the large number of attacks, this creature isn't particularly good at overcoming the armor of higher tier units, ensuring it can have a low summoning cost and doesn't stand out as particularly powerful. Being able to attack flying creatures and having a reasonably good movement speed and low enough cost to use them in larger numbers, this creature guarantees Chaos isn't easily slowed down in expansion by flying or faster units.


3. Corruption

Cost : 40 MP

Research : 320 RP

Target land tile produces no resources (until purified)

The presence of this spell reduces the luck factor in starting location as early minerals will often but not always get disabled through Corruption, demanding additional efforts to clean up and use the minerals. Having an early game spell that hurts economy makes diplomacy more relevant as well, and considering the counter-ability of Purify exist and a single Corrupted tile is usually a very little influence, it's more like an introduction to this type of effect and a warning what is to come than a real threat. Nonetheless, the ability to disable Mithril, Orihalcon and Adamantium ensures Chaos wizards are not overwhelmed by units with such equipment early on nor is the Chaos wizard's expansion attempts thwarted by them. This spell also makes stopping enemy scouts relevant as the AI can only target this - like all other curses- at tiles belonging to cities they have already scouted.


Eldritch Weapon

While reducing enemy armor by 1/3 sounds fine in reality this is a very underwhelming and redundant effect : in typical cases the armor reduction of 2-3 means the spell is identical to one that buffs the attack strength by the same amount, and by the time enemies have higher armor than that, Lighting and Doom damage, offering better forms of ignoring armor become easily available. This spell was so bad, the decision to remove it was made even before having any good ideas for a replacement spell, but unfortunately Chaos realm early spells were so close to perfectly covering all bases it took me a year to come up with a new spell idea to actually follow through with that plan.


4. Flame Blade

Cost : 10/50 MP

Research : 480 RP

Enchanted normal unit gains +3 melee attack and +2 missile attack and can ignore Weapon Immunity.

Being the realm specialized in offense, this spell which is only slightly better than Holy Weapon has a better place at common than uncommon. Thrown attacks are not increased though as it was found that effects increasing Thrown too easily is one of the reasons Barbarians had balance issues.


5. Warp Wood

Cost : 5 MP

Research : 320 RP

Target unit with a missile attack loses all remaning ammo.

Similarly to Guardian Wind, this too serves to ensure bow units don't dominate the early game overly much, leaving 2-3 realms with no direct counter to them early on. (Death can only counter it when played by human players as the AI will rarely summon any Skeletons and lacks the ability to plan overland moves based on unit abilities so even if it did, those Skeletons would rarely meet with the bow units they'd need to counter.)


6. Disrupt

Cost : 5 MP

Research : 260 RP

Destroy target tile of a City Wall in combat.

Fits the role of Chaos as it offers a spell that makes sure the player can stay on the offense and walls won't hinder them from entering cities and destroying the buildings or defending units inside. It's worth mentioning destroyed wall sections only offer 1 defense while normal wall sections (including the gate and center tiles) offer 3, so this also works as a debuff to make all units in the gate much easier to damage, if entering the city to cause destruction isn't the objective.


7. Fire Elemental

Cost : 16 MP

Research : 200 RP

Combat Creature : 12 melee, 5 defense, 4 resistance, 2 movement, 10 health, 1 figure, Fire Immunity, Weapon Immunity, Poison Immunity, Stoning Immunity.

While not particularly strong, it offers the Weapon Immunity ability, and is the only way Chaos can access it. Chaos doesn't have any other combat summon and it's best that way as it would enable it to prolong battles and cast more highly destructive combat spells if it did. Fire and especially Poison Immunity can also make it a useful spell to cast despite lacking in raw strength. Being a high attack single figure, it is more effective at overcoming armor on medium armor units than average common tier units.Casting cost was reduced to 16 in version 6.05 to make the spell more viable to cast when Weapon Immunity isn't a factor.


8. Wall of Fire

Cost : 20/60 MP

Research : 320 RP

All enemy units moving or attacking through the wall of fire suffer a stenght 10 Fire magical attack.

The idea of this spell was good, but the attack strength needed to be improved to make it useful. No longer hurts the caster's units as it often caused the AI to hurt their own units when they went outside and returned to the city. Helps Chaos survive the early game where its spells are not as effective as later on.


9. Shatter

Cost : 8 MP

Research : 440 RP

Target enemy normal unit must save at -2 or all of its attack strengths are reduced to 1.

Chaos's common „save or die” spell, can only disable normal units and while it makes them unable to deal damage, it doesn't help in making them more vulnerable - overall much worse than Black Sleep but the low casting cost and identical save modifier makes it able to compete with it despite that.


10. Warp Creature

Cost : 10 MP

Research : 380 RP

Target enemy unit must save at -5 or suffer one of the effects at random :

Halved attack

Halved defense

Zero resistance.

Similar to Shatter but this can affect fantastic creatures and has a better save modifier - in exchange the effect is not that good and less reliable. Still, the chance to set resistance to zero opens up a lot of combo potential.



Uncommon


1. Raise Volcano

Cost : 50 MP

Research : 1280 RP

Turns a target overland tile into a Volcano. 20% chance to produce a new mineral. Volcanoes produce 3 power for their owner and have a 0.5% chance to revert to a Mountain. If targeting a city, 5% chance for each building to get destroyed.

Can target hills and mountains - disallowing those tiles completely defeats the purpose of destroying enemy minerals as they are almost always on those tiles. While economy isn't available to Chaos in general, power production is an exception : magic is the most important in Caster of Magic. Power amount was raised and revertion lowered to make the spell viable as an economy spell - this is necessary because while 50 MP isn't much, using up 50 overland casting skill is a fairly big deal as raising skill costs lots of magic power. It can be used pretty much an unlimited amount of times, but overusing it comes at the price of being unable to cast other overland spells that might be much more important. Other than the economy aspect and combo potential with both Change Terrain and Transmute, it functions as an upgraded Corruption that can no longer be undone by Purify. I lowered the building destruction chance because that's not the main role of the spell and now that it can be recast on the same tile (to ensure accidental new minerals given to the enemy can be removed), a high chance to destroy buildings would be too powerful.


2. Immolation

Cost : 12/60 MP

Research : 1280 RP

Whenever enchanted unit attacks or counterattacks, all enemy figures suffer a strength 10 Fire attack.

Very much like wall of fire, the strength of the attack was increased to make it relevant. Better than the wall as this can be used in any combat, on any unit, and isn't bound to the city tiles, so the higher rarity is justified.


3. Fireball

Cost : 15 MP

Research : 960 RP

All figures in target enemy unit suffer a strength 12 Fire attack.

The direct damage version because sometimes you can't afford to engage in melee or rely on your city walls to deal the all-figure hitting damage. Strength is slightly higher because Fireball is an iconic, powerful spell. Fills the role of a spell that can reliably kill most multi-figure units up to halberdier tier in one use but is still single target.


4. Fire Storm

Cost : 180 MP

Research : 2140 RP

All figures in all units on the target overland map tile suffer a strength 12 Fire attack.

Originally a rare, this was changed into an Uncommon because Uncommon Chaos had 4 creatures, way too much, and one of them had to be swapped with a rare. Having overland direct damage available earlier than Nature suits the realm. This spell is definitely a bit too potent for an uncommon but the high casting cost and research cost keeps that balanced. The all-figure hitting effect ensures using stacks of magicians or other fragile units as garrison against Chaos wizards is not an effective tactic and helps Chaos players to stay on the offense - a similar role as Magic Immunity and Elemental Armor has, but available earlier than those. Be careful that unit targeting spells do not use the AI city scouting mechanic, even if the units are inside a city the AI doesn't know about, Fire Storm can target them. Implementing a proper scouting mechanic for these spells would be impossible due to having no source code available and would reduce the AI's performance significantly. It would also prevent Dispelling Wave from filling its intended role of balancing buff strategies - the AI has to be able to dispel the buffed stacks at all times for that to work as intended.


5. Lightning Bolt

Cost : 25 MP

Research : 1600 RP

Target enemy unit suffers a strength 36 armor piercing attack.

Sometimes the Chaos wizard needs to destroy units with a low figure count and/or high armor. Better than Nature's Ice Bolt for the same cost.


6. Chaos Channels

Cost : 50 MP

Research : 640 RP

Target unit gains one of the following buffs permanently and becomes a Chaos creaure :

Strength 4 Fire Breath

Flight

3 Defense.

I increased the Fire Breath strength to make it high enough to deal at least some extra damage though the armor of typical midgame units. This spell fills many roles, as it allows Chaos to have a reliable way to have armies that can fight flying enemyes - 2 out of the 3 effects enable that. It also allows flying ships but isn't as efficient as Sorcery at it, due to the random chance involved. It increases the relevance of the Flight mechanic, allowing one more realm to have flying units appear in their normal unit armies. Finally, it opens up the strategic choice of the player being able to decide if they want their unit to be vulnerable to normal unit or fantastic unit targeting spells, as well as opening up the combo potential of using fantastic unit specialzied buffs on normal units.


7. Mystic Surge (new)

Cost : 25 MP

Research : 1280 RP

Target unit in combat gains 3 movement, 2 defense and loses 2 resistance. Their attack is harder to defend against (-1 To Defend). The unit gains random enchantments and becomes fantastic. It cannot be healed this combat and is reduced to 1 health after the combat. This spell can't be dispelled.

Probably the most complex spell in the game, this shows perfectly well how difficult it was to design a new Chaos spell that is relevant, not redundant, and is balanced as well to replace Eldritch Weapon. While Chaos is good at offense, reaching enemy units quickly enough can be difficult so a movement buffing spell seemed like a good idea, except only doing that opens up an unintended abuse potential of using the fast units to stall for time and casting damage spells so some drawbacks were necessary. Being unable to heal, having lower resistance and almost guaranteed loss of the unit the next combat even if it survives seemed like a good way to ensure that strategy can't work too well.

In its final form Mystic Surge is now the „gamble” spell Chaos is expected to have, a spell you'll want to use if you have no other way of winning the battle, and hope for the best outcome in addition to provide a reliable way to use a reckless strategy that ensures your unit reaches enemy ranks even if they avoid confrontation and engages them but likely dies in the process. As slow movement is a disadvantage on two of the higher tier chaos creatures, this spell has some good in-realm combo potential as well. Dispelling had to be disabled to ensure the player can't recast it to get more enchantments and to ensure the disadvantages will remain applicable.


8. Gargoyles

Cost : 100 MP (1 MP/turn)

Research : 420 RP

Creature : 5 melee, +1 To Hit, 9 defense, 9 resistance, 3 movement, 4 health, 4 figures. Poison Immunity, Stoning Immunity, Flying.

While a highly defensive creature is unusual in chaos, the realm definitely needs at least one such creature to cast Immolation on. It also serves as an alternate way to start when playing 8 or more Chaos books, as it has a low research cost like Werewolves and Giant Spiders. While nowhere near as powerful as those it does enable the pure Chaos wizard to have some sort of an option for early expansion other than the mediocre Hell Hounds or buffing normal units with Flame Blade. The Stoning Immunity ability makes this unit an excellent counter to the ranged cockatrices strategy, contributing greatly to keeping it balanced.


9. Fire Giant

Cost : 110 MP (3 MP/turn)

Research : 1280 RP

Creature : 18 melee, 12 Magical Ranged (3 ammo) +1 To Hit, 5 defense, 7 resistance, 3 movement, 18 health, 1 figure. Fire Immunity, Fireball Spell, Wall Crusher, Mountaineer

Unlike Gargoyles, Fire Giants serve the role of a versatile uncommon creature for the realm which performs well on offense, being able to destroy one early game unit with Fireball and even use a few ranged attacks before starting to use its decent melee attacks. While effective at dealing damage and doesn't cost much to summon, Giants are more expensive to research, maintain, and more vulnerable to resistance based spells, ensuring the 8-book early giant strategy remains reasonably balanced and the relevance of Gargoyles is retained despite the Giants having much more offensing power.


10. Chimeras

Cost : 180 MP (4 MP/turn)

Research : 1920 RP

Creature : 10 melee, 6 Fire Breath, +1 to Hit, 5 defense, 8 resistance, 3 movement, 8 health, 4 figures. Flying

Chimeras are the high end uncommon creature in the realm, having massive damage output and flight as well as fire breath to kill some enemy figures before they could retaliate. While these units are very powerful, they're also expensive both to research and summon and have no special abilities other than the commonly available flight and breath attack.


Doom Bat

4 Uncommon creatures are entirely too much, especially for a realm not specializing in summoning magic. As “Doom Bat” sounds and looks like a powerful, dangerous creature, it was the one selected to be moved to a higher tier.


Rare


1. Doom Bat

Cost : 320 MP (7 MP/turn)

Research : 4000 RP

Creature : 16 melee, +2 to Hit, 7 defense, 9 resistance, 6 movement, 30 health, 1 figure. Flying, Doom, Immolation.

Doom Bats specialize at speed, being the only creature with high enough movement to reach and attack enemy front row creatures in combat. As the name suggested, the Doom attack type was added, to allow the realm to have defense ignoring damage even in the form of a creature. While the 8 guaranteed damage isn't very high, Immolation adds further damage to weaker, multi-figure units, ensuring the creature won't underperform even in cases when defense-ignoring damage isn't necessary. It has fairly high hit points even among Rare creatures to ensure it can be effective at the role of being the first to engage enemies at melee, but its defenses are mediocre.


2. Efreet

Cost : 333 MP (9 MP/turn)

Research : 5000 RP

Creature : 15 melee, 18 magical ranged(8 ammo) +2 to Hit, 7 defense, 10 resistance, 4 movement, 27 health, 1 figure. Flying, Immolation, Fire Immunity, Caster 40.

Unlike bats the Efreet are the ranged rare creature in Chaos, providing very damaging ranged attacks and casting power that allows them to use even more destructive combat spells first. Magic resistance is better than on the bats but still not outstanding, allowing unstoppable stacks of many efreets to be countered by mass save-or-die spells. The creature has been tested with 12 resistance first but Efreet stacks were way too effective that way.


3. Chaos Spawn

Cost : 303 MP (8 MP/turn)

Research : 3000 RP

Creature : 1 melee, 8 defense, 12 resistance, 2 movement, 22 health, 1 figure. Flying, Doom Gaze 4, Death Gaze -4, Stoning Gaze -4, Poison 4, Fear.

This creature offers the realm a high magic resistance option as well as the ability target enemy resistances with a powerful set of abilities. The low speed of the creature makes it difficult to use, but when it does manage to attack an enemy, it'll almost always destroy them. Armor and health has been adjusted to provide just the right amount of difficulty in lairs.


4. Doom Bolt

Cost : 45 MP

Research : 4500 RP

Deals 12 damage to target enemy unit in combat, ignoring all defenses.

Damage has been raised because units often have more hit points in Caster of Magic - a typical Cavalry or Halberider unit is exactly 12 hp. This also makes it more balanced against the new higher tier healing spell, Exaltation. While Doom Bolt offers less damage/mp as most other options, the guaranteed, reliable effect is often worth the higher cost even if ignoring armor isn't necessary.


5. Warp Lightning

Cost : 30 MP

Research : 4000 RP

Perform a strength 12 armor piercing attack on target enemy unit, then repeat at strength 11, 10 and so on until reaching 0.

This spell has been adjusted with precision to ensure it's more damaging per turn than other spells in the realm against medium or lower defense targets. Against targets having over 10 defense, Doom Bolt is the most damaging per use, while below, Warp Lighting will work better. Lighting Bolt and Fire Bolt serve as a more economic option that offers more damage/mp spent but take longer to kill the same target, Fire Bolt being better on medium or low, Lighting Bolt on higher armor enemies.


6. Flame Strike

Cost : 60 MP

Research : 5500 RP

Perform a strength 32 Fire attack on all enemy units

This spell will no longer hit all figures separately, ensuring a powerful but more balanced effect that is neither overpowered against multifigure units nor useless against single figure ones.


7. Magic Vortex

Cost : 50 MP

Research : 3500 RP

Summon a magic vortex that deals 7 doom damage when moving through a target or performs a weak lighting bolt attack when moving next to it. When the vortex moves through city tiles, additional building destruction happens at the end of combat.

A personal favorite of mine this spell offers the Chaos realm a highly effective spell that can do a lot of unblockable damage at a reasonably low cost, serving as the realm's “damage over time” spell while also having the “relies on random chance” theme on the Vortex's movement. In the original game the AI was unable to ever cast this spell, but now it has been enabled to and will know when it's worth doing so despite the risk.Unfortunately it's pretty much impossible to make the AI avoid the vortexes when moving their units as it has to focus on attacking the enemy instead and trying to do both would require a very complex system, however it'll only cast the spell when it's either expecting to lose the battle, has units immune to the effect, or wants to cause destruction in the player's town.


Metal Fires

8. Blazing March

Cost : 50 MP

Research : 4000 RP

All of the caster's units in combat gain +3 melee attack and missile attack that can ignore Weapon Immunity.

While the idea of a combat global spell to buff attack was good, the amount of buff - 1 attack - was a joke. It also didn't work on fantastic creatures - a problem for a realm who has decent creatures and spells to convert even their normal units into Chaos units. The spell is especially useful for the units with high number of attacks like Hydra and Chimera, and can turn the obsolete Gargoyles and Hell Hounds relevant again as well, nearly doubling their attack power.


9. Doom Mastery

Cost : 666 MP

Research : 4000 RP

All of the caster's newly produced normal units are affected by Chaos Channels.

A great spell from the orginal, except the rarity has been reduced. At rare there still is enough time to produce relevant amounts of normal units that can greatly influence the game - later on normal units, buffed or otherwise, will no longer be a factor for a Chaos player as battles will be won by combat spells, global destruction, or very rare creatures.While powerful, it is a major strategic decision to use it as it makes all of the wizard's units produced afterwards vulnerable to Great Unsummoning and Holy Word in exchange for becoming immune to Final Wave.


10. Chaos Rift

Cost : 200 MP

Research : 2500 RP

Each turn 5 strength 11 lighting bolts hit random units in the city and there is a 5% chance to destroy each building.

This spell is quite useful in softening up enemy garrisons or hindering economy if an immediate war to conquer it is not possible, and unlike First Storm, can also kill more powerful units but only over time, especially if the size of the garrison is already reduced and the damage concentrates on the last surviving units. In fact, it can easily lead to making the city empty allowing the player to easily conquer it, but at the price of losing quite a lot of buildings and having to wait for it.


Very Rare


1. Disintegrate

Cost : 50 MP

Research : 15000 RP

Target unit irrecoverably dies if it has 9 or less resistance.

Like Doom for damage, Disintegrate is guaranteed effect on save-or-die. This spell has great cross-realm combo potential : while 9 or less resistance mostly only covers normal, common and uncommon units (which is already pretty good for a guaranateed irrecoverable removal spell), any resistance reduction spell you can use along with this can enable using it on rare or even some very rare creatures. It's also a spell that covers for the realm's weakness by providing irrecoverable and resistance targeting removal which is enough to keep it very rare.


Call Chaos

2. Apocalypse

Cost : 65 MP

Research : 15000 RP

Strikes every enemy unit with a random effect from the following list: Exaltation, Chaos Channels, Warp Creature at a -15 resistence penalty, Doom Bolt, Warp Lightning, Flame Strike, Confusion that cannot be resisted or Disintegrate at a -3 resistance penalty

Similar to the original spell but comes with a much better set of effects, this is one step above Flame Strike being a higher tier all-targeting removal spell. While it involves random chance - as one would expect from the ultimate Chaos combat spell - the damage potential to the enemy army is so high (if enough targets exist) that it's well worth using despite that fact. It is also probably the only spell in the game that can potentially kill even the most well protected hero, but the chance to do that is extremely low - 1 in 32 to land on Confusion and the “change control this turn” effect among the various confused states at the same time, and then the confused hero has to attack something capable of killing them like another hero, or the combat needs to end without the confusion getting dispelled. As heroes are meant to be no longer omnipotent by the very rare spell phase, this much is acceptable, in fact, desired.

(also, additional special thanks for Drake178 for fixing the visual effect of this spell in the original game and even providing a CoM compatible version of that patch!)


3. Warp Reality

Cost : 75 MP

Research : 12000 RP

All non-Chaos units in combat lose -2 To Hit.

This spell was moved up to very rare because reducing the damage output of most enemies by half (before defense is applied) is that powerful, especially in a realm that does not normally do defensive magic. While there is a catch the the caster's units need to be Chaos units to stay unaffected, this is fairly easy to achieve by using the good Chaos creatures or the Doom Mastery spell. Even failing that, the spell STILL benefits the Chaos wizard though, as everyone dealing less damage makes the battle longer, giving them more combat spellcasting opportunity, which this realm is the best at.


4. Call the Void

Cost : 500 MP

Research : 18000 RP

Every building in target city has a 66% chance to be destroyed and every unit takes 12 damage. Nearby tiles become corrupted randomly and 66% of the population dies.

The spell that nukes a city, certainly impressive enough. I only had to adjust the damage and destruction slightly.


5. Chaos Surge

Cost : 1000 MP

Research : 6000 RP

All Chaos creatures gain 3 melee attack, 2 ranged or breath attack, and 2 resistance. Multiple copies stack but at halved effect.

Another spell that covers for the realm's weakness, this spell buffs resistance, otherwise unavailable for Chaos. The combo of buffing all normal units through Doom Mastery is there as well, and this spell even has a dipomacy aspect as casting it can benefit players other than the caster, which also makes it interesting for trade. The AI is aware of this and will cast it depending on the total Chaos units itself, its allies and its enemies have. This spell stacks with Blazing March for extreme damage output, which can enable otherwise obsolete creatures like Hell Hounds to be relevant even in the endgame.


6. Meteor Storm

Cost : 800 MP

Research : 21000 RP

Rains down fiery hail upon both planes, striking all enemy creatures outside cities with a strength 6 magical fire attack. Buildings within cities may also be destroyed (1% chance each turn a building is destroyed). The casting wizard is immune to all these effects.

No longer affects the caster, as being unable to properly garrison nodes and towers is a problem even for the human player, although the AI sufers even more as it has no concept of “not letting low armor units outside cities” to avoid damage.While Armageddon and Doomsday destroy population over time, this spell destroys buildings, completing the puzzle : maintaining these 3 spells successfully wins the game against anyone not capable of protecting cities from them.While the AI can't move their units out of the way of meteors and into cities, it will prioritize casting spells that can reduce the damage like Resist Elements, Bless or Elemental Armor much higher.


Great Wasting

7. Doomsday

Cost : 1000 MP

Research : 15000 RP

Each turn 4-20 map squares are withered as per the spell Corruption. The caster's cities and surrounding areas are not affected of course. All enemy cities suffer +5 unrest. Cities exceeding their maximal population will shrink at an additional -200 people/turn

This spell has only one purpose - shrink the enemy population worldwide and have a drastic effect on their city economy. Corruption ensures maximal population gets reduced and the secondary effect ensures this shrinks the effective population even if food producing buildings would prevent that otherwise. Number of corrupted tiles depends on the map size setting (4*map size) to ensure a similar rate of destruction on all settings. Used to be fairly redundant with Armageddon but the higher unrest and population reduction effect makes it now functionally different.


8. Armageddon

Cost : 1250 MP

Research : 24000 RP

Each turn 4-20 map squares are affected by Raise Volcano. The caster's cities and surrounding areas are not affected. All enemy cities suffer +2 unrest.

Much less good at affecting enemy economy as it doesn't force the loss of population and generates fewer rebels. However it's still the better spell as each volcano produces 3 power making the user a lot more powerful over time. Researching this as the first very rare spell is difficult due to the cost but very highly rewarding as volcanoes will generate extreme amounts of power if the spell is left unchecked long enough.


9. Hydra

Cost : 480 MP (11 MP/turn)

Research : 9000 RP

Creature : 9 melee, 6 Fire Breath, +1 to Hit, 4 defense, 12 resistance, 2 movement, 10 health, 9 figures. Regeneration 7.

Hydras offer Chaos an extremely durable unit that buys plenty of time to enable combat spellcasting. While slow and weak against high armor units, it has huge potential which can be realized through combining it with other Chaos spells, and it's the only 9 figure unit in the game, in fact the only summoned creature with more than 5 “figures” in the form of heads.


10. Great Drake

Cost : 500 MP (15 MP/turn)

Research : 15000 RP

Creature : 35 melee, 35 Fire Breath, +3 to Hit, 11 defense, 15 resistance, 4 movement, 40 health, 1 figure. Flying.

Great Drake is the most powerful creature in raw stats, especially attack power, but lacks special abilities entirely.
