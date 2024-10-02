let menu = document.querySelector("#menu-bar");
let navbarNav = document.querySelector("#navbarNav");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbarNav.classList.toggle("active");
}

// window.onscroll = ()=>{
//     menu.classList.add(".fa-times");
//     navbarNav.classList.remove("active");
//     if(window.scrollY > 0 ){
//         document.querySelector("#scroll-top").classList.add("active");
//     }else{
//         document.querySelector("#scroll-top").classList.remove("active");
//     }
// }