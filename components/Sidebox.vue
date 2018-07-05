<template lang="pug">
  .col.s12.l1.push-l11
    .sidebox
      ul.section.table-of-contents
        li(v-for="item in data")
          a(v-bind:href="'#'+item.id") {{ item.title }}
</template>

<script>
export default {
  props: ['data']
}
</script>

