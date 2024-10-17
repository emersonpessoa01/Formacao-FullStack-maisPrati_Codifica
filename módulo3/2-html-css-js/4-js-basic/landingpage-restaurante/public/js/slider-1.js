window.addEventListener("load", () => {
  let swiper = new Swiper(".default-carousel", {
    grabCursor: true,
    loop: true,
    speed: 800, // Duração da transição em milissegundos
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000, // Tempo em milissegundos entre as transições
      disableOnInteraction: false, // O autoplay não será desativado após a interação do usuário
    },
  });
});
