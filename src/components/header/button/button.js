const headForPhone = document.getElementById('head');
const buttonBurgerMenu = document.getElementById('burger-menu');
let countBurger = 1;

buttonBurgerMenu.addEventListener('click', () => {
    if ((countBurger % 2) != 0) {
        countBurger++;
        headForPhone.classList.add('open');
    } else {
        countBurger++;
        headForPhone.classList.remove('open');
    }
})
