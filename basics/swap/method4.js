var a = 10
var b = 15
console.log("before swap a = "+a + " b = "+b)
//a = (a + b) - (b = a)
a = a + b;
b = a - b;
a = a - b;
console.log("after swap a = " + a + " b = " + b)