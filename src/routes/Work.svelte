<script lang="ts">
	import { ripple } from 'svelte-ripple-action';
	import Tronic247 from '../lib/portfolio/tronic247.png?as=run';
	import Dash from '../lib/portfolio/dash.png?as=run';
	import Dash2 from '../lib/portfolio/dash2.png?as=run';
	import JobsiteSentry from '../lib/portfolio/jobsitesentry.png?as=run';
	import Material from '../lib/portfolio/material.png?as=run';
	import Ripple from '../lib/portfolio/ripple.png?as=run';
	import TerminAI from '../lib/portfolio/terminai.png?as=run';
	import Win11React from '../lib/portfolio/win11react.png?as=run';
	import Win11Svelte from '../lib/portfolio/win11svelte.png?as=run';
	import Synapsis from '../lib/portfolio/synapsis.png?as=run';

	import Img from '@zerodevx/svelte-img';

	const MAJOR = [
		{
			name: 'Tronic247',
			description: 'My blog, initially made with WordPress, now with SvelteKit.',
			roles: ['Creator'],
			link: 'https://www.tronic247.com/',
			img: Tronic247
		},
		{
			name: 'Svelte Ripple Action',
			description: 'A Svelte action for adding a ripple effect to elements.',
			roles: ['Creator'],
			link: 'https://ripple.posandu.com/',
			img: Ripple
		},
		{
			name: 'Win11 Svelte',
			description:
				'Created by http://yashash.dev/ and me. A Windows 11 recreation, made with Svelte & Vite.',
			roles: ['Team Member'],
			link: 'https://win11-svelte.vercel.app/',
			img: Win11Svelte
		},
		{
			name: 'Jobsite Sentry Website',
			description: 'Website for Jobsite Sentry. Made with SvelteKit.',
			roles: ['Developer'],
			link: 'https://jobsitesentry.com/',
			img: JobsiteSentry
		},
		{
			name: 'Tronic247 Material',
			description: 'CSS framework for building responsive websites. Used by several projects.',
			roles: ['Creator'],
			link: 'https://material.tronic247.com/',
			img: Material
		},
		{
			name: 'Win11React',
			description:
				'Windows 11 recreation in React. Made by a large team of developers, but I was one of the first and major contributors.',
			roles: ['Team Member'],
			link: 'https://win11.blueedge.me/',
			img: Win11React
		},
		{
			name: 'Synapsis',
			description:
				'An AI-powered note-taking app for students, it was the first of its kind. Won a hackathon hosted by Hashnode.',
			roles: ['Creator'],
			link: 'https://synapsis.posandu.com/',
			img: Synapsis
		},
		{
			name: 'Job Management System',
			description:
				'An enterprise application for managing jobs. Made for a local company and is used in production to generate invoices, manage jobs, and more.',
			roles: ['Creator'],
			img: Dash2
		},
		{
			name: 'Task Management System',
			description:
				'Another enterprise application for managing tasks. Made for a local company and is used in production.',
			roles: ['Creator'],
			img: Dash
		},
		{
			name: 'TerminAI',
			description: 'Generates terminal commands with AI. Discontinued.',
			roles: ['Creator'],
			img: TerminAI
		},
		{
			name: 'StackFlex',
			description:
				'A modern copy-pasting alternative for developers. Won a hackathon hosted by Hashnode. Discontinued.',
			roles: ['Creator']
		},
		{
			name: 'Gradienmood',
			description: 'Generates beautiful gradients. Discontinued.',
			roles: ['Creator']
		}
	];

	// const SMALL: {
	// 	name: string;
	// 	description: string;
	// 	link: string;
	// }[] = [
	// 	{
	// 		name: 'Pastebin',
	// 		description: 'Simple paste bin - powered by SvelteKit & IPFS.',
	// 		link: 'https://pb.posandu.com/'
	// 	},
	// 	{
	// 		name: 'Home clock',
	// 		description: 'Firmware for ESP8266 to display time and more features.',
	// 		link: 'https://github.com/Posandu/home-clock'
	// 	},
	// 	{
	// 		name: 'Discord Bot',
	// 		description: 'Personal Discord bot for my server.',
	// 		link: 'https://github.com/Posandu/discord-bot'
	// 	},
	// 	{
	// 		name: 'Are we cooked yet?',
	// 		description: 'A parody website regarding presidential elections in Sri Lanka.',
	// 		link: 'https://arewecookedyet.posandu.com/'
	// 	},
	// 	{
	// 		name: 'pss',
	// 		description: 'Simple filesystem written in Rust.',
	// 		link: 'https://github.com/Posandu/pss/blob/main/src/main.rs'
	// 	}
	// ];
</script>

<div class="grid mt-4 gap-8 sm:grid-cols-2">
	{#each MAJOR as project}
		<div
			class="col-span-1 overflow-hidden transition-all card bg-base-100 shadow-xl border border-base-300"
		>
			{#if project.img}
				<Img src={project.img} alt={project.name} />
			{/if}

			<div class="card-body px-8">
				<h1 class="card-title">{project.name}</h1>

				<p class="opacity-60">{project.description}</p>
			</div>

			<div class="card-actions px-8 mb-6">
				{#if project.link}
					<a href={project.link} use:ripple class="btn w-full btn-primary mr-auto" target="_blank">
						Visit
					</a>
				{/if}
			</div>
		</div>
	{/each}
</div>
