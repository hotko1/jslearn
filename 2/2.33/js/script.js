'use strict';

const arr = [1, 22, 13, 6, 8];

console.log(arr.length);

arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// цей цикл зручний коли треба використовувати break чи continue.
for (let value of arr) {
    console.log(value);
}

// arr[99] = 0;
// console.log(arr);
// console.log(arr.length);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} всередині масива ${arr}`);
});

arr.sort();
console.log(arr);

arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a - b;
}

const str = prompt('', '');
const products = str.split(', ');
// console.log(products);
products.sort();
console.log(products.join('; '));
