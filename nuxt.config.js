const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
  },
  /*
  ** Build configuration
  */
  loading: {
    height: '0.5em'
  },
  router: {
    middleware: ['ssr-cookie']
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'jquery',
      'materialize-css'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  modules: [
    ['@nuxtjs/google-adsense'],
    ['@nuxtjs/google-analytics'],
    ['@nuxtjs/sitemap'],
    ['qonfucius-nuxt-fontawesome']
  ],
  'google-adsense': {
    id: 'ca-pub-2810659463174293',
    pageLevelAds: true,
    analyticsUacct: 'UA-61070671-7',
    analyticsDomainName: 'mori.space'
  },
  'google-analytics': {
    id: 'UA-61070671-7'
  },
  sitemap: {
    path: '/sitemap.xml'
  },
  fontAwesome: {
    packs: [
      {
        package: '@fortawesome/fontawesome-free-regular',
        icons: ['faEnvelope']
      }, {
        package: '@fortawesome/fontawesome-free-brands',
        icons: ['faTelegram', 'faDiscord', 'faNpm', 'faGithub', 'faNode']
      }, {
        package: '@fortawesome/fontawesome-free-solid',
        icons: ['faExclamation']
      }
    ]
  }
}
