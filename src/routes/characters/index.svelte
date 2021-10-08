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
	import type { Dispositions } from '$lib/data/Disposition';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import StatRoller from '$lib/components/stat-roller/StatRoller.svelte';

	const dispositions: Dispositions = { empathy: 10, anger: 10, morale: 10, honesty: 10 };

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
		<fieldset>
			<legend>Disposition</legend>
			<label>
				Empathy <span>{dispositions.empathy}</span>
				<input type="range" bind:value={dispositions.empathy} name="magic" min="0" max="20" />
			</label>
			<label>
				<span>Anger</span> <span>{dispositions.anger}</span>
				<input type="range" bind:value={dispositions.anger} min="0" max="20" />
			</label>
			<label>
				Morale <span>{dispositions.morale}</span>
				<input type="range" bind:value={dispositions.morale} min="0" max="20" />
			</label>
			<label>
				Honesty <span>{dispositions.honesty}</span>
				<input type="range" bind:value={dispositions.honesty} min="0" max="20" />
			</label>
		</fieldset>
		<StatRoller />
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

	fieldset {
		margin: 0;
		background: white;
		border-color: transparent;
		padding: 0.5em 1em 0.3em 1em;
		border-radius: 8px;
	}

	input:focus-visible {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	}
	input[type='range'] {
		height: 31px;
		-webkit-appearance: none;
		margin: 10px 0;
		width: 100%;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 7px;
		cursor: pointer;
		box-shadow: none;
		background: var(--tertiary-color);
		border-radius: 8px;
		border: 0px solid #000000;
	}
	input[type='range']::-webkit-slider-thumb {
		box-shadow: 0px 0px 0px #000000;
		border: 0px solid #000000;
		height: 25px;
		width: 25px;
		border-radius: 42px;
		background: var(--primary-color);
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -9px;
	}
	input[type='range']:focus::-webkit-slider-runnable-track {
		background: var(--tertiary-color);
	}
	input[type='range']::-moz-range-track {
		width: 100%;
		height: 7px;
		cursor: pointer;
		box-shadow: 0px 0px 0px #000000;
		background: var(--tertiary-color);
		border-radius: 8px;
		border: 0px solid #000000;
	}
	input[type='range']::-moz-range-thumb {
		box-shadow: 0px 0px 0px #000000;
		border: none;
		height: 25px;
		width: 25px;
		border-radius: 42px;
		background: var(--primary-color);
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
