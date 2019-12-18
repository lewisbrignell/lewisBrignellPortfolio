document.addEventListener("DOMContentLoaded", function () {
    let menuButton = document.querySelector('#showMenu');
    let closeButton = document.querySelector('#hideMenu');
    let mainNav = document.querySelector('#mainNav');

    menuButton.onclick = () => {
        mainNav.style.left = 0;
    }

    closeButton.onclick = () => {
        mainNav.style.left = '-1000px';
    }

    this.onclick = (event) => {
        if (event.explicitOriginalTarget.className === "navAnchor" ) {
            mainNav.style.left = '-1000px';
        }
    }
});

