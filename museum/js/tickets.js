"use strict"

const buttonOpen = document.querySelector('.ticket-button');
const buttonClosed = document.querySelector('.booking-tickets__button-closed');
const bookingTickets = document.querySelector('.booking-tickets');

buttonOpen.addEventListener('click', function (e) {
    bookingTickets.classList.add('active');
    e.preventDefault();
});

buttonClosed.addEventListener('click', function () {
    bookingTickets.classList.remove('active');
});


/* type ticket */

const ticketType = document.querySelector('.booking-main-date__typeticket');
const ticketTypeDefaultValue = document.querySelector('.booking-main-date__typeticket-default');
const ticketTypeDropDownlist = document.querySelectorAll('ul.booking-main-date__typeticket-dropdown-list > li');
const typeTicketValue = document.getElementById('type-ticket');

ticketType.addEventListener('click', function(e) {
    ticketType.classList.toggle('active');
});

ticketTypeDropDownlist.forEach(element => {
    element.addEventListener('click', function() {
        ticketTypeDefaultValue.innerHTML = element.innerHTML;
        typeTicketValue.innerHTML = `<img src="assets/svg/booking-check.svg" alt="Check">`+element.innerHTML+``;
    });
});

console.dir(typeTicketValue.outerText);

/* Работа с инпутами */

/* Entry Ticket */

const entryTicketInputMinusBasic = document.getElementById('input-minus-basic');
const entryTicketInputPlusBasic = document.getElementById('input-plus-basic');

const entryTicketInputMinusSenior = document.getElementById('input-minus-senior');
const entryTicketInputPlusSenior = document.getElementById('input-plus-senior');

let countBasic = 0;
let countSenior = 0;
let ticketTotalCount = 0;
let ticketNumberCountBasic = 0;
let ticketNumberCountSenior = 0;
let totalNumberCountBasic = 0;
let totalNumberCountSenior = 0;

entryTicketInputMinusBasic.addEventListener('click', function() {

    if(countBasic > 0) {
        countBasic -= 1;
        ticketTotalCount -= 20;
        ticketNumberCountBasic -= 1;
        totalNumberCountBasic -= 20;
        document.getElementById('basic-input').value = countBasic;
        document.getElementById('ticket-count-input-basic').value = countBasic;
        document.getElementById('ticket-total').innerHTML = `Total €`+ticketTotalCount+``;
        document.querySelector('.booking-price-row__all-total').innerHTML = ``+ticketTotalCount+` €`;
        document.getElementById('ticket-number-basic').innerHTML = ``+ticketNumberCountBasic+``;
        document.getElementById('total-ticket-basic').innerHTML = ``+totalNumberCountBasic+` €`;
    }

})

entryTicketInputPlusBasic.addEventListener('click', function() {

    countBasic += 1;
    ticketTotalCount += 20;
    ticketNumberCountBasic += 1;
    totalNumberCountBasic += 20;
    document.getElementById('basic-input').value = countBasic;
    document.getElementById('ticket-count-input-basic').value = countBasic;
    document.getElementById('ticket-total').innerHTML = `Total €`+ticketTotalCount+``;
    document.querySelector('.booking-price-row__all-total').innerHTML = ``+ticketTotalCount+` €`;
    document.getElementById('ticket-number-basic').innerHTML = ``+ticketNumberCountBasic+``;
    document.getElementById('total-ticket-basic').innerHTML = ``+totalNumberCountBasic+` €`;
})

entryTicketInputMinusSenior.addEventListener('click', function() {

    if(countSenior > 0) {
        countSenior -= 1;
        ticketTotalCount -= 10;
        ticketNumberCountSenior -= 1;
        totalNumberCountSenior -= 10;
        document.getElementById('senior-input').value = countSenior;
        document.getElementById('ticket-count-input-senior').value = countSenior;
        document.getElementById('ticket-total').innerHTML = `Total €`+ticketTotalCount+``;
        document.querySelector('.booking-price-row__all-total').innerHTML = ``+ticketTotalCount+` €`;
        document.getElementById('ticket-number-senior').innerHTML = ``+ticketNumberCountSenior+``;
        document.getElementById('total-ticket-senior').innerHTML = ``+totalNumberCountSenior+` €`;
    }

})

entryTicketInputPlusSenior.addEventListener('click', function() {

    countSenior += 1;
    ticketTotalCount += 10;
    ticketNumberCountSenior += 1;
    totalNumberCountSenior += 10;
    document.getElementById('senior-input').value = countSenior;
    document.getElementById('ticket-count-input-senior').value = countSenior;
    document.getElementById('ticket-total').innerHTML = `Total €`+ticketTotalCount+``;
    document.querySelector('.booking-price-row__all-total').innerHTML = ``+ticketTotalCount+` €`;
    document.getElementById('ticket-number-senior').innerHTML = ``+ticketNumberCountSenior+``;
    document.getElementById('total-ticket-senior').innerHTML = ``+totalNumberCountSenior+` €`;

})

/*  */

const ticketCountBasicMinus = document.getElementById('ticket-count-basic-minus');
const ticketCountBasicPlus = document.getElementById('ticket-count-basic-plus');

const ticketCountSeniorMinus = document.getElementById('ticket-count-senior-minus');
const ticketCountSeniorPlus = document.getElementById('ticket-count-senior-plus');

const ticketTotal = document.getElementById('ticket-total').innerHTML += `Total €`+ticketTotalCount+``;
const entryTicketAllTotal = document.querySelector('.booking-price-row__all-total').innerHTML += ``+ticketTotalCount+` €`;

