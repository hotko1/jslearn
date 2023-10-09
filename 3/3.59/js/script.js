'use strict';

const user = {
    // 0: 'some value',
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

// console.log(typeof(Object.keys(user)[0]));


const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

// const map = new Map();
const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);
// верхні 3 рядки можна записати ще і так
// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);

console.log(map);
// console.log(map.get(shops[0]));
// has - перевіряє чи існує об'єкт
// console.log(map.has(shops[0]));

// map.delete(key);
// map.clear();
// map.size;

/*
// map.keys();
console.log(map.keys());
const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
    // console.log(shop);
}
console.log(goods);
*/

// чотири способи, як перебрати Map (карту)
// 1)
// for (let price of map.values()) {
//     console.log(price);
// }

// 2)
// for (let price of map.entries()) {
//     console.log(price);
// }

// 3)
// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

// 4)
// map.forEach((value, key, map) => {
//     console.log(key, value);
// });
