"use strict";

const express = require('express'), router = express.Router();

router.get('/', (req, res) => {
    res.render('dev/index.pug', {
        title: 'Dev'+' :: '+global.title
    });
})

router.get('/gjmoribot', (req, res) => {
    res.render('dev/gjmoribot.pug', {
        title: 'GJMoriBot :: Dev'+' :: '+global.title
    });
});

module.exports = router;