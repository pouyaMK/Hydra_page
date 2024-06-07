let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    // slidesPerGroup: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',

    // loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEL: ".swiper-button-next",
        prevEL: ".swiper-button-prev",
    },

    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        600:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        }

    }
});


// hamberger menu
