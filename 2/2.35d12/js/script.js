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
const nullvalute = [];

function availableCurr(arr, missingCurr) {
    let val = '',
        str = '';
    for (let bank in arr) {
        for (let valute in arr[bank]) {
            if (arr[bank][valute] !== missingCurr) {
                val = arr[bank][valute];
                str += `${val}\n`;
            }
        }
    }
    console.log(str);
}

availableCurr([baseCurrencies, additionalCurrencies], 'RUB');


function availableCurrs(arr, missingCurr) {
    let val = '',
        str = 'Доступные валюты:\n';

    if (arr.length === 0) {
        console.log('Нет доступных валют');
        return 'Нет доступных валют';
    } else {
        for (let valute in arr) {
            if (arr[valute] !== missingCurr) {
                val = arr[valute];
                str += `${val}\n`;
            }
        }
    }
    console.log(str);
    return str;
}

availableCurrs(additionalCurrencies, 'RUB');