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
        3
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
            'Damage Instant AOE', ['Slash'])
        ],
        3,
        3,
        2
    )
];
//change to add multiple categories to effect 