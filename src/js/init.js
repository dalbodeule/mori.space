window.$ = window.jQuery = require("jquery");
require('../css/init.css');
require('materializecss');
require('iconfont');
require('font-awesome');

$(document).ready(() => {
    $('.sidebox').stick_in_parent({
        parent: $('.row')
    });
});