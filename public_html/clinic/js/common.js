// Swiper slider
var swiper = new Swiper('.swiper-container', {
 speed: 1000,
 spaceBetween: 150,
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
        1100: { 
            slidesPerView: 1,
            centeredSlides: true,
        }, 
        992: { 
            slidesPerView: 1,
        }, 
        768: { 
            slidesPerView: 1,
        },
        320: { 
            slidesPerView: 1,
        }, 
    },

});

let wow = new WOW(
 {
    boxClass:     'wow',
   animateClass: 'animated',
   offset:       100,
   mobile:       false,
   live:         true,
   callback:     function(box) {
   },
   scrollContainer: null 
 }
);
wow.init();











