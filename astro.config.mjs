import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { cloudflareStream, d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  vite: { plugins: [tailwindcss()] },
  integrations: [
    react(),
    emdash({
      database: d1({ binding: "DB", session: "auto" }),
      storage: r2({ binding: "MEDIA" }),
      mediaProviders: [cloudflareStream({})],
    }),
  ],
  devToolbar: { enabled: false },
});
