//Initial
//Fix base Statement/terminatin point / base case
//Call Back Expression
var i =1
f1()
function f1(){
    if(i==10)
        return  // empty statements or block also treat as return  if(i==10){} same as if(i==10) return
    else{
        console.log(i)
        i++
        return f1()
    }
}
//Types of Functions
//1 . Pre Defined Functions - Ex : Math.random()
//2 . User Defined Fucntions - Ex : print 100 numbers print()
//3 . Recursion Functions - Ex : Factorial of n fact()

//Factorial of a number
 function fact(n){
    if(n==1 || n==0)
        return 1
    return n * fact(n-1)
 }
console.log(fact(0))
console.log(fact(5)) 
