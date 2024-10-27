<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Experience {
		title: string;
		company: string;
		type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
		startDate: string; // YYYY-MM
		endDate: string | null; // YYYY-MM or null for present
		location: string;
		description?: string;
		skills: string[];
	}

	const experiences: Experience[] = [
		{
			title: 'Full Stack Developer',
			company: 'Freelance',
			type: 'Freelance',
			startDate: '2023-08',
			endDate: null,
			location: 'Remote',
			skills: ['Node.js', 'Responsiveness']
		},
		{
			title: 'Technical Writer',
			company: 'Tronic247',
			type: 'Full-time',
			startDate: '2020-04',
			endDate: null,
			location: 'Sri Lanka',
			description: 'Tronic247 is a blog where I write articles',
			skills: ['Node.js', 'Responsiveness']
		},
		{
			title: 'Full Stack Developer',
			company: 'Contract',
			type: 'Contract',
			startDate: '2023-09',
			endDate: '2024-02',
			location: 'United States · Remote',
			skills: ['Node.js', 'Responsiveness']
		},
		{
			title: 'Full Stack Developer',
			company: 'Realm Labs AI',
			type: 'Part-time',
			startDate: '2023-02',
			endDate: '2023-07',
			location: 'New York, United States · Remote',
			description:
				'Worked with Sveltekit and I learned about some AI things like stable diffusion.',
			skills: ['Node.js', 'Responsiveness']
		}
	];
</script>

{#each experiences as experience}
	<div
		class="flex flex-col md:flex-row items-start md:items-center border rounded-xl p-6 border-base-300/60 bg-base-200 backdrop-blur-md mb-6 shadow-lg"
	>
		<div class="flex-1">
			<h3 class="text-lg font-bold mb-1">
				{experience.title} at {experience.company}
			</h3>
			<p class="text-sm text-base-content/70 mb-2">
				{experience.startDate} - {experience.endDate ? experience.endDate : 'Present'}
			</p>
			<p class="text-sm text-base-content/70 mb-2">{experience.location}</p>
			{#if experience.description}
				<p class="text-sm text-base-content/80 mb-2">{experience.description}</p>
			{/if}
			<p class="text-sm text-base-content/80">
				<strong>Skills:</strong>
				{experience.skills.join(', ')}
			</p>
		</div>
	</div>
{/each}
