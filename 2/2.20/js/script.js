"use strict";

// let numberOfFilms = prompt('Скільки філоьмів ви переглянули?', '');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };

// let lastFilms = prompt('Один з останніх переглянутих фільмів?', '');
// let ratingOfLastFilms = prompt('На скільки його оцінюєте?', '');

// let movies = {
//     namefilms: lastFilms,
//     ratefilms: ratingOfLastFilms
// }

const numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

