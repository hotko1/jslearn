'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

// matches - метод, що використовується для пошуку конкретного елементу (може бути клас, тег і т.п.)
boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log(box);
});

console.log(boxesQuery[0].closest('.wrapper')); // виведе html структуру елемента з класом wrapper
console.log(boxesQuery[0].closest('.wr')); // виведе null

/*
boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div); // це працює
    // boxesGet[boxesGet.length] = div; // це не працює
}

console.log(boxesQuery);
console.log(boxesGet);
// console.log(document.body.children);

console.log(Array.from(boxesGet));
*/
