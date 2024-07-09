<script lang="ts">
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";
	import { ripple } from "svelte-ripple-action";
	import { crossfade } from "svelte/transition";
	import { onMount } from "svelte";

	const [send, receive] = crossfade({
		duration: 300,
	});

	const topAppBarHeight = 76;

	let lastScrollPosition = 0;
	let currentAppBarOffsetTop = 0;

	const update = () => {
		const currentScrollPosition = Math.max(window.scrollY, 0);
		const diff = currentScrollPosition - lastScrollPosition;
		lastScrollPosition = currentScrollPosition;

		currentAppBarOffsetTop -= diff;

		if (currentAppBarOffsetTop > 0) {
			currentAppBarOffsetTop = 0;
		} else if (Math.abs(currentAppBarOffsetTop) > topAppBarHeight) {
			currentAppBarOffsetTop = -topAppBarHeight;
		}
	};

	let menuOpen = false;

	const menuItems = [
		{
			name: "About",
			link: "/",
		},
		{
			name: "Hire Me",
			link: "/hire",
		},
		{
			name: "Guestbook",
			link: "/guestbook",
		},
		{
			name: "Photography",
			link: "/photos",
		},
		{
			name: "Blog",
			link: "https://www.tronic247.com",
		},
	];

	onMount(update);
</script>

<svelte:head>
	<title>Posandu Mapa - Student by day, developer by night.</title>
</svelte:head>

<svelte:window on:scroll={update} />

<div
	class="fixed flex items-center justify-center z-50 w-full top-2 left-0"
	style="transform: translateY({currentAppBarOffsetTop}px); "
>
	<header
		class="md:shadow-lg text-center mt-4 p-2 md:bg-[#192831] md:rounded-full"
	>
		<div
			class="md:flex hidden sm:pl-0 pl-20 items-center justify-center overflow-hidden relative"
		>
			{#each menuItems as item}
				<div class="relative h-max flex items-center justify-center">
					<a
						href={item.link}
						class="
			text-sm px-4 py-2 inline-flex items-center justify-center relative z-10 hover:bg-base-content/20 min-w-min transition-all rounded-full font-semibold
			{$page.url.pathname === item.link ? ' text-white ' : ''} rounded"
						target={item.link.startsWith("http") ? "_blank" : ""}
					>
						{item.name}

						{#if item.name == "Blog"}
							<Icon icon="ic:baseline-open-in-new" class="ml-2" />
						{/if}
					</a>

					{#if $page.url.pathname === item.link}
						<div
							class="absolute w-full h-full top-0 left-0 bg-white/10 rounded-full"
							in:receive={{ key: "menu" }}
							out:send={{ key: "menu" }}
						></div>
					{/if}
				</div>
			{/each}
		</div>

		{#if !menuOpen}
			<button
				class="text-3xl md:hidden mx-auto rounded-full bg-base-300 w-16 h-16 flex items-center justify-center"
				in:receive={{ key: "menu" }}
				out:send={{ key: "menu" }}
				on:click={() => {
					menuOpen = true;
				}}
				use:ripple
			>
				<Icon
					icon="ic:baseline-menu"
					class="md:hidden text-white cursor-pointer"
				/>
			</button>
		{:else}
			<div
				class="rounded-2xl shadow-lg fixed left-1/2 -translate-x-1/2 h-max max-w-xl inset-6 max-h-[calc(100vh-24px)] overflow-auto backdrop-blur-xl bg-base-300/60"
				in:receive={{ key: "menu" }}
				out:send={{ key: "menu" }}
			>
				<a
					href="#!"
					class="
				text-md mb-4 px-4 py-2 block
				 text-white rounded ripple-effect"
					use:ripple
					on:click={() => {
						menuOpen = false;
					}}
				>
					Close Menu
				</a>

				{#each menuItems as item}
					<a
						href={item.link}
						class="
				text-md px-4 py-2 block text-left
				{$page.url.pathname === item.link
							? ' text-white bg-white/10 '
							: 'hover:bg-white/5'} ripple-effect"
						use:ripple
						on:click={() => {
							menuOpen = false;
						}}
					>
						{item.name}
					</a>
				{/each}
			</div>
		{/if}
	</header>
</div>
