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

	export let characters: Character[];

	let selectedCharacter: Character;
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<div class="characters">
	<h1>Characters</h1>

	<CharacterSelector {characters} bind:selected={selectedCharacter} />
	<ViewCharacter character={selectedCharacter} />
</div>

<style>
	.characters {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}
</style>
