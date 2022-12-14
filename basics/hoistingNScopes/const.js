//const scope is also with in block beside that you cannot re-assign to const variable 
//but you can change values by helper methods
const a = 10
console.log(a)
//a = 12 gives error
const arr = [10,20,30,40,50]
console.log(arr)
arr.push(60)//changing arr with helper method push
console.log(arr)