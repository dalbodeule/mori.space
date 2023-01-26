// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    nitro: {
        preset: 'cloudflare'
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
