<template lang="pug">
  .col.s12.l1.push-l11
    .sidebox
      nuxt-link(to="/donate")
        //Donate icon by Icons8
        img(src="https://png.icons8.com/donate/color/96", title="Donate", style="margin-top: 20px; margin-bottom: -20px")
      ul.section.table-of-contents
        li(v-for="item in data")
          a(v-bind:href="'#'+item.id") {{ item.title }}
</template>

<script>
export default {
  props: ['data']
}
</script>

