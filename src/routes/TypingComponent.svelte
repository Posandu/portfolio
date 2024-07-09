<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { fade } from "svelte/transition";

	export let text = "";
	export let speed = 10;

	let textArray = [...text];
	let textLength = textArray.length;
	let textIndex = 0;
	let textInterval: NodeJS.Timeout;

	onMount(() => {
		textInterval = setInterval(() => {
			if (textIndex < textLength) {
				textIndex++;
			} else {
				clearInterval(textInterval);
			}
		}, speed);
	});

	onDestroy(() => {
		textToShow = "";
		clearInterval(textInterval);
	});

	let textToShow = "";

	$: {
		textToShow = textArray.slice(0, textIndex).join("");
	}
</script>

{#if textToShow}
	{#each [...textToShow] as letter}
		<span class="in"
			>{@html letter === " " ? "&nbsp;" : letter}</span
		>
	{/each}
{/if}

<style>
	.in {
		opacity: 0;
		display: inline-block;
		transform: translateY(0px);
		animation: fadeIn 0.5s ease-in-out forwards;
	}

	@keyframes fadeIn {
		0% {
			transform: translateY(-2px);
			opacity: 0;
		}
		100% {
			transform: translateY(0px);
			opacity: 1;
		}
	}
</style>
