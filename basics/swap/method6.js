var a = 10
var b = 15
console.log("before swap a = "+a + " b = "+b)
b = (a + b) - (a = b)
console.log("after swap a = " + a + " b = " + b)