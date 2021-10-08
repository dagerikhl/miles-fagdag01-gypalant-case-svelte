<script lang="ts">
	const AVAILABLE_SKILLS: string[] = [
		'Jump-scare',
		'Sneak',
		'Steal',
		'Claws',
		'Weapons',
		'Invisibility',
		'Scary magic'
	];

	let skills: string[] = [];

	const createToggleSkillHandler = (skill: string) => () => {
		if (skills.includes(skill)) {
			const newSkills = [...skills];
			newSkills.splice(skills.indexOf(skill), 1);
			skills = newSkills;
		} else {
			skills = [...skills, skill];
		}
	};
</script>

<div class="container">
	<fieldset>
		<legend>Skills ({skills.length}/3)</legend>

		<div class="skills">
			{#each AVAILABLE_SKILLS as availableSkill (availableSkill)}
				<div class="skill">
					<label>
						<input
							type="checkbox"
							checked={skills.includes(availableSkill)}
							disabled={skills.length >= 3 && !skills.includes(availableSkill)}
							on:change={createToggleSkillHandler(availableSkill)}
						/>
						{availableSkill}
					</label>
				</div>
			{/each}
		</div>

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
	}

	.skills {
		display: flex;
		flex-direction: column;
		gap: 0.25em;
	}

	.skill {
	}
</style>
