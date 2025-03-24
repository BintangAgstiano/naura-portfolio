// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x')
//     navbar.classList.toggle('active');
// }

let iconMenu = document.querySelector('#menu-icon');
let linkNav = document.querySelector('.link-nav-hp');
let isClik = false;
iconMenu.addEventListener('click', function () {
    if (isClik) {
        linkNav.style.left = '0%'
        isClik = false
    } else {
        linkNav.style.left = '-80%'
        isClik = true
    }
})
