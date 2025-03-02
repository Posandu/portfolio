<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/eb-garamond';

	let { children } = $props();
</script>

<div class="relative z-10 mx-auto max-w-4xl rounded-lg px-16 py-20">
	{@render children()}
</div>
