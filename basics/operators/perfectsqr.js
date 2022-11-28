var readLineSync = require('readline-sync');
var num = readLineSync.questionInt("Enter first number : ");
//console.log(num**(1/2),num*num);
var sqrt=(num**(1/2));
if(sqrt%1==0)
console.log("perfect");
else
console.log("not perfect");