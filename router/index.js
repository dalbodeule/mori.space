"use strict";

const express = require('express'), router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: global.title
    });
});

module.exports = router;