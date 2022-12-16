//from
let str = 'ABCDEFGHIJKL'
let arr = Array.from(str)//converts string to array,returns new array
console.log(arr)
//includes
const fruits = ["Banana", "Orange", "Apple", "Mango"]
let find = fruits.includes("Apple")//returns true or false
console.log(find)
let find2 = fruits.includes("apple")//search case sensitive
console.log(find2)
//indexOf
let index = fruits.indexOf("Orange")//returns index of given value
console.log(index)
let index2 = fruits.indexOf("orange")
console.log(index2)
