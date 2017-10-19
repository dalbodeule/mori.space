"use strict";

const express = require('express'),
    router = express.Router(),
    title = require('../utils/title.js');

router.get('/', (req, res) => {
    res.render('minecraft/index.pug', {
        title: title('Minecraft')
    });
})

router.get('/nick', (req, res) => {
    res.render('minecraft/nick.pug', {
        title: title('Nickname Query', 'Minecraft')
    });
});
router.get('/nick/:query', (req, res) => {
    res.render('minecraft/nick.pug', {
        query: req.params.query,
        title: title('Nickname Query', 'Minecraft')
    });
});

router.get('/uuid', (req, res) => {
    res.render('minecraft/uuid.pug', {
        title: title('UUID Query', 'Minecraft')
    });
});
router.get('/uuid/:query', (req, res) => {
    res.render('minecraft/uuid.pug', {
        query: req.params.query,
        title: title('UUID Query', 'Minecraft')
    });
});

router.get('/history', (req, res) => {
    res.render('minecraft/history.pug', {
        title: title('History Query', 'Minecraft')
    });
});
router.get('/history/:query', (req, res) => {
    res.render('minecraft/history.pug', {
        query: req.params.query,
        title: title('History Query', 'Minecraft')
    });
});

router.get('/api', (req, res) => {
    res.render('minecraft/api.pug', {
        title: title('API', 'Minecraft')
    });
});

module.exports = router;