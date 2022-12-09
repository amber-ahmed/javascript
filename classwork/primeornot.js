var readLineSync = require('readline-sync')
var num = readLineSync.questionInt("enter a number ")
if(primeOrNot(num))
    console.log("number is prime")
else
    console.log("number is not prime")
function primeOrNot(num)
{
var flag = false
for (var i = 2; i<=num/2; i++)
{
    if(num%i==0)
        return false
}
return true
}

//Handle Negative Inputs and Re-ask if they enter Invalid
