//NOTE DEBUG ALL BELOW PROGRAM, OBSERVE STACK,LOCAL AND GLOBAL
/*
execution context
console.log(x)
fun()
console.log(fun2)
fun2()
fun3()
var x = 7
function fun(){
    console.log('hello')
}
var fun2 = () => {
    console.log('fun2')
}

var fun3 = function (){
    console.log('fun3')
}
*/
/*
scope and hoisting
2 Golden Rules:
1. Variable declarations are scanned and are made undefined
2. Function declarations are scanned and are made available

1. Hoisting in JavaScript is a process in which all the Variables, Functions and Class defination are declared BEFORE execution of the code 
3. Variables are initialised to UNDEFINED when they are declared and Function defination is stored AS IT IS.
4. They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
5. UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
6. When we assign Variable to a Function defination, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.

var x = 1
a()
b()
console.log(x)
function a(){
    var x = 10
    console.log(x)
}
function b(){
    var x = 100
    console.log(x)
}
*/
/*
lexical environmetn and scope chain
function a(){
    var b = 10
    c()
    function c(){
        console.log(b)
    }
}
a()
*/
/*
//let and const , temporal zone
//typeerror, referrence error, syntax error
console.log('hi')
console.log(a)//gives refference error
let a = 10
console.log(unDeclareVar)//gives refference error
const b //Syntax error
const z = 1000
z = 500 //type error
*/
