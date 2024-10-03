let menu = document.querySelector("#menu-bar");
let navbarNav = document.querySelector("#navbarNav");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbarNav.classList.toggle("active");
};

const getJson = async () => {
  try {
    let url = `https://landingpage-ecommerce-git-master-emersonpessoa01s-projects.vercel.app/api/data`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json.produtos);

    // let home = renderHome(json.produtos);
    // console.log(home);
    // let containerHome = document.getElementById("container-home");
    // containerHome.innerHTML = home;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
getJson();


