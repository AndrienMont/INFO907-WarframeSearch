<script lang='ts'>
    import {fade} from 'svelte/transition';
    import type { Warframe } from '../class/warframeClass.js';
    export let showModal = false;
    export let warframe: Warframe | null = null;
    export let onClose = () => {};
    
    function closeModal(){
        showModal = false;
        warframe = null;
        onClose();
    }

    function translateRating(rating: number){
        switch(rating){
            case 1:
                return 'Very Easy';
            case 2:
                return 'Easy';
            case 3:
                return 'Moderate';
            case 4:
                return 'Hard';
            case 5:
                return 'Very Hard';
            default:
                return 'Unknown';
        }
    }
</script>

<style>
    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
        display: flex;
        flex-direction: row;
        background: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 500px;
        width: 100%;
        position: relative;
    }
    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        color: red;
        font-size: 1.5em;
        cursor: pointer;
    }
    .modal-image {
        flex: 1;
        margin-right: 20px;
    }
    .modal-text {
        flex: 2;
    }
</style>

{#if showModal && warframe}
    <div class="modal" transition:fade={{duration: 200}} on:click={closeModal}>
        <div class="modal-content" on:click|stopPropagation>
            <button class="close-button" on:click={closeModal}>&times;</button>
            <div class="modal-image">
                <img src={warframe.imageUrl} alt={warframe.name} style="width: 100%; height: auto;">
            </div>
            <div class="modal-text">
                <h2>{warframe.name}</h2>
                <p><strong>Release Date:</strong> {warframe.releaseDate}</p>
                <p><strong>Acquisition Method:</strong> {warframe.acquisitionMethod}</p>
                <p><strong>Role:</strong> {warframe.role.join(', ')}</p>
                <p><strong>Ease of Acquisition:</strong> {translateRating(warframe.ease_of_acquisition)}</p>
                <p><strong>Gameplay Complexity:</strong> {translateRating(warframe.gameplay_complexity)}</p>
                <p><strong>Ease to Nuke:</strong> {translateRating(warframe.ease_to_nuke)}</p>
                <h3>Abilities</h3>
                <ul>
                    {#each warframe.abilities as ability}
                        <li>{ability.name}: {ability.description}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
{/if}