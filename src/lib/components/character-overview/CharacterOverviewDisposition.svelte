<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import StatSection from '$lib/components/StatSection.svelte';
	import CharacterStat from '$lib/components/character-overview/CharacterStat.svelte';

	export let disposition: Character['disposition'] = undefined;
</script>

<StatSection>
	<div class="container">
		<CharacterStat name="Empathy" value={disposition?.empathy} />
		<CharacterStat name="Anger" value={disposition?.anger} />
		<CharacterStat name="Morale" value={disposition?.morale} />
		<CharacterStat name="Honesty" value={disposition?.honesty} />
	</div>
</StatSection>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
