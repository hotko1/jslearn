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

// Мій код.
function isBudgetEnough(data) {
    let volume,
        price,
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
        let multipl;
        // for (let param in data.shops[i]) {
        //     multipl *= data.shops[i][param];
        // }
        multipl = data.shops[i].width * data.shops[i].length;
        square += multipl;
    }

    volume = square * data.height;

    price = volume * data.moneyPer1m3;

    console.log(square);
    console.log(price);
    console.log(data.budget);

    if (price <= data.budget) {
        console.log('Бюджета достаточно');
        return 'Бюджета достаточно';
    } else {
        console.log('Бюджета недостаточно');
        return 'Бюджета недостаточно';
    }
}

isBudgetEnough(shoppingMallData);


// Код ментора
function isBudgetEnoughs(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square +=shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        console.log('Бюджета достаточно');
        return 'Бюджета достаточно';
    } else {
        console.log('Бюджета недостаточно');
        return 'Бюджета недостаточно';
    }
}

isBudgetEnoughs(shoppingMallData);