<template>
  <div class="box content">
    <img alt="" src="/kkutu_screenshot.png" >
    <h1>끄투</h1>
    <p>
      저는 끄투에도 여러가지 기여를 하였습니다. 예를 들자면
      <a href="http://www.passportjs.org/" target="_blank">Passport.js</a> 를
      끄투에 적용하기도 하였습니다.
    </p>
    <p>
      여러가지 개발을 하고 적용하던 도중, 끄투를 즐겨주시는 몇몇 분들이 저도
      서버를 한번 열어보는 것을 제안하셔서 열어보게 되었습니다.
    </p>
    <p>
      끄투 중 소셜로그인 기능의 개선과 그림퀴즈, Webserver의 SSL 적용이 주 기여
      내용입니다.
    </p>
    <p>
      현재는 해티님께서 모리끄투를 인수, 이후 2024년 끄투3가 출시되었습니다.
    </p>
    <p>
      끄투는
      <a href="https://nodejs.org/" target="_blank"
        ><FontAwesomeIcon :icon="['fab', 'node']" size="2x" /></a
      >를 이용해서 만들어졌습니다.
    </p>
    <ul class="introduce">
      <li>
        <FontAwesomeIcon :icon="['fab', 'github']" />&nbsp;
        <a href="https://github.com/hatty163/morikkutu-game"
          >https://github.com/hatty163/morikkutu-game</a
        ><span>&nbsp; Game</span>
      </li>
      <li>
        <FontAwesomeIcon :icon="['fab', 'github']" />&nbsp;
        <a href="https://github.com/hatty163/morikkutu-web"
          >https://github.com/hatty163/morikkutu-web</a
        ><span>&nbsp; Web</span>
      </li>
      <li>
        <FontAwesomeIcon :icon="['fab', 'github']" />&nbsp;
        <a href="https://github.com/hatty163/morikkutu-lib"
          >https://github.com/hatty163/morikkutu-lib</a
        ><span>&nbsp; Lib</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from "@unhead/vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

useSeoMeta({
  title: "mori.space :: 끄투",
  ogTitle: "mori.space :: 끄투",
  ogType: "website",
  ogSiteName: "mori.space",
  ogDescription: "mori.space - 메인 페이지",
  ogImage: "/favicon.png",
});
</script>
