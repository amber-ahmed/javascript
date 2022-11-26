var readlineSync = require('readline-sync');

//Take 2 Number Inputs
console.clear();
var num1 = readlineSync.questionInt("Enter Number 1 : ");
var num2 = readlineSync.questionInt("Enter Number 2 : ");

// (num1 > num2) ? console.log("Number 1 is Greater") : console.log("Number 2 is Greater");

if (num1 > num2) {
    console.log("Number 1 is Greater");
}
else {
    console.log("Number 2 is Greater");
}