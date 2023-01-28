import VueGtag from "vue-gtag"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: "mori.space",
      pageTrackerScreenviewEnabled: true,
      config: { id: config.GOOGLE_ANALYTICS_ID }
    },
    useRouter()
  )
})
