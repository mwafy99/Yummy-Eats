let btn = document.querySelector('#btn');
let overlay = document.querySelector('#overlay');

btn.addEventListener('click', function () {
    overlay.style.display = 'grid';
    overlay.classList.add('overlay-animation');
});