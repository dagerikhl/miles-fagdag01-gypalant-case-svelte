<script lang="ts">
	import { normal } from 'color-blend';
	import { spring, Spring } from 'svelte/motion';

	export let tint: { r: number; g: number; b: number; a: number } = undefined;

	const rgbaToStr = ({ r, g, b, a }: { r: number; g: number; b: number; a: number }): string => {
		return `rgba(${r}, ${g}, ${b}, ${a})`;
	};

	const getBackground = (tintBg: { r: number; g: number; b: number; a: number }): string => {
		const background = { r: 277, g: 277, b: 277, a: 1 };
		if (!tintBg) {
			return rgbaToStr(background);
		}
		return rgbaToStr(normal(background, tintBg));
	};

	const display_background: Spring<{ r: number; g: number; b: number; a: number }> = spring(tint, {
		stiffness: 0.1
	});
	$: $display_background = tint;
</script>

<div class="section" style="background: {getBackground($display_background)}">
	<slot />
</div>

<style>
	.section {
		width: 100%;
		height: 100%;
		padding: 0.25em;
		border: 1px solid darkgoldenrod;
		border-radius: 5px;
	}
</style>
