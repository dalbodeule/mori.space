"use strict";

const express = require('express'), router = express.Router();

router.get('/', (req, res) => {
    res.render('minecraft/index.pug');
})

router.get('/nick', (req, res) => {
    res.render('minecraft/nick.pug');
});
router.get('/nick/:query', (req, res) => {
    res.render('minecraft/nick.pug', {query: req.params.query});
});

router.get('/uuid', (req, res) => {
    res.render('minecraft/uuid.pug');
});
router.get('/uuid/:query', (req, res) => {
    res.render('minecraft/uuid.pug', {query: req.params.query});
});

router.get('/history', (req, res) => {
    res.render('minecraft/history.pug');
});
router.get('/history/:query', (req, res) => {
    res.render('minecraft/history.pug', {query: req.params.query});
});

router.get('/api', (req, res) => {
    res.render('minecraft/api.pug');
});

module.exports = router;