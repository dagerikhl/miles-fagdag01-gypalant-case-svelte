<script lang="ts">
	import type { Character } from '$lib/data/characters';

	export let selected: Character = undefined;
	export let characters: Character[] = [];
	const select = (character: Character) => (selected = character);
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<div class="character-list">
	{#each characters as character (character.uid)}
		<button type="button" class="character-portrait" on:click={select(character)}>
			<img
				class="character-image"
				src="https://pbs.twimg.com/profile_images/1092451626781163523/0YzJMi-8.jpg"
				alt="Character portrait for {character.name}"
			/>
			<span class="character-name">{character.name}</span>
		</button>
	{/each}
</div>

<style>
	.character-list {
		width: 100%;
		display: flex;
		justify-content: center;
	}

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
