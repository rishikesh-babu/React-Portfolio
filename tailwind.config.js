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
					nav: '#02001e',
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
			boxShadow: {
				'cyan-glow-sm': '0 0 8px rgba(0, 240, 255, 0.5)',
				'cyan-glow-md': '0 0 15px rgba(0, 240, 255, 0.7)',
				'cyan-glow-lg': '0 0 25px rgba(0, 240, 255, 0.9)',
				'cyan-glow-xl': '0 0 40px rgba(0, 240, 255, 1)',
			},
			dropShadow: {
				'cyan-sm': '0 0 4px #00f0ff',
				'cyan-md': '0 0 8px #00f0ff',
				'cyan-lg': '0 0 15px #00f0ff',
				'cyan-xl': '0 0 25px #00f0ff',
				'cyan-2xl': '0 0 40px #00f0ff',
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
			},
		},
	},
	plugins: [],
}
