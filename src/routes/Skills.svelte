<script lang="ts">
	import Icon from "@iconify/svelte";

	const dataArray = [
		{ name: "TypeScript", icon: "akar-icons:typescript-fill" },
		{ name: "JavaScript", icon: "akar-icons:javascript-fill" },
		{ name: "Node.js", icon: "devicon-plain:nodejs" },
		{ name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
		{ name: "Svelte", icon: "file-icons:svelte" },
		{ name: "HTML", icon: "akar-icons:html-fill" },
		{ name: "CSS", icon: "akar-icons:css-fill" },
		{ name: "React", icon: "uil:react" },
		{ name: "SCSS", icon: "mdi:sass" },
		{ name: "MySQL", icon: "simple-icons:mysql" },
		{ name: "PostgreSQL", icon: "akar-icons:postgresql-fill" },
		{ name: "Rust", icon: "cib:rust" },
	];
</script>

<div class="col-span-1 grid md:grid-cols-3 lg:grid-cols-4 flex-col gap-4">
	{#each dataArray as { name, icon }}
		<div class="flex gap-4 items-center bg-base-200 rounded-lg px-4 py-4 hover:bg-base-300 transition-all">
			<Icon {icon} class="w-8 h-8" />

			<span class="text-lg">{name}</span>
		</div>
	{/each}
</div>
