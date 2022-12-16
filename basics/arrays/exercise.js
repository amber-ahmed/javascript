//Write a JavaScript function to check whether an `input` is an array or not
let input = undefined
function is_array(input){
    return Array.isArray(input)
}
console.log(is_array(input))
//Write a JavaScript function to clone an array
let arr = [5,2,6]
function arr_Clone(arr){
    return arr.slice(0)
}
let clone = arr_Clone(arr)
clone.push(45)
console.log(arr)
console.log(clone)
//Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array
function first(arr,n){
    return arr.slice(0,n)
}
console.log(first([4,6,8,10],-2))
//Write a JavaScript function to get the last element of an array.
//Passing a parameter 'n' will return the last 'n' elements of the array
function last(arr,n){
    return arr.slice(arr.length - n,arr.length)
}
console.log(last([5,78,32,6,46,15],-2))
//Write a simple JavaScript program to join all elements of the following array into a string
function join_ele(arr){
    return arr.join('+')
}
console.log(join_ele(['reed','green','black','white']))
//Write a JavaScript program which accept a number as input and insert dashes (-) 
//between each two even numbers
function dashBtEven(num){
    let str = num.toString()
    let result = []
    for(let i = 0; i < str.length; i++){
        if(str[i ]%2 === 0 && str [i+1]%2 === 0)
            result.push(str[i],'-')
        else
            result.push(str[i])
    }
    return result.join("")
}
console.log(dashBtEven(25468326))
