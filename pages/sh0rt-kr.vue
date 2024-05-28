<template>
  <div class="box content">
    <h1>sh0rt.sh</h1>
    <p>
      <a href="https://workers.cloudflare.com/" target="_blank"
        >Cloudflare Workers</a
      >만을 이용한 URL 단축기 입니다.
    </p>
    <p>
      Nuxtjs3, TypeScript, OAuth2, Workers, D1, AnalyticEngine 을 접목한
      프로젝트입니다.
    </p>
    <p>
      sh0rt.kr는
      <a href="https://nuxt.com/" target="_blank">Nuxtjs3</a>를 이용해서
      만들어졌습니다.
    </p>
    <ul class="introduce">
      <li>
        <font-awesome-icon :icon="['fab', 'github']" />&nbsp;
        <a href="https://github.com/dalbodeule/sh0rt.kr"
          >https://github.com/dalbodeule/sh0rt.kr</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from "@unhead/vue"

useSeoMeta({
  title: "mori.space :: sh0rt.kr",
  ogTitle: "mori.space :: sh0rt.kr",
  ogType: "website",
  ogSiteName: "mori.space",
  ogDescription: "mori.space - 메인 페이지",
  ogImage: "/favicon.png"
})
</script>
