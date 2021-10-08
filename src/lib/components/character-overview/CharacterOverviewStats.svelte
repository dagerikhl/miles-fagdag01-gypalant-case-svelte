<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import StatSection from '$lib/components/StatSection.svelte';
	import CharacterStat from '$lib/components/character-overview/CharacterStat.svelte';
	import { spring } from 'svelte/motion';

	export let stats: Character['stats'] = undefined;
	export let tint: string = undefined;

	const display_stats = spring(stats, { stiffness: 0.1 });
	$: $display_stats = stats;
</script>

<StatSection {tint}>
	<div class="container">
		<CharacterStat name="Strength" value={Math.round($display_stats?.strength ?? 0)} />
		<CharacterStat name="Dexterity" value={Math.round($display_stats?.dexterity ?? 0)} />
		<CharacterStat name="Intelligence" value={Math.round($display_stats?.intelligence ?? 0)} />
		<CharacterStat name="Charisma" value={Math.round($display_stats?.charisma ?? 0)} />
	</div>
</StatSection>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
