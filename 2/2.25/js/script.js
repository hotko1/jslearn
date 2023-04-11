'use strict';

let num = 20;

function showFirstMessages(text) {
    console.log(text);
    // let num = 10;
    console.log(num);
}

showFirstMessages('Hello!');
console.log(num);


console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

// function declaration
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


// function Expression
const logger = function() {
    console.log('Hello');
};

logger();


// Стрілкова функція
const calc = (a, b) => a + b;
const calc2 = a => a + 5;
const calc3 = (a, b) => { return a + b };
const calc4 = (a, b) => { 
    console.log('1')
    return a + b;
};