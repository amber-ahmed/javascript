/*
There are different ways to create new objects:
1. Create a single object, using an object literal.
2. Create a single object, with the keyword new.
3. Define an object constructor, and then create objects of the constructed type.
4. Create an object using Object.create().
*/
//using 1. object leiteral
const person = {name : "amber",age : 22, height : 5.6}
console.log(person)
const person2 = {}
console.log(person2)
person2.name = "ahmed"
person2.age = 30
console.log(person2)
//using 2. new keyword
const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";
console.log(person3)
//3. Refer object8.js

//4. Create an object using Object.create().
const per = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  const me = Object.create(per);
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.printIntroduction();
  //It does not change original object per bcz, it does not copy shallow copy,it just a prototype
  console.log(per)


//objects are MUTUBLE
const x = person 
/*
Objects are mutable: They are addressed by reference, not by value.
If person is an object, the following statement will not create a copy of person:
The object x is not a copy of person. It is person. Both x and person are the same object.
Any changes to x will also change person, because x and person are the same object.
*/