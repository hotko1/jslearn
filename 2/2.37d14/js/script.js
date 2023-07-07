'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let sortStudents = arr.sort();
    let newMas = [];
    newMas[0] = [];
    newMas[1] = [];
    newMas[2] = [];
    newMas[3] = 'Оставшиеся студенты: ';
    if (sortStudents.length <= 9) {
        newMas[3] += '-';
    }
    for (let i = 0; i < sortStudents.length; i++) {
        if (i <= 2) {
            newMas[0][i % 3] = sortStudents[i]; 
        } else if (i <= 5) {
            newMas[1][i % 3] = sortStudents[i];
        } else if (i <= 8) {
            newMas[2][i % 3] = sortStudents[i];
        } else if (i === 9) {
            newMas[3] += `${sortStudents[i]}`;
        } else {
            newMas[3] += `, ${sortStudents[i]}`;
        }
    }
    console.log(newMas);
    return newMas;
}

sortStudentsByGroups(students);