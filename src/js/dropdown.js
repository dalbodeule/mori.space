window.$ = window.jQuery = require("jquery");

$(document).ready(() => {
    $(".dropdown-button").dropdown({
        hover: false,
        belowOrigin: false
    });
});