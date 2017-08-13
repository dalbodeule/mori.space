$(document).ready(() => {
    $(".button-collapse").sideNav({
        edge: 'left'
    });

    let floatPosition = parseInt($('#floatMenu').css('top'));

    $(window).on('scroll', () => {
        let scrollTop = $(window).scrollTop();
        let newPosition = scrollTop + floatPosition+'px';

        $('#floatMenu').stop().animate({
            top: newPosition
        }, 1000);
    }).scroll();

    Waves.attach('.waves-effect');
    Waves.init();
});