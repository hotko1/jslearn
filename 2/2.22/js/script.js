"use strict";

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}


let num2 = 50;

do {
    console.log(num2);
    num2++;
}
while (num2 < 55);


let num3 = 50;

for (let i = 1; i < 8; i++) {
    console.log(i);
    console.log(num3);
    num3++;
}


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}