<script lang="ts">
	import { normal } from 'color-blend';

	export let tint: string = undefined;

	const rgbaToStr = ({ r, g, b, a }: { r: number; g: number; b: number; a: number }): string => {
		return `rgba(${r}, ${g}, ${b}, ${a})`;
	};
	const fromStrToRgba = (rgba: string): { r: number; g: number; b: number; a: number } => {
		const str = rgba.replace('rgba(', '').replace(')', '');
		const arr = str.split(',').map((str) => +str.trim());
		return {
			r: arr[0],
			g: arr[1],
			b: arr[2],
			a: 0.3
		};
	};

	const getBackground = (tintBg: string): string => {
		const background = { r: 277, g: 277, b: 277, a: 1 };
		if (!tintBg) {
			return rgbaToStr(background);
		}
		return rgbaToStr(normal(background, fromStrToRgba(tint)));
	};
</script>

<div class="section" style="background: {getBackground(tint)}">
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
