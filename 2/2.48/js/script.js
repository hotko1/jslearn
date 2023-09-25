'use strict';

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

// Мій код
/*
let btnFilm = document.querySelector('button');
let inputFilm = document.querySelector('.adding__input');
const movieDB = {
    movies: []
};

btnFilm.addEventListener('click', function(event) {
    event.preventDefault();

    let text = inputFilm.value.trim().toUpperCase(); // обрізаю зайві прробіли і роблю літери великими

    if (text !== '') {
        let listItem = document.createElement('li'); // створює елемент <li>
        listItem.classList.add('promo__interactive-item'); // додаю до li клас
        listItem.appendChild(document.createTextNode(text)); // записую в li текст
        document.querySelector('.promo__interactive-list').appendChild(listItem); // додаю li до списку з певним класом

        let filmArray = [], // створюю масив
            i = 0;
        document.querySelectorAll('.promo__interactive-list li').forEach(element => {
            filmArray[i] = element.textContent.trim(); // додавання фільмів в масив і обрізаю зайві пробіли
            movieDB.movies[i] = filmArray[i]; // додавання фільмів в movieDB.movies
            i++;
        });

        filmArray.sort(); // сортування елементів масиву
        i = 0;
        document.querySelectorAll('.promo__interactive-list li').forEach(element => {
            if (filmArray[i].length < 22) {
                element.innerHTML = `${filmArray[i]} <div class="delete"></div>`; // додавання в li структури html
                i++;
            } else {
                element.innerHTML = `${filmArray[i].slice(0, 21)}... <div class="delete"></div>`; // додавання в li структури html, якщо довжина назви завелика
                i++;
            }
        });

        checkCheckbox();
    }

    basketsAlways();
});


function basketsAlways () {
    let baskets = document.querySelectorAll('.delete');

    baskets.forEach(function(eventBasket) {
        eventBasket.addEventListener('click', function() {
            eventBasket.parentNode.parentNode.removeChild(eventBasket.parentNode);
        });
    });
}

basketsAlways();


function checkCheckbox () {
    let itemCheckbox = document.querySelector('input[type=checkbox]');

    if (itemCheckbox.checked) {
        console.log('Додаємо улюблений фільм');
    }
}
*/


// Код ментора

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list');
    
    adv.forEach(item => {
        item.remove();
    });
    
    genre.textContent = 'Драма';
    
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    
    movieList.innerHTML = '';
    
    movieDB.movies.sort();
    
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

});