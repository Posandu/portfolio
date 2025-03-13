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

	let { data, children } = $props();

	function pathInterpolator(t: number): number {
		const p0 = { x: 0, y: 0 };
		const p1 = { x: 0.05, y: 0 };
		const p2 = { x: 0.133333, y: 0.06 };
		const p3 = { x: 0.166666, y: 0.4 };
		const p4 = { x: 0.208333, y: 0.82 };
		const p5 = { x: 0.25, y: 1 };
		const p6 = { x: 1, y: 1 };

		if (t <= p3.x) {
			const t1 = t / p3.x;
			return cubicBezier(t1, p0.y, p1.y, p2.y, p3.y);
		} else if (t <= p6.x) {
			const t2 = (t - p3.x) / (p6.x - p3.x);
			return cubicBezier(t2, p3.y, p4.y, p5.y, p6.y);
		}
		return 1;
	}

	function cubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number {
		const mt = 1 - t;
		return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
	}
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
			in:scale={{ delay: 200, duration: 200, start: 0.98, opacity: 0.02, easing: pathInterpolator }}
			out:scale={{ duration: 150, start: 1.02, opacity: 0, easing: pathInterpolator }}
			class="origin-top mx-auto md:px-8 pt-32 px-4 overflow-x-hidden"
		>
			{@render children()}
		</div>
	{:else}
		<div class="max-w-3xl mx-auto md:px-8 pt-32 px-4 overflow-x-hidden">
			{#key data.url}
				<div
					in:scale={{
						delay: 200,
						duration: 200,
						start: 0.98,
						opacity: 0.02,
						easing: pathInterpolator
					}}
					out:scale={{ duration: 150, start: 1.02, opacity: 0, easing: pathInterpolator }}
					class="overflow-hidden origin-top relative z-10"
				>
					{@render children()}
				</div>
			{/key}

			<Footer />
		</div>
	{/if}
</main>
