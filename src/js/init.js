$(document).ready(() => {
    $(".button-collapse").sideNav({
        edge: 'left'
    });
    $(".dropdown-button").dropdown({
        hover: false,
        belowOrigin: true
    });

    let floatPosition = parseInt($('#floatMenu').css('top'));

    $(window).on('scroll', () => {
        let scrollTop = $(window).scrollTop();
        let newPosition = scrollTop + floatPosition+'px';

        $('#floatMenu').stop().animate({
            top: newPosition
        }, 1000);
    }).scroll();
});