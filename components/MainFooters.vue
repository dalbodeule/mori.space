<template>
  <footer class="footer">
    <div class="columns">
      <div class="column content has-text-left">
        <b><font-awesome-icon :icon="['fas', 'spinner']" /> Loading... </b
        ><br /><br />
        This site is testing with bulma.
      </div>
      <div class="column is-half"></div>
      <div class="column content has-text-left">
        <b>CONTRACT</b> <br /><br />
        <font-awesome-icon :icon="['fas', 'envelope']" /> &nbsp;
        webmaster@mori.space
        <br />
        <font-awesome-icon :icon="['fas', 'fax']" />&nbsp; + 82 504 480 6498
      </div>
    </div>
    <div class="content has-text-centered">
      <p>© 2023 Copyright : <nuxt-link to="/">mori.space</nuxt-link></p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
