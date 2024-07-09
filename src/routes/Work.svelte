<script lang="ts">
	import { ripple } from "svelte-ripple-action";

	const MAJOR = [
		{
			name: "Tronic247",
			description: "My Blog. Made with SvelteKit.",
			roles: ["Creator"],
			link: "https://www.tronic247.com/",
			img: "https://user-images.githubusercontent.com/76736580/285272536-bccf8a94-ac17-43e7-8167-b0180349f0d9.png",
		},
		{
			name: "Svelte Ripple Action",
			description: "Ripple effect for Svelte.",
			roles: ["Creator"],
			link: "https://ripple.posandu.com/",
			img: "https://user-images.githubusercontent.com/76736580/285272693-4980a9c3-6d66-41d0-8bd9-7c48d99f642f.png",
		},
		{
			name: "Win11 Svelte",
			description: "Windows 11 recreation in Svelte.",
			roles: ["Team Member"],
			link: "https://win11-svelte.vercel.app/",
			img: "https://user-images.githubusercontent.com/76736580/285272771-2272758c-bac4-48e9-bbe0-dfbd68e23d3a.png",
		},
		{
			name: "Jobsite Sentry Website",
			description: "Website for Jobsite Sentry. Made with SvelteKit.",
			roles: ["Developer"],
			link: "https://jobsitesentry.com/",
			img: "https://github-production-user-asset-6210df.s3.amazonaws.com/76736580/285272273-60389cba-4ec1-4ae2-bffb-c35d90fbb1f7.png",
		},
		{
			name: "Tronic247 Material",
			description: "CSS framework for building responsive websites.",
			roles: ["Creator"],
			link: "https://material.tronic247.com/",
			img: "https://user-images.githubusercontent.com/76736580/285273186-ce0157a5-28aa-4fb4-aa86-4482f4fe57c0.png",
		},
		{
			name: "Win11React",
			description: "Windows 11 recreation in React.",
			roles: ["Team Member"],
			link: "https://win11.blueedge.me/",
			img: "https://user-images.githubusercontent.com/76736580/285272960-348750b6-c12a-4d33-9b96-3d12b461a8c3.png",
		},
		{
			name: "TerminAI",
			description: "Generate terminal commands with AI. Discontinued.",
			roles: ["Creator"],
			img: "https://user-images.githubusercontent.com/76736580/285274633-009e598e-78f4-45f3-bf12-56d9bd502d87.png",
		},
		{
			name: "StackFlex",
			description:
				"Modern copy-pasting alternative for developers. Won a Hackathon hosted by Hashnode. Discontinued.",
			roles: ["Creator"],
		},
		{
			name: "Gradienmood",
			description: "Generate beautiful gradients. Discontinued.",
			roles: ["Creator"],
		},
	];

	const SMALL: {
		name: string;
		description: string;
		link: string;
	}[] = [
		{
			name: "Pastebin",
			description: "Simple paste bin - powered by SvelteKit & IPFS.",
			link: "https://pb.posandu.com/",
		},
		{
			name: "Svelte File Explorer",
			description: "A file explorer written in Svelte.",
			link: "https://files.posandu.com/",
		},
		{
			name: "Uno",
			description: "Simple UNO game inspired by pizz.uno.",
			link: "https://uno-red.vercel.app/",
		},
		{
			name: "Music Player UI",
			description:
				"Simple music player UI made with Svelte to improve my design skills.",
			link: "https://mplayer-gamma.vercel.app/",
		},
		{
			name: "Home clock",
			description: "Firmware for ESP8266 to display time and more features.",
			link: "https://github.com/Posandu/home-clock",
		},
		{
			name: "Discord Bot",
			description: "Personal Discord bot for my server.",
			link: "https://github.com/Posandu/discord-bot",
		},
		{
			name: "Powpow",
			description: "Interepreter made with Rust.",
			link: "https://github.com/Posandu/powpow",
		},
		{
			name: "Blaze",
			description: "POC Svelte like compiler",
			link: "https://github.com/Posandu/blaze",
		},
		{
			name: "Utiling",
			description: "A JS utility library",
			link: "https://github.com/Posandu/utiling",
		},
		{
			name: "EasyState",
			description: "State management library for React",
			link: "https://github.com/Posandu/easystate",
		},
		{
			name: "UseLocal",
			description: "Function fallback value",
			link: "https://github.com/Posandu/useLocal",
		},
		{
			name: "Tcol",
			description: "Minimal terminal color library",
			link: "https://github.com/Posandu/tcol",
		},
		{
			name: "PHPBuild",
			description: "PHP build system, similar to Webpack",
			link: "https://github.com/Posandu/phpbuild",
		},
		{
			name: "State.js",
			description: "State management library for JS",
			link: "https://github.com/Posandu/state.js",
		},
		{
			name: "Daisy UI Material",
			description: "Material UI for Daisy UI",
			link: "https://github.com/Posandu/material-daisyui",
		},
	];
</script>

<h1 class="text-lg font-semibold mt-8 mb-6">Major Projects</h1>

<div class="grid mt-4 md:grid-cols-3 gap-8 sm:grid-cols-2">
	{#each MAJOR as project}
		<div
			class="col-span-1 hover:bg-base-300 transition-all card bg-base-100 shadow-xl border border-base-300"
		>
			{#if project.img}
				<figure>
					<img
						src={"https://img.fotofolio.xyz/?url=" +
							project.img +
							"&w=500&h=300"}
						alt={project.name}
						class=""
						loading="lazy"
					/>
				</figure>
			{/if}

			<div class="card-body px-4">
				<h1 class="card-title">{project.name}</h1>

				<p>{project.description}</p>
			</div>

			<div class="card-actions justify-end items-center px-4 mb-6">
				{#if project.link}
					<a
						href={project.link}
						use:ripple
						class="btn btn-primary btn-xs mr-auto"
						target="_blank"
					>
						Visit
					</a>
				{/if}

				{#each project.roles as role}
					<span class="badge badge-outline">
						{role}
					</span>
				{/each}
			</div>
		</div>
	{/each}
</div>

<h1 class="text-lg font-semibold mt-8">Small Projects</h1>

<p class="my-4">
	These are the projects that I've worked just for the sake of learning or for
	fun.
</p>

<div class="space-y-3">
	{#each SMALL as project}
		<a
			href={project.link}
			use:ripple
			class="flex items-center gap-2 text-sm hover:opacity-80"
			target="_blank"
		>
			<h1 class="min-w-max">{project.name}</h1>
			&mdash;
			<p class="text-neutral-content/60">{project.description}</p>
		</a>
	{/each}
</div>
