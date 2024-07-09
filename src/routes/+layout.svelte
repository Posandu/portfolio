<script lang="ts">
	import "./styles.css";
	import "svelte-ripple-action/ripple.css";
	import Footer from "./Footer.svelte";
	import Head from "./Head.svelte";
	import { scale } from "svelte/transition";
	import AOS from "aos";
	import "aos/dist/aos.css";
	import { onMount } from "svelte";

	onMount(() => {
		AOS.init({
			duration: 350,
			once: true,
		});
	});

	export let data;
</script>

<main>
	<Head />

	<div class="max-w-4xl mx-auto md:px-8 pt-32 px-4 overflow-x-hidden">
		{#key data.url}
			<div
				in:scale={{ delay: 300, duration: 200, start: 0.992, opacity: 0 }}
				out:scale={{ duration: 200, start: 1.02, opacity: 0 }}
				class="overflow-hidden relative z-10"
			>
				<slot />
			</div>
		{/key}

		<Footer />
	</div>
</main>
