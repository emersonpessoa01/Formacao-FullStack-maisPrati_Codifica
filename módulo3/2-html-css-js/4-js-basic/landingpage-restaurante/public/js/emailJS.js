/*==================== Formulário de contato ===================*/

(function () {
  emailjs.init("9jXgzGq5KGWzpGQkr"); // Substitua pelo seu User ID
})();

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  // Função para obter a data e hora corrente
  function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    });
  }

  // Função para gerar um número aleatório
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Função para aplicar a máscara ao campo de telefone
  function maskPhone(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ""); // Remove tudo que não é dígito

    if (value.length > 11) {
      value = value.slice(0, 11); // Limita a 11 dígitos
    }

    // Aplica a máscara de acordo com o número de dígitos
    if (value.length <= 10) {
      input.value = value.replace(/^(\d{2})(\d{4})(\d+)/, "($1) $2-$3");
    } else {
      input.value = value.replace(/^(\d{2})(\d{5})(\d+)/, "($1) $2-$3");
    }
  }

  // Função para validar os campos do formulário em tempo real
  function validateField(field, errorElementId, pattern = /.*/) {
    const errorElement = document.getElementById(errorElementId);
    if (field.value.trim() && pattern.test(field.value.trim())) {
      errorElement.classList.add("hidden"); // Remove a mensagem de erro se o campo estiver válido
    } else {
      errorElement.classList.remove("hidden"); // Mostra a mensagem de erro se o campo estiver inválido
    }
  }

  // Adicionando eventos de validação em tempo real para os campos do formulário
  document.getElementById("sendername").addEventListener("input", function () {
    validateField(this, "error-sendername");
  });

  document.getElementById("email").addEventListener("input", function () {
    validateField(this, "error-email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  document.getElementById("tel").addEventListener("input", maskPhone);
  document.getElementById("tel").addEventListener("input", function () {
    validateField(this, "error-tel", /^\(\d{2}\) \d{4,5}-\d{4}$/);
  });

  document.getElementById("foodname").addEventListener("input", function () {
    validateField(this, "error-foodname");
  });

  document.getElementById("message").addEventListener("input", function () {
    validateField(this, "error-message");
  });

  // Função para atualizar a data e hora
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
  updateDateTime();

  // Função de envio do formulário com EmailJS
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let senderName = document.getElementById("sendername").value.trim();
    let email = document.getElementById("email").value.trim();
    let tel = document.getElementById("tel").value.trim();
    let foodName = document.getElementById("foodname").value.trim();
    let message = document.getElementById("message").value.trim();
    let dateTime = getCurrentDateTime(); // Obtém a data e hora atuais
    let randomNumber = generateRandomNumber(1000, 9999); // Gera um número aleatório entre 1000 e 9999

    let hasError = false;

    // Validação dos campos
    if (!senderName) {
      document.getElementById("error-sendername").classList.remove("hidden");
      hasError = true;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById("error-email").classList.remove("hidden");
      hasError = true;
    }
    if (!tel || !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(tel)) {
      document.getElementById("error-tel").classList.remove("hidden");
      hasError = true;
    }
    if (!foodName) {
      document.getElementById("error-foodname").classList.remove("hidden");
      hasError = true;
    }
    if (!message) {
      document.getElementById("error-message").classList.remove("hidden");
      hasError = true;
    }

    if (hasError) {
      return; // Se houver erros, interrompe o envio do formulário
    }

    let templateParams = {
      sender_name: senderName, //Nome do remetente
      sender_email: email, //email do remetente
      sender_tel: tel,
      food_name: foodName,
      message: message,
      date_time: dateTime, // Adiciona a data e hora aos parâmetros do template
      random_number: randomNumber, // Adiciona o número aleatório aos parâmetros do template
      to_email: email, // O email do usuário que fez o pedido
      to_cc: "emersonpessoa011108@gmail.com",
      // Endereço do destinatário principal será adicionado como CC
    };

    emailjs
      .send("service_hcx5f1a", "template_wqp5s2o", templateParams)
      .then((response) => {
        console.log("Email enviado com sucesso!", response.status, response.text);

        // Exibir o modal de sucesso
        modal.classList.remove("hidden");

        // Limpar os campos do formulário após o envio bem-sucedido
        document.getElementById("contact-form").reset();
      })
      .catch((error) => {
        console.log("Erro ao enviar o email:", error);
        alert("Ocorreu um erro ao enviar o pedido. Por favor, tente novamente.");
      });
  });

  // Fechar o modal quando o botão de fechar for clicado
  modalCloseBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
});
