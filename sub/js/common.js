$(document).ready(function () {

    $(".depth2").hide();
    $(".gnb > li").mouseenter(function () {
        $(this).children(".depth2").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).children(".depth2").stop().fadeOut();
    });


});