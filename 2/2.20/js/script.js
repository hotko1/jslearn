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

const a = prompt('Один з останніх переглянутих фільмів?', ''),
      b = prompt('На скільки його оцінюєте?', ''),
      c = prompt('Один з останніх переглянутих фільмів?', ''),
      d = prompt('На скільки його оцінюєте?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
