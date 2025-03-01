<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';

	let { children } = $props();
</script>

<div class="relative z-10 bg-white mx-auto max-w-4xl px-16 py-20">
	{@render children()}
</div>
