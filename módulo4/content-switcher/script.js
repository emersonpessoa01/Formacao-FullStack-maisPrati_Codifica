const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //Remove a classe 'ativa' de todos os botões e conteúdos
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    //Adiciona a classe 'ativa' ao botão clicado e ao conteúdo correspondente
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});
