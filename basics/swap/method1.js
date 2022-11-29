var a = 10
var b = 15
console.log("before swap a = "+a + " b = "+b)
a = b - a // b = (a = b) - (b - a)
b = b - a
a = b + a  
console.log("after swap a = " + a + " b = " + b)