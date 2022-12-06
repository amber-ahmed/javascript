//push and pop
var b = [1,2,3]
console.log(b)
b[b.length]=4//adding value to array at last
console.log(b)
b.push(5)//same as b[b.length]=5
b.push(100,200,300)
console.log(b)
console.log(b.pop())//return and remove last element form array
console.log(b)
//shift and unshift
b.shift()//return and remove first element of array
console.log(b)
console.log(b.length)
b.unshift(100)//add 100 to beginning
console.log(b)
console.log(b.length)
b.unshift(9,8,7)
console.log(b)
