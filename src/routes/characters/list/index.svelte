<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/characters.json');

		if (res.ok) {
			const characters = await res.json();

			return {
				props: { characters }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import CharacterSelector from '$lib/components/character-overview/CharacterSelector.svelte';
	import ViewCharacter from '$lib/components/character-overview/CharacterOverview.svelte';
	import { cloudinaryImage } from '$lib/utils/image';
	import FastAverageColor from 'fast-average-color';

	const fac = new FastAverageColor();

	export let characters: Character[];
	let selectedCharacter: Character;

	const getImageAverageColor = async (character: Character): Promise<string> => {
		if (character?.imagePublicId) {
			return fac.getColorAsync(cloudinaryImage(character.imagePublicId));
		}
	};
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<div class="characters">
	<h1>Characters</h1>

	<CharacterSelector {characters} bind:selected={selectedCharacter} />
	{#await getImageAverageColor(selectedCharacter)}
		<ViewCharacter character={selectedCharacter} />
	{:then averageColor}
		<ViewCharacter character={selectedCharacter} characterTint={averageColor?.rgba} />
	{/await}
</div>

<style>
	.characters {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}
</style>
