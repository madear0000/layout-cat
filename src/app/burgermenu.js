const burgerBtn = document.getElementById('header__burger');
const burgerBlock = document.getElementById('head');
const burgerMenu = document.getElementById('menu');
const secondSpan = document.getElementById('cross-opacity');
const firstSpan = document.getElementById('cross-first');
const firdSpan = document.getElementById('cross-fird');
let countBurger = 1;


function switchOnBurgerMenu() {
    firstSpan.style.transform = "translateY(0) rotate(45deg)"
    firdSpan.style.transform = "translateY(0) rotate(-45deg)"
    secondSpan.style.opacity = 0;
    burgerBlock.style.background = "#FAC663";
    burgerBlock.style.height = "524px";
    burgerBlock.style.zIndex = "80";
    burgerBtn.style.background = "#FAC663";
    burgerMenu.style.display = "flex";
}

function switchOffBurgerMenu() {
    firstSpan.style.transform = "translateY(-10px)"
    firdSpan.style.transform = "translateY(10px)"
    secondSpan.style.opacity = 1;
    burgerBlock.style.background = "#FFFEFD";
    burgerBlock.style.height = "80px";
    burgerBtn.style.background = "#FFFEFD";
    burgerMenu.style.display = "none";
}

burgerBtn.addEventListener('click', () => {
    if ((countBurger % 2) != 0) {
        countBurger++;
        switchOnBurgerMenu();
    } else {
        countBurger++;
        switchOffBurgerMenu();
    }

})