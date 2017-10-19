"use strict";

const express = require('express'),
    router = express.Router(),
    title = require('../utils/title.js');

router.get('/', (req, res) => {
    res.render('introduce/index.pug', {
        title: title('개인 소개')
    });
});

module.exports = router;