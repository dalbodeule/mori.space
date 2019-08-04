<template lang="pug">
div
  p.menu-label kkutu
  hr
  .box
    .media-content
      .content
        h2 Screenshot
        img(src="~static/kkutu_screenshot.png", style="width: 100%; height: 100%; display: block;")
  .box
    .media-content
      .content
        h2 모리끄투
        p 저는 끄투에도 여러가지 기여를 하였습니다. 예를 들자면 
          a(href="http://www.passportjs.org/", target="_blank") Passport.js
          | 를 끄투에 적용하기도 하였습니다.
        p 여러가지 개발을 하고 적용하던 도중, 끄투를 즐겨주시는 몇몇 분들이 
          | 저도 서버를 한번 열어보는 것을 제안하셔서 열어보게 되었습니다.
        p 현재는 해티님께서 모리끄투를 인수하셨습니다.
        p 끄투는 &nbsp;
          a(href="https://nodejs.org/", target="_blank") 
            fa(:icon="['fab', 'node']" size="2x")
          | &nbsp;를 이용해서 만들어졌습니다.
        ul.introduce
          li 
            fa(:icon="['fab', 'github']")
            | &nbsp; 
            a(href="https://github.com/hatty163/morikkutu-game") https://github.com/hatty163/morikkutu-game
            | &nbsp; 
            span.tag.is-primary Game
          li 
            fa(:icon="['fab', 'github']")
            | &nbsp; 
            a(href="https://github.com/hatty163/morikkutu-web") https://github.com/hatty163/morikkutu-web
            | &nbsp; 
            span.tag.is-success Web
          li 
            fa(:icon="['fab', 'github']")
            | &nbsp; 
            a(href="https://github.com/hatty163/morikkutu-lib") https://github.com/hatty163/morikkutu-lib
            | &nbsp; 
            span.tag.is-link Lib
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
    const title = '모리끄투 :: Dev :: On Demand'
    const { meta, link } = buildmeta({
      title,
      url: 'https://mori.space/dev/kkutu',
      siteName: 'On Demand',
      desc: '모리끄투 개발에 관련된 정보들입니다.',
      image: null,
      width: null,
      height: null,
      author: 'dalbodeule',
      twitterCreator: '@dalbodeule'
    }, [
      {hid: 'theme-color', name: 'theme-color', content: '#37AEE2'}
    ], null)

    return { title, meta, link }
  },
}
</script>