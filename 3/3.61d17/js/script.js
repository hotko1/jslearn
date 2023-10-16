'use strict';

function amountOfPages(summary) {
    let i = '',
        sum = '';
    while (sum.length < summary) {
        sum += `${i}`;
        i++;
    }

    console.log(i - 1);
}

amountOfPages(25);
