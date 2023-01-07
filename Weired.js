//TIPS
//https://markodenic.com/javascript-tips/
//BEHAVIOUR OF NaN
//https://medium.com/coding-in-simple-english/how-to-check-for-nan-in-javascript-4294e555b447#:~:text=In%20JavaScript%2C%20the%20best%20way,NaN%20will%20always%20return%20true%20.

//Fill method store same reference
let arr = new Array(5)
arr.fill([2,3])
//arr will store same references of inner arrays or nested arrays
console.log(arr)
//changing anyone inner element will change all inner elements
arr[2][0] = "hi"
console.log(arr)
//here we are change value of arr[2][0] but all the inner elements are effecting bcz
//fill method fill by same reference. All inner elements of arr have same reference
arr[1] = "hello"
console.log(arr)
//above statement did not change other elements bcz inner arrays are store by reference
//but not outer element

// ARRAY IS OBJECT
//Index of array other than positive integers consider as key and value is given to that is value of that key
//You cannot access it through iteration because, we iterate it through index value
//and as index value is not positive integer so we cannot access it
//and it does not effect lenght of the array
let arr2 = ["hi",25,3.78,true]
arr2[4.5] = 'object value'
console.log(arr2.length)
console.log(arr2[4.5])
arr2.forEach((ele) => {
    console.log(ele)
})
console.log(Array.isArray(arr2))