<script lang="ts">
	import type { Character } from '$lib/data/characters';

	export let skills: Character['skills'] = undefined;
</script>

<div class="container">
	{#each skills ?? [] as skill (skill)}
		{skill}
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
