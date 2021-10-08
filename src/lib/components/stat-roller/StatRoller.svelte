<script lang="ts">
	import type { Stats } from '$lib/data/Stats';
	import { spring } from 'svelte/motion';
	import dice from './dice.svg';

	let stats: Stats = { strength: 10, dexterity: 10, intelligence: 10, charisma: 10 };

	const display_stats = spring(stats, { stiffness: 0.1 });
	$: $display_stats = stats;

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
		<label>
			Strength
			<input type="number" min="3" max="18" value={Math.round($display_stats.strength)} disabled />
		</label>
		<label>
			Dexterity
			<input type="number" min="3" max="18" value={Math.round($display_stats.dexterity)} disabled />
		</label>
		<label>
			Intelligence
			<input
				type="number"
				min="3"
				max="18"
				value={Math.round($display_stats.intelligence)}
				disabled
			/>
		</label>
		<label>
			Charisma
			<input type="number" min="3" max="18" value={Math.round($display_stats.charisma)} disabled />
		</label>
	</fieldset>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
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
</style>
