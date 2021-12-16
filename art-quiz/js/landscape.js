"use strict"

const questionsImg = document.querySelectorAll('.questions-artist__item');
const answersQuestion = document.querySelectorAll('.answers > ul');
const dots = document.querySelectorAll('.questions-artist__dots > ul > li');

let counter = 0;
let score = 0;

/*
let score = {
  'portrait': 0,
  'landscape': 0,
  'stilllife': 0,
  'impressionism': 0,
  'expressionism': 0,
  'avantgarde': 0,
  'renaissance': 0,
  'surrealism': 0,
  'kitsch': 0,
  'minimalism': 0
};
*/

for(let i = 0; i < 10; i++) {

  let randomArr = [images[i + 10].author];
  let randomShuffleArr = [];

  for(let j = 0; j < 3; j++) {
    randomArr.push(images[Math.floor(Math.random() * (241 - 0)) + 0].author);
  }

  function shuffle(arr){
    let j, temp;
    for(let i = arr.length - 1; i > 0; i--){
      j = Math.floor(Math.random()*(i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    for(let i = 0; i < 4; i++) {
      randomShuffleArr.push(arr[i]);
    }
    return randomShuffleArr;
  }

  shuffle(randomArr)

  questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i + 10].imageNum}.jpg" alt="${images[i + 10].author}">`;
  answersQuestion[i].innerHTML = `<li>${randomShuffleArr[0]}</li>
                                  <li>${randomShuffleArr[1]}</li>
                                  <li>${randomShuffleArr[2]}</li>
                                  <li>${randomShuffleArr[3]}</li>`;
}

const imgAlt = document.querySelectorAll('.questions-artist__item > img');

function activeElement() {

    questionsImg.forEach(element => {
        element.classList.remove('active');
    });

    answersQuestion.forEach(element => {
        element.classList.remove('active');
    });

    if(counter < 10) {
      questionsImg[counter].classList.add('active');
      answersQuestion[counter].classList.add('active');
      dots[counter].classList.add('active');
    } else {
      questionsImg[counter - 1].classList.add('active');
      answersQuestion[counter - 1].classList.add('active');
      dots[counter - 1].classList.add('active');
    }

};

activeElement();

const answersQuestionLi = document.querySelectorAll('.answers > ul > li');
const modalScore = document.querySelector('.questions-modal-score');
const modalScoreResult = document.querySelector('.questions-modal-score__score');

answersQuestionLi.forEach(element => {
    element.addEventListener('click', function(event) {

      if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
        score += 1;
      } else {
        score += 0;
      }

      if(counter < 10) {
          counter += 1;
      }

      if(counter === 10) {
        modalScoreResult.innerHTML = `${score} / 10`;
        modalScore.classList.add('active');
      }

      localStorage.setItem('portraitScore', score);

      activeElement();
    });
});



import images from './images.js';