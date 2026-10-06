import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://modconductor.github.io",
  output: "static",
  trailingSlash: "always",
  integrations: [expressiveCode({
    emitExternalStylesheet: false,
    themes: ["github-light", "github-dark"],
    themeCssSelector: (theme) => `[data-theme="${theme.type}"]`,
    defaultProps: { frame: "none" },
    frames: {
      extractFileNameFromCode: false,
      removeCommentsWhenCopyingTerminalFrames: false,
    },
  }), react()],
  vite: { plugins: [tailwindcss()] },
});
