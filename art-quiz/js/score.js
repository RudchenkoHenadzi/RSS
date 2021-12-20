"use strict"

const textTitle = document.querySelector('.hidden-title');

let titleNumber = 1;

const categories = {
    '1': 'Score Portrait',
    '2': 'Score Landscape',
    '3': 'Score Still life',
    '4': 'Score Impressionism',
    '5': 'Score Expressionism',
    '6': 'Score Avant-garde',
    '7': 'Score Renaissance',
    '8': 'Score Surrealism',
    '9': 'Score Kitsch',
    '10': 'Score Minimalism'
}

textTitle.innerHTML = categories[titleNumber];

const itemContainer = document.querySelector('.items-container');

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        itemContainer.innerHTML += 
        `
            <div class="item">
                <a href="artist-portrait.html">
                <div class="item__number">1</div>
                <div class="item__title">Portrait</div>
                <div class="item__image"></div>
                <div class="item__progress">0/10</div>
                <div class="item__status-passed"><img src="assets/svg/correct-answer.svg" alt="Пройдено"></div>
                <div class="item__status-not-passed"><img src="assets/svg/wrong-answer.svg" alt="Потрачено"></div>
                </a>
            </div>
        `
    }
}

const item = document.querySelectorAll('.item');
const statusPassed = document.querySelectorAll('.item__status-passed');
const statusNotPassed = document.querySelectorAll('.item__status-not-passed');

let startVisibleItem = 0;
let endVisibleItem = 10;
let pageNumber = 1;

function listVisableItem() {

    for(let i = 0; i < 100; i++) {
        item[i].classList.add('d-hidden');
    }
    
    for(let i = startVisibleItem; i < endVisibleItem; i++) {
        item[i].classList.remove('d-hidden');
    }

}

listVisableItem();

const itemImages = document.querySelectorAll('.item__image');

for(let i = 0; i < 100; i++) {

    itemImages[i].innerHTML = 
    `
        <img src="assets/art/img/${images[i].imageNum}.jpg" alt="${images[i].name}">
    `

}

const prevButton = document.querySelector('.pagination__prev-page');
const nextButton = document.querySelector('.pagination__next-page');

prevButton.addEventListener('click', function(event) {

    if(endVisibleItem > 10) {
        startVisibleItem -= 10;
        endVisibleItem -= 10;
        console.log(startVisibleItem + ' ' + endVisibleItem); // Просмотр счетчика в консоле
        listVisableItem();
    }
    
    if(pageNumber > 1) {
        pageNumber -= 1;
        pagination.innerHTML = pageNumber;
    }

    if(titleNumber > 1) {
        titleNumber -= 1;
        textTitle.innerHTML = categories[titleNumber];
    }

    event.preventDefault();

});

nextButton.addEventListener('click', function(event) {

    if(endVisibleItem < 100) {
        startVisibleItem += 10;
        endVisibleItem += 10;
        console.log(startVisibleItem + ' ' + endVisibleItem); // Просмотр счетчика в консоле
        listVisableItem();
    }
    
    if(pageNumber < 10) {
        pageNumber += 1;
        pagination.innerHTML = pageNumber;
    }

    if(titleNumber < 10) {
        titleNumber += 1;
        textTitle.innerHTML = categories[titleNumber];
    }

    event.preventDefault();

});

const pagination = document.querySelector('.pagination__page > span:first-child');

pagination.innerHTML = pageNumber;

/* Меняем статус картинок */

const img = document.querySelectorAll('.item__image > img');

console.log(img[0].alt);
console.log(JSON.parse(localStorage.getItem('statusImages')));
console.log(JSON.parse(localStorage.getItem('statusImages'))[img[0].alt]);

for(let i = 0; i < 100; i++) {
    if(JSON.parse(localStorage.getItem('statusImages'))[img[i].alt] === true) {
        statusPassed[i].classList.add('active');
    } else {
        statusNotPassed[i].classList.add('active');
    }
}

import images from './images.js';