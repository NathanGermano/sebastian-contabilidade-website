var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true 
    },

    slidesPerView: 3,
    spaceBetween: 24
});