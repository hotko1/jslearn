/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// мій код
// document.querySelectorAll('.promo__adv img').forEach(element => {
//     element.remove();
// });

// код ментора
const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');
adv.forEach(item => {
    item.remove();
});
// adv.forEach(function (item) {
//     item.remove();
// });


// мій код
// document.querySelector('.promo__genre').textContent = 'Драма';

// код ментора
genre.textContent = 'Драма';


// мій код
// document.querySelector('.promo__bg').style.cssText = "background: url('./img/bg.jpg') center center/cover no-repeat";

// код ментора
poster.style.backgroundImage = 'url("img/bg.jpg")';


// Мій код, що не відповідає умові задачі
// let massive = [],
//     i = 0;
// document.querySelectorAll('.promo__interactive-list li').forEach(element => {
//     massive[i] = element.textContent;
//     i++;
// });
// massive.sort();
// i = 0;
// document.querySelectorAll('.promo__interactive-list li').forEach(element => {
//     element.textContent = massive[i];
//     i++;
// });

// мій код
// movieDB.movies.sort();

// let filmList = document.querySelectorAll('.promo__interactive-list li'),
//     i = 0;
// filmList.forEach(element => {
//     element.textContent = movieDB.movies[i];
//     i++;
// });


// i = 0;
// filmList.forEach(element => {
//     element.before(`${i + 1}` + '.');
//     i++;
// });

// код ментора
movieList.innerHTML = '';

movieDB.movies.sort();

// console.log(poster.innerHTML); // отримання елементів з сторінки

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `
});