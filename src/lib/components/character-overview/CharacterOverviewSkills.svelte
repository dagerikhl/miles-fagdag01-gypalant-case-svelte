<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import StatSection from '$lib/components/StatSection.svelte';

	export let skills: Character['skills'] = undefined;
</script>

<StatSection>
	<div class="container">
		{#each skills ?? [] as skill (skill)}
			<div>
				{skill}
			</div>
		{/each}
	</div>
</StatSection>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
