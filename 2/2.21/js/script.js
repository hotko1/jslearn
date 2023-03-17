"use strict";

const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Я ситий!');
}

console.log((hamburger && fries));


const hamburgerr = 5;
const friess = 0;

if (hamburgerr && friess) {
    console.log('Я ситий!');
}

console.log((hamburgerr && friess));


const hamburgerrs = 3;
const friesss = 1;
const cola = 1;

console.log(hamburgerrs === 3 && cola && friesss);

console.log(1 && 0);
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'text');
console.log(0 && null);
console.log(2 && 'text');

if (hamburgerrs === 3 && cola === 1 && friesss) {
    console.log('Всі ситі!');
} else {
    console.log('Ми покидаємо цей заклад');
}


const hamburger3 = null;
const fries3 = 3;
const cola3 = 0;

if (hamburger3 || cola3 || fries3) {
    console.log('Всі задоволені!');
} else {
    console.log('Ми покидаємо цей заклад');
}

console.log(hamburger3 || cola3 || fries3);


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);


const hamburger4 = 3;
const fries4 = 3;
const cola4 = 0;
const nuggets4 = 2;

if (hamburger4 === 3 && cola4 === 2 || fries4 === 3 && nuggets4) {
    console.log('Всі задоволені!');
} else {
    console.log('Ми покидаємо цей заклад');
}

console.log(hamburger4 === 3 && cola4 === 2);
console.log(fries4 === 3 && nuggets4);
console.log(hamburger4 === 3 && cola4 === 2 || fries4 === 3 && nuggets4);

console.log(!(0));
console.log(!(2));


// Тестові завдання.
console.log( NaN || 2 || undefined ); // 2   /+
console.log( NaN && 2 && undefined ); // Nan   /+
console.log( 1 && 2 && 3 ); // 3   /+
console.log( !1 && 2 || !3 ); // false   /+
console.log( 25 || null && !3 ); // 25    /+
console.log( NaN || null || !3 || undefined || 5); // 5   /-
console.log( NaN || null && !3 && undefined || 5); // 5   /-
console.log( 5 === 5 && 3 > 1 || 5); // true   /-


const hamburger5 = 3;
const fries5 = 3;
const cola5 = 0;
const nuggets5 = 2;

if (hamburger5 === 3 && cola5 || fries5 === 3 && nuggets5) {
   console.log('Done!') // Done!   /+
}


let hamburger6;
const fries6 = NaN;
const cola6 = 0;
const nuggets6 = 2;

if (hamburger6 || cola6 || fries6 === 3 || nuggets6) {
   console.log('Done!') // Done!   /+
}


let hamburger7;
const fries7 = NaN;
const cola7 = 0;
const nuggets7 = 2;

if (hamburger7 && cola7 || fries7 === 3 && nuggets7) {
   console.log('Done!') //   /+
}







// Змінна з динамічним іменем.
const first = 'text';
eval(first + 1 + '= 10');
eval(first + 2 + '= "10"');

console.log(text1);
console.log(typeof(text1));
console.log(typeof(text2));


let radius = 5;
(function test() {
    let b = 0;
    for (i = 1; i < 5; i++) {
        const firsts = 'testtext';
        b += i;
        c = 2 * Math.PI * radius;
        eval(firsts + b + '=' + c);
    };
})()

console.log(testtext1);
