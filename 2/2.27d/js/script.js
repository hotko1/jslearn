// Место для первой задачи
let name = 'Denis';
function sayHello(name) {
    return 'Привет, ' + name;
}
//вірно
// function sayHello(name) {
//     return `Привет, ${name}!`;
// }


// Место для второй задачи
let a = 5;
function returnNeighboringNumbers(a) {
    let mass = [a-1, a, a+1];
    return mass;
}
//вірно
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

let objectMass = returnNeighboringNumbers(a);
console.log(objectMass);


// Место для третьей задачи
let b = 10;
let c = 1.5;
function getMathResult(b, c) {
    let res = '';
    if (typeof(c) === 'number' && c >= 2) {
        for (let i = 0; i < c; i++) {
            let ch = b + b * i;
            let mask;
            if (c != i+1) {
                mask = ch + '---';
            } else {
                mask = ch;
            }
            res = res + mask;
        }
    } else {
        res = b;
    }
    return res;
}

let masks = getMathResult(b, c);
console.log(masks);

//вірно
// let num = 10;
// let times = 1.5;
// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }

//     return str;
// }

// let maskss = getMathResult(num, times);
// console.log(maskss);