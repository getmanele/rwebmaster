// Swiper slider
var swiper = new Swiper('.swiper-container', {
 speed: 1000,
 spaceBetween: 120,
 centeredSlides: false,
 slidesPerView: 'auto',
 breakpointsInverse: true,
 setWrapperSize: true,
 loop: true,
 touchRatio: 1,

 navigation: {
      nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
 },

 breakpoints: {
        1200: { 
            slidesPerView: 2,
        }, 
        992: { 
            slidesPerView: 1,
        }, 
        768: { 
            slidesPerView: 1,
        }, 
    },

});











