'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один з останніх переглянутих фільмів?', '').trim(),
              b = prompt('На скільки його оцінюєте?', '');
    
        if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Переглянуто дуже мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Ви класичний глядач');
    } else if (personalMovieDB.count >= 30) {
        console.log('Ви кіноман');
    } else {
        console.log('Відбулася помилка');
    }
}

detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         const a = prompt(`Ваш улюблений жанр під номером ${i + 1}`);
//         personalMovieDB.genres[i] = a;
//     }
// }
// writeYourGenres();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
        // personalMovieDB.genres[i - 1] = genre;
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}

writeYourGenres();

// console.log(personalMovieDB);