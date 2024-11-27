<template>
  <div class="box content">
    <img src="/kuriyamabot_screenshot.png" alt="">
    <h1>쿠리야마봇</h1>
    <p>
      이 봇을 만들 당시, 제가 자주 사용하던 다른 검색봇이 자주 작동하지
      않았습니다. 그래서 만들게 된 봇이 이 KuriyamaBot 입니다.
    </p>
    <p>
      이 봇은 구글 검색, 구글 이미지 검색,
      <a href="https://trace.moe/" target="_blank">trace.moe</a>를 통한
      애니메이션 검색이 가능합니다.
    </p>
    <p>
      현재는 운영이 중단되었습니다. 아래의 Github에 오픈소스로 공개되어
      있습니다.
    </p>
    <p>
      이 봇은
      <a href="https://nodejs.org/" target="_blank"
        ><FontAwesomeIcon icon="['fab', 'node']" size="2x" /></a
      >를 이용해서 만들어졌습니다.
    </p>
    <ul>
      <li>
        <FontAwesomeIcon :icon="['fab', 'github']" />&nbsp;
        <a href="https://github.com/dalbodeule/kuriyamabot"
          >https://github.com/dalbodeule/kuriyamabot</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from "@unhead/vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

useSeoMeta({
  title: "mori.space :: 쿠리야마봇",
  ogTitle: "mori.space :: 쿠리야마봇",
  ogType: "website",
  ogSiteName: "mori.space",
  ogDescription: "mori.space - 메인 페이지",
  ogImage: "/favicon.png",
});
</script>
