const swiperSlider = (() => {
  const introSwiper = new Swiper('.js-intro-slider', {
    slidesPerView: 1.3,
    spaceBetween: 10,
    speed: 1000,
    centeredSlides: true,
    autoplay: false,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });

  const popupSwiper = new Swiper('.js-popup-slider', {
    slidesPerView: 1,
    speed: 1000,
    centeredSlides: true,
    autoplay: false,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const init = () => {};

  return {
    init,
  };
})();

export default swiperSlider;
