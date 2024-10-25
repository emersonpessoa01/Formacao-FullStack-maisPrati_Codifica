// Função para buscar os dados da API
const getJson = async () => {
  try {
    const baseURL = window.location.hostname === "localhost" ? "http://localhost:3000" : "https://landingpage-restaurante-three.vercel.app";

    const url = `${baseURL}/api/data/`;
    const response = await fetch(url);
    const { produtos } = await response.json();
    console.log(produtos);
    renderProducts(produtos);
    renderAbout(produtos);
    renderSpeciality(produtos);
    renderTestimonials(produtos);
    renderService(produtos);
    renderWorks(produtos)
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

// Executa a função de busca de dados
getJson();

// ====================== Função da Section Home================
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

// ====================== Função da Section Sobre ================
const renderAbout = (produtos) => {
  const aboutSection = document.getElementById("about");

  // Limpa a seção "Sobre" para evitar duplicações
  aboutSection.innerHTML = "";

  // Cria o título da seção
  const titleHTML = `
    <h2 class="text-center text-3xl bordered-title mb-10">
      Sobre
      <span class="text-danger bordered-title p-0 m-0 font-bold">Nós</span>
    </h2>
  `;
  aboutSection.innerHTML += titleHTML;

  // Itera pelos produtos para preencher a seção "Sobre"
  produtos.forEach((produto) => {
    const historia = produto.about; //Para acessar os dados da hist´ria
    const valores = produto.about.our_values; //Para acessar os dados dos valores
    const equipe = produto.about.our_team; // Para acessar os dados da equipe
    const cta = produto.about.cta; //Para acessar os dados do cta

    // Adiciona a história
    const historiaHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center mb-16">
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="600">
          <img src="${historia.team_cooks}" alt="Equipe Sabores Autênticos na cozinha" class="rounded-lg shadow-lg" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="800">
          <h2 class="text-3xl font-bold mb-4">${historia.title}</h2>
          <p class="text-gray-700 mb-4 first-letter-uppercase lowercase">
            ${historia.paragraph1}
          </p>
          <p class="text-gray-700 mb-4 first-letter-uppercase lowercase">
             ${historia.paragraph2}
          </p>
        </div>
      </div>
    `;
    aboutSection.innerHTML += historiaHTML;

    // Adiciona os valores
    const valoresHTML = `
      <div class="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 class="text-3xl font-bold mb-6 text-center" data-aos="flip-left" data-aos-easing="linear" data-aos-duration="600">${valores.title}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto font-bold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <h3 class="text-xl font-bold text-green-700 mb-2">${valores.value1.title}</h3>
            <p class="text-gray-600 lowercase first-letter-uppercase">
            ${valores.value1.description}
            </p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="800">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto font-bold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <h3 class="text-xl font-bold mb-2">${valores.value2.title}</h3>
            <p class="text-gray-600 lowercase first-letter-uppercase">
            ${valores.value2.description}
            </p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1000">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto font-bold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <h3 class="text-xl font-bold text-green-700 mb-2">${valores.value3.title}</h3>
            <p class="text-gray-600 lowercase first-letter-uppercase">
            ${valores.value3.description}
            </p>
          </div>
        </div>
      </div>
    `;
    aboutSection.innerHTML += valoresHTML;

    // Adiciona a equipe
    const equipeHTML = `
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-6 text-center" data-aos="flip-left" data-aos-easing="linear" data-aos-duration="600">${equipe.title}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${[1, 2, 3]
            .map((index) => {
              const team = equipe[`team${index}`]; // Acessa dinamicamente team1, team2, team3 com base no índice
              // Cálculo do delay: 600ms + (index * 200ms)
              const delay = 600 + (index - 1) * 200;

              return `
                <div
                  class="bg-white rounded-lg shadow-lg overflow-hidden"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay=${delay}
                >
                  <img src="${team.image}" alt="${team.name}" class="w-full h-64 object-cover" width="300" height="300" />
                  <div class="p-4">
                    <h3 class="text-xl font-bold mb-2">${team.name}</h3>
                    <p class="text-gray-600 mb-2">${team.role}</p>
                    <p class="text-gray-700 lowercase first-letter-uppercase">
                      ${team.description}
                    </p>
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    `;

    aboutSection.innerHTML += equipeHTML;

    // Adiciona a seção "Junte-se a Nós"
    const junteSeHTML = `
      <div class="bg-red-100 rounded-lg p-8">
        <h2 class="text-3xl font-bold mb-6 text-center lowercase first-letter-uppercase" data-aos="flip-left" data-aos-easing="linear" data-aos-duration="600">${cta.title}</h2>
        <p class="text-gray-700 text-center mb-6 lowercase first-letter-uppercase" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1000">
         ${cta.description}
        </p>
        <div class="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1400">
          <a href="#contact" class="bg-red-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-red-500 transition duration-300 hover:no-underline lowercase first-letter-uppercase">Entre em Contato</a>
        </div>
      </div>
    `;
    aboutSection.innerHTML += junteSeHTML;
  });
};

// =================== Função Section Nossa Especialidade ================
const renderSpeciality = (produtos) => {
  const specialitySection = document.getElementById("speciality");

  specialitySection.innerHTML = "";
  //Adiciona seção Nossa Especialiade

  produtos.forEach((produto) => {
    const especialidade = produto.our_speciality;
    const specialityHTML = `
      <div class="container">
        <h2 class="text-center text-3xl bordered-title my-10">
          Nossa
          <span class="text-danger bordered-title p-0 m-0 font-bold">Especialidade</span>
        </h2>
        <div class="row mb-10">
        ${[1, 2, 3, 4, 5, 6]
          .map((index) => {
            const card = especialidade[`card${index}`];
            return `
          <div class="col-md-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="600">
            <div class="card">
              <img src="${card.image}" alt=${card.title} title=${card.title} class="card-img-top" />
              <div class="card-body">
                <img src="${card.icon}" class="icon" alt=${card.title} title=${card.title} />
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text text-center text-gray-700">
                  ${card.description}
                </p>
              </div>
            </div>
          </div>
          `;
          })
          .join("")} 
        </div>
      </div>
    `;
    specialitySection.innerHTML += specialityHTML;
  });
};

// =================== Função Section Testemunhos  ================

const renderTestimonials = (produtos) => {
  const testimonialSection = document.getElementById("testimonials");

  testimonialSection.innerHTML = "";
  // Adiciona seção Depoimentos
  produtos.forEach((produto) => {
    const testemunho = produto.testimonials;
    const testemunhoHTML = `
      <h2 class="text-center text-3xl bordered-title my-10">
        Depoimentos de
        <span class="text-danger bordered-title p-0 m-0 font-bold">clientes</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${[1, 2, 3]
          .map((index) => {
            let card = testemunho[`card${index}`];
            // Cálculo do delay: 600ms + (index * 200ms)
            const delay = 600 + (index - 1) * 200;
            return `
            <div
              class="bg-gray-800 rounded-lg shadow-lg mt-10 mb-4 pt-16 pb-8 px-6 relative transform transition-transform duration-300 hover:translate-y-1 md:mb-0 card-hover border-8 border-solid border-white box"
              data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="${delay}"
            >
              <img
                src="${card.image}"
                alt="Foto de ${card.name}, mulher sorrindo com cabelos castanhos"
                class="w-28 h-28 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2 border-8 border-white shadow-md object-cover"
              />
              <div class="text-center d-flex flex-column justify-between gap-2">
                <h3 class="text-xl font-bold text-gray-800 my-2">${card.name}</h3>
                <div class="text-yellow-400 text-xl">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p class="text-gray-100 italic normal-case first-letter-uppercase">
                  ${card.description}
                </p>
              </div>
            </div>
          `;
          })
          .join("")}
      </div>
    `;
    testimonialSection.innerHTML += testemunhoHTML;
  });
};

// ================== Função Section Serviços ================
const renderService = (produtos) => {
  const serviceSction = document.getElementById("service");
  serviceSction.innerHTML = "";
  // Adiciona seção Serviços
  produtos.forEach((produto) => {
    const servico = produto.our_services;
    const serviceHTML = `
      <h2 class="text-center text-3xl bordered-title mb-10">
        Nossos
        <span class="text-danger bordered-title p-0 m-0 font-bold">Serviços</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      ${[1, 2, 3]
        .map((index) => {
          let card = servico[`card${index}`];
          // Cálculo do delay: 600ms + (index * 200ms)
          const delay = 600 + (index - 1) * 200;

          return `
        <div class="bg-white rounded-lg shadow-lg p-6 text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay=${delay}>
          <div class="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">${card.title}</h3>
          <p class="text-gray-600 normal-case">
            ${card.description}
          </p>
        </div>
        `;
        })
        .join("")}
      </div>
    `;
    serviceSction.innerHTML += serviceHTML;
  });
};

// ================== Função Section Funcionamento ================
const renderWorks = (produtos) => {
  const workSection = document.getElementById("works");
  workSection.innerHTML = "";
  // Adiciona seção Funcionamento
  produtos.forEach((produto) => {
    const funcionamento = produto.works;
    const formaPagamento = produto.works.payment_method;

    const workHTML = `
      <div class="container">
        <h2 class="text-center mb-5 text-3xl" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="600">Como <span class="text-danger">funciona</span></h2>
        <div class="row">
          ${[1, 2, 3, 4]
            .map((index) => {
              let card = funcionamento[`card${index}`];
              // Cálculo do delay: 600ms + (index * 200ms)
              let delay = 600 + (index - 1) * 200;
              return `
              <div class="col-md-3 text-center mb-0" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay=${delay}>
              <!-- <i class="fas fa-hamburger step-icon mb-3"></i> -->
              <img src="${card.image}" alt="" srcset="" />
              <h4 class="normal-case">${card.title}</h4>
              </div>
            `;
            })
            .join("")}
        </div>
      </div>
    `;
    workSection.innerHTML += workHTML;

    const paymentHTML = `
      <div class="container mx-auto px-4">
        <h2 class="text-center my-5 text-3xl normal-case" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="600">Formas de <span class="text-danger">Pagamento</span></h2>
        <div class="flex justify-center items-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="800">
          <img src="${formaPagamento.image}" alt="Formas de pagamento" class="w-full max-w-xl border-1 rounded-2">
        </div>
      </div>
    `;
    workSection.innerHTML += paymentHTML;
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
