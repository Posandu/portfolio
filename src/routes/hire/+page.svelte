<script lang="ts">
	import Experience from '../Experience.svelte';
	import SvelteSeo from 'svelte-seo';

	const refs = [
		{
			name: 'Will Yoo - Realm labs',
			text: `I've worked with top engineers from the classic well regarded places. FANG, Stanford, Ivy League. I've seen the entire spectrum in private market tech - from startups to unicorn company to top defi protocols. I'll say Posandu is among the most reliable, talented, and high integrity of people I've ever worked with. You'd be lucky to have him anywhere near your projects.`
		},
		{
			name: 'Yashash Pugalia',
			text: `Posandu is an incredibly talented developer. I've had the pleasure
		of collaborating with him on several projects, and I'm always impressed by
		his knowledge and skillset. I have no doubt he'll continue to excel in his
		future endeavours.`
		},
		{
			name: 'Zach Hopkins - Digital Kinetics',
			text: "As an IT Manager and Business Owner, I've hired many developers over the years, but Posandu truly stands out. I hired Posandu to complete an entire suite of custom management tools for a private company (CRM, Ticket Management, etc). His ability to quickly grasp complex project requirements and deliver effective solutions with minimal oversight is a breath of fresh air in the dev community. He consistently produces quality code that works seamlessly. He is easily my top choice for future development projects."
		}
	];
</script>

<SvelteSeo title="Posandu Mapa - Hire me" />

<h2 class="mb-8 text-2xl font-semibold">Hire me</h2>

<p class="mb-8">
	I'm available for part-time or contract work. Below are some references from people I've worked
	with.
</p>

{#each refs as item}
	<div class="card bg-base-200 mb-4">
		<div class="card-body">
			<h2 class="card-title">{item.name}</h2>
			<p class="mt-2">{item.text}</p>
		</div>
	</div>
{/each}

<p class="mb-4 text-lg">Experience</p>

<Experience />

<a href="/#contact" class="btn btn-primary">Contact me</a>
<a href="https://read.cv/posandu" class="btn btn-primary" target="_blank">View CV</a>
