const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.nav__close');

burger.addEventListener('click', () => {
    nav.classList.add('nav_active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('nav_active');
});