"use strict";

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}


let result= '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

first1: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first1;
            console.log(`Third level: ${k}`);
        }
    }
}





// Тестові завдання.
// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
    
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i >= 10; i--) {
        if (i === 13) break;
        console.log(i);
    }
    
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (i = 2; i <= 10; i++)
    if ((i % 2) === 0) {
        console.log(i);
    }
    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (i = 0; i <= 5; i++) {
        // let numeric = 5 + i;
        arrayOfNumbers[i] = 5 + i;
    }
    
    console.log(arrayOfNumbers);
    
    // Не трогаем
    return arrayOfNumbers;
}

// Змінена п'ята задача.

function fifthTask2() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (i = 5; i < 11; i++) {
        // let numeric = 5 + i;
        arrayOfNumbers[i - 5] = i;
    }
    
    console.log(arrayOfNumbers);
    
    // Не трогаем
    return arrayOfNumbers;
}



// Вправи по написанню кода.

// Место для первой задачи
(function firstTask4() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    let lenghtArr = arr.length;
    for (let i = 0; i < lenghtArr; i++) {
        result[i] = arr[i]; 
    }
    
    console.log(result);
    
    // Не трогаем
    return result;
})()

// Место для второй задачи
function secondTask4() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    let lenghtArrData = data.length;
    for (let i = 0; i < lenghtArrData; i++) {
        let typeItemData = typeof(data[i]);
        if (typeItemData === 'string') {
            data[i] = data[i] + ' - done';
        } else if (typeItemData === 'number') {
            data[i] *= 2;
        }
    }
    
    console.log(data);
    
    // Не трогаем
    return data;
}

// Место для третьей задачи
(function thirdTask4() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    let lenghtArrData = data.length;
    for (let i = 1; i <= lenghtArrData; i++) {
        result[lenghtArrData - i] = data[i - 1];
    }

    console.log(result);
    
    
    // Не трогаем
    return result;
})()



// Вправа по написанню коду 5.

const lines = 5;
let result2 = '';
let spase, star;
// Проверяется именно переменная result, формируйте строку в ней
for (i = 0; i <= lines; i++) {
    spase = (lines - i);
    star = 1 + i * 2;

    for (j = 0; j < spase; j++) {
        result2 += ' ';

        for (k = 0; k < star; k++) {
            result2 += '*';
        }
    }

    // result2 += '\n';
    
    console.log(result2);

    // for (j = 5; j <= lines; j--) {
    //     result2 += result2;

    //     console.log(i);
    // }
}
