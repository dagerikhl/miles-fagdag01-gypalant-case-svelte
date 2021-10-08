<script lang="ts">
	import type { Character } from '$lib/data/characters';

	export let character: Character = undefined;
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<div class="character">
	{character?.name ?? 'none selected'}
</div>

<style>
</style>
