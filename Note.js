//fill method store same reference
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