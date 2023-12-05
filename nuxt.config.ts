/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type OutputOptions } from "rollup"
import eslintPlugin from "vite-plugin-eslint"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  runtimeConfig: {
    public: {
      GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  plugins: [
    "@/plugins/fontawesome.ts",
    "@/plugins/google_analytics.client.ts",
    "@/plugins/oruga.ts"
  ],
  nitro: {
    preset: "cloudflare"
  },
  vite: {
    plugins: [eslintPlugin()]
  },
  postcss: {
    plugins: {
      "postcss-import": {},
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    "vite:extendConfig"(clientConfig: { build: any }, { isClient }: any) {
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
          "vue-gtag": ["vue-gtag"],
          "@oruga-ui/oruga-next": ["@oruga-ui/oruga-next"],
          "@oruga-ui/theme-bulma": ["@oruga-ui/theme-bulma"]
        }
      }
    }
  }
})
