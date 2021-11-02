const navBtn = document.querySelector(".fa-bars");
const navLink = document.querySelector(".nav__mobile");


const menu = () =>{
    navLink.classList.toggle("nav__mobile-active")
}

navBtn.addEventListener('click', menu)