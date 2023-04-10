/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for
// beginning: for (let i = 0; i < 2; i++) {
//     let a = '',
//         b = '';

//         console.log(i);

//     a = prompt('Один з останніх переглянутих фільмів?', '');

//     if (a === '' || a.length > 50) {
//         --i;
//         continue beginning;
//     }
    
//     b = prompt('На скільки його оцінюєте?', '');
    
//     if (b === '' || b.length > 50) {
//         --i;
//         continue beginning;
//     }

//     console.log(a, b);

//     personalMovieDB.movies[a] = b;
// }

// while

let i = 0;
beginning: while (i < 2) {
    let a = '',
        b = '';

    a = prompt('Один з останніх переглянутих фільмів?', '');

    if (a === '' || a.length > 50) {
        // for (let variableKey in personalMovieDB.movies) {
        //     if (personalMovieDB.movies.hasOwnProperty(variableKey)) {
        //         delete personalMovieDB.movies[variableKey];
        //     }
        // }
        // delete personalMovieDB[0];
        // i = 0;
        continue beginning;
    }
    
    b = prompt('На скільки його оцінюєте?', '');
    
    if (b === '' || b.length > 50) {
        // for (let variableKey in personalMovieDB.movies) {
        //     if (personalMovieDB.movies.hasOwnProperty(variableKey)) {
        //         delete personalMovieDB.movies[variableKey];
        //     }
        // }
        // delete personalMovieDB[0];
        // i = 0;
        continue beginning;
    }

    i++;

    console.log(a, b);

    personalMovieDB.movies[a] = b;
}


if (personalMovieDB.count < 10) {
    console.log('Переглянуто дуже мало фільмів');
} else if (personalMovieDB.count < 31) {
    console.log('Ви класичний глядач');
} else if (personalMovieDB.count > 30) {
    console.log('Ви кіноман');
} else {
    console.log('Відбулася помилка');
}

console.log(personalMovieDB);

123456789132456789132456789123456789132456789132456789123456789132456789132456789123456789132456789132456798132456748913245678913245678913245678945613245678913456789134564654545646765545454545454554544444444444444444444444444444444444444444444444444444444444444444444444444444444