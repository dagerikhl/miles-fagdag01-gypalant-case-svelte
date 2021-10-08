<script context="module" lang="ts">
	import { enhance } from '$lib/functions/form';
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
	import StatRoller from '$lib/components/stat-roller/StatRoller.svelte';
	import SkillsPicker from '$lib/components/skills-picker/SkillsPicker.svelte';
	import Disposition from '$lib/components/Disposition.svelte';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let characters: Character[];

	async function patch(res: Response) {
		const character = await res.json();

		characters = characters.map((c) => {
			if (c.uid === character.uid) return character;
			return c;
		});
	}
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<div class="characters">
	<h1>Add new character</h1>

	<form
		class="new"
		action="/characters.json"
		method="post"
		use:enhance={{
			result: async (res, form) => {
				const created = await res.json();
				characters = [...characters, created];

				form.reset();
			}
		}}
	>
		<label>
			Name
			<input name="name" autocomplete="off" />
		</label>
		<label>
			Public image id
			<input name="imagePublicId" autocomplete="off" />
		</label>
		<Disposition />
		<StatRoller />
		<SkillsPicker />

		<button class="submit">I'm done!</button>
	</form>
</div>

<style>
	.characters {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}

	.new {
		margin: 0 0 0.5rem 0;
		display: flex;
		flex-direction: column;
		grid-gap: clamp(0.9rem, 1vw + 1rem, 2.2rem);
	}

	.submit {
		background-color: var(--accent-color);
		padding: 0.7em 2em 0.7em 2em;
		border-radius: 8px;
		border: 1px solid transparent;
		width: 10rem;
		align-self: end;
		/* Jada, jada... */
		margin-top: 2rem;
	}

	input {
		border: 1px solid transparent;
	}

	input:focus-visible {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	}

	button {
		cursor: pointer;
	}
	.new input {
		font-size: 28px;
		width: 100%;
		padding: 0.5em 1em 0.3em 1em;
		box-sizing: border-box;
		/* 	background: rgba(255, 255, 255, 0.05); */
		border-radius: 8px;
		text-align: center;
	}
</style>
