import { Warframe } from "../class/warframeClass.js";
import { Ability } from "../class/abilityClass.js";

export const warframes: Warframe[] = [
    new Warframe(
        'Excalibur',
        '2013-03-25',
        'Starter/Assassination',
        ['Damage Dealer', 'Mobility'],
        [
            new Ability('Slash Dash', 'Mobility', 'Dash between enemies, dealing damage.', 'Damage Instant AOE', ['Slash']),
            new Ability('Radial Blind', 'Crowd Control', 'Blinds enemies in a radius, disabling them temporarily.', 'CrowdControl SoftCC AOE', ['Blind']),
            new Ability('Radial Javelin', 'Damage', 'Radial javelins impale nearby enemies, inflicting Slash Status.', 'Damage Instant AOE', ['Slash']),
            new Ability('Exalted Blade', 'Damage', 'Summon a sword of pure light and immense power.', 'Damage Instant SingleTarget', ['Slash']),
        ],
        1,
        1,
        4,
        "https://www-static.warframe.com/images/warframes/thumbnails/excalibur.png"
    ),
    new Warframe(
        'Dante',
        '2024-03-27',
        'Disruption/Pity Shop',
        ['Damage Dealer', 'Support'],
        [
            new Ability('Noctua', 'Damage', `Open Noctua, Dante's Exalted Tome, and unleash a tale of woe upon his enemies.`, 'Damage Insant SingleTarget', ['Slash', 'Radiation']),
            new Ability('Light Verse', 'Buff', `Dante's vitalizing composition grants him and his allies Overguard and increases their Health`, 'Buff Overguard AOE', []),
            new Ability('Dark Verse', 'Damage', `Dante's composition draws blood from nearby enemies, inflicting Slash Damage upon them.`, 'Damage Instant AOE', ['Slash']),
            new Ability('Final Verse', 'Damage/Buff', `Dante must compose two other Verses before his Final Verse.\n
            TRIUMPH: Two Light Verses cast in succession invigorate allies with a buff that increases Health and grants Overguard. Kills and assists briefly regenerate Overguard.\n
            TRAGEDY: Two Dark Verses cast in succession attack enemies. Damage Over Time from Slash, Heat and Toxin Status Effects accumulates in a single blast.\n
            WORDWARDEN: A Light Verse followed by a Dark Verse supports allies with copies of Noctua. Noctua copies synchronize their attacks with their designated ally's attacks.\n
            PAGEFLIGHT: A Dark Verse followed by a Light Verse summons Paragrimms that swoop at enemies, making them vulnerable to Status Chance and Status Damage, as well as drawing enemy attacks away from allies.`,
            'Damage Instant AOE / Buff Overguard AOE', ['Slash'])
        ],
        3,
        3,
        2,
        "https://www-static.warframe.com/images/warframes/thumbnails/dante.png"
    ),
    new Warframe(
        'Voruna',
        "2022-11-30",
        'Survival/Pity Shop',
        ['Damage Dealer'],
        [
            new Ability('Shroud of Dynar', 'Stealth', "Dynar shrouds Voruna with invisibility and accelerates her speed. Invisibility ends when Voruna attacks.", "Support Utility Stealth", []),
            new Ability('Fangs of Raksh', 'Damage', `Raksh's fangs tear into your enemies. 5 random Status Effects are applied at 10 Stacks each on an enemy. On target's death, spread the Status Effects to other nearby enemies.`, 'Damage DoT AOE', ['Impact', 'Puncture', 'Slash', 'Cold', 'Heat', 'Toxin', 'Electricity', 'Blast', 'Corrosive', 'Gas', 'Magnetic', 'Radiation', 'Viral']),
            new Ability(`Lycath's hunt`, 'Damage', ` Lycath hunts to sustain the pack. Enemies killed by melee attacks drop health orbs and enemies killed by headshots drop energy orbs.`, 'Damage Instant SingleTarget', []),
            new Ability(`Ulfrun's descent`, 'Damage', `Voruna drops to all fours and prepares 5 brutal charges that lock onto enemies.`, 'Damage Instant SingleTarget', [])
        ],
        3,
        4,
        2,
        "https://www-static.warframe.com/images/warframes/thumbnails/voruna.png"
    ),
    new Warframe(
        'Dagath',
        '2023-10-18',
        'Shop',
        ['Crowd Control', 'Damage Dealer'],
        [
            new Ability('Wyrd Scythes', 'Damage & Crowd Control', 'Wyrd Scythes surround Dagath and seek out nearby enemies.', 'Damage Instant AOE/CrowdControl SoftCC AOE', ['Viral']),
            new Ability('Doom', 'Damage', 'Condemn nearby enemies to their doom.', 'Damage Instant AOE', ['Viral']),
            new Ability('Grave Spirit', 'Buff', `Supercharge Dagath's weapons with extra Critical Damage.`, 'Buff Damage SingleTarget', []),
            new Ability(`Rakhali's Cavalry`, 'Damage & Debuff', 'Phantom Kaithes charge forth, inflicting Viral Damage upon all in their path. Their attack strips the defenses of Doomed enemies.', 'Damage Instant AOE/Debuff ArmorReduction AOE', ['Viral'])
        ],
        2,
        3,
        3,
        `https://www-static.warframe.com/images/warframes/thumbnails/dagath.png`
    ),
    new Warframe(
        'Cyte-09',
        '2024-12-13',
        'Bounties/Pity Shop',
        ['Damage Dealer', 'Support'],
        [
            new Ability('Seek', 'Debuff', `Plant an antenna that projects a forward wave scan. Detected enemies take increased Weak Point Damage, and become visible through walls.`, 'Debuff DamageVulnerability AOE', []),
            new Ability('Resupply', 'Utility', `Throw two Elemental Ammo Packs that instantly refill the active weapon's magazine, while granting the weapon an additional instance of the selected Elemental Damage and Status Effect.`, 'Utility AmmoGeneration SingleTarget', ['Heat', 'Cold', 'Electricity', 'Toxin', 'Viral', 'Corrosive', 'Gas', 'Magnetic', 'Radiation']),
            new Ability('Evade', 'Utility', `Jump backwards and become invisible for a short duration.`, 'Utility Stealth SingleTarget', []),
            new Ability('Neutralize', 'Damage', `Summon the Neutralizer, Cyte-09's exalted Sniper Rifle. Bullets ricochet off Weak Points to seek out other nearby Weak Points.`, 'Damage Instant SingleTarget', ['Cold'])
        ],
        5,
        3,
        3,
        "https://www-static.warframe.com/images/warframes/thumbnails/cyte-09.png"
    ),
    new Warframe(
        'Ember',
        '2012-10-25',
        'Assassination',
        ['Damage Dealer'],
        [
            new Ability('Fireball', 'Damage', 'Release a fiery projectile that ignites enemies on contact.', 'Damage Instant SingleTarget', ['Heat']),
            new Ability('Immolation', 'Buff', 'Protect Ember with flame armor that burns stronger over time, consuming energy once its meter is at full strength.', 'Buff Armor SingleTarget', []),
            new Ability('Fire Blast', 'Damage', 'Slam the ground to create a wave of incinerating plasma that knocks back enemies and strips their armor.', 'Damage Instant AOE', ['Heat']),
            new Ability('Inferno', 'Damage', 'Command a flaming comet to crash down in front of Ember, engulfing enemies with a fire that can spread through their ranks.', 'Damage Instant AOE', ['Heat'])
        ],
        2,
        2,
        4,
        "https://www-static.warframe.com/images/warframes/thumbnails/ember.png"
    ),
    new Warframe(
        'Xaku',
        '2020-08-25',
        'Bounties', 
        ['Crowd Control', 'Damage Dealer'],
        [
            new Ability(`Xata's Whisper`, 'Buff', 'Wield Void Damage for all attacks from equipped weapons when activated.', 'Buff Damage SingleTarget', []),
            new Ability(`Grasp of Lohk`, 'Debuff', 'Void Tendrils steal weapons from nearby enemies to use as your own floating, auto-targeting armament.', 'Debuff ForcedMovement AOE', ['Void']),
            new Ability('The Lost', 'Debuff', 'Cycle through a trio of lost Warframe powers.', 'Debuff ForcedMovement AOE/Damage Instant AOE', ['Void']),
            new Ability('The Vast Untime', 'Buff & Debuff', 'Temporarily shed the outer pieces of Xaku in a destructive blast, then stalk the battlefield in a new, swifter skeletal form.', 'Buff DamageReduction SingleTarget/Debuff DamageVulnerability AOE', ['Void'])
        ],
        3,
        4,
        2,
        "https://www-static.warframe.com/images/warframes/thumbnails/xaku.png"
    ),
    new Warframe(
        'Sevagoth', 
        '2021-04-13',
        'Void Storms',
        ['Damage Dealer', 'Support'],
        [
            new Ability('Reap', 'Damage & Debuff', `Sevagoth's Shadow flies outward ravaging enemies in his path.`, 'Damage Instant AOE/Debuff DamageVulnerability AOE', ['Radiation']),
            new Ability('Sow', 'Damage', `Plant a death seed in nearby targets to drain their lifeforce. Reap what has been sown to detonate afflicted enemies, dealing a percentage of their health as radial damage.`, 'Damage Instant AOE', ['True', 'Blast']),
            new Ability('Gloom', 'Crowd Control', `Summon a radial pulse wave that ensnares and slows enemies, siphoning their lifeforce for the Death Well.`, 'CrowdControl SoftCC AOE', []),
            new Ability('Exalted Shadow', 'Damage', `When the Death Well fills, Sevagoth's Shadow form is ready to be released. Tear the enemy asunder with a collection of melee-focused abilities.`, 'Damage Instant SingleTarget', ['Slash'])
        ],
        3,
        5,
        2,
        "https://www-static.warframe.com/images/warframes/thumbnails/sevagoth.png"
    ),
    new Warframe(
        'Styanax',
        '2022-09-27',
        'Weekly Missions',
        ['Damage Dealer', 'Support'],
        [
            new Ability('Axios Javelin', 'Damage & Crowd Control', `Throw an Axios Javelin. When the javelin impales an enemy against a wall, surrounding enemies are pulled into the area and suffer a burst of damage.`, 'Damage Instant AOE/CrowdControl ForcedMovement AOE', ['Puncture', 'Blast']),
            new Ability('Tharros Strike', 'Debuff & Buff', `Summon Tharros, the shield of Styanax. Swing Tharros to repel enemies and reduce their shields and armor. Styanax regenerates health for every enemy struck.`, 'Debuff ArmorReduction SingleTarget/InstantRegain Health SingleTarget', ['Impact']),
            new Ability('Rally Point', 'Buff', `Draw enemy attention to Styanax. His resolve uplifts him and nearby allies, regenerating the squad's energy over time. Styanax and his allies also regenerate shields for every kill assist they contribute.`, 'Regen Energy AOE/InstantRegain Shield AOE', []),
            new Ability('Final Stand', 'Damage', `Exude might and valor. Rise into the air and throw a barrage of Axios Javelins. The javelins deal damage to nearby enemies wherever they land.`, 'Damage Instant AOE', ['Slash'])
        ],
        4,
        1,
        4,
        "https://www-static.warframe.com/images/warframes/thumbnails/styanax.png"
    ),
    new Warframe(
        'Limbo',
        '2014-10-24',
        'Quest',
        ['Crowd Control', 'Support'],
        [
            new Ability('Banish', 'Crowd Control', 'Send enemies into another plane of existence for a short period of time.', 'Damage Instane AOE/CrowdControl ForcedMovement SingleTarget', ['Impact']),
            new Ability('Stasis', 'Crowd Control', 'Freeze all projectiles in the Rift.', 'CrowdControl HardCC AOE', []),
            new Ability('Rift Surge', 'Buff', 'Banished enemies that die in the Rift will release a surge that banishes other enemies.', 'Buff Damage SingleTarget', []),
            new Ability('Cataclysm', 'Crowd Control', 'Rip open a cataclysmic rift that can either banish enemies or protect allies.', 'Damage Instane AOE/CrowdControl SoftCC AOE', ['Blast'])
        ],
        1,
        5,
        2,
        "https://www-static.warframe.com/images/warframes/thumbnails/limbo.png"
    ),
    new Warframe(
        'Volt',
        '2012-10-25',
        'Starter/Dojo',
        ['Damage Dealer', 'Support'],
        [
            new Ability('Shock', 'Damage', 'Launches a shocking projectile.', 'Damage Instant SingleTarget', ['Electricity']),
            new Ability('Speed', 'Buff', 'Increases the movement speed of Volt and his allies.', 'Buff Speed SingleTarget', []),
            new Ability('Electric Shield', 'Buff', 'Deploys an obstacle of energy, providing cover in any situation.', 'Buff Damage SingleTarget', []),
            new Ability('Discharge', 'Damage', 'Paralyzes nearby hostiles with a damaging electric charge.', 'Damage Instant AOE', ['Electricity'])
        ],
        1,
        1,
        1,
        "https://www-static.warframe.com/images/warframes/thumbnails/volt.png"
    ),
    new Warframe(
        'Nidus',
        '2016-12-22',
        'Infested Salvage',
        ['Damage Dealer', 'Support'],
        [
            new Ability('Virulence', 'Damage', 'Nidus sends out a tendrils that burst from the ground, dealing damage to all enemies in its path.', 'Damage Instant AOE', ['Puncture']),
            new Ability('Larva', 'Crowd Control', 'Nidus summons a living mass of maggots to draw in enemies.', 'CrowdControl ForcedMovement AOE', []),
            new Ability('Parasitic Link', 'Buff', 'Bind to a target with a parasitic link to transfer damage taken to the host.', 'Buff Damage SingleTarget', []),
            new Ability('Ravenous', 'Damage', 'Create an aura of parasitic maggots that feed on the enemies.', 'Damage Instant AOE', ['Blast'])
        ],
        5,
        2,
        4,
        "https://www-static.warframe.com/images/warframes/thumbnails/nidus.png"
    ),
    new Warframe(
        'Jade',
        '2024-08-16',
        'Ascension/Pity Shop', 
        ['Damage Dealer', 'Support'],
        [
            new Ability(`Light's Judgement`, 'Support & Damage', 'Create a well of light that heals allies and hurts enemies. Those who enter the well will be highlighted by Judgments.', 'Regen Health AOE/Damage DoT AOE', ['Heat']),
            new Ability('Symphony of Mercy', 'Buff', 'Cycle through three songs that strengthen allies.', 'Buff Damage AOE/Buff DamageReduction AOE', []),
            new Ability('Ophanim Eyes', 'Damage & Debuff', 'Jade summons an accusatory gaze that slows nearby enemies and dissolves their Shields and Armor.', 'Damage Instant AOE/Debuff ArmorReduction AOE', ['Heat']),
            new Ability('Glory on High', 'Damage', 'Soar with destructive power. Use alternate-fire to detonate Judgments, causing an explosion of Jade Light.', 'Damage Instant AOE', ['Heat'])
        ],
        3,
        2,
        4,
        "https://www-static.warframe.com/images/warframes/thumbnails/jade.png"
    ),
    new Warframe(
        'Qorvex',
        '2023-12-13',
        'Bounties/Pity Shop',
        ['Damage Dealer', 'Support'],
        [
            new Ability('Chyrinka Pillar', 'Damage & CrowdControl', 'Summon a Chyrinka Pillar that slows enemies. It pulses Radiation Damage with a guaranteed Status Effect.', 'CrowdControl SoftCC AOE/Damage Instant AOE', ['Radiation']),
            new Ability('Containment Wall', 'Damage & CrowdControl', 'Contain the threat. Qorvex summons walls that slam together, damaging all enemies caught between them and inflicting Radiation Status.', 'CrowdControl ForcedMovement AOE/Damage Instant AOE', ['Radiation']),
            new Ability('Disometric guard', 'Buff', 'Guard yourself and nearby allies against Status Effects.', 'Buff DamageReduction AOE', []),
            new Ability('Crucible Blast', 'Damage', `Release a beam from Qorvex's Crucible Core.`, 'Damage Instant AOE', ['Radiation'])
        ],
        4,
        2,
        5,
        "https://www-static.warframe.com/images/warframes/thumbnails/qorvex.png"
    )
];