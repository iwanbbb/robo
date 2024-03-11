'use strict';

const homeContentTitle = document.querySelector('.home__content-title');
const btnClick = document.querySelector('.btn-click');

btnClick.addEventListener('click', () => {
    homeContentTitle.textContent = `Привет, Иван`;
    homeContentTitle.style.textTransform = 'uppercase';
})