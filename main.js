const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelectorAll("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");

navLinks.forEach((e)=>{
    e.addEventListener("click", () => {
    e.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})});
document.getElementById('menu-btn').addEventListener('click',()=>{
  document.getElementById('nav-links').classList.toggle('open');
})
let theme = document.getElementById('theme_icon')
theme.addEventListener('change',()=>{
    document.body.classList.toggle('dark')
})
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});
