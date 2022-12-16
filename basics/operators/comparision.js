//less than and greater than
console.log(5>10)
var a = 30,b = 15
console.log(a>b)
console.log(30 <= 30)
console.log(40 < 40)
console.log(40 < (15 * 3))
//equal
console.log("100" == (10 ** 2))
console.log("100" === (10 ** 2))
console.log(""==0)
console.log(""===0)
//not equal
console.log(5!=5)
console.log("5"!=5)
console.log("5"!=="5")
//comparing more than 3 operators
var a = 5, b = -3, c = -6
console.log(c < b < c) // checks left to right, first c < b is compared and return 
//the value true then returned value is checked with remaining i.e true < c as true value is 1 it will 1 < c,so it will give false
// NOTE : SO NEVER COMPARE MORE THAN 2 OPERATORS, INSTEAD USE LOGICAL OPERATOR
console.log(true<-6)  //TRUE = 1, FALSE = 0
console.log("acb">"abc");  // compare falsy or truthy vallues other than integers and floats also
console.log("5"=="4")
console.log(isNaN(5))
console.log(isNaN("hi"))