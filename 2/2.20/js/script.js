"use strict";

if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Error');
}

if (4 == 4) {
    console.log('Ok');
} else {
    console.log('Error');
}

if (4) {
    console.log('Ok');
} else {
    console.log('Error');
}


const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Багато');
} else {
    console.log('Ok!');
}


(num === 50) ? console.log('Ok!') : console.log('Error');


const numb = 50;

switch (numb) {
    case 49:
        console.log('Невірно');
        break;
    case 100:
        console.log('Невірно');
        break;
    case 51:
        console.log('Вірно');
        break;
    default:
        console.log('Не цього разу');
        break;
}


const numbs = '50';

switch (numbs) {
    case '49':
        console.log('Невірно');
        break;
    case 50:
        console.log('Вірне число');
        break;
    case '50':
        console.log('Вірний текст');
        break;
    default:
        console.log('Не цього разу');
        break;
}