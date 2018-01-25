<template lang="pug">
.row
  sidebox(:data="[{id: 'user', title: '유저 조회'}, {id: 'history', title: 'History 조회'}, {id: 'api', title: 'API Docs'}]")
  .col.s12.l11.pull-l1(style="min-height: 400px;")
    .card.z-depth-2.teal.accent-3
      .card-content
        p.card-title 공지
        p 본 서비스는 곧 별개의 사이트로 이관 예정입니다.
    #user.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title 유저 조회
          span
          | 마인크래프트 닉네임이나 UUID로 유저의 정보를 조회할 수 있습니다.
          br
          br
          nuxt-link.btn.light-blue.lighten-1(to="/minecraft/user") 이동하기
    #history.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title 닉네임 변경이력 조회
          span
          | 마인크래프트 UUID로 유저가 사용했던 닉네임을 조회할 수 있습니다.
          br
          br
          nuxt-link.btn.light-blue.lighten-1(to="/minecraft/history") 이동하기
    #api.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title API Docs
          span
          | 마인크래프트 유저정보 조회 API 상세 설명서입니다.
          br
          br
          nuxt-link.btn.light-blue.lighten-1(to="/minecraft/api") 이동하기
</template>

<script>
import Sidebox from '~/components/Sidebox.vue'

import buildmeta from '~/assets/buildmeta'

const title = 'Minecraft :: On Demand'
const meta = buildmeta(title, 'On Demand Minecraft 페이지입니다.',
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
