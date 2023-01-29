/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OutputOptions } from "rollup"
import eslintPlugin from "vite-plugin-eslint"
import variables from "./variables"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  runtimeConfig: {
    public: {
      GOOGLE_ANALYTICS_ID: variables.GOOGLE_ANALYTICS_ID
    }
  },
  css: [
    "@/assets/css/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  plugins: ["@/plugins/fontawesome.ts", "@/plugins/google_analytics.client.ts"],
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
  },
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons"
    ]
  },
  hooks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "vite:extendConfig"(clientConfig, { isClient }) {
      if (isClient) {
        // eslint-disable-next-line @typescript-eslint/no-extra-semi
        ;(
          clientConfig.build!.rollupOptions!.output as OutputOptions
        ).manualChunks = {
          "@fortawesome/vue-fontawesome": ["@fortawesome/vue-fontawesome"],
          "@fortawesome/fontawesome-svg-core": [
            "@fortawesome/fontawesome-svg-core"
          ],
          "@fortawesome/free-solid-svg-icons": [
            "@fortawesome/free-solid-svg-icons"
          ],
          "@fortawesome/free-regular-svg-icons": [
            "@fortawesome/free-regular-svg-icons"
          ],
          "@fortawesome/free-brands-svg-icons": [
            "@fortawesome/free-brands-svg-icons"
          ],
          "tw-elements": ["tw-elements"],
          "vue-gtag": ["vue-gtag"]
        }
      }
    }
  }
})
