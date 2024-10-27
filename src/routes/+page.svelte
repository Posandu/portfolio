<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import TypingComponent from './TypingComponent.svelte';
	import { ripple } from 'svelte-ripple-action';
	import { getSpotifyData, type UserData } from './spotify';
	import Work from './Work.svelte';
	import Skills from './Skills.svelte';
	import SvelteSeo from 'svelte-seo';

	let spotifyData: UserData['data'] | null = $state(null);
	let refreshInterval: NodeJS.Timeout;

	onDestroy(() => {
		clearInterval(refreshInterval);
	});

	onMount(async () => {
		spotifyData = (await getSpotifyData()).data;

		refreshInterval = setInterval(async () => {
			spotifyData = (await getSpotifyData()).data;
		}, 10000); //10 seconds - less than 1kb of data per request so it's fine ig
	});
</script>

<SvelteSeo
	title="Posandu Mapa - About me"
/>

<div class="md:flex mt-2 md:mt-20 relative z-10">
	<div class="flex-1 flex flex-col justify-center md:items-start items-center">
		<h2 class="text-3xl opacity-60 font-light">Hi, I'm</h2>

		<h1 class="text-6xl my-4 font-medium text-white md:ml-0 ml-4">
			<TypingComponent text="Posandu Mapa" />
		</h1>

		<h2 class="text-2xl opacity-40">Fullstack developer</h2>

		<a href="/#contact" class="btn btn-primary mt-4" use:ripple>Say hi</a>
	</div>

	<div class="col-span-1 mt-10 md:mt-auto flex justify-center md:justify-end">
		<img
			src="https://avatars.githubusercontent.com/u/76736580?v=4?v=3&s=200"
			alt="Profile"
			style="animation-duration: 20s;"
			class="rounded-full w-48 h-48 animate-spin"
		/>
	</div>
</div>

<h2 class="mt-32 mb-8 text-2xl font-semibold">About me</h2>

<div class="grid gap-4 md:grid-cols-3 grid-cols-1 mb-4">
	<div class="col-span-1 flex flex-col gap-4">
		<div
			class="bg-base-200 flex-1 rounded-xl p-6 relative transition-all group-hover:translate-y-2 group-hover:scale-95"
		>
			<span class="text-base-content/40 text-2xl mb-4 block font-medium">Spotify</span>

			{#if spotifyData?.listening_to_spotify}
				<p class="text-lg font-bold">
					Listening to
					<a href="https://open.spotify.com/track/{spotifyData?.spotify?.track_id}"
						>{spotifyData?.spotify?.song}</a
					>
					by
					{spotifyData?.spotify?.artist}
				</p>
				<img
					src={spotifyData?.spotify?.album_art_url}
					alt="Album art"
					class="rounded-lg size-12 inline-block absolute right-4 top-4"
				/>
			{:else}
				<p class="text-lg font-bold">Not listening to anything right now</p>
			{/if}

			<a
				href="https://www.tronic247.com/adding-your-discord-status-to-your-website"
				class="text-sm mt-4 block"
			>
				Learn how I made this
			</a>
		</div>

		<div class="bg-base-200 rounded-xl p-6 flex-1">
			<h2 class="text-base-content/40 text-2xl mb-2 font-medium">From</h2>

			<p class="text-3xl font-bold">Sri Lanka</p>
		</div>
	</div>

	<div
		class="md:col-span-2 col-span-1 leading-8 bg-base-300 px-5 py-4 rounded-xl text-lg relative z-10"
	>
		<p>
			I am a student by day, developer by night who is passionate about everything related to
			<span class="font-semibold text-blue-400">computers</span>. I also explore
			<span class="font-semibold text-green-400">software development</span>,
			<span class="font-semibold text-indigo-400">machine learning (ML)</span>, and
			<span class="font-semibold text-green-400">web3</span>
			projects. I am proficient in
			<span class="font-semibold text-yellow-400">JavaScript</span>,
			<span class="font-semibold text-blue-400">CSS</span>, and
			<span class="font-semibold text-orange-400">Svelte</span> but I know some
			<span class="font-semibold text-[#dea584]">Rust</span> too.
		</p>

		<p class="my-2">
			I have experience in creating <b>enterprise software</b> and hold a certification from
			<a
				class="font-semibold text-red-400 hover:ring-4 rounded-lg ring-red-500/20 transition-all"
				href="https://www.codingame.com/certification/UuE-yYkOPsUD3F6aCWZ5ZA">Codingame</a
			>
			for problem-solving with JavaScript.
		</p>

		<p class="my-2">
			Other than that, I enjoy cycling, reading, and writing articles on my blog (<a
				href="https://tronic247.com"
				class="link-hover">Tronic247</a
			>)
		</p>
	</div>
</div>

<h2 class="mt-16 mb-8 text-2xl font-semibold">My Skills</h2>

<Skills />

<h2 class="mt-16 mb-8 text-2xl font-semibold">My work</h2>

<Work />

<h2 class="mt-16 mb-8 text-2xl font-semibold">Contact me</h2>

<div class=" bg-base-200 p-4 rounded-lg leading-8" id="contact">
	<p>
		Contact me at <a href="mailto:posandumapa@gmail.com" class="link-hover">
			posandumapa@gmail.com</a
		>. Also, you can find me on social media using the links below.
	</p>
</div>
