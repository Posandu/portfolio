<script lang="ts">
	import AkarIconsTypescriptFill from '~icons/akar-icons/typescript-fill';
	import DeviconPlainJavascript from '~icons/devicon-plain/javascript';
	import FaBrandsNode from '~icons/fa-brands/node';
	import MdiTailwind from '~icons/mdi/tailwind';
	import RiSvelteFill from '~icons/ri/svelte-fill';
	import FlowbiteHtmlSolid from '~icons/flowbite/html-solid';
	import FlowbiteCssSolid from '~icons/flowbite/css-solid';
	import MdiReact from '~icons/mdi/react';
	import AkarIconsSassFill from '~icons/akar-icons/sass-fill';
	import SimpleIconsMysql from '~icons/simple-icons/mysql';
	import AkarIconsPostgresqlFill from '~icons/akar-icons/postgresql-fill';
	import SimpleIconsRust from '~icons/simple-icons/rust';

	const dataArray = [
		{ name: 'TypeScript', icon: AkarIconsTypescriptFill },
		{ name: 'JavaScript', icon: DeviconPlainJavascript },
		{ name: 'Node.js', icon: FaBrandsNode },
		{ name: 'Tailwind CSS', icon: MdiTailwind },
		{ name: 'Svelte', icon: RiSvelteFill },
		{ name: 'HTML', icon: FlowbiteHtmlSolid },
		{ name: 'CSS', icon: FlowbiteCssSolid },
		{ name: 'React', icon: MdiReact },
		{ name: 'SCSS', icon: AkarIconsSassFill },
		{ name: 'MySQL', icon: SimpleIconsMysql },
		{ name: 'PostgreSQL', icon: AkarIconsPostgresqlFill },
		{ name: 'Rust', icon: SimpleIconsRust }
	];
</script>

<div class="col-span-1 grid md:grid-cols-3 flex-col gap-4">
	{#each dataArray as { name, icon: Icon }}
		<div
			class="flex gap-4 items-center bg-base-200 rounded-lg px-4 py-4 hover:bg-base-300 transition-all"
		>
			<Icon class="size-8" />

			<span>{name}</span>
		</div>
	{/each}
</div>
