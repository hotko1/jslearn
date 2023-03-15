"use strict";

let abc = ['first', 'second'];
console.log(Array.isArray(abc));
console.log(Object.prototype.toString.call(abc));

let bcd = {
    name: 'Entony',
    age: 18
};
console.log(Array.isArray(bcd));
console.log(Object.prototype.toString.call(bcd));

console.log('arr' + ' - object');
console.log(4 + ' - object');
console.log(4 + +' - object');
console.log(4 + +'5');

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

incr = 10;
decr = 10;

++incr;
--decr;

console.log(incr);
console.log(decr);

incr = 10;
decr = 10;

console.log(incr++);
console.log(decr--);

incr = 10;
decr = 10;

console.log(++incr);
console.log(--decr);
