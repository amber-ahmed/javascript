//this keyword with objects

const person = {
    firstName : "jhon",
    lastName : "doe",
    id : 556,
    age : 45,
    fullName : function(){
        return this.firstName + " " + this.lastName
    }
}
console.log(person.fullName())
//below code gives error bcz firstName and lastName was not of function scope
/*
const object = {
    firstName : "jhon",
    lastName : "doe",
    id : 556,
    age : 45,
    fullName : function(){
        return firstName + " " + lastName
    }
}
console.log(object.fullName())
*/
const object = {
    firstName : "jhon",
    lastName : "doe",
    id : 556,
    age : 45,
    fullName : function(){
        var firstName = "donald"
        var lastName = "trump"
        return firstName + " " + lastName //here firstName and lastName is refering to functions variables not objects
    }
}
console.log(object.fullName())
console.log(Object.values(object))//Object.values return array containing values of object
console.log(Array.isArray(Object.values(object)))
console.log(JSON.stringify(person))// JSON.stringify returns string of keys and values of object
console.log(typeof (JSON.stringify(person)))
// JSON.stringify will not stringify functions:
//This can be "fixed" if you convert the functions into strings before stringifying.
person.fullName = person.fullName.toString()
let objString = JSON.stringify(person)
console.log(objString)
let strToObj = JSON.parse(objString)
console.log(strToObj)
//YOU STRINGIGY ARRAYS ALSO
const arr = ["John", "Peter", "Sally", "Jane"];
let myString = JSON.stringify(arr);//myString is string of values of arr
console.log(myString)