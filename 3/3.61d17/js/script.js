'use strict';

function amountOfPages(summary) {
    if (summary >= 1) {
        let i = '',
        sum = '';
        while (sum.length < summary) {
            sum += `${i}`;
            i++;
        }

        console.log(i - 1);
        return (i - 1);
    } else {
        console.log(0);
        return 0;
    }
}

amountOfPages(11);
