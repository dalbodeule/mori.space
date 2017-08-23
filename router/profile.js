"use strict";

const express = require('express'), router = express.Router();

router.get('/', (req, res) => {
    res.render('profile/index.pug');
});

module.exports = router;