//How to Initialise a Variable in JS

// var a;

// a = 64;

//Initialisation is Used to Declare a Variable and Assign a Value in same line.
var a = 64;

console.log(a);

var a, b, c, d = 10;

// var a;
// let a;

console.log(a, b, c, d);


var number = 100;
var add = number + a;
console.log(number);
console.log(add);

//Rules for Variable Names

/* 
Valid Variables :
1. Lowercase(a-z)
2. Uppercase (A-Z)
3. Numericals(0-9)
4. Symbols (_,$)
Invalid Variables:
Keywords or Reserved Words (if, else, for, let, var)
WhiteSpace
Cannot Start with a Number
Special Characters
*/


// Invalid Varaibles
// var for = 100
// var     =100
// var 2a=100;
// var @=15


/* 
 abc - valid
 ABCd- valid
 ab123 - valid
 123ab -not valid
 ab&123 - not valid
 12byye -not valid
 _abc - valid
 do_while -valid
 for - invalid
 in - invalid
 is - valid
abcd! - Invalid
*/


//Semantics to Keep In Mind

// Use camel case for your variables edventurePark
// adnanAliKhan
//Cannot have spaces in Between
//Cannot start with Capital Letters
//SHOULD MAKE SENSE!

//furqan123
//furqanHussain_123
//adnan_ali_khan
//adnan-ali-khan