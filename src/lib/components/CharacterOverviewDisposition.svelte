<script lang="ts">
	import type { Character } from '$lib/data/characters';

	export let disposition: Character['disposition'] = undefined;
</script>

<div class="container">
	<p>Empathy: {disposition?.empathy ?? '-'}</p>
	<p>Anger: {disposition?.anger ?? '-'}</p>
	<p>Morale: {disposition?.morale ?? '-'}</p>
	<p>Honesty: {disposition?.honesty ?? '-'}</p>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
