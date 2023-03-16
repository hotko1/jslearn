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


console.log(5%2);

console.log(2 + 2 * 2 === 8);
console.log(2 + 2 * 2 != 8);
console.log(2 + 2 * 2 !== 6);
console.log(2 + 2 * 2 !== '6');
console.log((2 + 2) * 2 === 8);



console.log(2*4 == 8);
console.log(2*4 == '8');
console.log(2*4 === 8);
console.log(2*4 === '8');


const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);
console.log(isChecked || isClose);


const isCheckeds = true,
      isCloses = false;

console.log(isCheckeds && isCloses);
console.log(isCheckeds || isCloses);


const isCheckedss = false,
      isClosess = false;

console.log(isCheckedss && isClosess);
console.log(isCheckedss || isClosess);
console.log(isCheckedss || !isClosess);
