<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import CharacterSelectorPortrait from '$lib/components/character-overview/CharacterSelectorPortrait.svelte';
	import StatSection from '$lib/components/StatSection.svelte';

	export let selected: Character = undefined;
	export let characters: Character[] = [];
	const select = (character: Character) => (selected = character);
</script>

<StatSection>
	<div class="character-list">
		{#each characters as character (character.uid)}
			<CharacterSelectorPortrait {character} on:click={select(character)} />
		{/each}
	</div>
</StatSection>

<style>
	.character-list {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
