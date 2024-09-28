
/* Alerta ao clicar no curso */
document.addEventListener("DOMContentLoaded", (event) => {
  const courseButtons = document.querySelectorAll(".course-button");
  courseButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const courseName = e.target.closest(".course-card").querySelector(".course-title").textContent;
      alert(`Você selecionou o curso: ${courseName}. Em breve, você será redirecionado para mais informações!`);
    });
  });

  /* Efeito Hover nos cards */
  const courseCards = document.querySelectorAll(".course-card");
  courseCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
      card.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
      card.style.transition = "all 0.3s ease-in-out";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    });
  });
});

/* Cards */

const courseCards = [
  {
    id: 1,
    image: "../image/curso1.avif",
    title: "Desenvolvimento Web Fullstack",
    description: "Aprenda a criar aplicações web completas, do front-end ao back-end, utilizando as tecnologias mais modernas do mercado.",
    price: "R$ 1.999,00",
    more: "Saiba Mais",
  },
  {
    id: 2,
    image: "../image/curso2.avif",
    title: "Desenvolvimento Mobile",
    description: "Crie aplicativos móveis incríveis para iOS e Android utilizando React Native e Flutter.",
    price: "R$ 1.799,00",
    more: "Saiba Mais",
  },
  {
    id: 3,
    image: "../image/curso3.avif",
    title: "DevOps e Cloud Computing",
    description: "Aprenda a automatizar, escalar e gerenciar infraestruturas na nuvem com as melhores práticas de DevOps.",
    price: "R$ 2.299,00",
    more: "Saiba Mais",
  },
  {
    id: 4,
    image: "../image/curso4.avif",
    title: "Inteligência Artificial",
    description: "Explore o fascinante mundo da IA, aprendendo sobre redes neurais, deep learning e processamento de linguagem natural.",
    price: "R$ 2.699,00",
    more: "Saiba Mais",
  },
  {
    id: 5,
    image: "../image/curso5.avif",
    title: "Banco de Dados MySQL",
    description: "Aprenda a dominar o MySQL, um dos sistemas de gerenciamento de banco de dados mais utilizados no mundo. Este curso oferece uma abordagem prática e direta, ideal tanto para iniciantes quanto para quem já tem algum conhecimento de bancos de dados.",
    price: "R$ 2.699,00",
    more: "Saiba Mais",
  },
  {
    id: 6,
    image: "../image/curso6.avif",
    title: "UX/UI Design",
    description: "Aprenda a criar interfaces intuitivas e atraentes, focando na experiência do usuário e nas melhores práticas de design.",
    price: "R$ 1.699,00",
    more: "Saiba Mais",
  },
];

/* Iterar os cards */

  let coursesGrid = document.querySelector(".courses-grid");
  courseCards.forEach((card) => {
    const getCouseCards = `
    <div class="course-card">
      <div class="box-image">
        <img
          src="${card.image}"
          alt="${card.title}"
          class="course-image"
        />
      </div>
      <div class="course-content">
        <h3 class="course-title">${card.title}</h3>
        <p class="course-description">
          ${card.description}
        </p>
        <div class="course-meta">
          <span class="course-price">${card.price}</span>
          <button class="course-button">${card.more}</button>
        </div>
      </div>
    </div>
    `;
    coursesGrid.innerHTML += getCouseCards;
  });

