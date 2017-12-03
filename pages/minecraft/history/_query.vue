<template lang="pug">
  .row#app
    sidebox(:data="[{id: 'search', title: 'Search'}, {id: 'info', title: 'Information'}, {id: 'help', title: 'Help'}]")
    .col.s12.l11.pull-l1(style="min-height: 400px;")
      #search.section.scrollspy
        .card.z-depth-2
          .card-content
              p#query(style="display: none")=query
              p.card-title 마인크래프트 닉네임 변경이력 조회
              p 마인크래프트 UUID으로 닉네임 변경기록을 찾아볼 수 있습니다.
              br
              div(v-if="status == 'searching'")
                .center-align
                  .preloader-wrapper.big.active
                    .spinner-layer.spinner-blue-only
                      .circle-clipper.left
                        .circle
                      .gap-patch
                        .circle
                      .circle-clipper.right
                        .circle
                  br
                  br
                  p 유저를 찾고 있습니다. 잠시만 기다려주세요.
              div(v-else-if="status == false")
                .center-align
                  .card.red.lighten-2
                    .card-content.white-text
                      span.card-title Error
                      p 없는 유저입니다. UUID를 다시 확인해주세요.
              div(v-else-if="status == 'uuid_null'")
                .center-align
                  .card.red.lighten-2
                    .card-content.white-text
                      span.card-title Error
                      p 찾을 유저을 입력해주세요.
              div(v-else-if="status == 'not_user'")
                .center-align
                  .card.red.lighten-2
                    .card-content.white-text
                      span.card-title Error
                      p 올바른 유저정보가 아닙니다. 유저정보를 다시 확인해주세요
              div(v-else-if="status == 'error'")
                .center-align
                  .card.red.lighten-2
                    .card-content.white-text
                      span.card-title Error
                      p 에러가 발생했습니다. 나중에 다시 시도해주세요.
              div(v-else-if="status == true")
                .center-align
                  .card.green.lighten-2
                    .card-content.white-text
                      span.card-title Success
                      p 검색에 성공했습니다.
                  .row
                    .col.s12.m4
                      img(v-bind:src="'https://use.gameapis.net/mc/images/skin/'+user.history[user.history.length - 1].name+'/100/true'")
                    .col.s12.m6
                      table.bordered
                        tbody
                          tr
                              th UUID
                              td {{user.uuid}}
                          tr
                              th 닉네임
                              td {{user.history[0].name}}
                          tr
                              th 검색 시간
                              td {{user.query_time}}
                      table.bordered
                        thead
                          tr
                            th 닉네임
                            th 변경 시점
                        tbody
                          tr(v-for="(item, index) in user.history")
                            td
                              a(v-bind:href="'/minecraft/user/' + item.name", target="blank") {{item.name}}
                            td(v-if="item.changedToAt") {{item.changedToAt}}
                            td(v-else) #
              div(v-if="form == true")
                form.row(v-on:submit.prevent="onSubmit")
                  .input-field.col.s9
                      input#input(placeholder="UUID", type="text", v-model="query")
                      label(for="uuid") UUID
                  .col.s3
                    input.btn.btn-large.green.darken-2(type="submit" value="조회")
      MinecraftInfo
      MinecraftHelp
</template>

<script>
import $ from 'jquery'
import moment from 'moment'
import URI from 'urijs'

import Sidebox from '~/components/Sidebox.vue'
import MinecraftHelp from '~/components/MinecraftHelp.vue'
import MinecraftInfo from '~/components/MinecraftInfo.vue'

import buildmeta from '~/assets/buildmeta'

const title = 'User Query :: Minecraft :: On Demand'
const meta = buildmeta(title, '찾으려 하는 유저의 정보입니다.',
  'https://use.gameapis.net/mc/images/avatar/steve/40', 'small_sunshine', [
    {name: 'og:image:height', content: 40},
    {name: 'og:image:width', content: 40}
  ])

const changeURL = (url) => {
  console.log(url)
  if (typeof history.pushState === 'function') {
    window.history.pushState('', '', url)
  } else {
    document.location.href = url
  }
}

const focus = () => {
  setTimeout(() => {
    $('#input').focus()
    console.log('focused')
  }, 300)
}

export default {
  head () {
    return {
      title,
      meta
    }
  },
  components: {
    Sidebox,
    MinecraftHelp,
    MinecraftInfo
  },
  mounted () {
    focus()
    this.query = this.$route.params.query
    this.onSubmit()
  },
  data () {
    return {
      status: null,
      form: true,
      query: null,
      user: {
        nick: null,
        uuid: null,
        full_uuid: null,
        query_time: null,
        history: []
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.form) {
        this.form = false
        this.user.nick = null
        this.user.uuid = null
        this.user.full_uuid = null
        this.user.query_time = null
        this.user.history = []

        const url = new URI()
        let temp = url.segment()
        const segment = [
          temp[0],
          temp[1]
        ]
        temp = null

        console.log(this.query)
        console.log(segment)
        url.segment(segment)

        if (this.query) {
          if (!/^[a-zA-Z0-9_]{4,16}$/.test(this.query)) {
            changeURL(url.toString())
            console.log('query user is not user')
            this.form = true
            this.status = 'not_user'
            focus()
          }
          try {
            changeURL(url.segment(this.query).toString())

            const app = this

            $.ajax({
              url: 'https://mcapi.mori.space/history/' + app.query,
              dataType: 'jsonp',
              beforeSend () {
                app.status = 'searching'
                app.form = false
              },
              success (data) {
                console.log('ajax success')
                if (!data.error) {
                  console.log('user found')
                  console.log(data)

                  app.user.nick = data.nick
                  app.user.uuid = data.uuid
                  app.user.full_uuid = data.full_uuid

                  for (let i in data.history) {
                    console.log(i)
                    let result = {name: data.history[i].name}
                    if (typeof data.history[i].changedToAt === 'number') {
                      let temp = moment.unix(data.history[i].changedToAt / 1000)
                      result.changedToAt = temp.format('YYYY.MM.D. HH:mm:ss')
                    }
                    app.user.history.push(result)
                  }
                  console.log(app.user.history)

                  let date = moment.unix(data.query_time)

                  app.user.query_time = date.format('YYYY.MM.D. HH:mm:ss')

                  app.status = true
                } else {
                  console.log('user not found')
                  app.status = false
                }
              },
              error (err) {
                console.error('error')
                console.error(err)
                app.status = 'error'
              },
              complete () {
                app.form = true
                focus()
              }
            })
          } catch (e) {
            console.error('error')
            console.error(e)
            this.form = true
            this.status = 'error'
            focus()
          }
        } else {
          changeURL(url.toString())
          console.log('query user is null')
          this.form = true
          this.status = 'user_null'
          focus()
        }
      }
    }
  }
}
</script>

