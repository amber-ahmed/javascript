//Object constructors
function Person(fName,lName,age){
    this.firstName = fName
    this.lastName = lName
    this.age = age
}
const obj1 = new Person("Jhon","Doe",35)
const obj2 = new Person("Sam","Jam",44)
console.log(obj1)
console.log(obj2)
const obj3 = new Person("Gems","Bond")
console.log(obj3)
const obj4 = new Person("Thomas","Edison",60,44)
console.log(obj4)