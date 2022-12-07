// get keys and values of object
var obj = {
    name : "amber",
    age : 22,
}
var keys = Object.keys(obj)// here it returns object of keys
console.log(keys)
var values = Object.values(obj)// here it returns object of valuess
console.log(values)
//get keys using for in loop
for (x in obj)
{
    console.log(x +" "+ typeof x )//here x is string value
}
//get values using for in loop
for(x in obj)
{
    console.log(obj[x])
}
