"use strict";

const express = require('express'), app = express(),
    onFinished = require('on-finished'),
    logger = require('log4js').getLogger(),
    config = require('./config.json'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    i18n = require('i18n-express'),
    geolang = require('geolang-express');
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

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true
    }));

    //lang setting
    /*app.use(geolang({
        siteLangs: ['ko', 'en'],
        defaultCountry: 'KR',
    }));
    app.use(i18n({
        translationsPath: __dirname+'/langs',
        siteLangs: ['ko', 'en'],
        defaultLang: 'ko'
    }));*/

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

    //ststic setting
    app.use('/materialize', express.static(__dirname + '/node_modules/materialize-css/dist')); //materialize css
    app.use('/material-design-icons-iconfont', express.static(__dirname + '/node_modules/material-design-icons-iconfont/dist')) //material-design-icons-iconfont
    app.use('/moment', express.static(__dirname + '/node_modules/moment/min')); //moment js
    app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome')); //font awesome font
    app.use('/url.min.js', express.static(__dirname + '/node_modules/js-url/url.min.js')); //js-url 
    app.use(express.static(__dirname + '/public')); //public folder

    //view engine config
    app.set('view engine', 'pug');
    app.set('views', __dirname+'/views');

    //router
    app.use('/', require('./router/index.js'));
    app.use('/minecraft', require('./router/minecraft.js'));
    app.use('/dev', require('./router/dev.js'));
    app.use('/introduce', require('./router/introduce.js'));

    //HTTP 404 page setup
    app.use((req, res, next) => {
        res.status(404).jsonp({error: "HTTP Not Found"}).end();
    });

    //error handler
    app.use((err, req, res, next) => {
        console.log('test'); 
        if(err) {
            logger.error(err);
            res.status(500).jsonp({error: 'Something went wrong. Please contact the administrator.'}).end();
        } else {
            next();
        }
    });
    
    //site title and etc...
    global = {
        title: 'On Demand'
    };

    const server = app.listen(config.http_port, () => {
        logger.info('expres app on port '+server.address().port);
    });
} catch(e) {
    console.log(e);
}