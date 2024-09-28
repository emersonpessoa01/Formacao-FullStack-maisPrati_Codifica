/* Indicador de navegação */
const indicator = document.querySelector("#indicator");
const maxHeight = document.body.scrollHeight - window.innerHeight;
console.log(maxHeight);

window.addEventListener("scroll", () => {
  const percentage = Math.abs((window.scrollY / maxHeight) * 100);
  console.log(percentage);
  indicator.style.width = `${percentage}%`;
});