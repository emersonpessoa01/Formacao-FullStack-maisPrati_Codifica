var swiper = new Swiper(".swiper-container.slider-2", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  speed: 800,
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000, // Tempo em milissegundos entre as transições
    disableOnInteraction: false, // O autoplay não será desativado após a interação do usuário
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
