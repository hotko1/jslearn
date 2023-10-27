'use strict';

// Мій код перетворивши в юнікод
function isPangrams(string) {
    let text = string;

    text = text.toLowerCase();

    for (let k = 97; k <= 122; k++) {

        for (let i = 0; i <= text.length; i++) {
            
            if (k == text.charCodeAt(i)) {

                break;
            } else if (i  == text.length) {

                console.log(false);
                return false;
            }
        }
        
        if (k == 122) {

            console.log(true);
            return true;
        }
    }
}

isPangrams('The quick brown fox jumps over the lzay dog');


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
