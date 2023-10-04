'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

// ?? - оператор нульового зливання (Nullish), реагує лише на null та underfined, а решту сприймає як дійсні значення (навіть NaN, o, false).

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);
// changeParams(box);


let userName;
let userKey;

console.log(userName ?? userKey ?? 'User');
