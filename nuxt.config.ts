import eslintPlugin from "vite-plugin-eslint"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
    },
    googleAdsense: {
      id: process.env.GOOGLE_ADSENSE_ID
    }
  },
  modules: ["@nuxtjs/google-adsense", "nuxt-purgecss"],
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
  purgecss: {
    safelist: [/svg.*/, /fa.*/]
  }
})
