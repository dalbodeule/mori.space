<template lang="pug">
  .row
    sidebox(:data="[{id: 'info', title: 'Information'}, {id: 'nick', title: 'Nickname Query'}, {id: 'uuid', title: 'UUID Query'}, {id: 'history', title: 'Query History'}]")
    .col.s12.l11.pull-l1(style="min-height: 400px;")
      #info.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title 마인크래프트 유저조회 API
            p ON Demand에서 운영하는 마인크래프트 유저조회 API 설명서입니다.
            p API 사용에는 아무런 제약이 없습니다. API 사용은 모두가 가능합니다.
            p
              | 본 API는 
              b JSONP
              |  를 지원합니다. 
              b URI
              i ?callback=(function name)
              |  으로 사용이 가능합니다.
      #nick.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title Query Nickname
            .card
              .card-content
                p
                  b GET
                  |  https://mcapi.mori.space/nick/
                  b (nickname)
                  i [?callback=(function name)]
            p 이 API는 Nickname 을 기준으로 유저정보를 검색해 반환합니다.
            br
            ul.docs
              li
                b (nickname)
                |  에는 검색할 닉네임으로 바꿔주시면 됩니다.
              li
                i ?callback=(function name)
                |  은 JSONP 반환을 원할 경우 사용하시기 바랍니다.
                |  만약 jQuery.AJAX 를 사용하신다면 dataType 를 'JSONP' 로 설정하여 주시면
                |  문제 없이 사용이 가능합니다.
            br
            b Response Success
            .card
              .card-content
                pre
                  code.language-json 
                  | {
                  |   "uuid": "2e45712e3747428094cb1d39fe7ee434",
                  |   "full_uuid": "2e45712e-3747-4280-94cb-1d39fe7ee434",
                  |   "nick": "small_sunshine",
                  |   "query": "small_sunshine",
                  |   "query_time": 1502880710,
                  |   "cached": false
                  | }
            ul.docs
              li
                b uuid
                |  는 플레이어의 UUID를 반환합니다.
              li
                b full_uuid
                |  는 '-' 로 자릿수가 나뉘어진(?) Full UUID를 반환합니다.
              li
                b nick
                |  은 유저의 현재 닉네임을 반환합니다.
              li
                b query
                |  는 검색한 유저의 닉네임을 반환합니다.
              li
                b query_time
                |  은 검색한 시간을 Unix Timestamp로 반환합니다.
              li
                b cached
                |  는 캐싱된 정보인지(이전에 검색되어 저장된 정보인지) 여부를 반환합니다. 캐싱되는 시간은 5분입니다.
              li
                b expire
                |  는 캐시 데이터가 몇초 뒤 삭제되는지 정수로 제공됩니다.
            br
            b Response Error
            ul.docs
              li
                b HTTP 500
                |  에러의 경우, 서버에서 처리할 수 없는 내용을 검색할 경우 HTTP 500 에러로 처리됩니다.
              li
                b HTTP 404
                |  에러의 경우, 닉네임 필드가 비어있을 경우, 또는 이상한 페이지를 방문하셨을 경우 반환됩니다.
              li
                b HTTP 200
                |  의 경우 다음과 같이 에러가 처리됩니다.
            .card
              .card-content
                pre
                  code.language-json 
                    | {
                    |   "error": true,
                    |   "type": "unregistered nickname",
                    |   "query": "test125",
                    |   "cached": true,
                    |   "expire": 295
                    | }
            ul.docs
              li
                b error
                |  는 에러가 발생하였을 경우 항상 true 가 반환됩니다.
              li
                b type
                |  는 에러 타입을 반환합니다.
              li
                b query
                |  는 검색한 유저의 닉네임을 반환합니다.
              li
                b cached
                |  는 캐싱된 정보인지(이전에 검색되어 저장된 정보인지) 여부를 반환합니다. 캐싱되는 시간은 5분입니다.
              li
                b expire
                |  는 캐시 데이터가 몇초 뒤 삭제되는지 정수로 제공됩니다.
      #uuid.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title Query UUID
            .card
              .card-content
                p
                  b GET
                  |  https://mcapi.mori.space/uuid/
                  b (UUID)
                  i [?callback=(function name)]
            p 이 API는 UUID를 기준으로 유저정보를 검색해 반환합니다.
            br
            ul.docs
              li
                b (UUID)
                |  에는 검색할 닉네임으로 바꿔주시면 됩니다.
              li
                i ?callback=(function name)
                |  은 JSONP 반환을 원할 경우 사용하시기 바랍니다.
                |  만약 jQuery.AJAX 를 사용하신다면 dataType 를 'JSONP' 로 설정하여 주시면
                |  문제 없이 사용이 가능합니다.
            br
            b Response Success
            .card
              .card-content
                pre
                  code.language-json
                  | {
                  |   "uuid": "2e45712e3747428094cb1d39fe7ee434",
                  |   "full_uuid": "2e45712e-3747-4280-94cb-1d39fe7ee434",
                  |   "nick": "small_sunshine",
                  |   "query": "2e45712e3747428094cb1d39fe7ee434",
                  |   "query_time": 1502884804,
                  |   "cached": false
                  | }
            ul.docs
              li
                b uuid
                |  는 플레이어의 UUID를 반환합니다.
              li
                b full_uuid
                |  는 '-' 로 자릿수가 나뉘어진(?) Full UUID를 반환합니다.
              li
                b nick
                |  은 유저의 현재 닉네임을 반환합니다.
              li
                b query
                |  는 검색한 유저의 닉네임을 반환합니다.
              li
                b query_time
                |  은 검색한 시간을 Unix Timestamp로 반환합니다.
              li
                b cached
                |  는 캐싱된 정보인지(이전에 검색되어 저장된 정보인지) 여부를 반환합니다. 캐싱되는 시간은 5분입니다.
              li
                b expire
                |  는 캐시 데이터가 몇초 뒤 삭제되는지 정수로 제공됩니다.
            br
            b Response Error
            ul.docs
              li
                b HTTP 500
                |  에러의 경우, 서버에서 처리할 수 없는 내용을 검색할 경우 HTTP 500 에러로 처리됩니다.
              li
                b HTTP 404
                |  에러의 경우, 닉네임 필드가 비어있을 경우, 또는 이상한 페이지를 방문하셨을 경우 반환됩니다.
              li
                b HTTP 200
                |  의 경우 다음과 같이 에러가 처리됩니다.
            .card
              .card-content
                pre
                  code.language-json 
                  | {
                  |   "error": true,
                  |   "type": "unregistered uuid",
                  |   "query": "2e45712e3747428094cb1d39fe7ee435",
                  |   "cached": false
                  | }
            ul.docs
              li
                b error
                |  는 에러가 발생하였을 경우 항상 true 가 반환됩니다.
              li
                b type
                |  는 에러 타입을 반환합니다.
              li
                b query
                |  는 검색한 유저의 닉네임을 반환합니다.
              li
                b cached
                |  는 캐싱된 정보인지(이전에 검색되어 저장된 정보인지) 여부를 반환합니다. 캐싱되는 시간은 5분입니다.
              li
                b expire
                |  는 캐시 데이터가 몇초 뒤 삭제되는지 정수로 제공됩니다.
      #history.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title Query History
            .card
              .card-content
                p
                  b GET
                  |  https://mcapi.mori.space/history/
                  b (UUID)
                  i [?callback=(function name)]
            p 이 API는 UUID를 기준으로 유저정보 및 닉네임 History 를 검색해 반환합니다.
            br
            ul.docs
              li
                b (UUID)
                |  에는 검색할 닉네임으로 바꿔주시면 됩니다.
              li
                i ?callback=(function name)
                |  은 JSONP 반환을 원할 경우 사용하시기 바랍니다.
                |  만약 jQuery.AJAX 를 사용하신다면 dataType 를 'JSONP' 로 설정하여 주시면
                |  문제 없이 사용이 가능합니다.
            br
            b Response Success
            .card
              .card-content
                pre
                  code.language-json
                    | {
                    |   "uuid": "2e45712e3747428094cb1d39fe7ee434",
                    |   "full_uuid": "2e45712e-3747-4280-94cb-1d39fe7ee434",
                    |   "history": [
                    |   {
                    |     "name": "BJ_Pain"
                    |   },{
                    |     "name": "trusty_people",
                    |     "changedToAt":1466824358000
                    |   },{
                    |     "name": "small_sunshine",
                    |     "changedToAt": 1497515048000
                    |     }
                    |   ],
                    |   "query": "2e45712e3747428094cb1d39fe7ee434",
                    |   "query_time": 1502884865,
                    |   "cached": false
                    | }
                  </code>
            ul.docs
              li
                b uuid
                |  는 플레이어의 UUID를 반환합니다.
              li
                b full_uuid
                |  는 '-' 로 자릿수가 나뉘어진(?) Full UUID를 반환합니다.
              li
                b history
                i  Object
                |  는 유저 Nickname History 를 반환합니다.
              li(style="list-style-type: none !important;")
                ul.docs
                  li
                    b name
                    |  은 그때당시 유저 닉네임입니다.
                  li
                    b changedToAt
                    |  은 Java Timestamp로 닉네임을 바꾼 시간을 반환합니다.
                    br
                    | Java Timestamp 에서 1000을 나눈 값이 Unix Timestamp 입니다.
                    |  참고 바랍니다.
                li
                  b query
                  |  는 검색한 유저의 닉네임을 반환합니다.
                li
                  b query_time
                  |  은 검색한 시간을 Unix Timestamp로 반환합니다.
                li
                  b cached
                  |  는 캐싱된 정보인지(이전에 검색되어 저장된 정보인지) 여부를 반환합니다. 캐싱되는 시간은 5분입니다.
                li
                  b expire
                  |  는 캐시 데이터가 몇초 뒤 삭제되는지 정수로 제공됩니다.
            br
            b Response Error
            ul.docs
              li
                b HTTP 500
                |  에러의 경우, 서버에서 처리할 수 없는 내용을 검색할 경우 HTTP 500 에러로 처리됩니다.
              li
                b HTTP 404
                |  에러의 경우, 닉네임 필드가 비어있을 경우, 또는 이상한 페이지를 방문하셨을 경우 반환됩니다.
              li
                b HTTP 200
                |  의 경우 다음과 같이 에러가 처리됩니다.
            .card
              .card-content
                pre
                  code.language-json 
                  | {
                  |   "error": true,
                  |   "type": "unregistered uuid",
                  |   "query": "2e45712e3747428094cb1d39fe7ee435",
                  |   "cached": false
                  | }
            ul.docs
              li
                b error
                |  는 에러가 발생하였을 경우 항상 true 가 반환됩니다.
              li
                b type
                |  는 에러 타입을 반환합니다.
              li
                b query
                |  는 검색한 유저의 닉네임을 반환합니다.
              li
                b cached
                |  는 캐싱된 정보인지(이전에 검색되어 저장된 정보인지) 여부를 반환합니다. 캐싱되는 시간은 5분입니다.
              li
                b expire
                |  는 캐시 데이터가 몇초 뒤 삭제되는지 정수로 제공됩니다.
</template>

<script>
import '~/assets/api.css'
import Sidebox from '~/components/Sidebox.vue'

import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

import buildmeta from '~/assets/buildmeta'

const title = 'API Docs :: Minecraft :: On Demand'
const meta = buildmeta(title, 'API Docs 입니다.',
  '', 'small_sunshine', null)

export default {
  components: {
    Sidebox
  },
  mounted () {
    Prism.highlightAll()
  },
  head () {
    return {
      title,
      meta
    }
  }
}
</script>
