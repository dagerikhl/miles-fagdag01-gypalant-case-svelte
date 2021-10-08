<script lang="ts">
	import type { Character } from '$lib/data/characters';
	import StatSection from '$lib/components/StatSection.svelte';
	import { cloudinaryImage } from '$lib/utils/image';
	export let character: Character = undefined;
	export let tint: { r: number; g: number; b: number; a: number } = undefined;
</script>

<StatSection {tint}>
	<div class="container">
		<h2>{character?.name}</h2>
		<div class="image-wrapper">
			<img
				class="image"
				src={cloudinaryImage(character.imagePublicId)}
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

	.image-wrapper {
		height: 128px;
		width: 128px;
	}

	.image {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.image {
		width: 100%;
	}
</style>
