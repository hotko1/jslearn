"use strict";

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

const answer = prompt('Вам є 18?', '18');
console.log(typeof(answer) + ': ' + answer);
console.log(answer + 5);

const answerr = +prompt('Вам є 18?', '18');
console.log(typeof(answerr) + ': ' + answerr);
console.log(answerr + 5);


const answers = [];

answers[0] = prompt('Яке ваше ім\'я', '');
answers[1] = prompt('Яке ваше прізвище?', '');
answers[2] = prompt('Скільки вам років?', '');

// document.write(answers);

console.log(typeof(answers));
console.log(typeof(null));

