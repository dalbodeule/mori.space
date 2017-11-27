"use strict";

const express = require('express'),
    router = express.Router(),
    title = require('../utils/title.js');

router.get('/', (req, res) => {
    res.render('minecraft/index.pug', {
        title: title('Minecraft'),
        description: '마인크래프트 관련 페이지입니다.'
    });
})

router.get('/user', (req, res) => {
    res.render('minecraft/user.pug', {
        title: title('User Query', 'Minecraft'),
        description: '마인크래프트 유저를 찾아보세요.',
        image: 'https://use.gameapis.net/mc/images/avatar/steve/40'
    });
});
router.get('/user/:query', (req, res) => {
    res.render('minecraft/user.pug', {
        query: req.params.query,
        title: title('User Query', 'Minecraft'),
        description: req.params.query+' 에 대한 검색결과 입니다.',
        image: 'https://use.gameapis.net/mc/images/avatar/steve/40'
    });
});

router.get('/history', (req, res) => {
    res.render('minecraft/history.pug', {
        title: title('History Query', 'Minecraft'),
        description: '마인크래프트 유저를 찾아보세요.',
        image: 'https://use.gameapis.net/mc/images/avatar/steve/40'
    });
});
router.get('/history/:query', (req, res) => {
    res.render('minecraft/history.pug', {
        query: req.params.query,
        title: title('History Query', 'Minecraft'),
        description: req.params.query+' 에 대한 검색결과 입니다.',
        image: 'https://use.gameapis.net/mc/images/avatar/steve/40'
    });
});

router.get('/api', (req, res) => {
    res.render('minecraft/api.pug', {
        title: title('API', 'Minecraft'),
        description: '마인크래프트 유저정보 API Docs 입니다.'
    });
});

module.exports = router;