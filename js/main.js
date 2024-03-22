const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    direction: 'horizontal',
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    // loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});