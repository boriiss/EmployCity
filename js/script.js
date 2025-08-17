document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');

    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
});