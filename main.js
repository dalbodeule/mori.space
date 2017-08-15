"use strict";

const express = require('express'), app = express(),
    onFinished = require('on-finished'),
    logger = require('log4js').getLogger(),
    config = require('./config.json');
try {
    if(config.dev == false) {
        logger.level = 'INFO';
        process.env.NODE_ENV = 'production';
    } else if(config.dev == true) {
        logger.level = 'DEBUG';
        process.env.NODE_ENV = 'development';
    } else {
        logger.level = 'ALL';
        process.env.NODE_ENV = 'development';
    }

    //main setting
    app.disable('x-powered-by');
    app.set('trust proxy', config.trustproxy);
    logger.info('trust proxy: '+config.trustproxy);

    //health moniter
    app.all('/health', (req, res) => {
        res.status(200).send().end();
    });

    //logger setup
    app.use((req, res, next) => {
        onFinished(res, (err, res) => {
            logger.info(req.protocol+' '+req.method+' '+res.statusCode+' '+req.ip.replace('::ffff:', '')+' '+req.originalUrl);
        });
        next();
    });

    // ststic setting
    app.use('/materialize', express.static(__dirname + '/node_modules/materialize-css/dist')) //materialize css
    app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist')) //jquery js
    app.use('/material-design-icons-iconfont', express.static(__dirname + '/node_modules/material-design-icons-iconfont/dist')) //material-design-icons-iconfont
    app.use('/vue', express.static(__dirname + '/node_modules/vue/dist')) //vue js
    app.use('/moment', express.static(__dirname + '/node_modules/moment/min')) //moment js
    app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome')) //moment js
    app.use(express.static(__dirname + '/src'));

    //view engine config
    app.set('view engine', 'pug');
    app.set('views', __dirname+'/views');

    //main config
    app.use('/', require('./router/index.js'));

    //minecraft config
    app.use('/minecraft', require('./router/minecraft.js'));

    //error handler
    app.use((err, req, res, next) => {
        if(err) {
            logger.error(err);
            res.status(500).jsonp({error: 'Something went wrong. Please contact the administrator.'}).end();
        }
    });

    const server = app.listen(config.http_port, () => {
        logger.info('expres app on port '+server.address().port);
    });
} catch(e) {
    console.log(e);
}