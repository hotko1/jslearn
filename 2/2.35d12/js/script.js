'use strict';

const someString = 'This is some strange string';

// Мій код.
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

// Код ментора.
function reverses(str) {
    if (typeof(str) !== 'string') {
        return 'Ошибка!';
    }
    console.log(str.split('').reverse().join(''));
    return str.split('').reverse().join('');

    // Ще є варіант розв'язку за допомогою цикла.
    let newStr = '';
    // for (let i = str.length -1; i >= 0; i--) {
    //     newStr +=str[i];
    // }
    // return newStr;
}

reverses(someString);


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const nullvalute = [];

// Мій код, але не підходить до вирішення, бо приймає два масива в об'єкті.
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

// мій код.
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

availableCurrs([...baseCurrencies, ...additionalCurrencies], 'RUB');

// Код ментора.
function availableCurrss(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Чи.
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    console.log(str);
    return str;
}

availableCurrss([...baseCurrencies, ...additionalCurrencies], 'CNY');