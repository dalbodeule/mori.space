import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2, kvCache } from "@emdash-cms/cloudflare";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";
import tailwindcss from "@tailwindcss/vite";
import { syntaxHighlighterPlugin } from "./src/emdash-syntax-highlighter-plugin";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  vite: { plugins: [tailwindcss()] },
  integrations: [
    react(),
    emdash({
      database: d1({ binding: "DB", session: "auto" }),
      storage: r2({ binding: "MEDIA" }),
      objectCache: kvCache({ binding: "CACHE" }),
      plugins: [syntaxHighlighterPlugin()],
    }),
  ],
  devToolbar: { enabled: false },
});
