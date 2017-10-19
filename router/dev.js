"use strict";

const express = require('express'),
    router = express.Router(),
    title = require('../utils/title.js');

router.get('/', (req, res) => {
    res.render('dev/index.pug', {
        title: title('Dev')
    });
})

router.get('/gjmoribot', (req, res) => {
    res.render('dev/gjmoribot.pug', {
        title: title('GJMoriBot', 'Dev')
    });
});

module.exports = router;