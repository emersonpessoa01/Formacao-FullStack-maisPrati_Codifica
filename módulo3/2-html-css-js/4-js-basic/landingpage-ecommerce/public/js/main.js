let menu = document.querySelector("#menu-bar");
let navbarNav = document.querySelector("#navbarNav");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbarNav.classList.toggle("active");
};

// Função para buscar os dados da API
const getJson = async () => {
  try {
    let url = "/api/data";
    let response = await fetch(url);
    let { produtos } = await response.json(); // Assume que os produtos estão no array 'produtos'
    console.log(produtos);
    // Chama a função para renderizar os produtos
    // renderProducts(produtos);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

// Executa a função de busca de dados
getJson();

// Função para renderizar os produtos
// const renderProducts = (produtos) => {
//   const swiperWrapper = document.querySelector(".swiper-wrapper");
//   produtos.forEach((produto) => {
//     const getSlide = `
//       <div class="swiper-slide">
//         <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
//           <img src="${produto.special_image}" alt="Slide 1" class="w-full h-full object-cover rounded-2xl" />
//         </div>
//       </div>
//     `;
//     swiperWrapper.innerHTML += getSlide;
//   });
// };

let swiper = new Swiper(".default-carousel", {
  loop: true,
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
