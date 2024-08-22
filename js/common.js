$(document).ready(function () {

    $(".depth2").hide();
    $(".gnb > li").mouseenter(function () {
        $(this).children(".depth2").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).children(".depth2").stop().fadeOut();
    });



    // 전체메뉴
    $(".all_menu").hide();

    $(".sitemap").click(function () {
        $(".all_menu").fadeIn();
    });
    $(".all_close").click(function () {
        $(".all_menu").fadeOut();
    });



});