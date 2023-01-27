import eslintPlugin from "vite-plugin-eslint"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  css: [
    "@/assets/css/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  plugins: ["@/plugins/fontawesome.ts"],
  nitro: {
    preset: "cloudflare"
  },
  modules: ["@nuxtjs/tailwindcss"],
  vite: {
    plugins: [eslintPlugin()]
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
