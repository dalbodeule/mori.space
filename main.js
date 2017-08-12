"use strict";

const express = require('express'), app = express(),
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
        res.on('finish', () => {
            logger.info(req.protocol+' '+req.method+' '+res.statusCode+' '+req.ip.replace('::ffff:', '')+' '+req.originalUrl);
        });
        next();
    });

    // ststic setting
    app.use('/css', express.static(__dirname + '/node_modules/materialize-css/dist/css')) //materialize css
    app.use('/js', express.static(__dirname + '/node_modules/materialize-css/dist/js')) //materialize js
    app.use('/fonts', express.static(__dirname + '/node_modules/materialize-css/dist/fonts')) //materialize fonts
    app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')) //jquery js
    app.use(express.static(__dirname + '/src'));

    //view engine config
    app.set('view engine', 'pug');
    app.set('views', __dirname+'/views');

    //main config
    app.use('/', require('./router/index.js'));

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