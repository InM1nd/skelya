
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.1,
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1.1,
  breakpoints: {
    // when window width is >= 768px (desktop)
    801: {
      slidesPerView: 4.1,
    },
  },
});