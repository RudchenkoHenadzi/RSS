"use strict"

const questionsImg = document.querySelectorAll('.questions-artist__item');
const answersQuestion = document.querySelectorAll('.answers > ul');
const dots = document.querySelectorAll('.questions-artist__dots > ul > li');
const questionsModalRightAnswer = document.querySelector('.questions-modal-answer');
const questionsModalAnswerImages = document.querySelector('.questions-modal-answer__images');
const questionsModalAnswerTitle = document.querySelector('.questions-modal-answer__title');
const questionsModalAnswerDescription = document.querySelector('.questions-modal-answer__description');

/* Работа с аудио */

const audioCorrect = new Audio();
const audioWrong = new Audio();

audioCorrect.src = 'assets/audio/correct-sound.mp3';
audioWrong.src = 'assets/audio/wrong-sound.mp3';

audioCorrect.volume = (1 / 100) * +localStorage.getItem('count');
audioWrong.volume = (1 / 100) * +localStorage.getItem('count');

/* Конец */

let counter = 0;
let score = 0;

/* Начисление очков для каждой из категорий */

let scoreQuestion = {
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
}

/* Конец */

/* Заполнение HTML */

for(let i = 0; i < 10; i++) {

  let randomArr = [images[i].author];
  let randomShuffleArr = [];

  if(document.body.id === 'portrait') {
    randomArr = [images[i].author];
  } else if(document.body.id === 'landscape') {
    randomArr = [images[i + 10].author];
  } else if(document.body.id === 'still-life') {
    randomArr = [images[i + 20].author];
  } else if(document.body.id === 'impressionism') {
    randomArr = [images[i + 30].author];
  } else if(document.body.id === 'expressionism') {
    randomArr = [images[i + 40].author];
  } else if(document.body.id === 'avant-garde') {
    randomArr = [images[i + 50].author];
  } else if(document.body.id === 'renaissance') {
    randomArr = [images[i + 60].author];
  } else if(document.body.id === 'surrealism') {
    randomArr = [images[i + 70].author];
  } else if(document.body.id === 'kitsch') {
    randomArr = [images[i + 80].author];
  } else {
    randomArr = [images[i + 90].author];
  }

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

  //questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i].imageNum}.jpg" alt="${images[i].author}">`;

  if(document.body.id === 'portrait') {
    questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i].imageNum}.jpg" alt="${images[i].author}">`;
  } else if(document.body.id === 'landscape') {
    questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i + 10].imageNum}.jpg" alt="${images[i + 10].author}">`;
  } else if(document.body.id === 'still-life') {
    questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i + 20].imageNum}.jpg" alt="${images[i + 20].author}">`;
  } else if(document.body.id === 'impressionism') {
    questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i + 30].imageNum}.jpg" alt="${images[i + 30].author}">`;
  } else if(document.body.id === 'expressionism') {
    questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i + 40].imageNum}.jpg" alt="${images[i + 40].author}">`;
  } else if(document.body.id === 'avant-garde') {
    questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i + 50].imageNum}.jpg" alt="${images[i + 50].author}">`;
  } else if(document.body.id === 'renaissance') {
    questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i + 60].imageNum}.jpg" alt="${images[i + 60].author}">`;
  } else if(document.body.id === 'surrealism') {
    questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i + 70].imageNum}.jpg" alt="${images[i + 70].author}">`;
  } else if(document.body.id === 'kitsch') {
    questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i + 80].imageNum}.jpg" alt="${images[i+ 80].author}">`;
  } else {
    questionsImg[i].innerHTML = `<img src="assets/art/img/${images[i + 90].imageNum}.jpg" alt="${images[i + 90].author}">`;
  }

  answersQuestion[i].innerHTML = `<li>${randomShuffleArr[0]}</li>
                                  <li>${randomShuffleArr[1]}</li>
                                  <li>${randomShuffleArr[2]}</li>
                                  <li>${randomShuffleArr[3]}</li>`;
}

/* Конец */

const imgAlt = document.querySelectorAll('.questions-artist__item > img');

/* Перелистывание к следующему вопросу */

function activeElement() {

    questionsImg.forEach(element => {
        element.classList.remove('active'); // Удаляем класс active со всех пунктов
    });

    answersQuestion.forEach(element => {
        element.classList.remove('active'); // Удаляем класс active со всех пунктов
    });

    if(counter < 10) {
      questionsImg[counter].classList.add('active'); // Перелистываем картинку
      answersQuestion[counter].classList.add('active'); // Перелистываем варианты ответов
      dots[counter].classList.add('active'); // Перелистываем индикатор
    } else {
      questionsImg[counter - 2].classList.add('active');
      answersQuestion[counter - 2].classList.add('active');
      dots[counter - 2].classList.add('active');
    }

    console.log(counter);

};

