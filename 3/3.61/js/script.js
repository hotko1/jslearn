'use ctrict';

// const values = 9007199254740991;

const bigint = 1233323343544366457564324567435643677888888n;

const sameBigint = BigInt(1233323343544366457564324567435643677888888);

console.log(typeof(bigint));

// console.log(5n + 1);  // помилка так як додаємо значення типу даних bigint та number

// console.log(Math.round(5n)); // помилка так як округлюємо значення типу даних bigint

console.log(1n + 2n); // 3n

console.log(5n / 2n); // 2n - так як результат завжди буде без десяткових значень

console.log(2n > 1n); // true
console.log(2n > 5n); // false
console.log(2n > 1); // true - так як при порівнянні тут можна змішувати типи даних
console.log(2n > 5); // false - так як при порівнянні тут можна змішувати типи даних
console.log(2n == 2); // true
console.log(2n === 2); // false


let bigintt = 1n;
let number = 2;

console.log(bigintt + BigInt(number)); // 3n

console.log(Number(bigintt) + number); // 3
// console.log(+bigintt + number); // помилка, бо унарний плюс не можна застосовувати до bigint
