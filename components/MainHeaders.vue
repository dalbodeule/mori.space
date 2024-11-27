<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    style="padding: 0 1rem"
  >
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        <img alt="logo" src="/favicon.png" height="28" width="28" >
      </NuxtLink>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="moriNavbar"
        :class="burgerStatus ? 'is-active' : ''"
        @click="burgerStatus = !burgerStatus.valueOf()"
      >
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    </div>
    <div
      id="moriNavbar"
      class="navbar-menu"
      :class="burgerStatus ? 'is-active' : ''"
    >
      <div class="navbar-start">
        <NuxtLink to="/" class="navbar-item">Home</NuxtLink>
        <NuxtLink
          to="https://blog.mori.space"
          target="_blank"
          class="navbar-item"
          ><FontAwesomeIcon :icon="['fas', 'blog']" />&nbsp; Blog</NuxtLink
        >
        <NuxtLink to="/kkutu" class="navbar-item">끄투</NuxtLink>
        <NuxtLink to="/kuriyamabot" class="navbar-item">쿠리야마봇</NuxtLink>
        <NuxtLink to="/sentence" class="navbar-item">맞춤법 검사기</NuxtLink>
        <NuxtLink to="/sh0rt-kr" class="navbar-item">sh0rt.kr</NuxtLink>
        <NuxtLink to="/PR" class="navbar-item">기타 PR</NuxtLink>
      </div>
      <div class="navbar-end">
        <a href="https://correction.mori.space/" class="navbar-item">
          맞춤법 검사기 이동
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
 
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

const burgerStatus = ref(false);
</script>
