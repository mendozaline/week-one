var TAX_RATE = 0.05;
var PHONE_PRICE = 90.99;
var ACCESSORY_PRICE = 10.00;
var SPENDING_THRESHOLD = 200;
var bankBalance = 2000;
var numPurchased = 0;

while (bankBalance > 0) {
    
    function calcPrice(price, taxrate, isExempt) {
        "use strict";
        return isExempt ? price : price + (price * taxrate);
    };
        
    var finalPrice = calcPrice(PHONE_PRICE+ACCESSORY_PRICE, TAX_RATE);
    
    function accountBalance(balance) {
        "use strict";
        bankBalance -= finalPrice;
        bankBalance = bankBalance.toFixed(2);
        return bankBalance
    };
    
    function phonesPurchased(x) {
        x += 1;
        return x
    };
    
    numPurchased = phonesPurchased(numPurchased);
    
    if (bankBalance > SPENDING_THRESHOLD) {
        console.log("Final purchase amount: $" +    
                        finalPrice.toFixed(2));
        console.log("Remaining balance: $" + accountBalance());
        console.log("Phones bought: " + numPurchased);
        console.log("\n")        
    } else {
        break;        
    }

} //end of while loop
