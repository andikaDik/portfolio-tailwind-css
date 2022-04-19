// Header - hamburger

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('#nav-menu');

hamburger.onclick = () => {
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
}

// Navbar fixed
window.onscroll = () => {
    const header = document.querySelector('header');

    const fixedNav = header.offsetTop;
    (window.pageYOffset > fixedNav) ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed')
}