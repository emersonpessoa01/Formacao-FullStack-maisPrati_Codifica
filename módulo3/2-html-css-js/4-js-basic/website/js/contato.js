document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simulating form submission
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.textContent = "Enviando...";
      submitButton.disabled = true;

      setTimeout(() => {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        form.reset();
        submitButton.textContent = "Enviar Mensagem";
        submitButton.disabled = false;
      }, 2000);
    });

    // Simple form validation
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        if (!input.value) {
          input.style.borderColor = "#007bff";
        } else {
          input.style.borderColor = "#ddd";
        }
      });
    });
  });