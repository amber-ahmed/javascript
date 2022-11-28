var readLineSync = require('readline-sync');
console.clear();
var num = readLineSync.questionInt("Enter  number : ");
if(0>num)
console.log("number is negative");
else
console.log("number is positive");
