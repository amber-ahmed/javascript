console.log("hello world")
console.log(4)
console.log('hello world2')
console.log("4")
console.log(5+4)
console.log("hi"-1)
console.log(10-4)
console.log("hi",6)
console.log("hi",5+5)
//escape sequence
console.log('"dar k aage jeet hai"')
console.log("'A'")
console.log("\"dar k aage jeet hai\"")//  \"  =  "
console.log("hello\nworld")//  \n = newline
console.log("hello\tworld")//  \t = tab space
//string in two lines
var str1 = "hello\
hi"
/*
error
var str1 = "hello
hi"
*/
console.log(str1)
//concatenate
console.log("hello"+"world")
console.log("hello"+5)
console.log(5+"hello")
console.log(5+"hello"+5)
console.log("hello"+5+5)
console.log("hello"+5-10)
console.log("hello"+(5+5))
console.log("hello"+(5+5)-10)
//backticks
console.log(`hello world`)
console.log(`hello\` "world'`)
console.log(`hello\"`)
var str = `hi
 hello`
 console.log(str)

console.log("hello"+5+"world")
console.log(`hello${5}world`)
console.log("hello"+(5+5)+"world")
console.log(`hello${5+5}world`)

//variables
var x // declaration
 x = 5+10 // assignment
 //inizilisation = declaration  + assignment in one line eg; var y = 10
console.log(x)
console.log(x+5)
var c = x + 5
console.log(c*2)
c = c * 10
console.log(c)
//operators
//operators are which  perform operation on operands
//plus,minus,multiplication,division,modulo,power operators are arithmetic operator
var x = 105%10
console.log(x)
var pwr = 5**3  //5 power 3
console.log(pwr)

//increment and decrement operataors
//post  ++x,--x
//pre   x++,x--
var x=10
var y = x++ //x=x+1
console.log(y)
console.log(x)
var i = 10
var z = i--
console.log(z)
console.log(i)
//pre increment and decrement
var j = 10
var n = ++j
console.log(n)
console.log(j)
var k = 10
var m = --k
console.log(m)
console.log(k)
//arithmetic operations on strings
console.log("1000"-10)
var c = "1000"
console.log(typeof c)
console.log(c-10) //   WE CAN PERFORM ARITHMETIC IF STRING IS IN NUMBER FORMAT
console.log(typeof c)
console.log(c + 10)//HERE ADDTIOTN OPERATOR(+) PERFORM CANCATENATE NOT ARITHMETIC
var a = "1000"
var x = a - 10
console.log(typeof x)
console.log(x)
a = a - 10
console.log(typeof a)
console.log(a)
c = c -0
console.log(typeof c)
console.log(c)
var b = "105"
b = +b // works bcz here + operator is unary
console.log(typeof b)
console.log(b)
var i = "1001z"
i = +(i) // i stored as number, but as NaN
console.log(i) // NaN bcz i is not in number format
console.log(typeof i) // NaN is also number
//comparision
//comparison operators return always boolean
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
console.log(c < b < c) 
console.log(true<-6)  //TRUE = 1, FALSE = 0
console.log("acb">"abc");  // less than and greater than compare falsy or truthy vallues other than integers and floats
console.log("5"=="4")
console.log(isNaN(5))
console.log(isNaN("hi"))
//IN JAVASCRIPT EMPTY STRING IS CONSIDER AS ZERO
console.log(isNaN(""))//it is considering empty as zero hence it will return false
