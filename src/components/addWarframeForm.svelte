<script lang="ts">
    import { fade } from 'svelte/transition';
    import { getAvailableEffects } from '../lib/ontology';

    export let showForm = false;
    let isSubmitting = false;
    let submitMessage = '';
    let isSuccess = false;

    // Form data
    let formData = {
        name: '',
        releaseDate: '',
        acquisitionMethod: '',
        role: [] as string[],
        abilities: [
            { name: '', type: '', description: '', effect: [] as string[], statusEffect: [] as string[] },
            { name: '', type: '', description: '', effect: [] as string[], statusEffect: [] as string[] },
            { name: '', type: '', description: '', effect: [] as string[], statusEffect: [] as string[] },
            { name: '', type: '', description: '', effect: [] as string[], statusEffect: [] as string[] }
        ],
        ease_of_acquisition: 3,
        gameplay_complexity: 3,
        ease_to_nuke: 3,
        imageUrl: ''
    };

    const availableRoles = [
        'Damage Dealer',
        'Support',
        'Crowd Control',
        'Stealth',
        'Mobility',
        'Survival'
    ];

    const availableAbilityTypes = [
        'Damage',
        'Buff',
        'Debuff',
        'Crowd Control',
        'Support',
        'Utility',
        'Stealth',
        'Movement & Damage',
        'Damage & Crowd Control',
        'Damage & Debuff',
        'Buff & Debuff',
        'Damage/Buff'
    ];

    const availableStatusEffects = [
        'Slash',
        'Impact',
        'Puncture',
        'Heat',
        'Cold',
        'Electricity',
        'Toxin',
        'Blast',
        'Corrosive',
        'Gas',
        'Magnetic',
        'Radiation',
        'Viral',
        'Void',
        'True',
        'Blind',
        'Tau'
    ];

    let availableEffects: string[] = [];

    $: availableEffects = getAvailableEffects();

    function toggleRole(role: string) {
        if (formData.role.includes(role)) {
            formData.role = formData.role.filter(r => r !== role);
        } else {
            formData.role = [...formData.role, role];
        }
    }

    function toggleStatusEffect(abilityIndex: number, effect: string) {
        const ability = formData.abilities[abilityIndex];
        if (ability.statusEffect.includes(effect)) {
            ability.statusEffect = ability.statusEffect.filter(e => e !== effect);
        } else {
            ability.statusEffect = [...ability.statusEffect, effect];
        }
    }

    function toggleAbilityEffect(abilityIndex: number, effect: string) {
        const ability = formData.abilities[abilityIndex];
        if (ability.effect.includes(effect)) {
            ability.effect = ability.effect.filter(e => e !== effect);
        } else {
            ability.effect = [...ability.effect, effect];
        }
    }

    function closeForm() {
        showForm = false;
        resetForm();
    }

    function resetForm() {
        formData = {
            name: '',
            releaseDate: '',
            acquisitionMethod: '',
            role: [],
            abilities: [
                { name: '', type: '', description: '', effect: [], statusEffect: [] },
                { name: '', type: '', description: '', effect: [], statusEffect: [] },
                { name: '', type: '', description: '', effect: [], statusEffect: [] },
                { name: '', type: '', description: '', effect: [], statusEffect: [] }
            ],
            ease_of_acquisition: 3,
            gameplay_complexity: 3,
            ease_to_nuke: 3,
            imageUrl: ''
        };
        submitMessage = '';
        isSuccess = false;
    }

    async function handleSubmit() {
        // Basic validation
        if (!formData.name.trim()) {
            submitMessage = 'Warframe name is required';
            isSuccess = false;
            return;
        }

        if (!formData.releaseDate) {
            submitMessage = 'Release date is required';
            isSuccess = false;
            return;
        }

        if (!formData.acquisitionMethod.trim()) {
            submitMessage = 'Acquisition method is required';
            isSuccess = false;
            return;
        }

        if (formData.role.length === 0) {
            submitMessage = 'At least one role must be selected';
            isSuccess = false;
            return;
        }

        if (!formData.imageUrl.trim()) {
            submitMessage = 'Image URL is required';
            isSuccess = false;
            return;
        }

        // Validate abilities
        for (let i = 0; i < formData.abilities.length; i++) {
            const ability = formData.abilities[i];
            if (!ability.name.trim() || !ability.type || !ability.description.trim() || ability.effect.length === 0) {
                submitMessage = `Ability ${i + 1} is incomplete`;
                isSuccess = false;
                return;
            }
        }

        isSubmitting = true;
        submitMessage = '';

        try {
            const response = await fetch('/api/warframe/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                submitMessage = `✓ ${result.message}`;
                isSuccess = true;
                setTimeout(() => {
                    closeForm();
                    window.location.reload();
                }, 2000);
            } else {
                submitMessage = result.error || 'Failed to add warframe';
                isSuccess = false;
            }
        } catch (error) {
            submitMessage = 'Network error. Failed to submit form.';
            isSuccess = false;
        } finally {
            isSubmitting = false;
        }
    }
