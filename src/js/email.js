window.$ = window.jQuery = require("jquery");

$(document).ready(() => {
    try {
        $('.email').each((index, data) => {
            let email = $(data).data('email').replace(/##/g, '@');
            $(data).text(email);
            $(data).attr('href', 'mailto:'+email);
            $(data).removeAttr('data-email');
        });
        console.log('email display success');
    } catch(e) {
        console.error(e);
    }
});