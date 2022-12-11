const person = {
    name : "jhon",
    age : 45,
    address : "east street"
}
console.log(person)
//adding new property to object
person.language = "english"
console.log(person)
//deleting property from object
delete person.language
console.log(person)
//Nested values
const myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
// properties can be access by following methods
console.log(myObj.cars.car1)
console.log(myObj.cars["car1"])
console.log(myObj["cars"].car1)
console.log(myObj["cars"]["car1"])