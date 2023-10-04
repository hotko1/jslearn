'use strict';

/*
let id5 = Symbol('id5');

const obj = {
    'name': 'Test',
    [Symbol('id4')]: 4,
    [id5]: 5,
    getId: function() {
        return this[id5];
    }
    // теж саме що і
    // name: 'Test'
}

console.log(obj['name']);

let id = Symbol('id');
obj[id] = 1;
let id2 = Symbol('id2');
obj[id2] = 2;
let id3 = Symbol();
obj[id3] = 3;


console.log(id == id2); // false - символи, хоч і мають однаковий опис, але не є рівними, воин авжди є унікальними сутностями

console.log(obj);
console.log(obj['id4']);

console.log(obj.getId());
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
console.log(obj[Object.getOwnPropertySymbols(obj)[1]]);


for (let value in obj) console.log(value);
*/

const myAwesomeDB = {
    movies: [],
    actors: [],
    // id: 123, // цю id можна змінити
    [Symbol('id')]: 123, // цю id змінити не можливо
    [Symbol.for('id2')]: 234
}

// Сторонній код бібліотеки

myAwesomeDB.id = '32232332';

console.log(myAwesomeDB['id']);
console.log(myAwesomeDB[Symbol.for('id2')]);
console.log(myAwesomeDB);
