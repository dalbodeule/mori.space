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
      'materialize-css',
      'urijs',
      './assets/dropdown.js',
      './assets/email.js',
      './assets/init.js',
      './assets/jquery.sticky-kit.js',
      './assets/scrollspy.js',
      './assets/sidenav.js',
      './assets/sidebox.js'
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
    ['@nuxtjs/sitemap']
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
  }
}
