// Função para buscar os dados da API
const getJson = async () => {
  try {
    let url = "/api/data";
    let response = await fetch(url);
    let { produtos } = await response.json(); // Assume que os produtos estão no array 'produtos'
    console.log(produtos);
    // Chama a função para renderizar os produtos
    renderProducts(produtos);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

// Executa a função de busca de dados
getJson();

// ====================== Função para renderizar os produtos da Section Home================
const renderProducts = (produtos) => {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  // Percorre cada produto na lista de produtos
  produtos.forEach((produto) => {
    // Acessa o conteúdo de cada slide dentro da seção "home"
    const slides = produto.home;

    // Itera sobre os slides (slide1, slide2, slide3, etc.)
    Object.values(slides).forEach((slide) => {
      const getSlide = `
        <div class="swiper-slide">
          <div class="bg-indigo-50 h-96 flex justify-center items-center relative">
            <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex flex-col justify-center items-center">
              <h2
                class="text-white font-bold text-center lg:w-1/2 mb-4"
                style="font-size: clamp(1.5rem, 5vw, 3rem)"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                ${slide.description}
              </h2>
              <a
                href="#contact"
                class="bg-red-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-red-500 transition duration-300 hover:no-underline lowercase first-letter-uppercase"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      `;
      swiperWrapper.innerHTML += getSlide;
    });
  });
};




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
