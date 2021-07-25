export const swiper = () => new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    541: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});