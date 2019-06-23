<template lang="pug">
// https://codepen.io/andreich1980/pen/OmobJQ
aside.menu
  p.menu-label
    fa-icon(pack="fas" name="home")
    | &nbsp; Home 
  ul.menu-list
    li
      nuxt-link(to="/")
        fa-icon(pack="fas" name="home")
        | &nbsp; Home
  p.menu-label
    fa-icon(pack="fas" name="user-alt")
    | &nbsp; 개발자 정보
  ul.menu-list
    li
      nuxt-link(to="/introduce") 
        fa-icon(pack="fas" name="user-alt")
        | &nbsp; 개발자 정보
  p.menu-label
    fa-icon(pack="fas" name="laptop")
    | &nbsp; Dev
  ul.menu-list
    li
      nuxt-link(to="/dev/kuriyamabot") 
        fa-icon(pack="fab" name="telegram")
        | &nbsp; KuriyamaBot
    li
      nuxt-link(to="/dev/kkutu")
        fa-icon(pack="fas" name="keyboard")
        | &nbsp; 모리끄투
</template>
