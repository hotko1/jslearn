'use strict';

// const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options));
console.log(Object.keys(options).length);


// console.log(options['colors']['border']);


// console.log(options.name);

// delete options.name;

// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Властивість ${i} має значення ${options[key][i]}`);
            // counter++;
        }
        counter++;
    } else {
        console.log(`Властивість ${key} має значення ${options[key]}`);
        counter++;
    }
}
console.log(counter);


let counters = 0;
for (let keys in options) {
    counters++;
}
console.log(counters);