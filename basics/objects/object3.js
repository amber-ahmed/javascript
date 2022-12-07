// COMPUTED PROPERTIES
var input = "amber"
var obj = {
    amber :{
        age : 22,
        mail : "amber@gmail.com"
    },
    "x-auth-token" : "abcdriejdflj" , //without double quotes gives error bcz hyphens not allowed in key without qoutes
    y : "hello",
    "10chance" : "given"
}
console.log(obj.input)//undefined because no property with input in object
console.log(obj[input])//correct bcz input is computed value
//whenver you want to access object property dynamic you have to use [] instead of '.'
console.log(obj["x-auth-token"])//you should use [] with double quoutes for x-auth-token
//console.log(obj[y]) error bcz in [] should be  string or variable or expression
console.log(obj[5+5+"chance"])
// console.log(obj[input][age])  gives error bcz age is static not dynamic
console.log(obj[input]["age"])
