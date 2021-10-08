<script lang="ts">
	import type { Dispositions } from '$lib/data/Disposition';

	const dispositions: Dispositions = { empathy: 10, anger: 10, morale: 10, honesty: 10 };
</script>

<fieldset>
	<legend>Disposition</legend>
	<label>
		Empathy <span>{dispositions.empathy}</span>
		<input
			type="range"
			bind:value={dispositions.empathy}
			name="disposition[empathy]"
			min="0"
			max="20"
		/>
	</label>
	<label>
		<span>Anger</span> <span>{dispositions.anger}</span>
		<input
			type="range"
			bind:value={dispositions.anger}
			name="disposition[anger]"
			min="0"
			max="20"
		/>
	</label>
	<label>
		Morale <span>{dispositions.morale}</span>
		<input
			type="range"
			bind:value={dispositions.morale}
			name="disposition[morale]"
			min="0"
			max="20"
		/>
	</label>
	<label>
		Honesty <span>{dispositions.honesty}</span>
		<input
			type="range"
			bind:value={dispositions.honesty}
			name="disposition[honesty]"
			min="0"
			max="20"
		/>
	</label>
</fieldset>

<style>
	fieldset {
		margin: 0;
		background: white;
		border-color: transparent;
		padding: 0.5em 1em 0.3em 1em;
		border-radius: 8px;
	}
	input[type='range'] {
		height: 31px;
		-webkit-appearance: none;
		margin: 10px 0;
		width: 100%;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 7px;
		cursor: pointer;
		box-shadow: none;
		background: var(--tertiary-color);
		border-radius: 8px;
		border: 0px solid #000000;
	}

	input:focus-visible {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	}

	input[type='range']::-webkit-slider-thumb {
		box-shadow: 0px 0px 0px #000000;
		border: 0px solid #000000;
		height: 25px;
		width: 25px;
		border-radius: 42px;
		background: var(--primary-color);
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -9px;
	}
	input[type='range']:focus::-webkit-slider-runnable-track {
		background: var(--tertiary-color);
	}
	input[type='range']::-moz-range-track {
		width: 100%;
		height: 7px;
		cursor: pointer;
		box-shadow: 0px 0px 0px #000000;
		background: var(--tertiary-color);
		border-radius: 8px;
		border: 0px solid #000000;
	}
	input[type='range']::-moz-range-thumb {
		box-shadow: 0px 0px 0px #000000;
		border: none;
		height: 25px;
		width: 25px;
		border-radius: 42px;
		background: var(--primary-color);
		cursor: pointer;
	}
</style>
