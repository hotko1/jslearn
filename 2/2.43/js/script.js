'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
    //   hearts = document.querySelectorAll('.heart'), // тільки для цього існує forEach.
    //   oneHeart = document.querySelector('.heart');
      hearts = wrapper.querySelectorAll('.heart'), // тільки для цього існує forEach.
      oneHeart = wrapper.querySelector('.heart');

// console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';
// box.style.cssText = `background-color: blue; width: ${num}px`; // в тислі можна передавати і змінні.

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Тут був я');

div.classList.add('black');

// document.body.append(div);

// document.querySelector('.wrapper').append(div);
// wrapper.append(div); // вставляє на початку.
// wrapper.appendChild(div); // старий метод, вставляє на початку

wrapper.prepend(div); // вставляє вкінці.

// hearts[1].before(div);
// hearts[1].after(div);

// wrapper.insertBefore(div, hearts[1]); // старий метод, вставляє div перед елементом hearts[1]

// circles[0].remove(); // видаляє елемент circles[0]
// wrapper.removeChild(hearts[1]); // старий метод, видаляє елемент hearts[1]

hearts[1].replaceWith(circles[0]); // переміщує circles[0] замість hearts[1]
// wrapper.replaceChild(circles[0], hearts[1]); // старий метод, переміщує circles[0] замість hearts[1]

div.innerHTML = '<h1>Hello World</h1>'; // вставляє html чи текст на сторінку, вседедину блока div
// div.textContent = '<h1>Hello World</h1>'; // вставляє лише текст на сторінку, вседедину блока div

div.insertAdjacentHTML('afterend', '<h2>hello</h2>');