<template lang="pug">
  #info.section.scrollspy(style="min-height: 200px")
    .card.z-depth-2
      .card-content
          p.card-title 정보
          div 
            p 
              | 유저 정보는 자체 API서버에서 받아오며, 5분 캐시가 적용됩니다.
              | 자체 API서버는 사용을 원하신다면 
              a(href="/minecraft/api") API Docs
              | 를 확인 부탁드립니다. 유저 스킨은 
              a(href="https://docs.gameapis.net" target="_blank") GameAPIs
              | 에서 받아오고 있습니다.
</template>
