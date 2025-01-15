<script lang="ts">
    import {onMount} from 'svelte';

    let criteria: { abilities: string[], acquisition: number, complexity: number, nuke: number } = {
        abilities: [],
        acquisition: 0,
        complexity: 0,
        nuke: 0
    };
    let results: any[] = [];

    let supportTags = [
        'AOE Energy regen',
        'Single-target Energy regen',
        'AOE Health regen',
        'Single-target Health regen',
        'AOE Shield regen',
        'Single-target Shield regen',
        'AOE Instant regain energy',
        'Single-target Instant regain energy',
        'AOE Instant regain health',
        'Single-target Instant regain health',
        'AOE Instant regain shield',
        'Single-target Instant regain shield',
        'AOE Damage buff',
        'Single-target Damage buff',
        'AOE Damage reduction buff',
        'Single-target Damage reduction buff',
        'AOE Overguard buff',
        'Single-target Overguard buff',
        'AOE Max health buff',
        'Single-target Max health buff',
        'Stealth',
        'Loot generation',
        'Ammo generation',
        'AOE Armor Reduction debuff',
        'Single-target Armor Reduction debuff',
        'AOE Damage Vulnerability debuff',
        'Single-target Damage Vulnerability debuff',
    ]

    let damageTags = [
        'AOE DoT Damage',
        'Single-target DoT Damage',
        'AOE Instant Damage',
        'Single-target Instant Damage',
    ]

    let ccTags = [
        'AOE HardCC',
        'Single-target HardCC',
        'AOE SoftCC',
        'Single-target SoftCC',
        'AOE Forced Movement',
        'Single-target Forced Movement',
    ]

    let showSupportTags = true;
    let showDamageTags = true;
    let showCCTags = true;
    let showDifficulty = true;

    async function search() {
        // console.log(criteria);
        const res = await fetch('./api/warframe/filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(criteria)
        })
        results = await res.json();
    }

    function toggleTag(tag: string) {
        if (criteria.abilities.includes(tag)) {
            criteria.abilities = criteria.abilities.filter(t => t !== tag);
        } else {
            criteria.abilities = [...criteria.abilities, tag];
        }
    }

    function removeTag(tag: string) {
        criteria.abilities = criteria.abilities.filter(t => t !== tag);
    }

    function resetCriteria() {
        criteria = {
            abilities: [],
            acquisition: 0,
            complexity: 0,
            nuke: 0
        };
    }

    onMount(async () => {
        const res = await fetch('/api/warframe');
        results = await res.json();
    });

</script>

<style>
    .tag {
        display: inline-block;
        background: #eee;
        border-radius: 3px;
        padding: 5px;
        margin: 3px;
        cursor: pointer;
    }
    .tag:hover {
        background: #ccc;
    }
    button.active {
        background-color: #007BFF;
        color: white;
    }
    label {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        border: 1px solid #ccc;
        border-radius: 50%;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
    }
    input[type="radio"]:checked + label {
        background-color: #007BFF;
        color: white;
        border-color: #007BFF;
    }
    button {
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px 15px;
        margin: 5px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
    }
    button:hover {
        background-color: #979797;
        transform: scale(1.05);
    }
    button:active {
        background-color: #d0d0d0;
        transform: scale(1);
    }
    .search-summary {
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .search-summary span {
        display: inline-block;
        margin-right: 10px;
        font-weight: bold;
    }
    .collapsible {
        cursor: pointer;
        padding: 10px;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        background-color: #f1f1f1;
        margin: 5px 0;
        display: flex;
        align-items: center;
    }
    .collapsible::after {
        content: '\25BC';
        font-size: 12px;
        margin-left: auto;
        transition: transform 0.3s;
    }
    .collapsible.active::after {
        transform: rotate(180deg);
    }
    .content {
        padding: 0 18px;
        display: none;
        overflow: hidden;
        background-color: #f9f9f9;
    }
    /* .content.show {
        display: block;
    } */
</style>

<div>
    <h2>Search Warframe</h2>
    <div>
        <h3>Search Summary</h3>
        <div class="search-summary">
            <div>
                {#each criteria.abilities as ability}
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <span class="tag" on:click={() => removeTag(ability)}>{ability} ✕</span>
                {/each}
                <span>Acquisition: {criteria.acquisition}</span>
                <span>Complexity: {criteria.complexity}</span>
                <span>Nuke: {criteria.nuke}</span>
            </div>
            <div>
                <button on:click={search}>🔎︎ Search</button>
                <button on:click={resetCriteria}>↺ Reset</button>
            </div>
        </div>
    </div>
    <div>
        <button class="collapsible {showSupportTags ? 'active' : ''}" on:click={() => showSupportTags = !showSupportTags}>Support Tags</button>
        <div class:content={showSupportTags}>
            {#each supportTags as tag}
                <button
                    class:active={criteria.abilities.includes(tag)}
                    on:click={() => toggleTag(tag)}>
                    {tag}
                </button>
            {/each}
        </div>
    </div>
    <div>
        <button class="collapsible {showDamageTags ? 'active' : ''}" on:click={() => showDamageTags = !showDamageTags}>Damage Tags</button>
        <div class:content={showDamageTags}>
            {#each damageTags as tag}
                <button
                    class:active={criteria.abilities.includes(tag)}
                    on:click={() => toggleTag(tag)}>
                    {tag}
                </button>
            {/each}
        </div>
    </div>
    <div>
        <button class="collapsible {showCCTags ? 'active' : ''}" on:click={() => showCCTags = !showCCTags}>Crowd Control Tags</button>
        <div class:content={showCCTags}>
            {#each ccTags as tag}
                <button
                    class:active={criteria.abilities.includes(tag)}
                    on:click={() => toggleTag(tag)}>
                    {tag}
                </button>
            {/each}
        </div>
    </div>
    <div>
        <button class="collapsible {showDifficulty ? 'active' : ''}" on:click={() => showDifficulty = !showDifficulty}>Difficulty Levels</button>
        <div class:content={showDifficulty}>
            <h4>Acquisition Difficulty</h4>
            {#each [1, 2, 3, 4, 5] as level}
                <input
                    type="radio"
                    name="acquisition"
                    id="acq-{level}"
                    bind:group={criteria.acquisition}
                    value={level} />
                <label for="acq-{level}">{level}</label>
            {/each}
            <h4>Gameplay Complexity</h4>
            {#each [1, 2, 3, 4, 5] as level}
                <input
                    type="radio"
                    name="complexity"
                    id="cmp-{level}"
                    bind:group={criteria.complexity}
                    value={level} />
                <label for="cmp-{level}">{level}</label>
            {/each}
            <h4>Ease to Nuke</h4>
            {#each [1, 2, 3, 4, 5] as level}
                <input
                    type="radio"
                    name="nuke"
                    id="nuke-{level}"
                    bind:group={criteria.nuke}
                    value={level} />
                <label for="nuke-{level}">{level}</label>
            {/each}
        </div>
    </div>
</div>

<div>
    <h3>Results</h3>
    <ul>
        {#each results as result}
            <li>{result.name} - Roles: {result.role.join(', ')}</li>
            <!-- little cards for display with click function (modal ?) -->
        {/each}
    </ul>
</div>