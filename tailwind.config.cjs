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
		  },
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
}
