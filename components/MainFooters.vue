<template>
  <footer class="footer">
    <div class="columns">
      <div class="column content has-text-left">
        <b><FontAwesomeIcon :icon="['fas', 'book']" /> Portpolio </b
        ><br ><br >
        이 사이트는 개인 포트폴리오 사이트입니다.
      </div>
      <div class="column is-half"/>
      <div class="column content has-text-left">
        <b>CONTRACT</b> <br ><br >
        <FontAwesomeIcon :icon="['fas', 'envelope']" /> &nbsp;
        webmaster@mori.space
        <br >
        <FontAwesomeIcon :icon="['fas', 'fax']" />&nbsp; + 82 504 480 6498
      </div>
    </div>
    <div class="content has-text-centered">
      <p>© 2024 Copyright : <nuxt-link to="/">mori.space</nuxt-link></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
</script>
