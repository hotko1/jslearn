'use strict';

function amountOfPages(summary) {
    let i = 0,
        sum = '';
    while (sum.length < summary) {
        sum += `${i}`;
        i++;
    }

    console.log(i);
}

amountOfPages(9);
