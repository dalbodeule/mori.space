window.$ = window.jQuery = require("jquery");

$(document).ready(() => {
    $('.sidebox').stick_in_parent({
        parent: $('.row')
    });
});