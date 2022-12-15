a = 5
console.log(a)
var a //hoisting,hoisting is accessing variable before declration, its just declaraion not initializtion
//hoisting works with only for var, let and const throw error
i = 10
console.log(i) // if you did not declare variable, javascript by default considered as var
var j
console.log(j) // undefined bcz default value is undefined
//k
//console.log(k) // throw error bcz javascript does not know what is k
y = 13
console.log(y)
let y