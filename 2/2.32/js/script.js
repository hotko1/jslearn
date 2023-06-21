'use strict';

// const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    }
};

// console.log(options['colors']['border']);


// console.log(options.name);

// delete options.name;

// console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Властивість ${i} має значення ${options[key][i]}`);
        }
    } else {
        console.log(`Властивість ${key} має значення ${options[key]}`);
    }
}