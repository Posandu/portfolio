<script lang="ts">
	import Icon from "@iconify/svelte";
	import { onDestroy } from "svelte";
	import { ripple } from "svelte-ripple-action";
	import Experience from "../Experience.svelte";

	const refs = [
		{
			name: "Will Yoo - Founder, Realm labs",
			url: "#",
			text: `I've worked with top engineers from the classic well regarded places. FANG, Stanford, Ivy League. I've seen the entire spectrum in private market tech - from startups to unicorn company to top defi protocols. I'll say Posandu is among the most reliable, talented, and high integrity of people I've ever worked with. You'd be lucky to have him anywhere near your projects.`,
		},
		{
			name: "Yashash Pugalia",
			url: "https://github.com/yashash-pugalia",
			text: `Posandu is an incredibly talented developer. I've had the pleasure
		of collaborating with him on several projects, and I'm always impressed by
		his knowledge and skillset. I have no doubt he'll continue to excel in his
		future endeavours.`,
		},
	];
</script>

<svelte:head>
	<title>Posandu Mapa - hire</title>
</svelte:head>

<h2 class="mb-8 text-2xl font-semibold">Hire me</h2>

<p class="mb-8">
	I'm available for part-time or contract work. Below are some references from
	people I've worked with.
</p>

{#each refs as item}
	<div class="card bg-base-200 mb-4">
		<div class="card-body">
			<h2 class="card-title"><a href={item.url}>{item.name}</a></h2>
			<p class="mt-2">{item.text}</p>
		</div>
	</div>
{/each}

<p class="mb-4 text-lg">Experience</p>

<Experience />

<a href="/#contact" class="btn btn-primary">Contact me</a>
