<template lang="pug">
header
  nav.navbar.is-info(role="navigation", aria-label="main navigation")
    .navbar-brand
      nuxt-link.navbar-item(to="/")
        img(src="~/static/icon.png")
        p(style="margin-left: 0.5em;") ON Demand
      a.navbar-burger(role="button" aria-label="menu" aria-expanded="false"
        @click="showNav = !showNav" :class="{ 'is-active': showNav }")
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    .navbar-menu(:class="{ 'is-active': showNav }" @click="toggleNav()")
      .navbar-start
        nuxt-link.navbar-item(to="/")
          fa-icon(pack="fas" name="home")
          | &nbsp; Home
        nuxt-link.navbar-item(to="/introduce")
          fa-icon(pack="fas" name="user-alt")
          | &nbsp; 개발자 정보
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link
            fa-icon(pack="fas" name="laptop")
            | &nbsp; Dev
          .navbar-dropdown
            nuxt-link.navbar-item(to="/dev/moribot")
              fa-icon(pack="fab" name="telegram")
              | &nbsp; MoriBot
            nuxt-link.navbar-item(to="/dev/kkutu")
              fa-icon(pack="fas" name="keyboard")
              | &nbsp; 모리끄투
      .navbar-end
</template> 

<style scoped>
.navbar-item img {
  border-radius: 5px;
}
.navbar-brand .navbar-burger span {
  color: #fff;
}
</style>

<script>
// https://jsfiddle.net/tbonz/80jkq0Ls/

export default {
  data() {
    return {
      showNav: false
    }
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav
    }
  }
}
</script>
