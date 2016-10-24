var PHONE_PRICE = 199.99;
var ACCESSORY_PRICE = 19.99;
var TAX_RATE = 0.09;
var SPENDING_THRESHOLD = 100.00;
var totalPairsBought = 0;

function privateBankInfo() {
    "use strict";
    var bankBalance = 1000;
    
    function accessBalance(balance) {
        return balance;
    }
    
    return accessBalance(bankBalance);
}

function subTotal(pairsBought) {
    "use strict";
    return pairsBought * (PHONE_PRICE + ACCESSORY_PRICE);
}

function calcTax(pairsTaxed) {
    "use strict";
    return subTotal(pairsTaxed) * TAX_RATE;
}

function totalPrice(pairsBought) {
    "use strict";
    return subTotal(pairsBought) + calcTax(pairsBought);
}

var total = totalPrice(totalPairsBought);

while (privateBankInfo() - (total + PHONE_PRICE + ACCESSORY_PRICE) > SPENDING_THRESHOLD) {
    totalPairsBought += 1;
    console.log("Phone/accessory pairs bought so far: ", totalPairsBought);
    
    total = totalPrice(totalPairsBought);
    console.log("Running total: ", total, "\n");
}

var moneyLeft = privateBankInfo() - total;

function formatPrice(finalCost) {
    "use strict";
    return "$" + finalCost.toFixed(2);
}

console.log("Total phones/accessories pairs purchased: ", totalPairsBought);
console.log("Grand total: ", formatPrice(total));
console.log("Money left over: ", formatPrice(moneyLeft));
