<script lang="ts">
    import {onMount} from 'svelte';

    let criteria = {
        abilities: [],
        acquisition: 0,
        complexity: 0,
        nuke: 0
    };
    let results: any[] = [];

    async function search() {
        console.log(criteria);
        const res = await fetch('./api/warframe/filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(criteria)
        })
        results = await res.json();
    }

    onMount(async () => {
        const res = await fetch('/api/warframe');
        results = await res.json();
    });

</script>

<div>
    <h2>Search Warframe</h2>
    <div>
        <label for="abilities">Abilities :</label>
        <input id="abilities" bind:value={criteria.abilities} type="text" placeholder="e.g., Damage, Buff" />
        <!-- tags à sélectionner, menu dropdown ou autres -->
    </div>
    <div>
        <label for="acquisition">Acquisition difficulty :</label>
        <input id="acquisition" bind:value={criteria.acquisition} type="number" min="1" max="5" />
        <!-- slider -->
    </div>
    <div>
        <label for="complexity">Gameplay complexity :</label>
        <input id="complexity" bind:value={criteria.complexity} type="number" min="1" max="5" />
        <!-- slider -->
    </div>
    <div>
        <label for="nuke">Ease to nuke :</label>
        <input id="nuke" bind:value={criteria.nuke} type="number" min="1" max="5" />
        <!-- slider -->
    </div>

    <button on:click={search}>Search</button>
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