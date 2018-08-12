const webpack = require('webpack')
const SriPlugin = require('webpack-subresource-integrity')

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
    publicPath: '//mori.space/_nuxt/',
    /*
    ** Run ESLint on save
    */
    extend (config,  { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.output.crossOriginLoading = 'anonymous'
    },
    vendor: [
      'jquery',
      'materialize-css',
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
      }),
      new SriPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: true
      })
    ]
  },
  modules: [
    ['@nuxtjs/google-adsense'],
    ['@nuxtjs/google-analytics'],
    ['@nuxtjs/sitemap'],
    ['qonfucius-nuxt-fontawesome'],
    'nuxt-rfg-icon'
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
  },
  'rfg-icon': {
    static: true,
    staticPath: '/_favicons/',
    masterPicture: 'static/icon.png'
  }
}
