let menuButton = document.querySelector('#showMenu');
let closeButton = document.querySelector('#hideMenu');
let mainNav = document.querySelector('#mainNav');
let navAnchor = document.querySelector('.navAnchor');


menuButton.onclick = () => {
    mainNav.style.left = 0;
    document.querySelector('body').style.overflow = 'hidden';
}

hideMenu = () => {
    mainNav.style.left = '-1000px';
    document.querySelector('body').style.overflow = 'scroll';
}

closeButton.onclick = () => {
    hideMenu();
}

mainNav.addEventListener("click", function () {
    if (event.target.className === "navAnchor") {
        hideMenu();
    }
});
