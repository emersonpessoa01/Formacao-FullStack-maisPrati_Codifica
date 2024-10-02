let menu = document.querySelector("#menu-bar");
let navbarNav = document.querySelector("#navbarNav");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbarNav.classList.toggle("active");
};

// window.onscroll = ()=>{
//     menu.classList.add(".fa-times");
//     navbarNav.classList.remove("active");
//     if(window.scrollY > 0 ){
//         document.querySelector("#scroll-top").classList.add("active");
//     }else{
//         document.querySelector("#scroll-top").classList.remove("active");
//     }
// }

const getJson = async () => {
  try {
    let url = `https://jsonplaceholder.typicode.com/users/`;
    let response = await fetch(url);
    let json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
getJson();
