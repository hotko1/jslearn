'use strict';

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, x -1);
    }
}

pow(2, 0) // 1
pow(2, 1) // 2
pow(2, 2) // 4
pow(2, 3) // 8
pow(2, 4) //16