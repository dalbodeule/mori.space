"use strict";

const express = require('express'),
    router = express.Router(),
    title = require('../utils/title.js');

router.get('/', (req, res) => {
    res.render('minecraft/index.pug', {
        title: title('Minecraft')
    });
})

router.get('/user', (req, res) => {
    res.render('minecraft/user.pug', {
        title: title('User Query', 'Minecraft')
    });
});
router.get('/user/:query', (req, res) => {
    res.render('minecraft/user.pug', {
        query: req.params.query,
        title: title('User Query', 'Minecraft')
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