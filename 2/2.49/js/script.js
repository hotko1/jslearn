'use strict';

// touchstart - дотик пальця
// touchmove - рух пальця
// touchend - забрали палець
// touchenter - коли палець, під час руху, потрапляє на елемент з подією touchenter
// touchleave - коли палець, під час руху, вийшов за межі на елемент з подією touchenter
// touchcancel - коли точка дотику більше не реєструється на поверхні (напроиклад палець вийшов за межі браузера)

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
        console.log(e.targetTouches);

    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
        console.log(e.targetTouches[0].pageX);

    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });
});

// touches - надає список всіх пальців, які зараз взаємодіють з екраном
// targetTouches - надає список всіх пальців, які зараз взаємодіють з цим конкретним елементом
// changedTouches - список пальців що беруть участь в поточній події