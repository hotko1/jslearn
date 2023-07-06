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
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    for (let room in data.shops) {
        square += data.shops.room.width * data.shops.room.length;
        // for (let param in room) {
        //     square += data.shops[0] * data.shops[1];
        // } 
    }
    console.log(square);
}