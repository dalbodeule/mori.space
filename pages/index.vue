<template>
  <div>
  <div class="content box">
    <h1>블로그로 이동</h1>
      <NuxtLink to="https://blog.mori.space/"
        ><FontAwesomeIcon :icon="['fas', 'blog']" /> &nbsp;블로그로
        이동!</NuxtLink
      >
    </div>
    <div class="content box">
      <h1>끄투 PR 소개페이지</h1>
      <NuxtLink to="/kkutu">소개 페이지 바로가기</NuxtLink>
    </div>
    <div class="content box">
      <h1>Telegram Kuriyamabot 소개페이지</h1>
      <NuxtLink to="/kuriyamabot">소개 페이지 바로가기</NuxtLink>
    </div>
    <div class="content box">
      <h1>sh0rt.kr</h1>
      <NuxtLink to="/sh0rt-kr">소개 페이지 바로가기</NuxtLink>
    </div>
    <div class="content box">
      <h1>Github PR 활동 소개페이지</h1>
      <NuxtLink to="/PR">소개 페이지 바로가기</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from "@unhead/vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

useSeoMeta({
  title: "mori.space",
  ogTitle: "mori.space",
  ogType: "website",
  ogSiteName: "mori.space",
  ogDescription: "mori.space - 메인 페이지",
  ogImage: "/favicon.png",
});
</script>
