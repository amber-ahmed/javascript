//With the bind() method, an object can borrow a method from another object.
//call and apply just call the method for another object but bind will give method
//permanently

//The bind() method creates a new function that, when called,
// has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
//IN SIMPLE WORDS BIND, BINDS A METHOD TO AN OBJECT WITH RESPECT TO this.
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  let fullName = person.fullName.bind(member)
  //method fullName of person is fully giving to member
  //whenever you call fullName we are calling fullName of member
  console.log(fullName())
  //Sometimes the bind() method has to be used to prevent loosing this.
//In the following example, the person object has a display method.
//In the display method, this refers to the person object:
const person2 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = this.firstName + " " + this.lastName;
      console.log(x)
    }
  }
  setTimeout(person2.display, 3000);
  //The bind() method solves this problem.
//In the following example, the bind() method is used to bind person.display to person.
//This example will display the person name after 3 seconds:
const person3 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
        let x = this.firstName + " " + this.lastName;
        console.log(x)
    }
  }
  let disp = person3.display.bind(person3);
  setTimeout(disp, 6000);
  
  const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());