</script>

<style>
    .modal-overlay {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1000;
        overflow-y: auto;
        padding: 20px 0;
    }

    .modal-content {
        background: white;
        border-radius: 8px;
        padding: 30px;
        max-width: 800px;
        width: 95%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        position: relative;
    }

    .close-button {
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: #666;
        transition: color 0.3s;
    }

    .close-button:hover {
        color: #000;
    }

    h2 {
        margin-top: 0;
        color: #333;
        border-bottom: 2px solid #007BFF;
        padding-bottom: 10px;
    }

    .form-section {
        margin-bottom: 25px;
    }

    .form-section h3 {
        color: #007BFF;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 16px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        color: #333;
    }

    input[type="text"],
    input[type="date"],
    input[type="url"],
    input[type="number"],
    select,
    textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-family: inherit;
        font-size: 14px;
        box-sizing: border-box;
        transition: border-color 0.3s;
    }

    input[type="text"]:focus,
    input[type="date"]:focus,
    input[type="url"]:focus,
    input[type="number"]:focus,
    select:focus,
    textarea:focus {
        outline: none;
        border-color: #007BFF;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    }

    textarea {
        resize: vertical;
        min-height: 80px;
    }

    .checkbox-group,
    .radio-group {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 8px;
    }

    .checkbox-item,
    .radio-item {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    input[type="checkbox"],
    input[type="radio"] {
        cursor: pointer;
        width: 16px;
        height: 16px;
    }

    .checkbox-label,
    .radio-label {
        cursor: pointer;
        margin: 0;
        font-weight: normal;
    }

    .ability-container {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 15px;
        margin-bottom: 15px;
        background-color: #f9f9f9;
    }

    .ability-title {
        font-weight: bold;
        color: #007BFF;
        margin-bottom: 10px;
    }

    .rating-group {
        display: flex;
        gap: 10px;
        margin-top: 8px;
    }

    .rating-button {
        padding: 8px 12px;
        border: 1px solid #ddd;
        background: white;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.3s;
    }

    .rating-button:hover {
        background-color: #e0e0e0;
    }

    .rating-button.selected {
        background-color: #007BFF;
        color: white;
        border-color: #007BFF;
    }

    .button-group {
        display: flex;
        gap: 10px;
        margin-top: 30px;
        justify-content: flex-end;
    }

    button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s;
        font-weight: bold;
    }

    .submit-button {
        background-color: #007BFF;
        color: white;
    }

    .submit-button:hover:not(:disabled) {
        background-color: #0056b3;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
    }

    .submit-button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    .cancel-button {
        background-color: #f0f0f0;
        color: #333;
    }

    .cancel-button:hover {
        background-color: #e0e0e0;
    }

    .message {
        margin-top: 20px;
        padding: 15px;
        border-radius: 4px;
        font-weight: bold;
        text-align: center;
    }

    .success-message {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }

    .error-message {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }

    .selected-roles,
    .selected-status-effects {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: 10px;
    }

    .tag {
        display: inline-block;
        background-color: #007BFF;
        color: white;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 12px;
    }
</style>

{#if showForm}
    <div class="modal-overlay" transition:fade={{ duration: 200 }} on:click={closeForm}>
        <div class="modal-content" on:click|stopPropagation>
            <button class="close-button" on:click={closeForm}>&times;</button>

            <h2>Add New Warframe</h2>

            <!-- Basic Information -->
            <div class="form-section">
                <h3>Basic Information</h3>

                <div class="form-group">
                    <label for="name">Warframe Name *</label>
                    <input
                        type="text"
                        id="name"
                        bind:value={formData.name}
                        placeholder="e.g., Volt"
                    />
                </div>

                <div class="form-group">
                    <label for="releaseDate">Release Date *</label>
                    <input
                        type="date"
                        id="releaseDate"
                        bind:value={formData.releaseDate}
                    />
                </div>

                <div class="form-group">
                    <label for="acquisitionMethod">Acquisition Method *</label>
                    <input
                        type="text"
                        id="acquisitionMethod"
                        bind:value={formData.acquisitionMethod}
                        placeholder="e.g., Shop, Assassination, Bounties"
                    />
                </div>

                <div class="form-group">
                    <label for="imageUrl">Image URL *</label>
                    <input
                        type="url"
                        id="imageUrl"
                        bind:value={formData.imageUrl}
                        placeholder="https://example.com/image.png"
                    />
                </div>
            </div>

            <!-- Roles -->
            <div class="form-section">
                <h3>Roles *</h3>
                <div class="checkbox-group">
                    {#each availableRoles as role}
                        <div class="checkbox-item">
                            <input
                                type="checkbox"
                                id="role-{role}"
                                checked={formData.role.includes(role)}
                                on:change={() => toggleRole(role)}
                            />
                            <label for="role-{role}" class="checkbox-label">{role}</label>
                        </div>
                    {/each}
                </div>
                {#if formData.role.length > 0}
                    <div class="selected-roles">
                        {#each formData.role as role}
                            <span class="tag">{role}</span>
                        {/each}
                    </div>
                {/if}
            </div>

            <!-- Abilities -->
            <div class="form-section">
                <h3>Abilities * (4 Required)</h3>
                {#each formData.abilities as ability, index}
                    <div class="ability-container">
                        <div class="ability-title">Ability {index + 1}</div>

                        <div class="form-group">
                            <label for="ability-name-{index}">Name *</label>
                            <input
                                type="text"
                                id="ability-name-{index}"
                                bind:value={ability.name}
                                placeholder="Ability name"
                            />
                        </div>

                        <div class="form-group">
                            <label for="ability-type-{index}">Type *</label>
                            <select id="ability-type-{index}" bind:value={ability.type}>
                                <option value="">Select type...</option>
                                {#each availableAbilityTypes as type}
                                    <option value={type}>{type}</option>
                                {/each}
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="ability-description-{index}">Description *</label>
                            <textarea
                                id="ability-description-{index}"
                                bind:value={ability.description}
                                placeholder="What does this ability do?"
                            />
                        </div>

                        <div class="form-group">
                            <label>Effects * (select at least one)</label>
                            <div class="checkbox-group">
                                {#each availableEffects as effect}
                                    <div class="checkbox-item">
                                        <input
                                            type="checkbox"
                                            id="effect-{index}-{effect}"
                                            checked={ability.effect.includes(effect)}
                                            on:change={() => toggleAbilityEffect(index, effect)}
                                        />
                                        <label
                                            for="effect-{index}-{effect}"
                                            class="checkbox-label"
                                        >
                                            {effect}
                                        </label>
                                    </div>
                                {/each}
                            </div>
                            {#if ability.effect.length > 0}
                                <div class="selected-status-effects">
                                    {#each ability.effect as effect}
                                        <span class="tag">{effect}</span>
                                    {/each}
                                </div>
                            {/if}
                        </div>

                        <div class="form-group">
                            <label>Status Effects</label>
                            <div class="checkbox-group">
                                {#each availableStatusEffects as effect}
                                    <div class="checkbox-item">
                                        <input
                                            type="checkbox"
                                            id="status-{index}-{effect}"
                                            checked={ability.statusEffect.includes(effect)}
                                            on:change={() => toggleStatusEffect(index, effect)}
                                        />
                                        <label
                                            for="status-{index}-{effect}"
                                            class="checkbox-label"
                                        >
                                            {effect}
                                        </label>
                                    </div>
                                {/each}
                            </div>
                            {#if ability.statusEffect.length > 0}
                                <div class="selected-status-effects">
                                    {#each ability.statusEffect as effect}
                                        <span class="tag">{effect}</span>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>

            <!-- Difficulty Ratings -->
            <div class="form-section">
                <h3>Difficulty Ratings</h3>

                <div class="form-group">
                    <label>Ease of Acquisition (1=Easy, 5=Hard)</label>
                    <div class="rating-group">
                        {#each [1, 2, 3, 4, 5] as rating}
                            <button
                                type="button"
                                class="rating-button {formData.ease_of_acquisition === rating ? 'selected' : ''}"
                                on:click={() => (formData.ease_of_acquisition = rating)}
                            >
                                {rating}
                            </button>
                        {/each}
                    </div>
                </div>

                <div class="form-group">
                    <label>Gameplay Complexity (1=Easy, 5=Hard)</label>
                    <div class="rating-group">
                        {#each [1, 2, 3, 4, 5] as rating}
                            <button
                                type="button"
                                class="rating-button {formData.gameplay_complexity === rating ? 'selected' : ''}"
                                on:click={() => (formData.gameplay_complexity = rating)}
                            >
                                {rating}
                            </button>
                        {/each}
                    </div>
                </div>

                <div class="form-group">
                    <label>Ease to Nuke (1=Hard, 5=Easy)</label>
                    <div class="rating-group">
                        {#each [1, 2, 3, 4, 5] as rating}
                            <button
                                type="button"
                                class="rating-button {formData.ease_to_nuke === rating ? 'selected' : ''}"
                                on:click={() => (formData.ease_to_nuke = rating)}
                            >
                                {rating}
                            </button>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Submit Message -->
            {#if submitMessage}
                <div
                    class="message {isSuccess ? 'success-message' : 'error-message'}"
                    transition:fade={{ duration: 200 }}
                >
                    {submitMessage}
                </div>
            {/if}

            <!-- Action Buttons -->
            <div class="button-group">
                <button class="cancel-button" on:click={closeForm} disabled={isSubmitting}>
                    Cancel
                </button>
                <button
                    class="submit-button"
                    on:click={handleSubmit}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Adding Warframe...' : 'Add Warframe'}
                </button>
            </div>
        </div>
    </div>
{/if}
