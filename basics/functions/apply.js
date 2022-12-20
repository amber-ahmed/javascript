//apply is same as call but it takes arguments as array
//The apply() method is very handy if you want to use an array instead of an argument list.
const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  let details = person.fullName.apply(person1, ["Oslo", "Norway"]);
  console.log(details)
  //Math.min and Math.max
  //Used to get min or max respectively from list of arguments passed
  let min = Math.min(5,6,8,9,1,-5)
  let max = Math.max(100,-100,25,105,250)
  console.log(min,max)
  //By the help of apply we can use these two methods for arrays also
  min = Math.min.apply(null,[2,5,100,-2,-35,58])
  console.log(min)
  //what we are doing here is, as any object's method can be call by another object we can call Math.min by any object and it will behave same. Math.min is calling for  null object by taking arguments array 
  //as apply take arguments as array it is same as we are passing individual arguments
  //Math.max
  max = Math.max.apply(null,[100,-23,205,305,489,12])
  console.log(max)