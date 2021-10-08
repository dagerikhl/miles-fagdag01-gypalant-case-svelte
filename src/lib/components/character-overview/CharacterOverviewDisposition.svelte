<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import StatSection from '$lib/components/StatSection.svelte';
	import CharacterStat from '$lib/components/character-overview/CharacterStat.svelte';
	import { Spring, spring } from 'svelte/motion';

	export let disposition: Character['disposition'] = undefined;

	const display_disposition: Spring<Character['disposition']> = spring(disposition, {
		stiffness: 0.1
	});
	$: $display_disposition = disposition;
</script>

<StatSection>
	<div class="container">
		<CharacterStat name="Empathy" value={Math.round($display_disposition?.empathy ?? 0)} />
		<CharacterStat name="Anger" value={Math.round($display_disposition?.anger ?? 0)} />
		<CharacterStat name="Morale" value={Math.round($display_disposition?.morale ?? 0)} />
		<CharacterStat name="Honesty" value={Math.round($display_disposition?.honesty ?? 0)} />
	</div>
</StatSection>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
