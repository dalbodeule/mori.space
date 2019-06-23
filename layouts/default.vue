<template lang="pug">
#__main
  Header
  .ad
      <!-- On Demand-main -->
      adsbygoogle(ad-slot="4386636415")
      p google AD
  .container
    .columns
      aside.column.is-hidden-mobile.is-3.section
        p.menu-label Menu
        hr
        Sidebar
      .column.is-9.section
        nuxt
  .ad
      adsbygoogle(ad-slot="9403901631")
      p google AD
  Footer
</template>

<style>
[v-cloak] {
    display: none;
}
</style>

<style lang="scss">
  // Import Bulma's core
    @import "~bulma/sass/utilities/_all";

    // Set your colors
    $primary: hsl(171, 100%, 41%);
    $primary-invert: findColorInvert($primary);
    $twitter: #4099FF;
    $twitter-invert: findColorInvert($twitter);

    // Setup $colors to use as bulma classes (e.g. 'is-twitter')
    $colors: (
        "white": ($white, $black),
        "black": ($black, $white),
        "light": ($light, $light-invert),
        "dark": ($dark, $dark-invert),
        "primary": ($primary, $primary-invert),
        "info": ($info, $info-invert),
        "success": ($success, $success-invert),
        "warning": ($warning, $warning-invert),
        "danger": ($danger, $danger-invert),
        "twitter": ($twitter, $twitter-invert)
    );

    // Links
    $link: $primary;
    $link-invert: $primary-invert;
    $link-focus-border: $primary;

    // Import Bulma and Buefy styles
    @import "~bulma";
    @import "~buefy/src/scss/buefy";
    
  div.ad {
      margin-top: 0.8em;
      margin-bottom: 0.8em;
      width: 100%;
      min-height: 60px;
      position: relative;
  }
  div.ad p {
      font-size: 0.8em;
      margin: 0;
      position: absolute;
      bottom: 0;
      right: 0;
      margin-right: 4em;
  }
</style>



<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Header,
    Footer,
    Sidebar
  },
  mounted () {
    document.getElementById("loader-wrapper").style.display = 'none'
  }
}
</script>
