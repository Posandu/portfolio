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
			company: 'Independent',
			type: 'Freelance', 
			startDate: '2023-08',
			endDate: null,
			location: 'Remote',
			skills: ['Node.js', 'Responsive Design', 'Full Stack Development']
		},
		{
			title: 'Technical Content Creator',
			company: 'Tronic247',
			type: 'Full-time',
			startDate: '2020-04',
			endDate: null,
			location: 'Sri Lanka',
			description: 'Curate and publish comprehensive technical articles and tutorials on web development',
			skills: ['Technical Writing', 'Web Development', 'Content Strategy']
		},
		{
			title: 'Software Engineer',
			company: 'Contract Position',
			type: 'Contract',
			startDate: '2023-09',
			endDate: '2024-02',
			location: 'United States · Remote',
			skills: ['Full Stack Development', 'System Architecture', 'API Design']
		},
		{
			title: 'Software Developer',
			company: 'Realm Labs AI',
			type: 'Part-time',
			startDate: '2023-02',
			endDate: '2023-07',
			location: 'New York, United States · Remote',
			description:
				'Engineered solutions using SvelteKit and implemented AI technologies including Stable Diffusion models',
			skills: ['SvelteKit', 'AI Integration', 'Machine Learning']
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
				<strong>Expertise:</strong>
				{experience.skills.join(', ')}
			</p>
		</div>
	</div>
{/each}
