window.onload = function() {
    let scrollTopButton = document.querySelector(".scrollTop");
  
    // Se o botão existir na página
    if (scrollTopButton) {
      window.onscroll = function() {
        if (window.scrollY > 100) {
          scrollTopButton.classList.add("visible");
          scrollTopButton.classList.remove("hidden");
        } else {
          scrollTopButton.classList.add("hidden");
          scrollTopButton.classList.remove("visible");
        }
      };
  
      scrollTopButton.onclick = function() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    }
  };
  