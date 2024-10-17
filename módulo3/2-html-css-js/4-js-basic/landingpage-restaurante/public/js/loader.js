/* Loader */
const loader = () => {
  let fadeOut = document.querySelector(".loader-container");
  fadeOut.classList.add("fade-out");
};

const fadeOut = () => {
  setInterval(loader, 3000);
};

window.onload = fadeOut();
