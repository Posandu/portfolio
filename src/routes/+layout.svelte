<script lang="ts">
	import './styles.css';
	import 'svelte-ripple-action/ripple.css';
	import SvelteSeo from 'svelte-seo';

	import Footer from './Footer.svelte';
	import Head from './Head.svelte';

	import { scale } from 'svelte/transition';

	import '@fontsource/source-sans-pro/200.css';
	import '@fontsource/source-sans-pro/300.css';
	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-sans-pro/600.css';
	import '@fontsource/source-sans-pro/700.css';
	import '@fontsource/source-sans-pro/900.css';

	import '@fontsource-variable/outfit';

	function materialEasing(t: number) {
		if (t <= 0) return 0;
		if (t >= 1) return 1;

		if (t <= 0.166666) {
			const nt = t / 0.166666;

			const mt = 1 - nt;
			return mt * mt * mt * 0 + 3 * mt * mt * nt * 0 + 3 * mt * nt * nt * 0.06 + nt * nt * nt * 0.4;
		} else {
			const nt = (t - 0.166666) / (1 - 0.166666);

			const mt = 1 - nt;
			return mt * mt * mt * 0.4 + 3 * mt * mt * nt * 0.82 + 3 * mt * nt * nt * 1 + nt * nt * nt * 1;
		}
	}

	let { data, children } = $props();
</script>

<SvelteSeo
	openGraph={{
		type: 'website',
		url: 'https://posandu.com',
		title: 'Posandu Mapa',
		images: [
			{
				url: 'https://avatars.githubusercontent.com/u/76736580?v=4?v=3&s=200',
				width: 800,
				height: 600,
				alt: 'Profile Picture'
			}
		]
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@posandu',
		title: 'Posandu Mapa',
		image: 'https://avatars.githubusercontent.com/u/76736580?v=4?v=3&s=200'
	}}
/>

<svelte:head>
	<link
		rel="icon"
		href="https://avatars.githubusercontent.com/u/76736580?v=4?v=3&s=200"
		type="image/x-icon"
	/>
</svelte:head>

<main>
	<Head />

	{#if data.url === '/photos'}
		<div
			in:scale={{ delay: 200, duration: 200, start: 0.98, opacity: 0.02 }}
			out:scale={{ duration: 150, start: 1.02, opacity: 0 }}
			class="mx-auto md:px-8 pt-32 px-4 overflow-x-hidden"
		>
			{@render children()}
		</div>
	{:else}
		<div class="max-w-3xl mx-auto md:px-8 pt-32 px-4">
			{#key data.url}
				<div
					in:scale={{
						delay: 200,
						duration: 200,
						start: 0.98,
						opacity: 0.02,
						easing: materialEasing
					}}
					out:scale={{ duration: 150, start: 1.02, opacity: 0, easing: materialEasing }}
					class="origin-top relative z-10"
				>
					{@render children()}
				</div>
			{/key}

			<Footer />
		</div>
	{/if}
</main>
