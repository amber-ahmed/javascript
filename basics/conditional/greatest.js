var readLineSync = require('readline-sync');
console.clear();
var num1 = readLineSync.questionInt("Enter first number : ");
var num2 = readLineSync.questionInt("Enter second number : ");
console.log(num1>num2 ? `${num1} is greatest`:`${num2} is greatest`);