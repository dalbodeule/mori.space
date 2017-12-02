const express = require('express')
const app = express()
const { Nuxt, Builder } = require('nuxt')
const onFinished = require('on-finished')
const logger = require('log4js').getLogger()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('./config.json')
const nuxtConfig = require('./nuxt.config.js')

try {
  if (process.env.NODE_ENV === 'production') {
    logger.level = 'INFO'
  } else if (process.env.NODE_ENV === 'development') {
    logger.level = 'DEBUG'
    nuxtConfig.dev = true
  }
  logger.info(process.env.NODE_ENV + ' mode')

  // main setting
  app.disable('x-powered-by')
  app.set('trust proxy', config.trustproxy)
  logger.info('trust proxy: ' + config.trustproxy)

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(cookieParser())
  /* app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
  })) */

  // health moniter
  app.all('/health', (req, res) => {
    res.status(200).send().end()
  })

  // logger setup
  app.use((req, res, next) => {
    onFinished(res, (err, res) => {
      if (err) logger.error(err)
      logger.info(req.protocol + ' ' + req.method + ' ' + res.statusCode + ' ' + req.ip + ' ' + req.originalUrl)
    })
    next()
  })

  // Init Nuxt.js
  const nuxt = new Nuxt(nuxtConfig)

  // Build only in dev mode
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  const server = app.listen(config.http_port, () => {
    logger.info('expres app on port ' + server.address().port)
  })
} catch (e) {
  console.log(e)
}
