"use strict";

const express = require('express'), router = express.Router();

router.get('/', (req, res) => {
    res.render('minecraft/index.pug', {
        title: 'Minecraft'+' :: '+global.title
    });
})

router.get('/nick', (req, res) => {
    res.render('minecraft/nick.pug', {
        title: 'Nickname Query :: Minecraft'+' :: '+global.title
    });
});
router.get('/nick/:query', (req, res) => {
    res.render('minecraft/nick.pug', {
        query: req.params.query,
        title: 'Nickname Query :: Minecraft'+' :: '+global.title
    });
});

router.get('/uuid', (req, res) => {
    res.render('minecraft/uuid.pug', {
        title: 'UUID Query :: Minecraft'+' :: '+global.title
    });
});
router.get('/uuid/:query', (req, res) => {
    res.render('minecraft/uuid.pug', {
        query: req.params.query,
        title: 'UUID Query :: Minecraft'+' :: '+global.title
    });
});

router.get('/history', (req, res) => {
    res.render('minecraft/history.pug', {
        title: 'History Query :: Minecraft'+' :: '+global.title
    });
});
router.get('/history/:query', (req, res) => {
    res.render('minecraft/history.pug', {
        query: req.params.query,
        title: 'History Query :: Minecraft'+' :: '+global.title
    });
});

router.get('/api', (req, res) => {
    res.render('minecraft/api.pug', {
        title: 'API :: Minecraft'+' :: '+global.title
    });
});

module.exports = router;