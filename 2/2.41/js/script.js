'use strict';

// let x = 5; alert ( x++ );
// let y = 7; alert ( ++y );


// [ ] + false - null + true
console.log(([ ] + false)); // 'false'
console.log(typeof([ ] + false));

console.log([ ] + false - null); // NaN
console.log(typeof([ ] + false - null));

console.log([ ] + false - null + true); // NaN
console.log(typeof([ ] + false - null + true));


// let y = 1; 
// let x = y = 2; 
// alert(x); // 2


console.log([ ] + 1 + 2); // '12'
console.log(typeof([ ] + 1 + 2));


// alert( "1"[0] );


console.log(2 && 1 && null && 0 && undefined); // null - так як && виводить перше false значення

let a = 2, b = 3;
console.log(!!( a && b ) === (a && b));
console.log(!!( 1 && 2 ) === (1 && 2)); // false - так як !! перетворює будь яке значення в boolean


// alert( null || 2 && 3 || 4 ); // 3 - так як && виводить перше false значення, а || виводить перше true значення
// alert( true || 2 && 3 || 4 );


const aa = [1, 2, 3]; 
const bb = [1, 2, 3];
console.log(a == b); // false


// alert( +"Infinity" ); // Infinity
// alert(typeof(+"Infinity")); // number


console.log("Ёжик" > "яблоко"); // false

console.log(0 || "" || 2 || undefined || true || falsе); // 2 - так як "" (порожній рядок) також false