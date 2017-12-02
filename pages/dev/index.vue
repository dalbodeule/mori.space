<template lang="pug">
  .row
    sidebox(:data="[{id: 'gjmoribot', title: 'GJMoriBot'}]")
    .col.s12.l11.pull-l1(style="min-height: 400px;")
      #gjmoribot.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title GJMoriBot
            span
            | Telegram GJMoriBot 소개페이지로 이동합니다.
            br
            br
            nuxt-link.btn.light-blue.lighten-1(to="/dev/gjmoribot") 살펴보기
</template>

<script>
import '~/assets/api.css'
import Sidebox from '~/components/Sidebox.vue'

import init from '~/assets/init.js'

import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import buildmeta from '~/assets/buildmeta'

const title = 'Dev :: On Demand'
const meta = buildmeta(title, '개발 프로그램 정보 페이지입니다.',
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