'use strict';

const birhday = Symbol('birhday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    // birthday: '20/04/1993',
    [birhday]: '20/04/2021',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}
// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configrable: true});

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birhday));

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});

// Object.defineProperty(user, 'name', {writable: false});

// user.birthday = '32e23';

// це видасть помилку, так як вище ми вказали що перезаписувати властивість неможна
// user.name = 'dfvbfdv';

// тут ми створюємо властивість 'male' за допомогою defineProperty, і в цьому випадку всі прапорці будуть false за умовчуванням (якщо не вказати їх).
// Object.defineProperty(user, 'gender', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));


// writable: true - можна перезаписатиб false - не можна перезаписати.
// enumerable: true - властивість буде перераховуватися в циклах, false - не буде
// configrable: true - властивість можна видалити, а атрибути його змінити, false - не можна
