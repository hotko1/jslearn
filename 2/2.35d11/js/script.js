'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        console.log('Семья пуста');
        return 'Семья пуста';
    } else {
        let names,
            str = '';
        names = arr.join(' ');
        str = `Семья состоит из: ${names}`;

        console.log(str);
        return str;
    }
}

showFamily(family);


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let string;
    string = arr.join('\n').toLowerCase();

    console.log(string);
}

standardizeStrings(favoriteCities);