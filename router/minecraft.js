"use strict";

const express = require('express'), router = express.Router();

router.get('/', (req, res) => {
    res.render('minecraft/index.pug');
})

router.get('/nick', (req, res) => {
    res.render('minecraft/nick.pug');
});

router.get('/uuid', (req, res) => {
    res.render('minecraft/uuid.pug');
});

router.get('/history', (req, res) => {
    res.render('minecraft/history.pug');
});

router.get('/api', (req, res) => {
    res.render('minecraft/api.pug');
});

module.exports = router;