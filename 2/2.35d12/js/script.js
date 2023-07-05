'use strict';

const someString = 'This is some strange string';

function reverse(str) {
    let stringReverse;
    if (typeof str !== 'string') {
        console.log('Ошибка!');
        return 'Ошибка!';
    } else {
        let array,
            arrayReverse;
        array = str.split('');
        arrayReverse = array.reverse();
        stringReverse = arrayReverse.join('');
    }

    console.log(stringReverse);
    return stringReverse;
}

reverse(someString);


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let val = '',
        str = '';
    // console.log(typeof arr);
    for (let bank in arr) {
        // console.log(bank);
        // console.log(typeof arr[bank]);
        // console.log(arr[bank]);
        for (let valute in arr[bank]) {
            // val = arr[bank][valute];
            // str += `${val}\n`;
            if (arr[bank][valute] !== missingCurr) {
                val = arr[bank][valute];
                str += `${val}\n`;
                // val += `${arr[bank][valute]}\n`;
            }
            
            // console.log(typeof valute);

            // valute.forEach(element => {
            //     console.log(element);
            // });

            // console.log(element);
            // str += `${valute}\n`;
        }
    }
    // console.log(val);
    console.log(str);
    // str = arr.forEach(element => console.log(element));

    // console.log(str);
}

availableCurr([baseCurrencies, additionalCurrencies], 'RUB');