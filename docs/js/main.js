const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    direction: 'horizontal',
    effect: 'fade',
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    pagination: {
      el: ".top__swiper-pagination",
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

const accrodeonTrigger = document.querySelectorAll('.accordeon__trigger');

accrodeonTrigger.forEach(trigger => {
  trigger.addEventListener('click', () => {
    trigger.parentNode.classList.toggle('accordeon__item--active');
    const accordeonContent = trigger.parentNode.querySelector('.accordeon__content')
    if (accordeonContent.style.maxHeight) {
      accordeonContent.style.maxHeight = null;
    } else {
      accordeonContent.style.maxHeight = accordeonContent.scrollHeight + "px";
    }
  })
});