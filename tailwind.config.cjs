const FONT = "'Outfit Variable', sans-serif";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: FONT,
			heading: FONT,
			sans: FONT,
			fancy: '"Source Sans Pro", sans-serif'
		},
		extend: {
			boxShadow: {
				floating: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
				'floating-xl': 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
			}
		}
	},
	plugins: [require('daisyui'), require('tailwindcss-animate')],
	daisyui: {
		themes: [
			{
				gmm: {
					primary: '#4768fa',
					'primary-focus': '#153ff9',
					'primary-content': '#ffffff',

					secondary: '#7b92b2',
					'secondary-focus': '#5b769a',
					'secondary-content': '#ffffff',

					accent: '#67cba0',
					'accent-focus': '#41be88',
					'accent-content': '#ffffff',

					neutral: '#161827',
					'neutral-focus': '#06060a',
					'neutral-content': '#eaf0f6',

					'base-100': '#0f0f17',
					'base-200': '#060609',
					'base-300': '#020203',
					'base-content': '#eaf0f6',

					info: '#1c92f2',
					success: '#009485',
					warning: '#ff9900',
					error: '#ff5724',

					'--rounded-box': '1rem',
					'--rounded-btn': '.5rem',
					'--rounded-badge': '1.9rem',
					'--animation-btn': '0',
					'--animation-input': '0',
					'--btn-text-case': 'uppercase',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px'
				}
			}
		]
	}
};
