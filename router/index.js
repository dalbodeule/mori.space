"use strict";

const express = require('express'),
    router = express.Router(),
    title = require('../utils/title.js');

router.get('/', (req, res) => {
    res.render('index', {
        title: title(),
        description: '메인 페이지 입니다.'
    });
});

module.exports = router;