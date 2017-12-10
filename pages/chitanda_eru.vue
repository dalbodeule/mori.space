<template lang="pug">
  .row
    sidebox(:data="[{id: 'easteregg', title: 'EasterEgg'}]")
    .col.s12.l11.pull-l1(style="min-height: 400px;")
      #easteregg.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title 축하합니다! 이스터에그를 찾으셨습니다.
            p 이스터에그를 찾으셨으니 하나 알려드리죠.
            br
            img(src='~/static/hyouka.png' style="width: 100%; height: 100%; display: block;")
            br
            p 주인장은 치탄다 에루를 좋아합니다. 구헤헤
            br
            .row
              .col.s3
              nuxt-link.btn.btn-large.orange.darken-3.white-text.col.s6(to="/") 메인으로 이동
              .col.s3
</template>

<script>
import Sidebox from '~/components/Sidebox.vue'

import init from '~/assets/init.js'
import buildmeta from '~/assets/buildmeta'

const title = 'EasterEgg :: On Demand'
const meta = buildmeta(title, 'Donate',
  '', 'small_sunshine', [
    {name: 'robots', content: 'noindex'}
  ])

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
