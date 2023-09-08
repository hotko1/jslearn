'use strict';

// мій код.
function factorial(n) {
    if (n <= 0 ) {
        return 1;
    } else if (typeof(n) === 'number' & Number.isInteger(n)) {
        return n * factorial(n - 1);
    } else {
        return 'It not a positive integer';
    }
}

const valueFunc = factorial(5);
console.log(valueFunc);


// Код ментора.
function factorials(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return 'Помилка, перевірте дані';
    }

    if (n >= 1) {
        return n * factorials(n - 1);
    } else {
        return 1;
    }

    // Більш короткий варіант, який можна зустріти
    // Але не враховує від'ємні значення
    // return n ? n * factorials(n - 1) : 1;
}

const valueFuncs = factorials(5);
console.log(valueFuncs);
