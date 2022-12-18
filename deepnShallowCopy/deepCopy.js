/*
Deep Copy: Unlike the shallow copy, deep copy makes a copy of all the members of the old object,
allocates separate memory location for the new object and then assigns the copied members to the new object.
In this way, both the objects are independent of each other and in case of any modification to either one the
other is not affected. Also, if one of the objects is deleted the other still remains in the memory.
Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods
*/
var employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}
console.log("=========Deep Copy========");
var newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
//YOU CAN ALSO DEEP COPY OBJECTS BY FOLLOWING METHODS
//1.  Create an object using Object.create().//REFER  object2.js
//2. Object constructor// REFER object8.js