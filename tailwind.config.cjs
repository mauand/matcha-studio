/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E07A5F",
        yellowish: "#E8F2AD",
        goldish: "#F5E5AC",
        greenish: "#70B06E",
        grayish: "#F9F9F9",
      },
      screens: {
        xs: "350px",
        sm: "380px",
        fg: "560px",
        md: "680px",
        lg: "980px",
        xl: "1120px",
        fk: "2000px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
