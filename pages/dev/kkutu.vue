<template lang="pug">
  .row
    sidebox(:data="[{id: 'screenshot', title: 'Screenshot'}, {id: 'title', title: '모리끄투'}]")
    .col.s12.l11.pull-l1(style="min-height: 400px;")
      #screenshot.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title Screenshot
            img(src="~static/kkutu_screenshot.png", style="width: 100%; height: 100%; display: block;")
      #title.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title 모리끄투
            p 저는 끄투에도 여러가지 기여를 한 사람입니다. 예를 들자면 
              a(href="http://www.passportjs.org/", target="_blank") Passport.js
              | 를 끄투에 적용하기도 하였습니다.
            p 여러가지 개발을 하고 적용하던 도중, 끄투를 즐겨주시는 몇몇 분들이 
              | 저도 서버를 한번 열어보는 것을 제안하셔서 열어보게 되었습니다.
            p 현재는 해티님께서 모리끄투를 인수, 운영하고 계십니다.
            p 끄투는 &nbsp;
              a(href="https://nodejs.org/", target="_blank") 
                fa-icon(pack="fab" name="node" size="2x")
              | 를 이용해서 만들어졌습니다.
            ul.introduce
              li 
                fa-icon(pack="fab" name="github")
                | &nbsp; Game &nbsp;
                a(href="https://github.com/hatty163/morikkutu-game") https://github.com/hatty163/morikkutu-game
              li 
                fa-icon(pack="fab" name="github")
                | &nbsp; Web &nbsp;
                a(href="https://github.com/hatty163/morikkutu-web") https://github.com/hatty163/morikkutu-web
              li 
                fa-icon(pack="fab" name="github")
                | &nbsp; Lib &nbsp;
                a(href="https://github.com/hatty163/morikkutu-lib") https://github.com/hatty163/morikkutu-lib
</template>

<script>
import '~/assets/ul.css'
import Sidebox from '~/components/Sidebox.vue'

import buildmeta from '~/assets/buildmeta'

const title = '모리끄투 :: Dev :: On Demand'
const meta = buildmeta(title, '모리끄투 정보입니다.',
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