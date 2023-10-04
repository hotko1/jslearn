'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if (block) {
//     console.log(block.textContent);
// }

// ?. - оператор опціонального ланцюга, перевіряє вираз зліва від себе і зупиняє операції, якщо воно має значення underfined чи null, 
// і при цьому повертає це значення і відбувається це все без помилки.
console.log(block?.textContent); // це працюватиме без помилки

// а це викличе помилку
// block?.textContent = '132';

console.log(1 + 2);


const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello');
    }
}

userData.say();

// викличе помилку і зупинить виконання коду, якщо hey неіснує
// userData.hey.();

// не викличе помилку і продовжить виконувати код далі, якщо hey неіснує
userData.hey?.();

// const userData = null;

// перевірка щоб виключити помилку
if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}

// викличе помилку
// console.log(userData.skills.js);

// console.log(userData.skills?.js); // працюватиме без помилки якщо існує хоча б userData і вона не null / underfined
console.log(userData?.skills?.js); // працюватиме без помилки навіть якщо userData null чи underfined
