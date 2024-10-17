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

/* Data e hora corrente 
function updateDateTime() {
  const now = new Date();
  const formattedDateTime = now.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("current-date-time").innerText = formattedDateTime;
}

// Atualiza a data e hora a cada segundo
setInterval(updateDateTime, 1000);

// Atualiza imediatamente ao carregar a página
updateDateTime(); */
