<template lang="pug">
div
  p.menu-label 404 NOT FOUND
  hr
  .content
    h3 없는 페이지입니다.
    br
    br
    nuxt-link.button.is-large.is-info(to="/")
      | 홈페이지로!
</template>

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
      siteName: 'Error :: On Demand',
      desc: 'ERROR',
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
  mounted () {
    init()
  },
  props: ['error']
}
</script>
