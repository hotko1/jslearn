'use strict';

function fib(value) {
    if (typeof(value) !== 'number' || value <= 0 || !Number.isInteger(value)) {
        console.log('');
        return '';
    } else if (value === 1) {
        console.log('0');
        return '0';
    } else if (value === 2) {
        console.log('0 1');
        return '0 1';
    } else {
        let massive = [0, 1];
        for (let i = 3; i <= value; i++) {
            massive[i - 1] = massive [i -3] + massive[i - 2];
        }
        console.log(massive.join(' '));
        return massive.join(' ');
    }
}
fib(5);


// Код від ментора.
function fibs(num) {
    if (typeof(num) !== 'number' || num <=0 || !Number.isInteger(num)) {
        return '';
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    console.log(result);
    return result;
}
fibs(5);