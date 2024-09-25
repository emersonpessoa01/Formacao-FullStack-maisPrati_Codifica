document.addEventListener("DOMContentLoaded", (event) => {
  const courseButtons = document.querySelectorAll(".course-button");
  courseButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const courseName = e.target
        .closest(".course-card")
        .querySelector(".course-title").textContent;
      alert(
        `Você selecionou o curso: ${courseName}. Em breve, você será redirecionado para mais informações!`
      );
    });
  });

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