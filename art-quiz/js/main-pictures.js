"use strict"

const modalScore = document.querySelector('.questions-modal-score');
const modalScoreNumber = document.querySelector('.questions-modal-score__score');
const questionsModalRightAnswer = document.querySelector('.questions-modal-answer');
const questionsModalAnswerImages = document.querySelector('.questions-modal-answer__images');
const questionsModalAnswerTitle = document.querySelector('.questions-modal-answer__title');
const questionsModalAnswerDescription = document.querySelector('.questions-modal-answer__description');
const rightAnswer = document.querySelector('.right-answer');
const wrongAnswer = document.querySelector('.wrong-answer');
const nextButton = document.querySelector('.questions-modal-answer__button');

let counter = 0;
let score = 0;

/* Работа с аудио */

const audioCorrect = new Audio();
const audioWrong = new Audio();

audioCorrect.src = 'assets/audio/correct-sound.mp3';
audioWrong.src = 'assets/audio/wrong-sound.mp3';

audioCorrect.volume = (1 / 100) * +localStorage.getItem('count');
audioWrong.volume = (1 / 100) * +localStorage.getItem('count');

/* Конец */

function decorationModalWindow () {

  if(document.body.id === 'questions-portrait') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[121 + i].imageNum}.jpg" alt="${images[i].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[121 + i].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[121 + i].name}`;
      }
    }
  } else if(document.body.id === 'questions-landscape') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[131 + i].imageNum}.jpg" alt="${images[131 + i].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[131 + i].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[131 + i].name}`;
      }
    }
  } else if(document.body.id === 'questions-still-life') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[141 + i].imageNum}.jpg" alt="${images[141 + i].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[141 + i].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[141 + i].name}`;
      }
    }
  } else if(document.body.id === 'questions-impressionism') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[151 + i].imageNum}.jpg" alt="${images[151 + i].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[151 + i].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[151 + i].name}`;
      }
    }
  } else if(document.body.id === 'questions-expressionism') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[161 + i].imageNum}.jpg" alt="${images[161 + i].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[161 + i].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[161 + i].name}`;
      }
    }
  } else if(document.body.id === 'questions-avant-garde') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[171 + i].imageNum}.jpg" alt="${images[171 + i].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[171 + i].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[171 + i].name}`;
      }
    }
  } else if(document.body.id === 'questions-renaissance') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[181 + i].imageNum}.jpg" alt="${images[181 + i].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[181 + i].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[181 + i].name}`;
      }
    }
  } else if(document.body.id === 'questions-surrealism') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[191 + i].imageNum}.jpg" alt="${images[191 + i].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[191 + i].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[191 + i].name}`;
      }
    }
  } else if(document.body.id === 'questions-kitsch') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[201 + i].imageNum}.jpg" alt="${images[201 + i].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[201 + i].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[201 + i].name}`;
      }
    }
  } else if(document.body.id === 'questions-minimalism') {
    for(let i = 0; i < 10; i++) {
      if(counter === i) {
        questionsModalAnswerImages.innerHTML = `<img src="assets/art/img/${images[211 + i].imageNum}.jpg" alt="${images[211 + i].author}">`;
        questionsModalAnswerTitle.innerHTML = `${images[211 + i].author}`;
        questionsModalAnswerDescription.innerHTML = `${images[211 + i].name}`;
      }
    }
  }
  
}

let answerOptionsObj = {
  '0': 'A',
  '1': 'B',
  '2': 'C',
  '3': 'D'
}

let artistName = document.querySelector('#artist-name');

if(document.body.id === 'questions-portrait') {
  artistName.innerHTML = `Какую картину написал ${images[counter + 121].author}?`;
} else if(document.body.id === 'questions-landscape') {
  artistName.innerHTML = `Какую картину написал ${images[10 + 121].author}?`;
} else if(document.body.id === 'questions-still-life') {
  artistName.innerHTML = `Какую картину написал ${images[20 + 121].author}?`;
} else if(document.body.id === 'questions-impressionism') {
  artistName.innerHTML = `Какую картину написал ${images[30 + 121].author}?`;
} else if(document.body.id === 'questions-expressionism') {
  artistName.innerHTML = `Какую картину написал ${images[40 + 121].author}?`;
} else if(document.body.id === 'questions-avant-garde') {
  artistName.innerHTML = `Какую картину написал ${images[50 + 121].author}?`;
} else if(document.body.id === 'questions-renaissance') {
  artistName.innerHTML = `Какую картину написал ${images[60 + 121].author}?`;
} else if(document.body.id === 'questions-surrealism') {
  artistName.innerHTML = `Какую картину написал ${images[70 + 121].author}?`;
} else if(document.body.id === 'questions-kitsch') {
  artistName.innerHTML = `Какую картину написал ${images[80 + 121].author}?`;
} else if(document.body.id === 'questions-minimalism') {
  artistName.innerHTML = `Какую картину написал ${images[90 + 121].author}?`;
}

const answerOptions = document.querySelectorAll('.answers > ul > li');
const indicator = document.querySelectorAll('.questions-artist__dots > ul > li');
const questionsImagesContainer = document.querySelector('.questions-picture-container');

if(document.body.id === 'questions-portrait') {
  artistName.dataset.author = images[counter + 121].author;
} else if(document.body.id === 'questions-landscape') {
  artistName.dataset.author = images[(counter + 10) + 121].author;
} else if(document.body.id === 'questions-still-life') {
  artistName.dataset.author = images[(counter + 20) + 121].author;
} else if(document.body.id === 'questions-impressionism') {
  artistName.dataset.author = images[(counter + 30) + 121].author;
} else if(document.body.id === 'questions-expressionism') {
  artistName.dataset.author = images[(counter + 40) + 121].author;
} else if(document.body.id === 'questions-avant-garde') {
  artistName.dataset.author = images[(counter + 50) + 121].author;
} else if(document.body.id === 'questions-renaissance') {
  artistName.dataset.author = images[(counter + 60) + 121].author;
} else if(document.body.id === 'questions-surrealism') {
  artistName.dataset.author = images[(counter + 70) + 121].author;
} else if(document.body.id === 'questions-kitsch') {
  artistName.dataset.author = images[(counter + 80) + 121].author;
} else if(document.body.id === 'questions-minimalism') {
  artistName.dataset.author = images[(counter + 90) + 121].author;
}

function switchTitle() {

  if(document.body.id === 'questions-portrait') {
    artistName.innerHTML = `Какую картину написал ${images[counter + 121].author}?`;
    artistName.dataset.author = images[counter + 121].author;
  } else if(document.body.id === 'questions-landscape') {
    artistName.innerHTML = `Какую картину написал ${images[(counter + 10) + 121].author}?`;
    artistName.dataset.author = images[(counter + 10) + 121].author;
  } else if(document.body.id === 'questions-still-life') {
    artistName.innerHTML = `Какую картину написал ${images[(counter + 20) + 121].author}?`;
    artistName.dataset.author = images[(counter + 20) + 121].author;
  } else if(document.body.id === 'questions-impressionism') {
    artistName.innerHTML = `Какую картину написал ${images[(counter + 30) + 121].author}?`;
    artistName.dataset.author = images[(counter + 30) + 121].author;
  } else if(document.body.id === 'questions-expressionism') {
    artistName.innerHTML = `Какую картину написал ${images[(counter + 40) + 121].author}?`;
    artistName.dataset.author = images[(counter + 40) + 121].author;
  } else if(document.body.id === 'questions-avant-garde') {
    artistName.innerHTML = `Какую картину написал ${images[(counter + 50) + 121].author}?`;
    artistName.dataset.author = images[(counter + 50) + 121].author;
  } else if(document.body.id === 'questions-renaissance') {
    artistName.innerHTML = `Какую картину написал ${images[(counter + 60) + 121].author}?`;
    artistName.dataset.author = images[(counter + 60) + 121].author;
  } else if(document.body.id === 'questions-surrealism') {
    artistName.innerHTML = `Какую картину написал ${images[(counter + 70) + 121].author}?`;
    artistName.dataset.author = images[(counter + 70) + 121].author;
  } else if(document.body.id === 'questions-kitsch') {
    artistName.innerHTML = `Какую картину написал ${images[(counter + 80) + 121].author}?`;
    artistName.dataset.author = images[(counter + 80) + 121].author;
  } else if(document.body.id === 'questions-minimalism') {
    artistName.innerHTML = `Какую картину написал ${images[(counter + 90) + 121].author}?`;
    artistName.dataset.author = images[(counter + 90) + 121].author;
  }

}

function indicatorActive() {
  indicator[counter].classList.add('active');
}

function createQuestions() {

    for(let i = 0; i < 10; i++) {

      let randomArr = [121 + i];

      if(document.body.id === 'questions-portrait') {
        randomArr = [121 + i];
      } else if(document.body.id === 'questions-landscape') {
        randomArr = [131 + i];
      } else if(document.body.id === 'questions-still-life') {
        randomArr = [141 + i];
      } else if(document.body.id === 'questions-impressionism') {
        randomArr = [151 + i];
      } else if(document.body.id === 'questions-expressionism') {
        randomArr = [161 + i];
      } else if(document.body.id === 'questions-avant-garde') {
        randomArr = [171 + i];
      } else if(document.body.id === 'questions-renaissance') {
        randomArr = [181 + i];
      } else if(document.body.id === 'questions-surrealism') {
        randomArr = [191 + i];
      } else if(document.body.id === 'questions-kitsch') {
        randomArr = [201 + i];
      } else if(document.body.id === 'questions-minimalism') {
        randomArr = [211 + i];
      }

      for(let i = 0; i < 3; i++) {
        randomArr.push(Math.floor(Math.random() * (241 - 120)) + 120)
      }

      let randomShuffleArr = [];
  
      function shuffle(arr) {
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

      shuffle(randomArr);

      questionsImagesContainer.innerHTML += `<div class="questions-picture__item"></div>`;
      const questionsImages = document.querySelectorAll('.questions-picture__item');

      for(let j = 0; j < 4; j++) {
        questionsImages[i].innerHTML += `<img src="assets/art/img/${randomArr[j]}.jpg" data-author="${images[randomArr[j]].author}" alt="${answerOptionsObj[j]}">`;
      }
    }

}

createQuestions();

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

const questionsImagesItem = document.querySelectorAll('.questions-picture__item');

function questionsItemActive() {
  questionsImagesItem.forEach(element => {
    element.classList.remove('active-flex');
  });
  questionsImagesItem[counter].classList.add('active-flex');
}

questionsItemActive();

answerOptions.forEach(element => {
  element.addEventListener('click', function(event) {

    const altImg = document.querySelectorAll(`.questions-picture__item > img[alt="${event.currentTarget.innerHTML}"]`);

    if(altImg[counter].dataset.author === artistName.dataset.author) {
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
    
    if(document.body.id === 'questions-portrait') {
      if(altImg[counter].dataset.author === artistName.dataset.author) {
        scoreQuestion.portrait += 1;
      } else {
        scoreQuestion.portrait += 0;
      }
    } else if(document.body.id === 'questions-landscape') {
      if(altImg[counter].dataset.author === artistName.dataset.author) {
        scoreQuestion.landscape += 1;
      } else {
        scoreQuestion.landscape += 0;
      }
    } else if(document.body.id === 'questions-still-life') {
      if(altImg[counter].dataset.author === artistName.dataset.author) {
        scoreQuestion.stilllife += 1;
      } else {
        scoreQuestion.stilllife += 0;
      }
    } else if(document.body.id === 'questions-impressionism') {
      if(altImg[counter].dataset.author === artistName.dataset.author) {
        scoreQuestion.impressionism += 1;
      } else {
        scoreQuestion.impressionism += 0;
      }
    } else if(document.body.id === 'questions-expressionism') {
      if(altImg[counter].dataset.author === artistName.dataset.author) {
        scoreQuestion.expressionism += 1;
      } else {
        scoreQuestion.expressionism += 0;
      }
    } else if(document.body.id === 'questions-avant-garde') {
      if(altImg[counter].dataset.author === artistName.dataset.author) {
        scoreQuestion.avantgarde += 1;
      } else {
        scoreQuestion.avantgarde += 0;
      }
    } else if(document.body.id === 'questions-renaissance') {
      if(altImg[counter].dataset.author === artistName.dataset.author) {
        scoreQuestion.renaissance += 1;
      } else {
        scoreQuestion.renaissance += 0;
      }
    } else if(document.body.id === 'questions-surrealism') {
      if(altImg[counter].dataset.author === artistName.dataset.author) {
        scoreQuestion.surrealism += 1;
      } else {
        scoreQuestion.surrealism += 0;
      }
    } else if(document.body.id === 'questions-kitsch') {
      if(altImg[counter].dataset.author === artistName.dataset.author) {
        scoreQuestion.kitsch += 1;
      } else {
        scoreQuestion.kitsch += 0;
      }
    } else if(document.body.id === 'questions-minimalism') {
      if(altImg[counter].dataset.author === artistName.dataset.author) {
        scoreQuestion.minimalism += 1;
      } else {
        scoreQuestion.minimalism += 0;
      }
    }

    decorationModalWindow();

    if(document.body.id === 'questions-portrait') {
      localStorage.setItem('portraitScoreQuestions', scoreQuestion.portrait);
    } else if(document.body.id === 'questions-landscape') {
      localStorage.setItem('landscapeScoreQuestions', scoreQuestion.landscape);
    } else if(document.body.id === 'questions-still-life') {
      localStorage.setItem('stilllifeScoreQuestions', scoreQuestion.stilllife);
    } else if(document.body.id === 'questions-impressionism') {
      localStorage.setItem('impressionismScoreQuestions', scoreQuestion.impressionism);
    } else if(document.body.id === 'questions-expressionism') {
      localStorage.setItem('expressionismScoreQuestions', scoreQuestion.expressionism);
    } else if(document.body.id === 'questions-avant-garde') {
      localStorage.setItem('avantgardeScoreQuestions', scoreQuestion.avantgarde);
    } else if(document.body.id === 'questions-renaissance') {
      localStorage.setItem('renaissanceScoreQuestions', scoreQuestion.renaissance);
    } else if(document.body.id === 'questions-surrealism') {
      localStorage.setItem('surrealismScoreQuestions', scoreQuestion.surrealism);
    } else if(document.body.id === 'questions-kitsch') {
      localStorage.setItem('kitschScoreQuestions', scoreQuestion.kitsch);
    } else if(document.body.id === 'questions-minimalism') {
      localStorage.setItem('minimalismScore', scoreQuestion.minimalism);
    }

    clearTimeout(timerID);

    /*switchTitle();
    indicatorActive();
    questionsItemActive();*/
      
  });
});

nextButton.addEventListener('click', function() {
  questionsModalRightAnswer.classList.remove('active');
  rightAnswer.classList.remove('active');
  wrongAnswer.classList.remove('active');

  if(counter < 10) {
    counter += 1;
  }

  if(counter === 10) {
    counter += 1;
  }

  if(document.body.id === 'questions-portrait') {
    if(counter === 11) {
      modalScoreNumber.innerHTML = `${scoreQuestion.portrait} / 10`;
      modalScore.classList.add('active');
    }
  } else if(document.body.id === 'questions-landscape') {
    if(counter === 11) {
      modalScoreNumber.innerHTML = `${scoreQuestion.landscape} / 10`;
      modalScore.classList.add('active');
    }
  } else if(document.body.id === 'questions-still-life') {
    if(counter === 11) {
      modalScoreNumber.innerHTML = `${scoreQuestion.stilllife} / 10`;
      modalScore.classList.add('active');
    }
  } else if(document.body.id === 'questions-impressionism') {
    if(counter === 11) {
      modalScoreNumber.innerHTML = `${scoreQuestion.impressionism} / 10`;
      modalScore.classList.add('active');
    }
  } else if(document.body.id === 'questions-expressionism') {
    if(counter === 11) {
      modalScoreNumber.innerHTML = `${scoreQuestion.expressionism} / 10`;
      modalScore.classList.add('active');
    }
  } else if(document.body.id === 'questions-avant-garde') {
    if(counter === 11) {
      modalScoreNumber.innerHTML = `${scoreQuestion.avantgarde} / 10`;
      modalScore.classList.add('active');
    }
  } else if(document.body.id === 'questions-renaissance') {
    if(counter === 11) {
      modalScoreNumber.innerHTML = `${scoreQuestion.renaissance} / 10`;
      modalScore.classList.add('active');
    }
  } else if(document.body.id === 'questions-surrealism') {
    if(counter === 11) {
      modalScoreNumber.innerHTML = `${scoreQuestion.surrealism} / 10`;
      modalScore.classList.add('active');
    }
  } else if(document.body.id === 'questions-kitsch') {
    if(counter === 11) {
      modalScoreNumber.innerHTML = `${scoreQuestion.kitsch} / 10`;
      modalScore.classList.add('active');
    }
  } else if(document.body.id === 'questions-minimalism') {
    if(counter === 11) {
      modalScoreNumber.innerHTML = `${scoreQuestion.minimalism} / 10`;
      modalScore.classList.add('active');
    }
  }

  switchTitle();
  indicatorActive();
  questionsItemActive();

  timerCount = +localStorage.getItem('timerCount');
  timerStart();

  console.log(counter)

});

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
        decorationModalWindow();
        questionsModalRightAnswer.classList.add('active');
        wrongAnswer.classList.add('active');
        switchTitle();
        questionsItemActive();
        if(localStorage.getItem('checkSound') === 'true') {
          audioWrong.play();
        }
        clearTimeout(timerID);

        /*counter += 1;
        console.log(counter);
        indicatorActive();*/
        
      }

    }, 1000);
  }
}

timerStart();

import images from './images.js';