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
      })
    ]
  },
  modules: [
    ['@nuxtjs/google-analytics'],
    ['@nuxtjs/sitemap'],
    ['qonfucius-nuxt-fontawesome'],
    'nuxt-rfg-icon'
  ],
  plugins: [
    { src: '~/plugins/vue-google-adsense', ssr: false }
  ],
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
  },
  render: {
    /*csp: {
      enabled: true,
      hashAlgorithm: 'sha256',
      allowedSources: ['pagead2.googlesyndication.com', 'www.google-analytics.com',
        'ajax.cloudflare.com', 'adservice.google.co.kr', 'adservice.google.com'],
      policies: {
        'font-src': "'self'"
      }
    }*/
  }
}
