var str = "abc"
console.log(str)
var str2 = "DEF"
console.log(str+ str2)
console.log(str.toUpperCase())
console.log(str2.toLowerCase())
var names = "Iamamberahmed"
console.log(names.slice(3,8))
console.log(isNaN("a"))
console.log(isNaN("10"))
console.log(isNaN(""))//false because empty string is zero
console.log(isNaN(``))//false because empty string is zero
console.log(isNaN(''))//false because empty string is zero
console.log(isNaN(false))//false bcz false is zero
console.log(""==0)
console.log("null is not zero",null==0)
console.log(false==0)
console.log(NaN==0)
console.log(isNaN(parseInt("")))//parseInt converts empty string to NaN
console.log(!isNaN(parseInt("10")))
console.log(isNaN(undefined))//true bcz undefined NaN
console.log(isNaN(NaN))
// HEXA TO DECIMAL
console.log(parseInt("abc",16))
console.log(parseInt("apb",16))// taking just "a" and ignoring pb
console.log(parseInt("abc,d",16))
// CHECK HEXA OR NOT
var a  = parseInt("abC,d",16)
console.log(a.toString(16))
console.log((a.toString(16)===("abc,d")))

var hexVal = "Abc"
var dec  = parseInt("Abc",16)
console.log(dec.toString(16))
console.log(dec.toString(16)===hexVal)//gives false because dec.toString converts into lowercase and we have "Abc" so it is cmparing like "abc"==="Abc"

var hex = "Abc"
var decVal  = parseInt("Abc",16)
console.log(decVal.toString(16))
console.log((decVal.toString(16)===hex.toLowerCase()))

