<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { FxReveal as Img } from '@zerodevx/svelte-img';
	import Masonry from './Masonry.svelte';
	import SvelteSeo from 'svelte-seo';

	let { data } = $props();
</script>

<SvelteSeo title="Posandu Mapa - Photography" />

<div class="relative">
	<Masonry gridGap="10px" reset={true}>
		{#each Object.keys(data.images) as img}
			<Img src={data.images[img]} />
		{/each}
	</Masonry>
</div>