const ticketNumberBasic = document.getElementById('ticket-number-basic').innerHTML += ``+ticketNumberCountBasic+``;
const ticketNumberSenior = document.getElementById('ticket-number-senior').innerHTML += ``+ticketNumberCountSenior+``;

const totalTicketBasic = document.getElementById('total-ticket-basic').innerHTML += ``+totalNumberCountBasic+` €`;
const totalTicketSenior = document.getElementById('total-ticket-senior').innerHTML += ``+totalNumberCountSenior+` €`;

ticketCountBasicMinus.addEventListener('click', function(e) {

    if(countBasic > 0) {
        countBasic -= 1;
        ticketTotalCount -= 20;
        ticketNumberCountBasic -= 1;
        totalNumberCountBasic -= 20;
        document.getElementById('ticket-count-input-basic').value = countBasic;
        document.getElementById('basic-input').value = countBasic;
        document.getElementById('ticket-total').innerHTML = `Total €`+ticketTotalCount+``;
        document.querySelector('.booking-price-row__all-total').innerHTML = ``+ticketTotalCount+` €`;
        document.getElementById('ticket-number-basic').innerHTML = ``+ticketNumberCountBasic+``;
        document.getElementById('total-ticket-basic').innerHTML = ``+totalNumberCountBasic+` €`;
    }

    e.preventDefault();

})

ticketCountBasicPlus.addEventListener('click', function(e) {

    countBasic += 1;
    ticketTotalCount += 20;
    ticketNumberCountBasic += 1;
    totalNumberCountBasic += 20;
    document.getElementById('ticket-count-input-basic').value = countBasic;
    document.getElementById('basic-input').value = countBasic;
    document.getElementById('ticket-total').innerHTML = `Total €`+ticketTotalCount+``;
    document.querySelector('.booking-price-row__all-total').innerHTML = ``+ticketTotalCount+` €`;
    document.getElementById('ticket-number-basic').innerHTML = ``+ticketNumberCountBasic+``;
    document.getElementById('total-ticket-basic').innerHTML = ``+totalNumberCountBasic+` €`;

    e.preventDefault();

})

ticketCountSeniorMinus.addEventListener('click', function(e) {

    if(countSenior > 0) {
        countSenior -= 1;
        ticketTotalCount -= 10;
        ticketNumberCountSenior -= 1;
        totalNumberCountSenior -= 10;
        document.getElementById('ticket-count-input-senior').value = countSenior;
        document.getElementById('senior-input').value = countSenior;
        document.getElementById('ticket-total').innerHTML = `Total €`+ticketTotalCount+``;
        document.querySelector('.booking-price-row__all-total').innerHTML = ``+ticketTotalCount+` €`;
        document.getElementById('ticket-number-senior').innerHTML = ``+ticketNumberCountSenior+``;
        document.getElementById('total-ticket-senior').innerHTML = ``+totalNumberCountSenior+` €`;
    }

    e.preventDefault();

})

ticketCountSeniorPlus.addEventListener('click', function(e) {

    countSenior += 1;
    ticketTotalCount += 10;
    ticketNumberCountSenior += 1;
    totalNumberCountSenior += 10;
    document.getElementById('ticket-count-input-senior').value = countSenior;
    document.getElementById('senior-input').value = countSenior;
    document.getElementById('ticket-total').innerHTML = `Total €`+ticketTotalCount+``;
    document.querySelector('.booking-price-row__all-total').innerHTML = ``+ticketTotalCount+` €`;
    document.getElementById('ticket-number-senior').innerHTML = ``+ticketNumberCountSenior+``;
    document.getElementById('total-ticket-senior').innerHTML = ``+totalNumberCountSenior+` €`;

    e.preventDefault();

})

/* Поле выбора даты и календарь */

const date = new Date();
const todayDay = new Date().getFullYear() + '-' + (1 + new Date().getMonth()) + '-' + new Date().getDate();
const inputDateMin = document.querySelector('#input-date').min = todayDay;
const inputDate = document.querySelector('#input-date');
const inputPlaceholderDate = document.querySelector('#input-placeholder-date').innerHTML = `Date`;
const dateTicket = document.getElementById('date-ticket');
const nameDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
const nameMonth = ['','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

inputDate.oninput = () => {

    const inputDateValue = document.querySelector('#input-date').value;

    if(inputDateValue !== "") {
        document.querySelector('#input-placeholder-date').innerHTML = ``+inputDateValue+``;
    } else {
        document.querySelector('#input-placeholder-date').innerHTML = `Date`;
    }

    //dateTicket.innerHTML = `<img src="assets/svg/booking-date.svg" alt="Calendar">`+inputDateValue+``;

    const inputDateValueS = document.querySelector('#input-date').value.split('-');
    const numberDay = new Date(inputDateValueS[0], inputDateValueS[1], inputDateValueS[2]).getDay();
    dateTicket.innerHTML = `<img src="assets/svg/booking-date.svg" alt="Calendar">`+nameDay[numberDay] + ', ' + nameMonth[+inputDateValueS[1]] + ' ' + inputDateValueS[2]+``;

}

/* Вывод даты в билет */


/* Поле выбора времени  */

const inputTime = document.querySelector('#input-time');

const inputPlaceholderTime = document.querySelector('#input-placeholder-time').innerHTML = `Time`;

inputTime.oninput = () => {
    const inputTimeValue = document.querySelector('#input-time').value;
    if(inputTimeValue !== "") {
        document.querySelector('#input-placeholder-time').innerHTML = ``+inputTimeValue+``;
    } else {
        document.querySelector('#input-placeholder-time').innerHTML = `Time`;
    }

    console.log(inputTimeValue);
}