activeElement();

/* Конец */

const answersQuestionLi = document.querySelectorAll('.answers > ul > li');
const modalScore = document.querySelector('.questions-modal-score');
const modalScoreResult = document.querySelector('.questions-modal-score__score');

const rightAnswer = document.querySelector('.right-answer');
const wrongAnswer = document.querySelector('.wrong-answer');
const nextButton = document.querySelector('.questions-modal-answer__button');

/* Нажатие на ответ */

answersQuestionLi.forEach(element => {
    element.addEventListener('click', function(event) {

      if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
        questionsModalRightAnswer.classList.add('active');
        rightAnswer.classList.add('active');
        if(localStorage.getItem('checkSound') === 'true') {
          audioCorrect.play();
        }
      } else {
        questionsModalRightAnswer.classList.add('active');
        wrongAnswer.classList.add('active');
        if(localStorage.getItem('checkSound') === 'true') {
          audioWrong.play();
        }
      }

      /* Запись очков для каждой из категорий */

      if(document.body.id === 'portrait') {
        if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
          scoreQuestion.portrait += 1;
        } else {
          scoreQuestion.portrait += 0;
        }
      } else if(document.body.id === 'landscape') {
        if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
          scoreQuestion.landscape += 1;
        } else {
          scoreQuestion.landscape += 0;
        }
      } else if(document.body.id === 'still-life') {
        if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
          scoreQuestion.stilllife += 1;
        } else {
          scoreQuestion.stilllife += 0;
        }
      } else if(document.body.id === 'impressionism') {
        if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
          scoreQuestion.impressionism += 1;
        } else {
          scoreQuestion.impressionism += 0;
        }
      } else if(document.body.id === 'expressionism') {
        if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
          scoreQuestion.expressionism += 1;
        } else {
          scoreQuestion.expressionism += 0;
        }
      } else if(document.body.id === 'avant-garde') {
        if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
          scoreQuestion.avantgarde += 1;
        } else {
          scoreQuestion.avantgarde += 0;
        }
      } else if(document.body.id === 'renaissance') {
        if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
          scoreQuestion.renaissance += 1;
        } else {
          scoreQuestion.renaissance += 0;
        }
      } else if(document.body.id === 'surrealism') {
        if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
          scoreQuestion.surrealism += 1;
        } else {
          scoreQuestion.surrealism += 0;
        }
      } else if(document.body.id === 'kitsch') {
        if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
          scoreQuestion.kitsch += 1;
        } else {
          scoreQuestion.kitsch += 0;
        }
      } else {
        if(event.currentTarget.innerHTML === imgAlt[counter].alt) {
          scoreQuestion.minimalism += 1;
        } else {
          scoreQuestion.minimalism += 0;
        }
      }

      /* Конец */

      decorationModalWindow();

      if(counter < 10) {
          counter += 1;
      }

      /* Запись финальных очков для вывода в результатах */

      if(document.body.id === 'portrait') {
        localStorage.setItem('portraitScore', scoreQuestion.portrait);
      } else if(document.body.id === 'landscape') {
        localStorage.setItem('landscapeScore', scoreQuestion.landscape);
      } else if(document.body.id === 'still-life') {
        localStorage.setItem('stilllifeScore', scoreQuestion.stilllife);
      } else if(document.body.id === 'impressionism') {
        localStorage.setItem('impressionismScore', scoreQuestion.impressionism);
      } else if(document.body.id === 'expressionism') {
        localStorage.setItem('expressionismScore', scoreQuestion.expressionism);
      } else if(document.body.id === 'avant-garde') {
        localStorage.setItem('avantgardeScore', scoreQuestion.avantgarde);
      } else if(document.body.id === 'renaissance') {
        localStorage.setItem('renaissanceScore', scoreQuestion.renaissance);
      } else if(document.body.id === 'surrealism') {
        localStorage.setItem('surrealismScore', scoreQuestion.surrealism);
      } else if(document.body.id === 'kitsch') {
        localStorage.setItem('kitschScore', scoreQuestion.kitsch);
      } else {
        localStorage.setItem('minimalismScore', scoreQuestion.minimalism);
      }

      /* Конец */

      clearTimeout(timerID);

      //activeElement();

    });
});

/* Оформление модального окна */

