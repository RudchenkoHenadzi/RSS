"use strict"

let imgGallary = document.querySelector('.gallery-container');

let img = `<div class="gallaty-item"><img src="assets/img/galery2.jpg" alt="Первая картинка галереи"></div>`;

//imgGallary.innerHTML = img;

let imgSrc = ['assets/img/galery1.jpg', 
              'assets/img/galery2.jpg', 
              'assets/img/galery3.jpg', 
              'assets/img/galery4.jpg', 
              'assets/img/galery5.jpg',
              'assets/img/galery6.jpg',
              'assets/img/galery7.jpg',
              'assets/img/galery8.jpg',
              'assets/img/galery9.jpg',
              'assets/img/galery10.jpg',
              'assets/img/galery12.jpg',
              'assets/img/galery15.jpg']


function shuffle(array) {

array.sort(() => Math.random() - 0.5);

}

shuffle(imgSrc)

for(let i = 0; i < imgSrc.length; i++) {
    imgGallary.innerHTML += `<div class="gallaty-item"><img src="`+imgSrc[i]+`" alt="Первая картинка галереи"></div>`;
}