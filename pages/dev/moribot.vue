<template lang="pug">
div
  p.menu-label MoriBot
  hr
  .box
    .media-content
      .content
        h2 Screenshot
        img(src="~static/moribot_screenshot.png", style="width: 100%; height: 100%; display: block;")
  .box
    .media-content
      .content 
        h2 MoriBot
        p 이 봇을 만들 당시, 제가 자주 사용하던 다른 검색봇이 자주 작동하지 않았습니다.
          | 그래서 만들게 된 봇이 이 MoriBot 입니다.
        p 이 봇은 구글 검색, 구글 이미지 검색,&nbsp;
          a(href="https://whatanime.ga/", target="_blank") whatanime.ga
          | 를 통한 애니메이션 검색이 가능합니다.
        p 이 봇은&nbsp;
          a(href="https://nodejs.org/", target="_blank") 
            fa-icon(pack="fab" name="node" size="2x")
          | 를 이용해서 만들어졌습니다.
        ul.introduce
          li 
            fa-icon(pack="fab" name="github")
            | &nbsp;
            a(href="https://git.mori.space/small-sunshine/gjmoribot") https://git.mori.space/small-sunshine/gjmoribot
          li 
            fa-icon(pack="fab" name="telegram")
            | &nbsp; 
            span.tag.is-primary Master
            | &nbsp; 
            a(href="https://t.me/gjmoribot") https://t.me/gjmoribot
          li 
            fa-icon(pack="fab" name="telegram")
            | &nbsp; 
            span.tag.is-info Beta
            | &nbsp; 
            a(href="https://t.me/mori_betabot") https://t.me/mori_betabot
          li
            fa-icon(pack="fas" name="home")
            | &nbsp;
            a(href="https://moribot.mori.space") https://moribot.mori.space
</template>

<style scoped>
ul.introduce li {
    margin-bottom: 0.5em;
    list-style-type: disc;
}
ul.introduce li.ul {
    list-style-type: none;
}
ul.introduce li i.fa {
    margin-right: 0.5em;
}
ul.introduce {
    margin-left: 1em;
}
</style>

<script>
import buildmeta from '~/assets/buildmeta'

export default {
  components: {

  },
  head () {
    const title = 'MoriBot :: Dev :: On Demand'
    const { meta, link } = buildmeta({
      title,
      url: 'https://mori.space/dev/moribot',
      siteName: 'On Demand',
      desc: 'MoriBot 개발에 관련된 정보입니다.',
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