<script lang="ts">
	export let name: string = undefined;
	export let value: string = undefined;
</script>

<p class="stat">{name ?? '-'}: {value ?? '0'}</p>

<style>
	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0.125em;
	}
</style>
