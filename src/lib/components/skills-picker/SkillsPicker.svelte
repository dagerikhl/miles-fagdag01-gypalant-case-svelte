<script lang="ts">
	let skills: string[] = [];
</script>

<div class="container">
	<fieldset>
		<legend>Skills</legend>

		<div>{skills.join(',')}</div>

		<input name="skills" hidden value={skills.join(',')} />
	</fieldset>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 0.5em;
		margin: 0.5em 0;
		padding: 0.5em 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
</style>
