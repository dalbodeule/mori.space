$(document).ready(() => {
    let currentPosition = parseInt($("#sidebox").css("top"));
    $(window).scroll(() => {
        let position = $(window).scrollTop();
        $("#sidebox").stop().animate({
            "top":position+currentPosition+"px"
        },1000);
    });
});