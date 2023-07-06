'uae atrict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        },
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
}

function isBudgetEnough(data) {
    let volume,
        square = 0;

    // while (i < shoppingMallData.shops.length) {
    //     let multipl = 1;
    //     for (let param in shoppingMallData.shops[i]) {
    //         multipl *= data.shops[i][param];
    //     }
    //     square += multipl;
    //     i++;
    // }
    for (let i = 0; i < data.shops.length; i++) {
        let multipl = 1;
        for (let param in data.shops[i]) {
            multipl *= data.shops[i][param];
        }
        square += multipl;
    }

    volume = square * data.height;

    console.log(square);
    console.log(volume);
    console.log(data.budget);

    if (volume <= data.budget) {
        console.log('Бюджета достаточно');
        return 'Бюджета достаточно';
    } else {
        console.log('Бюджета недостаточно');
        return 'Бюджета недостаточно';
    }
}

isBudgetEnough(shoppingMallData);