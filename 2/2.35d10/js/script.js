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


let age,
    langs,
    string = '';
personalPlanPeter.showAgeAndLangs = function(plan) {
    langs = plan.skills.languages.toString().toUpperCase().replace(/,/, ' ');
    age = plan.age;
    string = `Мне ${age} и я владею языками: ${langs}`;
    console.log(string);
    return string;
}

personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// Код ментора.
const personalPlanPeters = {
    name: 'Peter',
    age: '29',
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
        },
        exp: '1 month',
    },
    showAgeAndLangss: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        console.log(str);
        return str;
    }
}

personalPlanPeters.showAgeAndLangss(personalPlanPeters);


function showExperiences(plan) {
    const {exp} = plan.skills;
    console.log(exp);
    return exp;
}

showExperiences(personalPlanPeters);


function showProgrammingLangss(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }

    console.log(str);
    return str;
}

showProgrammingLangss(personalPlanPeters);