const express = require('express')
const app = express()
const { Nuxt, Builder } = require('nuxt')
const onFinished = require('on-finished')
const logger = require('log4js').getLogger()
const bodyParser = require('body-parser')
const nuxtConfig = require('./nuxt.config.js')
const userAgent = require('express-useragent')
const path = require('path')

const config = {
  trust_proxy: (process.env.trust_proxy || false)
}

try {
  if (process.env.NODE_ENV === 'production') {
    logger.level = 'INFO'
    nuxtConfig.isDev = false
  } else {
    logger.level = 'DEBUG'
    process.env.NODE_ENV = 'development'
    nuxtConfig.isDev = true
  }
  logger.info(process.env.NODE_ENV + ' mode')

  // main setting
  app.disable('x-powered-by')
  app.set('trust proxy', config.trust_proxy)
  logger.info('trust proxy: ' + config.trust_proxy)

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  app.use(userAgent.express())

  // static setup (chrome.html)
  app.use('/static/jquery',
    express.static((path.resolve(__dirname, 'node_modules', 'jquery', 'dist'))))
  app.use('/static/materializecss',
    express.static((path.resolve(__dirname, 'node_modules', 'materialize-css', 'dist'))))

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

  // userAgent Filter setup
  app.use((req, res, next) => {
    if (req.useragent.isIE === false) {
      next()
    } else {
      res.sendFile(path.resolve(__dirname, 'chrome.html'))
    }
  })

  // Init Nuxt.js
  const nuxt = new Nuxt(nuxtConfig)

  // Build only in dev mode
  if (nuxtConfig.isDev) {
    const builder = new Builder(nuxt)
    builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  const server = app.listen(80, () => {
    logger.info('expres app on port ' + server.address().port)
  })
} catch (e) {
  console.log(e)
}
