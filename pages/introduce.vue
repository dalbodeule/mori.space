<template lang="pug">
div
  p.menu-label introduce
  hr
  .box
    .media-content
      .content
        h3 기본 신상
        ul.introduce
          li 별명: 달보드레 (dalbodeule)
          li 현재 상태: 고등학생, 개발자
          li 연락처
          li.ul
            ul.introduce
              li
                fa(:icon="['far', 'envelope']")
                | &nbsp;
                a(href="mailto:jioo0224@naver.com") jioo0224@naver.com
              li
                fa(:icon="['fab', 'telegram']")
                | &nbsp;
                a(href="https://t.me/dalbodeule", target="_blank") @dalbodeule
              li
                fa(:icon="['fab', 'discord']")
                | &nbsp; 달보드레#8486
  .box
    .media-content
      .content
        h3 개발 관련
        ul.introduce
          li
            fa(:icon="['fab', 'node']")
            | &nbsp;
            a(href="https://nodejs.org/", target="_blank") Node.js
          li
            fa(:icon="['fab', 'npm']")
            | &nbsp;
            a(href="https://www.npmjs.com/~trusty_people", target="_blank") trusty_people
          li 
            fa(:icon="['fab', 'github']")
            | &nbsp;
            a(href="https://github.com/dalbodeule", target="_blank") dalbodeule
  .box
    .media-content
      .content
        h3 흥미/관심
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
    const title = '개발자 정보 :: On Demand'
    const { meta, link } = buildmeta({
      title,
      url: 'https://mori.space/introduce',
      siteName: 'On Demand',
      desc: '자기소개 페이지입니다.',
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
