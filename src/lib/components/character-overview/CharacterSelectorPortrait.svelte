<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Character } from '$lib/data/characters';
	import { cloudinaryImage } from '$lib/utils/image';

	export let character: Character = undefined;
	const dispatch = createEventDispatcher();
</script>

<button type="button" class="character-portrait" on:click={() => dispatch('click')}>
	<div class="image-wrapper">
		<img
			class="image"
			src={cloudinaryImage(character.imagePublicId)}
			alt="Character portrait for {character.name}"
		/>
	</div>
	<span class="name">{character.name}</span>
</button>

<style>
	.character-portrait {
		--size: 128px;
		display: flex;
		flex-direction: column;
		height: var(--size);
		width: var(--size);
		margin: 0 0.5em;
		padding: 0;
		cursor: pointer;
		border: 2px solid darkgoldenrod;
		border-radius: 5px;
		overflow: hidden;
	}

	.character-portrait:hover {
		opacity: 0.6;
	}

	.image-wrapper {
		width: 100%;
		height: 80%;
	}

	.image {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.name {
		width: 100%;
		padding: 0.25em 0;
		margin: 0;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: default;
	}
</style>
