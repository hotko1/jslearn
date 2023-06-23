'use strict';

const arr = [1, 2, 3, 6, 8];

console.log(arr.length);

arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr[99] = 0;
console.log(arr);
console.log(arr.length);