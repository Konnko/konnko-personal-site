/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gunmetal: '#11191f',
				silver: '#c7c7c7',
				hgunmetal: '#243542'
			},
			fontFamily: { courier: 'Courier New' }
		}
	},
	plugins: []
}
