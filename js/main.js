let navMenu = document.querySelector(".header");
let btnOpen = document.querySelector(".nav__button--toggle");
let btnClose = document.querySelector(".nav__menu--toggle");
btnOpen.addEventListener("click", function(){
    navMenu.classList.add("nav__toggle");
});

btnClose.addEventListener("click", function(){
    navMenu.classList.remove("nav__toggle");
});