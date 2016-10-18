var PHONE_PRICE = 199.99;
var TAX_RATE = 0.05;
var ACCESSORY_PRICE = 19.99;
var SPENDING_THRESHOLD = 900;
var bankBalance = 1000;
var totalPhonesPurchased = 0;

function phoneCount() {
    "use strict";
    totalPhonesPurchased += 1;
}

function subTotal(phonesTotal) {
    "use strict";
    return phonesTotal * (PHONE_PRICE + ACCESSORY_PRICE);
}

function addTax() {
    "use strict";
    return subTotal(totalPhonesPurchased) * TAX_RATE;
}

function totalPrice() {
    "use strict";
    return subTotal(totalPhonesPurchased) + addTax();
}

var total = totalPrice();

while (total + PHONE_PRICE + ACCESSORY_PRICE < SPENDING_THRESHOLD) {
    phoneCount();
    console.log("Running phone total: " + totalPhonesPurchased);
    
    total = totalPrice();
    console.log("Running price total: " + total);
}

function formatPrice(finalCost) {
    "use strict";
    return finalCost.toFixed(2);
}

console.log("\nTotal phones purchased: " + totalPhonesPurchased);
console.log("Total cost: $" + formatPrice(total));

function checkBalance() {
    "use strict";
    if (total < bankBalance) {
        return "\nYes, you can afford this.";
    } else {
        return "\nNo, you can't afford this.";
    }
}

console.log("\nCan I afford this? " + checkBalance());
