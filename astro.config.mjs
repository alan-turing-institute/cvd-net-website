import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://alan-turing-institute.github.io",
  base: "/cvd-net-website",
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
  },
  integrations: [react(), markdoc(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
});
