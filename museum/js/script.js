"use strict";

const slider = document.querySelectorAll('.item');
const sliderDots = document.querySelectorAll('.dots');
const sliderLeftArray = document.querySelector('.array-left');
const sliderRightArray = document.querySelector('.array-right');
const selectPage = document.querySelector('.select-page');
const sliderMaxPage = document.querySelector('.max-page').innerHTML = '&nbsp;0' + slider.length;

let sliderItem;
let dot;

let index = 0;

const activeSlide = n => {
    for(sliderItem of slider) {
        sliderItem.classList.remove('active');
    }
    slider[n].classList.add('active');
}

const activeDot = n => {
    for(dot of sliderDots) {
        dot.classList.remove('active');
    }
    sliderDots[n].classList.add('active');
}

const activePage = n => {
    selectPage.innerHTML = '0' + (1 + index) + ' |';
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
    activePage(ind);
}

const nextSlide = () => {
    if(index == slider.length -1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slider.length -1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

sliderDots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

sliderLeftArray.addEventListener('click', prevSlide);
sliderRightArray.addEventListener('click', nextSlide);

/* Скрипт для слайдера под видео */

const sliderVideo = document.querySelectorAll('.video-sliders-item'),
      sliderVideoDots = document.querySelectorAll('.video-dots'),
      sliderPrevArray = document.querySelector('.video-array-left'),
      sliderNextArray = document.querySelector('.video-array-right'),
      sliderWindow = document.querySelector('.video-slider-container-wrap');

let position = 0;
let sliderVideoDotsCount = 0;

function activeVideoDots (n) {

    sliderVideoDots.forEach(element => {
        element.classList.remove('active');
    });

    sliderVideoDots[n].classList.add('active');

}

sliderVideoDots.forEach(element => {
    element.addEventListener('click', function() {
        sliderVideoDotsCount = element;
    });
});

function scrollWindowNext (n) {

    position += -100 / sliderVideo.length;

    if(position < -50) {
        position = 0;
    }

    sliderWindow.style.transform = 'translateX(calc('+ position +'%))';

    if(sliderVideoDotsCount > sliderVideoDots.length -2) {
        sliderVideoDotsCount = 0;
    } else {
        sliderVideoDotsCount++;
    }  
    console.log(sliderVideoDotsCount);
    activeVideoDots(sliderVideoDotsCount);

}

function scrollWindowPrev (n) {

    position += 100 / sliderVideo.length;
    if(position > 1) {
        position = -50;
    }

    sliderWindow.style.transform = 'translateX(calc('+ position +'%))';

    if(sliderVideoDotsCount < 1) {
        sliderVideoDotsCount = sliderVideoDots.length -1;
    } else {
        sliderVideoDotsCount--;
    }

    console.log(sliderVideoDotsCount);
    activeVideoDots(sliderVideoDotsCount);
}


sliderNextArray.addEventListener('click', scrollWindowNext);
sliderPrevArray.addEventListener('click', scrollWindowPrev);
