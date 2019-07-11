<template lang="pug">
div
  p.menu-label index
  hr
  .box
    .media-content
      .content
        h2 어서오세요
        p 여기에는 제가 진행했던 프로젝트들을 모아둔 페이지입니다.
        br
        p
          strike .... 뭔가 더 채워야되는데.. 채울게 없다..
</template>

<style>

</style>

<script>
import buildmeta from '~/assets/buildmeta'

export default {
  components: {

  },
  head () {
    const title = 'On Demand'
    const { meta, link } = buildmeta({
      title,
      url: 'https://mori.space/',
      siteName: 'On Demand',
      desc: 'On Demand 메인 페이지 입니다.',
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