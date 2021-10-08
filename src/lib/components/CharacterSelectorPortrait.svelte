<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Character } from '$lib/data/characters';

	export let character: Character = undefined;
	const dispatch = createEventDispatcher();
</script>

<button type="button" class="character-portrait" on:click={() => dispatch('click')}>
	<img
		class="character-image"
		src="https://pbs.twimg.com/profile_images/1092451626781163523/0YzJMi-8.jpg"
		alt="Character portrait for {character.name}"
	/>
	<span class="character-name">{character.name}</span>
</button>

<style>
	.character-portrait {
		--size: 128px;
		position: relative;
		height: var(--size);
		width: var(--size);
		margin: 0 0.5em;
		padding: 0;
		cursor: pointer;
	}

	.character-portrait:hover {
		position: relative;
		opacity: 0.6;
	}

	.character-image {
		width: 100%;
	}

	.character-name {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		padding: 0.25em 0;
		margin: 0;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		background: rgba(255, 255, 255, 0.4);
		cursor: default;
	}
</style>
