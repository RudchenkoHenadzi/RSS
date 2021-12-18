"use strict";

/* Проверка имени пользователя */

const inputName = document.querySelector('#user-name');
const userNameValidation = document.querySelector('.user-name-validation');

const regUserName = /[0-9 !@#$^&"№;%:?*()_—«®Ó»+=->?']/;

inputName.oninput = () => {
    
    if(inputName.value.length < 1) {
        userNameValidation.classList.remove('active');
    } else if(inputName.value.length < 3 || inputName.value.length > 15) {
        userNameValidation.classList.add('active');
        userNameValidation.classList.remove('suit');
        userNameValidation.innerHTML = 'Имя пользователя должно быть от 3 до 15 символов'
    } else if (!regUserName.test(inputName.value)) {
        userNameValidation.classList.add('suit');
        userNameValidation.innerHTML = 'Имя пользователя подходит'
    } else {
        userNameValidation.classList.remove('suit');
        userNameValidation.innerHTML = 'Имя пользователя содержит недопустимые символы'
    }

    if(userNameValidation.classList.contains('active')) {
        inputName.style.margin = '0px 0px 10px 0px';
    } else {
        inputName.style.margin = '0px 0px 0px 0px';
    }

}

/* Проверка адреса электронной почты */

const inputEmail = document.querySelector('#user-email');
const emailValidation = document.querySelector('.email-validation');

const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

inputEmail.oninput = () => {

    if(inputEmail.value.length >= 1) {
        emailValidation.classList.add('active')
    } else if (inputEmail.value.length <= 0) {
        emailValidation.classList.remove('active')
    }
    
    if(!regEmail.test(inputEmail.value)) {
        emailValidation.classList.remove('suit');
        emailValidation.innerHTML = 'Email не верный'
    } else {
        emailValidation.innerHTML = 'Email верный'
        emailValidation.classList.add('suit');
    }

    if(emailValidation.classList.contains('active')) {
        inputEmail.style.margin = '0px 0px 10px 0px';
    } else {
        inputEmail.style.margin = '0px 0px 0px 0px';
    }

}

/* Проверка номера телефона */

const inputPhone = document.querySelector('#user-phone');
const phoneValidation = document.querySelector('.phone-validation');

const regPhone = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

inputPhone.oninput = () => {

    if(inputPhone.value.length >= 1) {
        phoneValidation.classList.add('active')
    } else if (inputPhone.value.length <= 0) {
        phoneValidation.classList.remove('active')
    }
    
    if(!regPhone.test(inputPhone.value)) {
        phoneValidation.classList.remove('suit');
        phoneValidation.innerHTML = 'Номер телефона не верный (пример: +38(044)555-55-55)'
    } else {
        phoneValidation.innerHTML = 'Номер телефона верный'
        phoneValidation.classList.add('suit');
    }

    if(phoneValidation.classList.contains('active')) {
        inputPhone.style.margin = '0px 0px 10px 0px';
    } else {
        inputPhone.style.margin = '0px 0px 0px 0px';
    }

}