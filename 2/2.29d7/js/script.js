'use strict';

// Место для первой задачи
let rebroLenght = 5;
let volume = rebroLenght;
function calculateVolumeAndArea() {
    if (Number.isInteger(rebroLenght) && rebroLenght > 0) {
        for (let i = 1; i < 3; i++) {
            volume *= rebroLenght;
        }
        let area = rebroLenght * rebroLenght * 6;
        console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
    } else {
        console.log('При вычислении произошла ошибка');
    }
    return;
}


// Место для второй задачи
function getCoupeNumber() {

}
