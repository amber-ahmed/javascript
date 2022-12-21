//positive or negative
//Syntax 
//Expression ? True block : False block
//Expression should return truthy or falsey values
//If expression return truthy then True block will execute
//If expression return falsy value then  False block will execute

null ? console.log("print") : console.log("do not print")
'abc' ? console.log("print") : console.log("do not print")

var num = 13
//check whether num is even or odd
num % 2 == 0 ? console.log("even") : console.log("odd")

var n = -21
//check whether n is pos or neg
n > 0 ? console.log("positive") : console.log("negative")

var a = 10 , b = 15
//print big nubmer
a > b ? console.log(a) : console.log(b)

var isNum = false
isNum = +isNum
//check isNum is number or not
Number.isInteger(parseInt(isNum)) && parseInt(isNum) != 'NaN' ? console.log("number") : console.log("not a number")
console.log(parseInt(isNum))

// var line = require('readline-sync');
// var num=line.questionInt("enter a number ");
// console.log(num>0?"number is positve":"nubmer is neagative");