"use strict";

const express = require('express'),
    router = express.Router(),
    title = require('../utils/title.js');

router.get('/', (req, res) => {
    res.render('introduce/index.pug', {
        title: title('개인 소개'),
        description: '개인 소개 페이지입니다.'
    });
});

module.exports = router;