<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app"

useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "favicon.png"
    }
  ]
})
</script>
