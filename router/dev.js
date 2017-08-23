"use strict";

const express = require('express'), router = express.Router();

router.get('/', (req, res) => {
    res.render('dev/index.pug');
})

router.get('/gjmoribot', (req, res) => {
    res.render('dev/gjmoribot.pug');
});

module.exports = router;