let scrollTop = document.querySelector(".scrollTop");
window.onscroll = () => {
  scrollTop.classList.toggle("active", window.scrollY > 0);
};
scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
