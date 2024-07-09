<script lang="ts">
	import { navigating } from "$app/stores";
	import Icon from "@iconify/svelte";
	import { ripple } from "svelte-ripple-action";

	const socialArr = [
		{
			name: "GitHub",
			icon: "uiw:github",
			link: "https://github.com/posandu",
		},
		{
			name: "Twitter",
			icon: "akar-icons:twitter-fill",
			link: "https://twitter.com/posandu",
		},
		{
			name: "DEV",
			icon: "material-symbols:logo-dev",
			link: "https://dev.to/posandu",
		},
		{
			name: "LinkedIn",
			icon: "akar-icons:linkedin-fill",
			link: "https://www.linkedin.com/in/posandu/",
		},
		{
			name: "Stack Overflow",
			icon: "ri:stack-overflow-fill",
			link: "https://stackoverflow.com/users/16474083/posandu",
		},
		{
			name: "CodePen",
			icon: "ri:codepen-line",
			link: "https://codepen.io/posandu",
		},
		{
			name: "Discord",
			icon: "akar-icons:discord-fill",
			link: "https://tronic247.com/pastebox.html#O=CISwzgxg9gTgJgLgAQAUpgIYDs4FcDEALAAwlIAUUANnAJQBQSTzLrAAgA7rZ4VYCmAd1pA",
		},
	];

	const icons = ["💖", "🤕", "🤬", "🩸", "🥵"];

	let icon = 0;

	$: {
		if ($navigating) {
			icon = ~~(Math.random() * icons.length);
		}
	}
</script>

<div class="mt-10 font-medium flex md:flex-row flex-col items-center justify-center">
	<div class="flex-1">
		Check out the
		<a
			href="https://github.com/posandu/posandu.github.io"
			target="_blank"
			class="text-blue-500 hover:underline">source code</a
		>.
	</div>

	<div class="my-4">
		{#each socialArr as social}
			<a
				href={social.link}
				target="_blank"
				class="btn btn-xs mx-1 bg-transparent border-none btn-circle text-white transition-all -outline-offset-4 hover:outline-offset-1"
				title={social.name}
				use:ripple
			>
				<Icon icon={social.icon} class="inline text-lg" />
			</a>
		{/each}
	</div>
</div>
