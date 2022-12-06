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
 x = 5+10 // initialization
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

