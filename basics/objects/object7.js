//getters and setters
const person = {
    firstName: "John",
  lastName: "Doe",
  language : "en",
  get lang(){
    return this.language
  }
}
console.log(person.lang)//same as person.laguage, by get you access function as property
//console.log(person.lang()) gives error bcz lang is not treat as function when we use get
//setter
const person2 = {
    firstName: "donald",
    lastName: "trump",
    language :"",
    set lang(l){
        return this.language = l
    }
  };
  person.lang = "en" //same as person.language = "en"
  console.log(person.language)
  const person3 = {
    firstName : "",
    lastName : "",
    set setFirstName(fName){
        return this.firstName = fName
    },
    set setLastName(lName){
        return this.lastName = lName
    },
    get fullName(){
        return this.firstName + " " + this.lastName
    }
  }
  person3.setFirstName = "chand"
  person3.setLastName = "pasha"
  console.log(person3.fullName)
//Object.defineProperty()