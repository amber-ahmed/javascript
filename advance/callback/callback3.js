console.log("line 1")
print(() => console.log('line 2'))
console.log("line 3")

function print(fun){
  console.log('before')
  fun()
  console.log('after')
}
/*
Issues with callback
0. Callback hell: When the callback function is taking the callback function 
and again this callback function takes a callback function, and so on,
it creates callback hell. Callback hell makes complex maintenance and readability of the program,
this is known as the pyramid of doom.
1. Inversion of control: While we are passing a callback we don't have control over it,
which means we don't know how our callback function will use by a higher-order function.
*/