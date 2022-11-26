var readlineSync = require('readline-sync');

console.clear();
var num1 = readlineSync.questionInt("Enter Number 1 : ");
var num2 = readlineSync.questionInt("Enter Number 2 : ");
var num3 = readlineSync.questionInt("Enter Number 3 : ");

//Num1 is Greatest    --> num1 > num2 and num1 > num3     (num1>num2)  &&   (num1>num3)

//When condition is false, we know num1 is not Greatest 
//Check if num2 > num3 --> True == num2 is Greatest
// False - num3 is greatest

// (num1 > num2 && num1 > num3) ? console.log("Number 1 is Greatest") : ((num2 > num3) ? console.log("Number 2 is Greatest") : console.log("Number 3 is Greatest"));

if (num1 > num2 && num1 > num3) {
    console.log("Number 1 is Greatest");
}
else if (num2 > num3) {
    console.log("Number 2 is Greatest");
}
else {
    console.log("Number 3 is Greatest");
}