<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import CharacterSelectorPortrait from '$lib/components/character-overview/CharacterSelectorPortrait.svelte';
	import StatSection from '$lib/components/StatSection.svelte';
	import { cloudinaryImage } from '$lib/utils/image';
	import FastAverageColor from 'fast-average-color';
	const fac = new FastAverageColor();

	export let selected: Character = undefined;
	export let selectedTint: { r: number; g: number; b: number; a: number } = undefined;
	export let characters: Character[] = [];

	const select = (character: Character) => {
		selected = character;
		getImageAverageColor(character).then((value: any) => {
			selectedTint = fromStrToRgba(value.rgba);
		});
	};

	const getImageAverageColor = async (character: Character): Promise<string> => {
		if (character?.imagePublicId) {
			return fac.getColorAsync(cloudinaryImage(character.imagePublicId));
		}
	};

	const fromStrToRgba = (rgba: string): { r: number; g: number; b: number; a: number } => {
		const str = rgba?.replace('rgba(', '').replace(')', '') ?? '';
		const arr = str.split(',').map((str) => +str.trim());
		return {
			r: arr[0],
			g: arr[1],
			b: arr[2],
			a: 0.3
		};
	};
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
