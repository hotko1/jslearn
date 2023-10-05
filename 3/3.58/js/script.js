'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

// for (const key of user) {
//     console.log(user[key]);
// }

for (const key in user) {
    console.log(user[key]);
}


const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function() {};

console.dir(arr);

for (const key in arr) {
    console.log(key);
}

for (const key in arr) {
    console.log(arr[key]);
}

for (const key of arr) {
    console.log(key);
}


const str = 'string';

for (const key in str) {
    console.log(str[key]);
}

// for in - не завжди перебирає властивості не обов'язково по порядку і тому не рекомендується його застосовувати на масивах і рядках (string).
