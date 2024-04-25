<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    style="padding: 0rem 1rem"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img src="/favicon.png" height="28" width="28" />
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="moriNavbar"
        :class="burgerStatus ? 'is-active' : ''"
        @click="burgerStatus = !burgerStatus.valueOf()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      id="moriNavbar"
      class="navbar-menu"
      :class="burgerStatus ? 'is-active' : ''"
    >
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
        <nuxt-link to="/kkutu" class="navbar-item">끄투</nuxt-link>
        <nuxt-link to="/kuriyamabot" class="navbar-item">쿠리야마봇</nuxt-link>
        <nuxt-link to="/sentence" class="navbar-item">맞춤법 검사기</nuxt-link>
        <nuxt-link to="/PR" class="navbar-item">기타 PR</nuxt-link>
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
// eslint-disable-next-line no-undef
let burgerStatus = ref(false)
</script>
