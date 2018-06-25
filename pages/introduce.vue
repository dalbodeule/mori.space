<template lang="pug">
.row
  sidebox(:data="[{id: 'main', title: '기본 신상'}, {id: 'dev', title: '개발 관련'}, {id: 'inter', title: '흥미/관심'}]")
  .col.s12.l11.pull-l1(style="min-height: 400px;")
    #main.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title 기본 신상
          ul.introduce
            li 이름: 최진우
            li 별명: 볕뉘 (small_sunshine)
            li 현재 상태: 고등학생, 개발자
            li 연락처
            li.ul
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
    #dev.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title 개발 관련
          ul.introduce
            li
              fa-icon(pack="fab" name="node")
              | &nbsp;
              a(href="https://nodejs.org/", target="_blank") Node.js
            li
              fa-icon(pack="fab" name="npm")
              | &nbsp;
              a(href="https://www.npmjs.com/~trusty_people", target="_blank") trusty_people
            li 
              fa-icon(pack="fab" name="github")
              | &nbsp;
              a(href="https://github.com/small-sunshines", target="_blank") small-sunshines
    #inter.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title 흥미/관심
          ul.introduce
            li 흥미
            li.ul
              ul.introduce
                li 코딩
                li Node.js
                li Vue.js
                li 일본 애니메이션
            li 관심사
            li.ul
              ul.introduce
                li 웹 프로그래밍
                li 코딩
                li 가상화폐
                li 서버
</template>

<script>
import '~/assets/ul.css'
import Sidebox from '~/components/Sidebox.vue'

import buildmeta from '~/assets/buildmeta'

const title = '개발자 정보 :: On Demand'
const meta = buildmeta(title, '자기소개 페이지입니다.',
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
