'use strict';

const box = document.getElementById('box');

console.log(box);


const btns = document.getElementsByTagName('button');

console.log(btns);
console.log(btns[1]);
console.log(btns[0]);



const btnss = document.getElementsByTagName('button')[1];

console.log(btnss);


const circles = document.getElementsByClassName('circle');

console.log(circles);


const hearts = document.querySelectorAll('.heart');

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});


const oneHeart = document.querySelector('.heart');

console.log(oneHeart);

const oneHearts = document.querySelector('div');

console.log(oneHearts);
