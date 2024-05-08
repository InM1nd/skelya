
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.1,
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1.1,
  autoplay: {
    delay: 2000, // Задержка между слайдами в миллисекундах
    disableOnInteraction: false, // Отключает остановку автопрокрутки при взаимодействии пользователя с свайпером
  },
  breakpoints: {
    801: {
      slidesPerView: 4.1,
    },
  },
  pauseOnHover: true, // Пауза при наведении
});