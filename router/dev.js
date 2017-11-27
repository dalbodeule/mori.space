"use strict";

const express = require('express'),
    router = express.Router(),
    title = require('../utils/title.js');

router.get('/', (req, res) => {
    res.render('dev/index.pug', {
        title: title('Dev'),
        description: '개발 프로그램 정보 페이지입니다.'
    });
})

router.get('/gjmoribot', (req, res) => {
    res.render('dev/gjmoribot.pug', {
        title: title('GJMoriBot', 'Dev'),
        description: 'GJMoriBot 프로그램 정보입니다.'
    });
});

module.exports = router;