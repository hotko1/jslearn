"use strict";

const str = "teSt";
const arr = [1, 2, 4];
const arrs = [10, 2, 4];

console.log(str.length);
console.log(arr.length);
console.log(arrs.length);

console.log(str[2]);
console.log(arr[2]);

// console.log(str[2] = 'd');

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

const logg = "Hello world";
console.log(logg.slice(6, 10));
console.log(logg.slice(6, 11));
console.log(logg.slice(11, 6)); // виведе порожній рядок.
console.log(logg.slice(6));
console.log(logg.slice(10));
console.log(logg.slice(-5, -1));
console.log(logg.slice(-5, 0)); // виведе порожній рядок.
console.log(logg.substring(6, 10));
console.log(logg.substring(6, 11));
console.log(logg.substring(11, 6));
console.log(logg.substring(6));
console.log(logg.substring(10));
console.log(logg.substring(-5, -1)); // виведе порожній рядок.
console.log(logg.substr(6, 5));


const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));