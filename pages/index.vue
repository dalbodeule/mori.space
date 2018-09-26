<template lang="pug">
div
  p.menu-label index
  hr
  .content
    h2 제작중입니다....
    p 아직 제작중입니다. 여기는 메인 페이지입니다.
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