function assignGrade(numScore) {
    "use strict";
    
    if (numScore >= 90) {
        return "A";
    } else if (numScore >= 80) {
        return "B";
    } else if (numScore >= 70) {
        return "C";
    } else if (numScore >= 60) {
        return "D";
    } else {
        return "F";
    }
    
}

function printGrade() {
    "use strict";
    var i = 0,
        indefiniteArticle;
    
    for (i = 100; i >= 60; i -= 1) {
        
        if (i >= 90) {
            indefiniteArticle = "an ";
        } else {
            indefiniteArticle = "a ";
        }
        
        console.log("For " + i + ", you get " + indefiniteArticle + assignGrade(i) + ".");
        
    }

}

//console.log("For 99, you get an " + assignGrade(99) + ".");
//console.log("For 89, you get a " + assignGrade(89) + ".");
//console.log("For 79, you get a " + assignGrade(79) + ".");

printGrade();
console.log(nameChanger(name));
