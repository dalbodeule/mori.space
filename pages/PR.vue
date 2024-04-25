<template>
  <div class="box content">
    <h1>PR</h1>
    <p>
      저는 개발과정 중 라이브러리의 에러를 고치기 위한 PR도 열심히 하고
      있습니다.
    </p>
    <p>
      맞춤법 검사기의 OAuth 구현 중,
      <font-awesome-icon :icon="['fab', 'github']" />&nbsp;
      <a href="https://github.com/tomasvotava/fastapi-sso">fastapi-sso</a>
      라이브러리의 오류를 찾아 수정PR을 하기도 했습니다.
    </p>
    <p>여기에 나와 있지 않은 소프트웨어 관련 기여 활동도 많이 하고 있습니다.</p>
    <p>현재까지의 PR 리스트입니다.</p>
    <ul>
      <li>
        <font-awesome-icon :icon="['fab', 'github']" />&nbsp;
        <a href="https://github.com/tomasvotava/fastapi-sso"
          >https://github.com/tomasvotava/fastapi-sso</a
        >
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'github']" />&nbsp;
        <a href="https://github.com/JJoriping/KKuTu"
          >https://github.com/JJoriping/KKuTu</a
        >
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'github']" />&nbsp;
        <a href="https://github.com/riyadhalnur/node-base64-image"
          >https://github.com/riyadhalnur/node-base64-image</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from "@unhead/vue"

useSeoMeta({
  title: "mori.space :: 쿠리야마봇",
  ogTitle: "mori.space :: 쿠리야마봇",
  ogType: "website",
  ogSiteName: "mori.space",
  ogDescription: "mori.space - 메인 페이지",
  ogImage: "/favicon.png"
})
</script>
