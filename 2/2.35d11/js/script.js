'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// Мій код.
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

// Код ментора.
function showFamilys(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `;
    });

    console.log(str);
    return str;
}

showFamilys(family);


// Мій код.
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let string;
    string = arr.join('\n').toLowerCase();

    console.log(string);
}

standardizeStrings(favoriteCities);

// Код ментора.
function standardizeStringss(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    })
}

standardizeStringss(favoriteCities);