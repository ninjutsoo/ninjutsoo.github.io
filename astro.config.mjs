import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL ?? "https://ninjutsoo.github.io";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
