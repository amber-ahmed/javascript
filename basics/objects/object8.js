//Object constructors
function Person(fName,lName,age){
    this.firstName = fName
    this.lastName = lName
    this.age = age
    this.isHuman = true//default value,you can only change it by object.isHuman, you cannot change while creating object
}
const obj1 = new Person("Jhon","Doe",35)
const obj2 = new Person("Sam","Jam",44)
console.log(obj1)
console.log(obj2)
const obj3 = new Person("Gems","Bond")
console.log(obj3)
const obj4 = new Person("Thomas","Edison",60,44)
console.log(obj4)//44 is ignored
//Prototype property
//You cannot add new property constructor like this
Person.lang = 'en'//won't effect Person
//To add property to constructor we us prototype
const obj5 = new Person("Rahul","Thakur",23)
Person.prototype.lang = "en";
console.log(obj5)// does not show lang bcz added after creating object
console.log(obj5.lang)//
obj5.lang = 'fr'// you can change lang property like this
console.log(obj5.lang)
//Adding property before object creation
Person.prototype.country  = "USA"
const obj6 =new  Person("Chand","Pasha",50,"India")//You cannot pass values of properties that created by prototype
console.log(obj6.country)
//You can change values of properties that are made by prototype like this only
obj6.country = "India"
console.log(obj6)
//You can add new property to objects but that does not effect its constructor
obj6.color = "blue"//Not added to Person constructor
console.log(obj6)