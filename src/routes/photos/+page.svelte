<script lang="ts">
	import MiniMasonry from "minimasonry";
	import { onDestroy, onMount } from "svelte";

	export let data;

	let container: HTMLElement | null = null;

	let masonry: MiniMasonry | null = null;

	onMount(() => {
		if (container) {
			masonry = new MiniMasonry({
				container: container!,
				gutter: 10,
			});
		}
	});

	onDestroy(() => {
		if (masonry) {
			masonry.destroy();
		}
	});
</script>

<p class="mb-2 text-sm text-gray-500">
	Click on the images to view them in full size.
</p>

<div class="relative" bind:this={container}>
	{#each data.images.map( (i) => ({ l: "/images/compressed/" + i.name, i }) ) as { l, i }}
		<a
			class="absolute group rounded overflow-hidden"
			href={"/images/original/" + i.name}
			rel="noopener"
			target="_blank"
		>
			<img
				src={l}
				alt=""
				title={i.name}
				on:load={() => masonry?.layout()}
				class={i.name?.includes("none") ? "hover:scale-105 transition-all" : ""}
			/>

			{#if !i?.name?.includes("none")}
				<div
					class="absolute opacity-0 group-hover:opacity-100 transition-opacity inset-0 p-1 bg-gradient-to-t from-black/60 drop-shadow to-black/10 flex items-end justify-center text-white"
				>
					{i.name?.split(".")[0]}
				</div>
			{/if}
		</a>
	{/each}
</div>

<style>
	:global(.svelte-lightbox-thumbnail) {
		position: absolute !important;
	}
</style>
