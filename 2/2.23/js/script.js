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