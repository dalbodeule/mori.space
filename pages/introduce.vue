<template lang="pug">
.row
  sidebox(:data="[{id: 'main', title: '기본 신상'}, {id: 'dev', title: '개발 관련'}, {id: 'inter', title: '흥미/관심사'}]")
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
                  i.fa.fa-envelope-o(aria-hidden="true") &nbsp;email: 
                  a.email(data-email="jioo0224@naver.com")
                li
                  i.fa.fa-envelope-o(aria-hidden="true") &nbsp;email: 
                  a.email(data-email="webmaster.mori.space")
                li
                  i.fa.fa-telegram(aria-hidden="true") &nbsp;telegram: 
                  a(href="https://t.me/small_sunshine", target="_blank") small_sunshine
                li
                  p discord: @볕뉘#8486
    #dev.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title 개발 관련
          ul.introduce
            li 주사용 언어: 
              a(href="https://nodejs.org/", target="_blank") Node.js
            li npmjs: 
              a(href="https://www.npmjs.com/~trusty_people", target="_blank") trusty_people
            li 
              i.fa.fa-github 
              a(href="https://github.com/small-sunshines", target="_blank") small-sunshines
    #inter.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title 흥미/관심사
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
import '~/assets/introduce.css'
import Sidebox from '~/components/Sidebox.vue'

import init from '~/assets/init.js'
import buildmeta from '~/assets/buildmeta'

const title = '개발자 정보 :: On Demand'
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
