document.addEventListener("DOMContentLoaded", (e) => {
  const newsletterForm = document.querySelector("#newsletter form");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    if (email) {
      alert(`Obrigado por se inscrever! Você receberá nossas novidades no e-mail: ${email}`);
      e.target.reset();
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  });

  // Adiciona animação suave ao scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Animação simples para os boxes
  const boxes = document.querySelectorAll("#boxes .box");
  boxes.forEach((box, index) => {
    setTimeout(() => {
      box.style.opacity = "0";
      box.style.transform = "translateY(20px)";
      box.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";

      setTimeout(() => {
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";
      }, 300 * (index + 1));
    }, 600);
  });
});
/* Toggle */
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let changed = document.querySelectorAll(".navbar > a.link");
let logo = document.querySelector(".header .logo img");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

/* Menu hamburger */
let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
  navbar.classList.remove("active");
  menu.classList.remove("fa-times");
});

/* Para mudar cor dos links no scroll */
window.addEventListener("scroll", () => {
  for (item of changed) {
    item.classList.toggle("changed", window.scrollY > 0);
    menu.classList.toggle("color", window.scrollY > 0);
    logo.classList.toggle("changedLogo", window.scrollY > 0);
  }
});
/* Cards da Section */
const cards = [
  {
    id: 1,
    title: "Aprenda a Programar",
    paragraph: "Domine as linguagens de programação mais utilizadas no mercado.",
    image: "../image/icon1.png",
    alt: "Ícone de código",
  },
  {
    id: 2,
    title: "Projetos Práticos",
    paragraph: "Aplique seus conhecimentos em projetos reais e construa seu portfólio.",
    image: "../image/icon2.png",
    alt: "Ícone de gerenciamento de projetos",
  },
  {
    id: 3,
    title: "Comunidade Ativa",
    paragraph: "Conecte-se com outros estudantes e profissionais da área de tecnologia.",
    image: "../image/icon3.png",
    alt: "Ícone de chamada em conferência",
  },
  {
    id: 4,
    title: "Cursos Online",
    paragraph: "Acesse nossos cursos de qualquer lugar, a qualquer hora. Aprenda no seu ritmo com conteúdo atualizado.",
    image: "../image/icon4.png",
    alt: "Ícone de cursos online",
  },
  {
    id: 5,
    title: "Projetos Práticos",
    paragraph: "Desenvolva projetos reais e construa um portfólio impressionante para se destacar no mercado.",
    image: "../image/icon5.png",
    alt: "Ícone de projetos práticos",
  },
  {
    id: 6,
    title: "Suporte Personalizado",
    paragraph: "Conte com o apoio de instrutores experientes e uma comunidade ativa de estudantes.",
    image: "../image/icon6.png",
    alt: "Ícone de projetos práticos",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.querySelector(".post-container");

  cards.forEach((card) => {
    const getCards = `
      <div class="box">
        <img
          src="${card.image}"
          alt="${card.alt}"
          title="${card.alt}"
        />
        <h3>${card.title}</h3>
        <p>
          ${card.paragraph}
        </p>
      </div>
    `;
    postContainer.innerHTML += getCards;
  });
});

/* Links do Aside */

const links = [
  {
    id: 1,
    title: "JavaScript para Iniciantes",
    href: "https://www.udemy.com/course/the-complete-javascript-course/",
    description: "Um curso completo de JavaScript para iniciantes e desenvolvedores que querem dominar a linguagem",
  },
  {
    id: 2,
    title: "Dev Front-End da Meta",
    href: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    description: "Desenvolva habilidades prontas para o trabalho em uma carreira sob demanda e obtenha uma credencial da Meta.",
  },
  {
    id: 3,
    title: "Python para Ciência de Dados",
    href: "https://www.datacamp.com/courses/intro-to-python-for-data-science",
    description: "Um curso introdutório de Python focado em aplicações para ciência de dados.",
  },
  {
    id: 4,
    title: "Dev Web Full Stack",
    href: "https://www.freecodecamp.org/learn",
    description: "Plataforma gratuita com trilhas de estudo para desenvolvimento web completo, do básico ao avançado.",
  },
  {
    id: 5,
    title: "Site +PraTi",
    href: "https://maisprati.com.br/",
    description:
      "O site +PraTi oferece uma plataforma educacional voltada para cursos de tecnologia e programação. Com uma abordagem prática e acessível, os cursos são ideais para quem deseja desenvolver novas habilidades na área de TI, desde iniciantes até profissionais que buscam se aperfeiçoar.",
  },
];

/* Usando uma variável para acumular HTML */
let linkContainer = document.querySelector(".link-container");

let linksHTML = ""; // Variável para acumular o HTML

// Constrói o HTML para todos os links
links.forEach((link) => {
  linksHTML += `
      <ul>
        <li>
          <a key="${link.id}"
             class="button-link"
             href="${link.href}"
             target="_blank"
             title="${link.description}">
            ${link.title}
          </a>
        </li>
      </ul>
    `;
});

// Insere todo o HTML acumulado de uma vez
linkContainer.innerHTML = linksHTML;

/* Carrossel */
$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Mostra 3 itens ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    cssEase: "ease-in-out", // Propriedade para transição suave
    responsive: [
      {
        breakpoint: 1200, // Ajusta o número de slides para telas menores
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
