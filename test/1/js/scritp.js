'use strict';

addEventListener('resize', (e) => {
    const heightArea = document.querySelector('.area').clientHeight;
    console.log(heightArea);
    const widthArea = document.querySelector('.area').clientWidth;
    console.log(widthArea);

    headFunction();
});

const heightArea = document.querySelector('.area').clientHeight;
console.log(heightArea);
const widthArea = document.querySelector('.area').clientWidth;
console.log(widthArea);

function headFunction () {
    for (let i = 0; i < heightArea; i++) {
        for (let k = 0; k < widthArea; k++) {
            const el = document.querySelector('.area').appendChild('span');
            el.classList.add(`${heightArea}-${widthArea}`);
        }
    }
}

headFunction();
