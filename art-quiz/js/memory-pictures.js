"use strict"

const itemImages = document.querySelectorAll('.item__image');
const itemProgress = document.querySelectorAll('.item__progress');
const itemPlayAgain = document.querySelectorAll('.item__play-again');

let statusImg = {
    '0': false,
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
    '6': false,
    '7': false,
    '8': false,
    '9': false
};

const urlNameImg = {
    '0': 'assets/img/portrait.jpg',
    '1': 'assets/img/landscape.jpg',
    '2': 'assets/img/still-life.jpg',
    '3': 'assets/img/impressionism.jpg',
    '4': 'assets/img/expressionism.jpg',
    '5': 'assets/img/avant-garde.jpg',
    '6': 'assets/img/renaissance.jpg',
    '7': 'assets/img/surrealism.jpg',
    '8': 'assets/img/kitsch.jpg',
    '9': 'assets/img/minimalism.jpg'
}

const scoreResult = {
    '0': localStorage.getItem('portraitScoreQuestions'),
    '1': localStorage.getItem('landscapeScoreQuestions'),
    '2': localStorage.getItem('stilllifeScoreQuestions'),
    '3': localStorage.getItem('impressionismScoreQuestions'),
    '4': localStorage.getItem('expressionismScoreQuestions'),
    '5': localStorage.getItem('avantgardeScoreQuestions'),
    '6': localStorage.getItem('renaissanceScoreQuestions'),
    '7': localStorage.getItem('surrealismScoreQuestions'),
    '8': localStorage.getItem('kitschScoreQuestions'),
    '9': localStorage.getItem('minimalismScoreQuestions'),
}

for(let i = 0; i < 10; i++) {

    itemImages[i].addEventListener('click', function(event) {
        statusImg[i] = 'true';
        localStorage.setItem(`standing-${i}`, statusImg[i]);
    });

    if(localStorage.getItem(`standing-${i}`) === 'true') {
        itemImages[i].innerHTML = `<img src="${urlNameImg[i]}" alt="Пейзаж">`;
        itemProgress[i].innerHTML = `${scoreResult[i]}/10`;
        itemProgress[i].classList.add('active');
        itemPlayAgain[i].classList.add('active-flex');
    }

}