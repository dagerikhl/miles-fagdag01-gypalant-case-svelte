<script lang="ts">
	import type { Character } from '$lib/data/characters';

	export let stats: Character['stats'] = undefined;
</script>

<div class="container">
	<p>Strength: {stats?.strength ?? '-'}</p>
	<p>Dexterity: {stats?.dexterity ?? '-'}</p>
	<p>Intelligence: {stats?.intelligence ?? '-'}</p>
	<p>Charisma: {stats?.charisma ?? '-'}</p>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
