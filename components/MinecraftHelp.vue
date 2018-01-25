<template lang="pug">
  #help.section.scrollspy(style="min-height: 200px")
    .card.z-depth-2
      .card-content
        p.card-title 도움말
          div 
          p
            | 만약 도움이 필요하신 경우 여기로 연락 부탁드립니다.
            br
            i.fa.fa-envelope-o
            | &nbsp; 
            a.email(data-email="webmaster##mori.space")
            br
            i.fa.fa-telegram
            a(href="https://t.me/small_sunshine" target="_blank") &nbsp; @small_sunshine
</template>
