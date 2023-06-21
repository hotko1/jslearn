'use strict';

// Место для первой задачи
function calculateVolumeAndArea(rebroLenght) {
    let volume = rebroLenght;
    if (Number.isInteger(rebroLenght) && rebroLenght > 0) {
        for (let i = 1; i < 3; i++) {
            volume *= rebroLenght;
        }
        let area = rebroLenght * rebroLenght * 6;
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}
calculateVolumeAndArea(5);

// Варіант від ментора.
function calculateVolumeAndAreas(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}
calculateVolumeAndAreas(5);


// Место для второй задачи
function getCoupeNumber(seatInTheCompartment) {
    let coupeNumber;
    if (Number.isInteger(seatInTheCompartment)) {
        if (seatInTheCompartment > 0 && seatInTheCompartment <= 36) {
            coupeNumber = Math.ceil(seatInTheCompartment / 4);
            return coupeNumber;
        } else if (seatInTheCompartment === 0 || seatInTheCompartment > 36) {
            return 'Таких мест в вагоне не существует';
        } else if (seatInTheCompartment < 0) {
            return 'Ошибка. Проверьте правильность введенного номера места';
        }
    } else {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
}
getCoupeNumber(-5);

// Варіант від ментора.
function getCoupeNumbers(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
}
getCoupeNumbers(5);