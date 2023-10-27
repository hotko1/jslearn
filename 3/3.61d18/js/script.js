'use strict';

// Мій код перетворивши в юнікод
// function isPangram(string) {
//     let text = string;
//     text = text.toLowerCase();
//     text = charCodeAt(text);

//     console.log(text);
// }

// isPangram('tExt Tedt');


// Мій код вивівши всі значення лише по одному разу і вимірявши довжину, яка має бути рівною довжині англійського алфавіту.
function isPangram(string) {
    let text = string;
    let arrayText = [];

    text = text.toLowerCase();
    arrayText = text.split('');

    let arrayTextUnique = new Set(arrayText);
    arrayText = [...arrayTextUnique].sort();
    text = arrayText.join('').trim();

    if (text.length == 26) {

        console.log(true);
        return true;
    }

    console.log(false);
    return false;
}

isPangram('The five boxing wizards jump quickly');
