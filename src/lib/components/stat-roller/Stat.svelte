<script lang="ts">
	export let label: string;
	export let value: number;
</script>

<div class="stat">
	{label}: {value}
</div>

<style>
	.stat {
		display: flex;
	}
</style>
