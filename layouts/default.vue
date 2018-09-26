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

<style scoped>
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
