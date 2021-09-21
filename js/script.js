window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        hamburger = document.querySelector('.hamburger'),
        elmClose = document.querySelector('.menu__close'),
        link = document.querySelectorAll('.menu__link'),
        overlay = document.querySelector('.menu__overlay');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });
    elmClose.addEventListener('click', ()=>{
        menu.classList.remove('active');

    });
    overlay.addEventListener('click',()=>{
        menu.classList.remove('active');
    })
    link.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
});