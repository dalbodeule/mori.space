<template lang="pug">
  .row
    sidebox(:data="[{id: 'reason', title: '이유'}, {id: 'how', title: '기부 방법'}]")
    .col.s12.l11.pull-l1(style="min-height: 400px;")
      #reason.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title 기부받는 이유
            p 개발자가 학생인 탓에 개인 사비로는 감당이 힘든 부분이 많이 존재합니다.
              | 그렇기에 서비스 운영과 관련된 용도로 한정하여 사용하기 위하여 기부를 받고 있습니다.
            p 기부를 하셨다고 해도 금전적, 심리적인 보상은 없으며, 이해 부탁드립니다.
      #how.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title 기부 방법
            p 기부는 적극적으로 받고 있습니다.
            p 다음의 연락처로 문의 부탁드립니다.
            ul.introduce
              li
                fa-icon(pack="far" name="envelope")
                | &nbsp;
                a.email(data-email="jioo0224##naver.com")
              li
                fa-icon(pack="far" name="envelope")
                | &nbsp;
                a.email(data-email="webmaster##mori.space")
              li
                fa-icon(pack="fab" name="telegram")
                | &nbsp;
                a(href="https://t.me/small_sunshine", target="_blank") @small_sunshine
              li
                fa-icon(pack="fab" name="discord")
                | &nbsp; @볕뉘#8486
</template>

<script>
import Sidebox from '~/components/Sidebox.vue'

import buildmeta from '~/assets/buildmeta'

const title = 'Donate :: On Demand'
const meta = buildmeta(title, 'Donate',
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
