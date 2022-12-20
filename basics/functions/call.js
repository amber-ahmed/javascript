//call is a global method that is used to invoke a method of an object for another object
let person = {
    firstName : "Jhon",
    lastName : "Dow",
    fullName : function () {
        return this.firstName + " " + this.lastName
    }
}
//here fullName function belongs to person and in function this means function's variables
//that are Jhon and Doe but when we call fullName with call it will refer to another 
//calling object
let person2 = {
    firstName : "Marry",
    lastName : "Juliet",
}
//We can use fullName of person object for person2 with call, it will behave 
//as, fullName is person2 method
let fullName = person.fullName.call(person2)//it is behaving like, person2 has fullName and it is calling it
console.log(fullName)
//call with parameters
let object = {
        features : function(name,color){
            return name + "  " + color + " " + this.speed //speed is not belongs to object but can be used for call objects
    }
}
let object2 = {
    speed : 180,
}
let features = object.features.call(object2,"BMW","Black")
console.log(features)
console.log(object.speed)//undefined bcz speed not member of object