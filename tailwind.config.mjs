/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte, md, mdx}"],
  darkMode: "class", // <- ini wajib
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
