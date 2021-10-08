const swiperPress = new Swiper('.swiper-press', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
});

const swiperGallery = new Swiper('.swiper-gallery', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: '.gallery__next-btn',
    prevEl: '.gallery__prev-btn',
  },
});
