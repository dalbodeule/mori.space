<template lang="pug">
  .row
    sidebox(:data="[{id: 'screenshot', title: 'Screenshot'}, {id: 'title', title: 'MoriBot'}]")
    .col.s12.l11.pull-l1(style="min-height: 400px;")
      #screenshot.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title Screenshot
            img(src="~static/moribot_screenshot.png", style="width: 100%; height: 100%; display: block;")
      #title.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title MoriBot
            p 이 봇을 만들 당시, 제가 자주 사용하던 다른 검색봇이 자주 작동하지 않았습니다.
              | 그래서 만들게 된 봇이 이 MoriBot 입니다.
            p 이 봇은 구글 검색, 구글 이미지 검색,&nbsp;
              a(href="https://whatanime.ga/", target="_blank") whatanime.ga
              | 를 통한 애니메이션 검색이 가능합니다.
            p 이 봇은&nbsp;
              a(href="https://nodejs.org/", target="_blank") 
                fa-icon(pack="fab" name="node" size="2x")
              | 를 이용해서 만들어졌습니다.
            ul.introduce
              li 
                fa-icon(pack="fab" name="github")
                | &nbsp;
                a(href="https://git.mori.space/small-sunshine/gjmoribot") https://git.mori.space/small-sunshine/gjmoribot
              li 
                fa-icon(pack="fab" name="telegram")
                | &nbsp;
                a(href="https://t.me/gjmoribot") https://t.me/gjmoribot
              li 
                fa-icon(pack="fab" name="telegram")
                | &nbsp; Beta 
                a(href="https://t.me/mori_betabot") https://t.me/mori_betabot
</template>

<script>
import '~/assets/ul.css'
import Sidebox from '~/components/Sidebox.vue'

import buildmeta from '~/assets/buildmeta'

const title = 'MoriBot :: Dev :: On Demand'
const meta = buildmeta(title, 'MoriBot 프로그램 정보입니다.',
  '', 'small_sunshine', null)

export default {
  components: {
    Sidebox
  },
  head () {
    return {
      title,
      meta
    }
  }
}
</script>