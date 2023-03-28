/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	"./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('/matcha-studio/hero.jpg')",
				'video': "url('/matcha-studio/video.jpg')",
				'tree': "url('/matcha-studio/tree.jpg')",
				'item1': "url('/matcha-studio/item1.jpg')",
		  },
		},
		screens: {
			xs: '350px',
			sm: '380px',
			md: '768px',
			lg: '980px',
			xl: '1120px',
		  },
	},
	plugins: [require("tw-elements/dist/plugin")],
}


