'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    const exp = plan.skills.exp;
    console.log(exp);
    return exp;
}

showExperience(personalPlanPeter);


function showProgrammingLangs(plan) {
    let str,
        sstr = '';
    for (const pLang in plan.skills.programmingLangs) {
        str = `Язык ${pLang} изучен на ${plan.skills.programmingLangs[pLang]}\n`;
        sstr += `${str}`;
    }
    console.log(sstr);
    return sstr;
}

showProgrammingLangs(personalPlanPeter);


const showAgeAndLangs = {};
let age,
    langs,
    string = '';
personalPlanPeter.showAgeAndLangs = function(personalPlanPeter) {
    langs = personalPlanPeter.skills.languages.toString().toUpperCase().replace(/,/, ' ');
    age = personalPlanPeter.age;
    string = `Мне ${age} и я владею языками: ${langs}`;
    console.log(string);
    return string;
}

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
