"use strict";

const express = require('express'), router = express.Router();

router.get('/', (req, res) => {
    res.render('introduce/index.pug', {
        title: '개인 소개'+' :: '+global.title
    });
});

module.exports = router;