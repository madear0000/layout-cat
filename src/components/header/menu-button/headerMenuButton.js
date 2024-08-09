export default function headerMenuButton() {
    const burgerBlock = document.getElementById('head');
    const burgerBtn = document.getElementById('header__burger');
    let countBurger = 1;

    burgerBtn.addEventListener('click', () => {
        if ((countBurger % 2) != 0) {
            countBurger++;
            burgerBlock.classList.add('open');
        } else {
            countBurger++;
            burgerBlock.classList.remove('open');
        }

    })
}

