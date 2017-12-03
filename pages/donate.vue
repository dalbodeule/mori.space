<template lang="pug">
  .row
    sidebox(:data="[{id: 'info', title: 'Information'}]")
    .col.s12.l11.pull-l1(style="min-height: 400px;")
      #info.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title 제작중입니다....
            p 제작중입니다.
</template>

<script>
import '~/assets/api.css'
import Sidebox from '~/components/Sidebox.vue'

import init from '~/assets/init.js'
import buildmeta from '~/assets/buildmeta'

const title = 'Donate :: On Demand'
const meta = buildmeta(title, 'Donate',
  '', 'small_sunshine', null)

export default {
  components: {
    Sidebox
  },
  mounted () {
    init()
  },
  head () {
    return {
      title,
      meta
    }
  }
}
</script>
