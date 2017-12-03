<template lang="pug">
.row
  sidebox(:data="[{id: 'test', title: '제작중'}]")
  .col.s12.l11.pull-l1(style="min-height: 400px;")
    #test.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title 제작중입니다....
          p 아직 제작중입니다. 여기는 자기소개 페이지입니다.
</template>

<script>
import Sidebox from '~/components/Sidebox.vue'

import init from '~/assets/init.js'
import buildmeta from '~/assets/buildmeta'

const title = 'On Demand'
const meta = buildmeta(title, '자기소개 페이지입니다.',
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
