<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import StatSection from '$lib/components/StatSection.svelte';

	export let character: Character = undefined;
</script>

<StatSection>
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
</StatSection>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.image-container {
		height: 128px;
		width: 128px;
	}

	.image {
		width: 100%;
	}
</style>
