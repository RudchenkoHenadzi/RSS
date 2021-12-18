"use strict"

const burgerButton = document.querySelector('.btn-burger');
const navigation = document.querySelector('.navigation');
const linkMenu = document.querySelectorAll('.link-menu');

burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('active');
    navigation.classList.toggle('active');
});

linkMenu.forEach(element => {
    element.addEventListener('click', function() {
        if(burgerButton.classList.contains('active')) {
            burgerButton.classList.remove('active');
            navigation.classList.remove('active');
        }
    })
});

function clickClose () {
    if(!event.target.closest('.navigation') && !event.target.closest('.btn-burger')) {
        burgerButton.classList.remove('active');
        navigation.classList.remove('active');
    }
}

document.body.addEventListener('click', clickClose);