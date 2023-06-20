'use strict';

function readTime (func) {
    let timeStartOne = Date.now();
    for (let j = 0; j < 100000000; j++) {
        func(-1410);
    }
    let timeEndOne = Date.now();
    let timeOne = timeEndOne - timeStartOne;
    console.log(timeOne);
}

readTime(getTimeFromMinutess);

// Место для первой задачи
function getTimeFromMinutes(value) {
    if (Number.isInteger(value) && value >= 0) {
        let word;
        let hours = Math.floor(value / 60);
        let minutes = value % 60;
        let massive = [2, 3, 4];
        for (let i = 0; i < 3; i++) {
            if (hours === 1 || hours === 21) {
                word = 'час';
                break;
            } else if (hours === massive[i] || hours === (20 + massive[i])) {
                word = 'часа';
                break;
            } else {
                word = 'часов';
            }
        }
        return `Это ${hours} ${word} и ${minutes} минут`;
    } else {
        return 'Ошибка, проверьте данные';
    }
}
getTimeFromMinutes(150);

// Код від ментора.
function getTimeFromMinutess(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
        case 21:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}
getTimeFromMinutess(150);


// Место для второй задачи
function findMaxNumber(...massive) {
    let lengthMassive = massive.length;
    let bigValue = 0;
    for (let i = 0; i < lengthMassive; i++) {
        if (typeof massive[i] !== 'number' || lengthMassive < 4) {
            console.log(0);
            return 0;
        } else {
            if (massive[i] > bigValue) {
                bigValue = massive[i];
            } 
        }
    }
    console.log(bigValue);
    return bigValue;
}
findMaxNumber(1, 5, 6.6, 11);

// Код від ментора.
function findMaxNumbers (a, b, c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}
findMaxNumbers(1, 5, 6.6, 11);

/*
0 часов
1 час
2 часа
3 часа
4 часа
5 часов
6 часов
7 часов
8 часов
9 часов
10 часов
11 часов
12 часов 
13 часов
14 часов
15 часов
16 часов
17 часов
18 часов
19 часов
20 часов
21 час
22 часа
23 часа
24 часа
*/