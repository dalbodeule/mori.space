module.exports = {
  mode: "spa",
  /*
  ** Build configuration
  */
  loading: '~/components/loading.vue',
  router: {
    middleware: ['ssr-cookie']
  },
  build: {
    /*
    ** Run ESLint on save
    */
    /* extend (config,  { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },*/
  },
  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
    'nuxt-rfg-icon',
    'nuxt-buefy',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: ['faEnvelope']
        }, {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faTelegram', 'faDiscord', 'faNpm',
            'faGithub', 'faNode']
        }, {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faHome', 'faWrench', 'faRobot',
          'faKeyboard', 'faLaptop', 'faUserAlt']
        }
      ]
    }]
  ],
  'google-analytics': {
    id: 'UA-61070671-7'
  },
  sitemap: {
    path: '/sitemap.xml'
  },
  'rfg-icon': {
    static: true,
    staticPath: '/_favicons/',
    masterPicture: 'static/icon.png'
  },
}
