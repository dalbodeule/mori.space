<template lang="pug">
  .row
    sidebox(:data="[{id: 'title', title: 'GJMoriBot'}]")
    .col.s12.l11.pull-l1(style="min-height: 400px;")
      #title.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title GJMoriBot
            p 제작중입니다.
</template>

<script>
import '~/assets/api.css'
import Sidebox from '~/components/Sidebox.vue'

import init from '~/assets/init.js'

import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import buildmeta from '~/assets/buildmeta'

const title = 'GJMoriBot :: Dev :: On Demand'
const meta = buildmeta(title, 'GJMoriBot 프로그램 정보입니다.',
  '', 'small_sunshine', null)

export default {
  components: {
    Sidebox
  },
  mounted () {
    init()

    Prism.highlightAll()
  },
  head () {
    return {
      title,
      meta
    }
  }
}
</script>