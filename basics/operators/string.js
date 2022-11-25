var a;
a = "Hello World";
console.log(a);

var b;
b = "We are Learning JS";

console.log(a + b)

///
console.log(a + "    " + 100 + 3000);
// console.log(0109);
console.log(10);

var octal = 0111;
// octal = "0" + octal
console.log((octal));


//
/*   
 Different ways to Write a String in JS
 1. Double Quotes - " "
 2. Single Quotes - ' '
 3. Backticks - ` `
*/


// var a = 40, b = 20, c = 30;
var a = "hello", b = 20, c = 30;


var sum = a + b + c;
//The Sum of a=10, b=20, c=30 is = 60

console.log("The Sum of a=" + a + ", b=" + b + " ,c=" + c + " is = " + sum);

console.log(`The Sum of a=${a}, b=${b}, c=${c} is = ${a+b+c}`);