let obj = {a : "hello", b : "bye"}
let {a}  = obj
let {b} = obj
console.log(a,b)
let obj2 = {c : "hi", d : "welcome"}
let {c,d} = obj2
console.log(c,d)
c = "changed"
console.log(obj2)
console.log(c)