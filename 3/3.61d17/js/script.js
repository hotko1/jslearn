'use strict';

// Мій код
// function amountOfPages(summary) {
//     if (summary >= 1) {
//         let i = '',
//         sum = '';
//         while (sum.length < summary) {
//             sum += `${i}`;
//             i++;
//         }

//         console.log(i - 1);
//         return (i - 1);
//     } else {
//         console.log(0);
//         return 0;
//     }
// }

// amountOfPages(11);


// Код ментора (є вірним)
function amountOfPages(summary) {
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
        result += i;
        if (result.length === summary) {
            n = i;
            break;
        }
    }

    console.log(n);
    return n;
}

amountOfPages(25);
