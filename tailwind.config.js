/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				bg: {
					color: '#05050a',
				},
				text: {
					primary: '#e2e8f0',
					secondary: '#94a3b8',
				},
				accent: {
					cyan: '#00f0ff',
					purple: '#8a2be2',
					pink: '#ff00cc',
				},
				glass: {
					bg: 'rgba(255, 255, 255, 0.03)',
					border: 'rgba(255, 255, 255, 0.08)',
				}
			},
			fontFamily: {
				main: ['Outfit', 'sans-serif'],
			},
			keyframes: {
				'pulse-glow': {
					'0%': { transform: 'scale(0.95)', opacity: '0.5' },
					'100%': { transform: 'scale(1.05)', opacity: '0.8' },
				}
			},
			animation: {
				'pulse-glow': 'pulse-glow 4s infinite alternate',
			}
		},
	},
	plugins: [],
}
