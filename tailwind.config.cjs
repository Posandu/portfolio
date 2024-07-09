/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
			body: "var(--font)",
			heading: "var(--font)",
			sans: "var(--font)",
		},
	},
	plugins: [require("daisyui"), require("tailwindcss-animate")],
	daisyui: {
		themes: [
			{
				primary: {
					...require("daisyui/src/theming/themes").sunset,
				},
			},
		],
	},
};
