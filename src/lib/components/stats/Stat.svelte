<script lang="ts">
	export let label: string;
	export let value: number;
</script>

<div class="stat">
	<div class="label">{label}:</div>
	<div class="value">{value}</div>
</div>

<style>
	.stat {
		display: flex;
	}

	.label {
		width: 100px;
		font-weight: bold;
	}

	.value {
		width: 24px;
		text-align: right;
	}
</style>
