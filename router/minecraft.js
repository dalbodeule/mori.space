"use strict";

const express = require('express'), router = express.Router();

router.get('/', (req, res) => {
    res.render('minecraft/index.pug');
})

router.get('/nick', (req, res) => {
    res.render('minecraft/nick.pug');
});

module.exports = router;