document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');

    hamburgerMenu.addEventListener('click', function () {
        console.log('Hamburger menu clicked'); 
        menu.classList.toggle('active');
    });
});