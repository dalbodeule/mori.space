<template>
  <h1 class="text-3xl font-bold underline">Hello World!</h1>
</template>

<script setup lang="ts">
import { useSeoMeta } from "@unhead/vue"

useSeoMeta({
  title: "Hello World!"
})
</script>
