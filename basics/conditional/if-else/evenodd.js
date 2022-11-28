var readLineSync = require('readline-sync');
console.clear();
var num = readLineSync.questionInt("Enter  number : ");
if(num%2==0)
console.log("number is even");
else
console.log("number is odd");