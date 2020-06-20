export function preloader(hide = '') {
    const loader = document.querySelector('.loader');

    hide === 'show' ? loader.style.display = 'block' : loader.style.display = 'none';
}