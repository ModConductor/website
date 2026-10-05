import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://modconductor.github.io",
  output: "static",
  trailingSlash: "always",
  markdown: { syntaxHighlight: false },
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
