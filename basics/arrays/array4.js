var arr = new Array(1,"hello",10.55)
console.log(arr)
var arr2 = new Array(10)// not same as var arr2 = [10]
console.log(arr2)
//arrays to string
var arr3 =  ["apple","banana","mangoes"]
console.log(arr3.toString())
//join method
console.log(arr3.join("*"))
console.log(arr3.join(" "))
//concat
//Return An array	The content from the joined arrays
//concatenate two arrarys
console.log('concat')
var concat = arr.concat(arr3)// concatenate arr and arr3 and gives new array and assign to concat
console.log(concat)
//splice and slice
//both return arrays
var fruits = ["Banana","Orange","Apple","Mangoes","Strawberry"]
var delele = fruits.splice(1,2,"lemon","Kiwi")//remove 2 elements from index 1
console.log(fruits)
console.log(delele)//splice return array of deleted elements
//by using splice you can remove elements from particular index
fruits.splice(2,1)//removes element of index 2
console.log(fruits)
//slice 
//slice is littel bit same as shift but difference is
//slice remove and return the first elements, splice remove given number of elements and return array
console.log("slice")
console.log(fruits)
var slicedarr = fruits.slice(2)//remove 2 elemenst from beginnign and return array
console.log(slicedarr)
slicedarr.push("pomegranate")
console.log(fruits)
// slice with two parameters behave different
var cars = ['bmw','audi','mercedes','jaguar']
slicedarr = cars.slice(1,3)//return the array of elements from 1 to 2(not include 3)
console.log(slicedarr)
//slice is shallow copy but
var originalArray = [1, [2, 3], 4];
var slicedArray = originalArray.slice(); 
var nestedArray = slicedArray[1]; // [2, 3]
nestedArray.push("oh no, I mutated the original array!");
console.log(originalArray); // [1, [2, 3, "oh no, I mutated the original array!"], 4]