// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", // Your project files
    "./node_modules/preline/dist/*.js", // Crucial for Preline's JS-managed classes
  ],
  theme: {
    extend: {
      // You can put your custom theme values from global.css @theme here if you prefer
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("preline/plugin"), // Add Preline's Tailwind plugin
  ],
};
