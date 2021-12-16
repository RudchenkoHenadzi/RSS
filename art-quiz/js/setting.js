"use strict"

const inputRange = document.querySelector('#input-range');
inputRange.value = localStorage.getItem('count');
inputRange.style.background = `linear-gradient(90deg, #660033 ${localStorage.getItem('count')}%, #ccc ${localStorage.getItem('count')}%, #ccc 100%)`;

inputRange.addEventListener('input', function() {
    let counter = inputRange.value;
    let color = `linear-gradient(90deg, #660033 ${counter}%, #ccc ${counter}%, #ccc 100%)`;
    inputRange.style.background = color;
    localStorage.setItem('count', counter);
    console.log(counter);
});

const inputCheckBox = document.querySelector('#input-check');

inputCheckBox.addEventListener('click', function() {
    localStorage.setItem('check', inputCheckBox.checked)
    if(inputCheckBox.checked === true) {
        localStorage.setItem('timerCount', timerCount);
        timerNumber.innerHTML = localStorage.getItem('timerCount');
    }
});

if(localStorage.getItem('check') === 'true') {
    inputCheckBox.checked = true;
} else if (localStorage.getItem('check') === 'false') {
    inputCheckBox.checked = false;
}

const inputSound = document.querySelector('#input-sound');

inputSound.addEventListener('click', function() {
    localStorage.setItem('checkSound', inputSound.checked)
    localStorage.setItem('count', 50);
});

if(localStorage.getItem('checkSound') === 'true') {
    inputSound.checked = true;
} else if (localStorage.getItem('checkSound') === 'false') {
    inputSound.checked = false;
}

/* Timer */

const timerNumber = document.querySelector('.time-game__count-time > span');
const timeMinus = document.querySelector('.time-minus');
const timePlus = document.querySelector('.time-plus');

let timerCount = 30;

timeMinus.addEventListener('click', function() {
    if(timerCount > 5) {
        timerCount -= 5;
    }
    timerNumber.innerHTML = timerCount;
    localStorage.setItem('timerCount', timerCount);
});

timePlus.addEventListener('click', function() {
    if(timerCount < 30) {
        timerCount += 5;
    }
    timerNumber.innerHTML = timerCount;
    localStorage.setItem('timerCount', timerCount);
});

timerNumber.innerHTML = `${localStorage.getItem('timerCount')}`;

console.log(localStorage.getItem('timerCount'));