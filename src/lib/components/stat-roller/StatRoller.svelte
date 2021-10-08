<script lang="ts">
	import type { Stats } from '$lib/data/Stats';
	import { spring } from 'svelte/motion';
	import dice from './dice.svg';
	import Stat from './Stat.svelte';

	let stats: Stats = { strength: 10, dexterity: 10, intelligence: 10, charisma: 10 };

	const display_stats = spring(stats, { stiffness: 0.085 });
	$: $display_stats = stats;

	$: strength = Math.round($display_stats.strength);
	$: dexterity = Math.round($display_stats.dexterity);
	$: intelligence = Math.round($display_stats.intelligence);
	$: charisma = Math.round($display_stats.charisma);

	const rollStat = () => Math.round(Math.random() * 15 + 3);

	const rollStats = () => {
		for (const stat of Object.keys(stats)) {
			stats[stat] = rollStat();
		}
	};
</script>

<div class="container">
	<button class="roller" type="button" on:click={() => rollStats()} aria-label="Randomize stats">
		<img src={dice} alt="Dice" />
		Randomize stats!
	</button>

	<fieldset>
		<legend>Stats (total {Object.values(stats).reduce((res, cur) => res + cur, 0)})</legend>

		<div class="stats">
			<Stat label="Strength" value={strength} />
			<Stat label="Dexterity" value={dexterity} />
			<Stat label="Intelligence" value={intelligence} />
			<Stat label="Charisma" value={charisma} />
		</div>

		<input name="stats[strength]" type="number" hidden value={strength} />
		<input name="stats[dexterity]" type="number" hidden value={strength} />
		<input name="stats[intelligence]" type="number" hidden value={intelligence} />
		<input name="stats[charisma]" type="number" hidden value={charisma} />
	</fieldset>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 0.5em;
		margin: 0.5em 0;
		padding: 0.5em 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.roller {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
		padding: 0.5em;
		border-radius: 8px;
		background-color: #f7f7f7;
		font-size: 1.25rem;
		cursor: pointer;
	}

	.roller:hover {
		background-color: #f2f2f2;
	}

	.roller img {
		height: 48px;
		width: 48px;
	}

	.stats {
		display: flex;
		flex-direction: column;
		gap: 0.25em;
	}
</style>
