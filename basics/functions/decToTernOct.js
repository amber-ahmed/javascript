var readLineSync = require('readline-sync')
console.log("1. Decimal to Ternary\n2. Decimal to Octal")
var choice = readLineSync.questionInt('enter your choice ')
switch(choice){
    case 1:
    var num = readLineSync.questionInt('enter decimal number to convert Ternary ')
    decToTer(num)
    break
    case 2:
    var num = readLineSync.questionInt('enter decimal number to convert Octal ')
    decToOct(num)
    break
    default :
        console.log('Invalid choice ')
}

function decToTer(n) {
    if (n == 0) return;
    decToTer(Math.floor(n / 3))
    console.log(n % 3)
}

function decToOct(n) {
    if (n == 0) return;
    decToOct(Math.floor(n / 8))
    console.log(n % 8)
}
