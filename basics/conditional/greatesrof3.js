var readLineSync = require('readline-sync');
console.clear();
var num1 = readLineSync.questionInt("Enter first number : ");
var num2 = readLineSync.questionInt("Enter second number : ");
var num3 = readLineSync.questionInt("Enter third number : ");
console.log((num1>num2&&num1>num3) ? `${num1} is greatest` : (num2>num1&&num2>num3) ? `${num2} is greatest` : `${num3} is greatest`) ;
