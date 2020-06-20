export function preloader(hide = '') {
    const loader = document.querySelector('.loader');

    if (hide === 'show') {
        loader.style.display = 'block';
    } else {
        loader.style.display = 'none';
    }
}