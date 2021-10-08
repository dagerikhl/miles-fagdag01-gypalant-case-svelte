<script lang="ts">
	import type { Character } from '$lib/data/characters';

	export let character: Character = undefined;
</script>

<div class="container">
	<h2>{character.name}</h2>
	<div class="image-container">
		<img
			class="image"
			src="https://pbs.twimg.com/profile_images/1092451626781163523/0YzJMi-8.jpg"
			alt="Character portrait for {character.name}"
		/>
	</div>
</div>

<style>
</style>
