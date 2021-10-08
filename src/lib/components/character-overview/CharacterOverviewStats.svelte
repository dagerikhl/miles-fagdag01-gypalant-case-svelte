<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import StatSection from '$lib/components/StatSection.svelte';
	import CharacterStat from '$lib/components/character-overview/CharacterStat.svelte';

	export let stats: Character['stats'] = undefined;
</script>

<StatSection>
	<div class="container">
		<CharacterStat name="Strength" value={stats?.strength} />
		<CharacterStat name="Dexterity" value={stats?.dexterity} />
		<CharacterStat name="Intelligence" value={stats?.intelligence} />
		<CharacterStat name="Charisma" value={stats?.charisma} />
	</div>
</StatSection>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
