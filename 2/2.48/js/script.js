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

let btnFilm = document.querySelector('button');
let inputFilm = document.querySelector('.adding__input');

btnFilm.addEventListener('click', function(event) {
    event.preventDefault();

    let text = inputFilm.value.trim();
    text = text.charAt(0).toUpperCase() + text.slice(1);

    if (text !== '') {
        let node = document.createElement('li');
        node.classList.add('promo__interactive-item');
        node.appendChild(document.createTextNode(text));
        document.querySelector('.promo__interactive-list').appendChild(node);

        let filmArray = [],
            i = 0;
        document.querySelectorAll('.promo__interactive-list li').forEach(element => {
            filmArray[i] = element.textContent;
            i++;
        });

        filmArray.sort();
        i = 0;
        document.querySelectorAll('.promo__interactive-list li').forEach(element => {
            element.textContent = filmArray[i];
            i++;
        });
    }
});
