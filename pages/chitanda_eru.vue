<template lang="pug">
div
  p.menu-label admins
  hr
  .box
    .media-content
      .content
        h2 축하합니다! 이스터에그를 찾으셨습니다.
        p 이스터에그를 찾으셨으니 하나 알려드리죠.
        br
        img(src='~/static/hyouka.png' style="width: 100%; height: 100%; display: block;")
        br
        p 주인장은 치탄다 에루를 좋아합니다. 구헤헤
        br
        .row
          .col.s3
          nuxt-link.button.is-warning(to="/") 메인으로 이동
          .col.s3
</template>


<script>
import buildmeta from '~/assets/buildmeta'

export default {
  components: {

  },
  head () {
    const title = 'EasterEgg : On Demand'
    const { meta, link } = buildmeta({
      title,
      url: 'https://mori.space/chitanda_eru',
      siteName: 'On Demand',
      desc: '이스터에그입니다!',
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
