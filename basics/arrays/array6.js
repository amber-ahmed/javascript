console.log('entries')
//entries
//return An iterable(object). An array with key/value pairs.
const fruit = ["Banana", "Orange", "Apple", "Mango"];
const f = fruit.entries();
console.log(typeof f)
console.log(f)
console.log(f[0])//cannot access bcz f is iterable object
//you can access iterable object by for of loop
for (let x of f) {
    console.log(x)
  }

//from
//returns An array.	The values from the iterable object
console.log('from')
let str = 'ABCDEFGHIJKL'
let arr = Array.from(str)//converts string to array,returns new array
console.log(arr)
//includes
//returns A boolean.	true if the value is found, otherwise false.
//don't confuse with find.
console.log('includes')
const fruits = ["Banana", "Orange", "Apple", "Mango"]
let find = fruits.includes("Apple")//returns true or false
console.log(find)
let find2 = fruits.includes("apple")//search case sensitive
console.log(find2)
//indexOf
//returns A number.	The index (position) of the first item found.
//-1 if the item is not found.
//don't confuse with findIndex, findeIndex checks for expression
console.log('indexOf')
let index = fruits.indexOf("Orange")//returns index of given value
console.log(index)
let index2 = fruits.indexOf("orange")
console.log(index2)
//find
console.log('find')
//Returns A value.	The value of the first element that pass the test.
//Otherwise it returns undefined.
const ages = [3, 10, 18, 20];
let check = ages.find(checkAge)
function checkAge(age) {
  return age > 18;
}
console.log(check)
//findIndex
//Returns A number.	The index of the first element that passes the test.Otherwise -1.
console.log('findIndex')
const num = [10,20,12,42,15]
let i = num.findIndex(findInd)
function findInd(n){
    return n == 12
}
console.log(i)
//join
//returns A string.	The array values, separated by the specified separator.
console.log('join')
const frts = ["Banana", "Orange", "Apple", "Mango"];
let text = frts.join(" and ");
console.log(text)
//lastIndexOf
//same as indexOf, but start searches from last index to first
//Retursn A number.	The position of the specified item.
//-1 if the item is not found.
console.log('lastIndexOf')
const chars = ['A','B','C','D','E','F','G']
let ind  = chars.lastIndexOf('F')
console.log(ind)
//reverse
//Returns The array after it has been reversed.
console.log('reverse')
let rev = fruits.reverse();
console.log(rev)