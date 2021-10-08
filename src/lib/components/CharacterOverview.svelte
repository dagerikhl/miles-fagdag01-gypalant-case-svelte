<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import CharacterOverviewGeneral from '$lib/components/CharacterOverviewGeneral.svelte';
	import CharacterOverviewDisposition from '$lib/components/CharacterOverviewDisposition.svelte';
	import CharacterOverviewSkills from '$lib/components/CharacterOverviewSkills.svelte';
	import CharacterOverviewStats from '$lib/components/CharacterOverviewStats.svelte';

	export let character: Character = undefined;
</script>

{#if character !== undefined}
	<div class="character">
		<CharacterOverviewGeneral {character} />
		<CharacterOverviewDisposition disposition={character.disposition} />
		<CharacterOverviewSkills skills={character.skills} />
		<CharacterOverviewStats stats={character.stats} />
	</div>
{:else}
	<div>Select a character</div>
{/if}

<style>
</style>
