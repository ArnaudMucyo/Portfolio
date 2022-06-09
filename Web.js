const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".navbar ul");

menu.addEventListener("click",()=>{
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navbar ul li").forEach(n =>
    n.addEventListener("click",()=>{
        menu.classList.remove("active");
        navMenu.classList.remove("active");
    }))