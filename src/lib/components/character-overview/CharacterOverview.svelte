<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import CharacterOverviewGeneral from '$lib/components/character-overview/CharacterOverviewGeneral.svelte';
	import CharacterOverviewDisposition from '$lib/components/character-overview/CharacterOverviewDisposition.svelte';
	import CharacterOverviewSkills from '$lib/components/character-overview/CharacterOverviewSkills.svelte';
	import CharacterOverviewStats from '$lib/components/character-overview/CharacterOverviewStats.svelte';

	export let character: Character = undefined;
</script>

<div class="container">
	{#if character !== undefined}
		<div class="character">
			<div class="general"><CharacterOverviewGeneral {character} /></div>
			<div class="disposition">
				<CharacterOverviewDisposition disposition={character.disposition} />
			</div>
			<div class="stats"><CharacterOverviewStats stats={character.stats} /></div>
			<div class="skills"><CharacterOverviewSkills skills={character.skills} /></div>
		</div>
	{:else}
		<span>Select a character</span>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		margin-top: 0.25em;
	}
	.character {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-gap: 3px;
	}
	.general {
		grid-area: 1 / 1 / 3 / 2;
	}
	.disposition {
		grid-area: 1 / 2 / 2 / 2;
	}
	.stats {
		grid-area: 2 / 2 / 3 / 2;
	}
	.skills {
		grid-area: 3 / 1 / 4 / 3;
	}
</style>
