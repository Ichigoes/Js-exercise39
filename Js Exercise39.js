function newHouse(input) {
    let typeOfFlowers = input[0];
    let quantityOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let bill;

    if (typeOfFlowers == "Roses") {
        if (quantityOfFlowers > 80) {
            bill = 5 * quantityOfFlowers;
            bill = bill - (bill * 0.1);
        } else
            bill = 5 * quantityOfFlowers;
    } else if (typeOfFlowers == "Dahlias") {
        if (quantityOfFlowers > 90) {
            bill = 3.8 * quantityOfFlowers;
            bill = bill - (bill * 0.15);
        } else
            bill = 3.8 * quantityOfFlowers;
    } else if (typeOfFlowers == "Tulips") {
        if (quantityOfFlowers > 80) {
            bill = 2.8 * quantityOfFlowers;
            bill = bill - (bill * 0.15);
        } else
            bill = 2.8 * quantityOfFlowers;
    } else if (typeOfFlowers == "Narcissus") {
        if (quantityOfFlowers < 120) {
            bill = 3 * quantityOfFlowers;
            bill = bill + (bill * 0.15);
        } else {
            bill = 3 * quantityOfFlowers;
        }
    } else {
        if (quantityOfFlowers < 80) {
            bill = 2.50 * quantityOfFlowers;
            bill = bill + (bill * 0.20);
        } else {
            bill = 2.50 * quantityOfFlowers;
        }
    }

    if (bill <= budget) {
        moneyLeft = budget - bill;
        console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlowers} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        moneyNeeded = bill - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }
    
}

newHouse(["Roses", "55", "250"])