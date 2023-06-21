'use strict';

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Я вчу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я пройшов цей урок!');
})


function learnJSs(lang, callback) {
    console.log(`Я вчу: ${lang}`);
    callback();
}

function done() {
    console.log('Я пройшов цей урок!');
}

learnJSs('JavaScript', done);