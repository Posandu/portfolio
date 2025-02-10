<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import TypingComponent from './TypingComponent.svelte';
	import { ripple } from 'svelte-ripple-action';
	import { getSpotifyData, type NowPlaying } from './spotify';
	import Work from './Work.svelte';
	import Skills from './Skills.svelte';
	import SvelteSeo from 'svelte-seo';
	import { Renderer } from './render';
	import Portal from 'svelte-portal';

	let spotifyData: NowPlaying | false = $state(false);
	let refreshInterval: NodeJS.Timeout;

	/**
	 * Made by Matthias Hurrle (@atzedent) - Thank you! https://codepen.io/atzedent/pen/NWVYOMG
	 */
	const SHADER = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
#define FC gl_FragCoord.xy
#define R resolution
#define T time
#define hue(a) (.6+.6*cos(6.3*(a)+vec3(0,83,21)))
float rnd(float a) {
	vec2 p=fract(a*vec2(12.9898,78.233));	p+=dot(p,p*345.);
	return fract(p.x*p.y);
}
vec3 pattern(vec2 uv) {
	vec3 col=vec3(0);
	for (float i=.0; i++<20.;) {
		float a=rnd(i);
		vec2 n=vec2(a,fract(a*34.56)), p=sin(n*(T+7.)+T*.5);
		float d=dot(uv-p,uv-p);
		col+=.00125/d*hue(dot(uv,uv)+i*.125+T);
	}
	return col;
}
void main(void) {
	vec2 uv=(FC-R)/min(R.x,R.y);
	vec3 col=vec3(0);
	float s=2.4,
	a=atan(uv.x,uv.y),
	b=length(uv);
	uv=vec2(a*5./6.28318,.05/tan(b)+T);
	uv=fract(uv)-.5;
	col+=pattern(uv*s);
	O=vec4(col,1);
}`;

	let canvas = $state<HTMLCanvasElement>();
	let exitFn = $state<() => void>();
	let loaded = $state(false);

	onDestroy(() => {
		loaded = false;
		clearInterval(refreshInterval);

		if (exitFn) {
			exitFn();
		}
	});

	function init() {
		let renderer: Renderer | null = null;
		if (!canvas) return;

		const resize = () => {
			if (!canvas) return;

			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight - 180;
			if (renderer) {
				renderer.updateScale(1);
			}
		};
		const source = SHADER;

		renderer = new Renderer(canvas, 1);
		renderer.setup();
		renderer.init();
		resize();
		if (renderer.test(source) === null) {
			renderer.updateShader(source);
		}
		window.onresize = resize;
		const loop = (now: number | undefined) => {
			renderer.render(now);
			requestAnimationFrame(loop);
		};
		loop(0);

		exitFn = () => {
			renderer?.reset();
		};
	}

	onMount(async () => {
		init();
		setTimeout(() => {
			loaded = true;
		}, 1000);
		spotifyData = await getSpotifyData();

		refreshInterval = setInterval(async () => {
			spotifyData = await getSpotifyData();
		}, 20000); //20 seconds - less than 1kb of data per request so it's fine ig
	});
</script>

<SvelteSeo title="Posandu Mapa - About me" />

<div class="mt-4 text-center relative min-h-[calc(100svh-500px)] flex flex-col items-center">
	<h2 class="text-3xl opacity-40">Hi, I'm</h2>

	<h1
		class="text-5xl my-4 font-semibold text-white md:ml-0 ml-4 md:max-w-none max-w-[260px] md:text-left text-center"
	>
		<TypingComponent text="Posandu Mapa" />
	</h1>

	<h2 class="text-2xl opacity-40">Fullstack developer</h2>
</div>

<Portal target="body">
	<canvas
		bind:this={canvas}
		class="absolute pointer-events-none top-0 left-0 {loaded ? '' : 'opacity-0'}"
		style="transition: opacity 1s"
	></canvas>
</Portal>

<div class="mt-32 bg-base-100/80 rounded-lg mb-4">
	<div class="backdrop-blur-lg leading-[40px] p-8 rounded-xl text-lg">
		<p>
			Hi! I'm Posandu - a student and a self-taught developer who enjoys working with technology.
		</p>

		<p class="my-4">
			I spend my time tinkering on <span class="font-semibold text-green-400">software</span>,
			<span class="font-semibold">AI stuff</span>, and
			<span class="font-semibold text-green-400">web3</span> projects. I work mainly with
			<span class="font-semibold text-blue-700">TypeScript</span>,
			<span class="font-semibold text-purple-700">CSS</span>, and
			<span class="font-semibold text-orange-400">Svelte</span>, but I've also picked up some
			<span class="font-semibold text-[#dea584]">Rust</span> along the way.
		</p>

		<p class="my-4">
			Outside of tech, I like cycling, reading, writing on my blog
			<a href="https://tronic247.com" class="text-primary hover:underline"> Tronic247 </a>, and
			<a href="/photos" class="text-primary hover:underline">photography</a>.
		</p>
	</div>
</div>

<div class="flex-1 border border-white/20 rounded-xl p-8 relative">
	<span class="text-base-content/40 text-2xl mb-4 block font-medium">Spotify</span>

	{#if spotifyData && spotifyData?.isPlaying === true}
		<p class="text-lg font-bold">
			Listening to
			<a href={spotifyData?.songUrl}>{spotifyData?.title}</a>
			by
			{spotifyData?.artist}
		</p>
		<img
			src={spotifyData?.albumImageUrl}
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

<h2
	class="mt-16 mb-8 text-2xl font-semibold bg-primary/20 text-primary -rotate-[4deg] rounded-lg px-6 py-2 inline-block"
>
	Stuff I work with
</h2>

<Skills />

<h2
	class="mt-16 mb-8 text-2xl font-semibold bg-primary/20 text-primary rotate-[3deg] rounded-lg px-6 py-2 inline-block"
>
	Some of my work
</h2>

<Work />

<h2 class="mt-16 mb-8 text-2xl font-semibold">Contact me</h2>

<div class="bg-base-100 p-8 rounded-lg leading-8" id="contact">
	<p>
		Contact me at <a href="mailto:posandumapa@gmail.com" class="link-hover">
			posandumapa@gmail.com</a
		>. Also, you can find me on social media using the links below.
	</p>
</div>
