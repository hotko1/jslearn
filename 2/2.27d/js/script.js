// Место для первой задачи
let name = 'Denis';
function sayHello(name) {
    return 'Hello ' + name;
}


// Место для второй задачи
let a = 5;
function returnNeighboringNumbers(a) {
    let mass = [a-1, a, a+1];
    return mass;
}

let objectMass = returnNeighboringNumbers(a);
console.log(objectMass);


// Место для третьей задачи
let b = 10;
let c = 5;
function getMathResult(b, c) {
    let res = '';
    if (typeof(c) === 'number' && c >= 2) {
        for (let i = 0; i < c; i++) {
            let ch = b + b * i;
            let mask;
            console.log(i);
            if ( c != i+1) {
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