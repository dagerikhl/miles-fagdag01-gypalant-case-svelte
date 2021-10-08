<script lang="ts">
	import type { Stats } from '$lib/data/Stats';
	import Stat from './Stat.svelte';

	export let stats: Stats;
</script>

<div class="stats-view">
	<Stat label="Strength" value={stats.strength} />
	<Stat label="Dexterity" value={stats.dexterity} />
	<Stat label="Intelligence" value={stats.intelligence} />
	<Stat label="Charisma" value={stats.charisma} />
</div>

<style>
	.stats-view {
		display: flex;
		flex-direction: column;
		gap: 0.25em;
	}
</style>
