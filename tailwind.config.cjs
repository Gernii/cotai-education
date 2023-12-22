import AspectRatio from '@tailwindcss/aspect-ratio';
import Typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			spacing: {
				header: defaultTheme.spacing['16'],
				'sub-header': defaultTheme.spacing['12'],
				sidebar: defaultTheme.spacing['64'],
				modal: '40rem',
				'modal-lg': '50rem'
			},
			aspectRatio: {
				thumbnail169: '16 / 9',
				thumbnail21: '2 / 1',
				thumbnail43: '4 / 3'
			}
		}
	},
	daisyui: {
		themes: [
			{
				default: {
					'color-scheme': 'light',
					primary: 'oklch(71.03% 0.163 240.29)',
					'primary-content': 'oklch(90.03% 0.082 240.289)',
					secondary: '#fc8c04',
					accent: '#C148AC',
					neutral: '#021431',
					'base-100': 'oklch(100% 0 0)',
					'base-200': '#F2F7FF',
					'base-300': '#E3E9F4',
					'base-content': '#394E6A',
					info: '#93E7FB',
					success: '#81CFD1',
					warning: '#EFD7BB',
					error: '#E58B8B',

					'--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
					'--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
					'--animation-btn': '0.25s', // duration of animation when you click on button
					'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
					'--btn-focus-scale': '0.95', // scale transform of button when you focus on it
					'--border-btn': '1px', // border width of buttons
					'--tab-border': '1px', // border width of tabs
					'--tab-radius': '0.5rem' // border radius of tabs}
				}
			}
		]
	},
	plugins: [Typography, AspectRatio, daisyui]
};
module.exports = config;
