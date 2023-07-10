'use strict';

// To string

// 1) Оператор Sting
console.log(typeof(String(null)));
console.log(String(null));

console.log(typeof(String(4)));

// 2) Конкатенація.
console.log(typeof(5 + ''));
console.log(typeof(null + ''));


const num = 5;

console.log('https://gm.com/catalog/' + num);

const fontSize = 26 + 'px';


// To Number

// 1) Оператор Number
console.log(typeof(Number('4')));

// 2) Унарний плюс.
console.log(typeof(+'5'));

// 3) Метод parseInt
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');


// To boolean

// 0, '', null, undefined, NaN - це все false. Решта значень буде true, в т.ч. ' ' (рядок що містить лише пробіл).

// 1) Нативний меторд перетворення
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3) !! - перетворює якесь значення в Boolean-овий тип даних
console.log(typeof(Boolean(!!'4444')));