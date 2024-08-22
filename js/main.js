$(document).ready(function () {

    // 메인 슬라이드
    const mv = new Swiper('.mv', {
        autoplay: {
            delay: 5000, //대기
            disableOnInteraction: false,
        },
        loop: true, //반복
        speed: 1500,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next", //다음
            prevEl: ".swiper-button-prev", //이전
        },
    });



});