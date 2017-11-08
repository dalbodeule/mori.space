window.$ = window.jQuery = require("jquery");
require('../css/init.css');
require('materializecss');
require('iconfont');

$(document).ready(() => {
    $('.sidebox').stick_in_parent({
        parent: $('.row')
    });
});