function decorationModalWindow () {

  if(document.body.id === 'portrait') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[i].imageNum}.jpg" alt="${images[i].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[i].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[i].name}`;
      }
    }
  } else if(document.body.id === 'landscape') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[i + 10].imageNum}.jpg" alt="${images[i + 10].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[i + 10].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[i + 10].name}`;
      }
    }
  } else if(document.body.id === 'still-life') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[i + 20].imageNum}.jpg" alt="${images[i + 20].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[i + 20].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[i + 20].name}`;
      }
    }
  } else if(document.body.id === 'impressionism') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[i + 30].imageNum}.jpg" alt="${images[i + 30].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[i + 30].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[i + 30].name}`;
      }
    }
  } else if(document.body.id === 'expressionism') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[i + 40].imageNum}.jpg" alt="${images[i + 40].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[i + 40].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[i + 40].name}`;
      }
    }
  } else if(document.body.id === 'avant-garde') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[i + 50].imageNum}.jpg" alt="${images[i + 50].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[i + 50].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[i + 150].name}`;
      }
    }
  } else if(document.body.id === 'renaissance') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[i + 60].imageNum}.jpg" alt="${images[i + 60].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[i + 60].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[i + 60].name}`;
      }
    }
  } else if(document.body.id === 'surrealism') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[i + 70].imageNum}.jpg" alt="${images[i + 70].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[i + 70].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[i + 70].name}`;
      }
    }
  } else if(document.body.id === 'kitsch') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[i + 80].imageNum}.jpg" alt="${images[i + 80].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[i + 80].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[i + 80].name}`;
      }
    }
  } else {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[i + 90].imageNum}.jpg" alt="${images[i + 90].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[i + 90].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[i + 90].name}`;
      }
    }
  }
  
}

/* Конец */

/* Кнопка Next */

nextButton.addEventListener('click', function() {
  questionsModalRightAnswer.classList.remove('active');
  rightAnswer.classList.remove('active');
  wrongAnswer.classList.remove('active');

  if(counter === 10) {
    counter += 1;
  }

  /* Финальное окно с результатами */

  if(counter === 11) {
    if(document.body.id === 'portrait') {
      modalScoreResult.innerHTML = `${scoreQuestion.portrait} / 10`;
      modalScore.classList.add('active');
    } else if(document.body.id === 'landscape') {
        modalScoreResult.innerHTML = `${scoreQuestion.landscape} / 10`;
        modalScore.classList.add('active');
    } else if(document.body.id === 'still-life') {
        modalScoreResult.innerHTML = `${scoreQuestion.stilllife} / 10`;
        modalScore.classList.add('active');
    } else if(document.body.id === 'impressionism') {
        modalScoreResult.innerHTML = `${scoreQuestion.impressionism} / 10`;
        modalScore.classList.add('active');
    } else if(document.body.id === 'expressionism') {
        modalScoreResult.innerHTML = `${scoreQuestion.expressionism} / 10`;
        modalScore.classList.add('active');
    } else if(document.body.id === 'avant-garde') {
        modalScoreResult.innerHTML = `${scoreQuestion.avantgarde} / 10`;
        modalScore.classList.add('active');
    } else if(document.body.id === 'renaissance') {
        modalScoreResult.innerHTML = `${scoreQuestion.renaissance} / 10`;
        modalScore.classList.add('active');
    } else if(document.body.id === 'surrealism') {
        modalScoreResult.innerHTML = `${scoreQuestion.surrealism} / 10`;
        modalScore.classList.add('active');
    } else if(document.body.id === 'kitsch') {
        modalScoreResult.innerHTML = `${scoreQuestion.kitsch} / 10`;
        modalScore.classList.add('active');
    } else {
        modalScoreResult.innerHTML = `${scoreQuestion.minimalism} / 10`;
        modalScore.classList.add('active');
      }
  }

  /* Конец */

  activeElement();

  timerCount = +localStorage.getItem('timerCount');

  timerStart();

});

/* Конец */

/* time */

const timer = document.querySelector('.header-questions__time > ul > li:last-child');
let timerCount = +localStorage.getItem('timerCount');

let timerID;

function timerStart() {
  
  if(localStorage.getItem('check') === 'true') {
    timerID = setInterval(() => {
  
      timer.innerHTML = `00:${timerCount}`;
      if(timerCount > 0) {
        timerCount = timerCount - 1;
      }
      if(timerCount < 10) {
        timer.innerHTML = `00:0${timerCount}`;
      }
      
      if(timerCount === 0) {
        console.log('Время вышло');
        
        decorationModalWindow ();
        questionsModalRightAnswer.classList.add('active');
        wrongAnswer.classList.add('active');

        if(localStorage.getItem('checkSound') === 'true') {
          audioWrong.play();
        }
        
        clearTimeout(timerID);
        counter += 1;
      }

    }, 1000);
  }
}

timerStart();

import images from './images.js';