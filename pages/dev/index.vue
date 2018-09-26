<template lang="pug">
div
  p.menu-label functions index
  hr
  .box
    .media-content
      .content
        h3 MoriBot
        span
        | Telegram MoriBot 소개페이지로 이동합니다.
        br
        br
        nuxt-link.button.is-link(to="/dev/moribot") 살펴보기
  .box
    .media-content
      .content
        h3 모리끄투
        span
        | 모리끄투 소개페이지로 이동합니다.
        br
        br
        nuxt-link.button.is-link(to="/dev/kkutu") 살펴보기
</template>

<script>
import buildmeta from '~/assets/buildmeta'

const title = 'Dev :: On Demand'
const meta = buildmeta(title, '개발 프로그램 정보 페이지입니다.',
  '', 'small_sunshine', null)

export default {
  components: {

  },
  head () {
    const title = 'Dev: :: On Demand'
    const { meta, link } = buildmeta({
      title,
      url: 'https://mori.space/dev',
      siteName: 'On Demand',
      desc: '개발 프로그램 정보 페이지입니다.',
      image: null,
      width: null,
      height: null,
      author: 'small_sunshine',
      twitterCreator: '@jioo0224'
    }, [
      {hid: 'theme-color', name: 'theme-color', content: '#37AEE2'}
    ], null)

    return { title, meta, link }
  },
}
</script>