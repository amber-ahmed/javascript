//sort
var fruits = ['banana','orange','apple','mango']
console.log(fruits.sort())
//sort does not work on numbers
//min and max in array
var nums = [20,40,5,32,50]
console.log(Math.max.apply(null,nums))//same as Math.mix(20,40,5,32,50)
console.log(Math.min.apply(null,nums))
//array iteration
//forEach()
var arr = [45,32,99,72,54]
arr.forEach(myFun)//forEach does not return anything
function myFun(value,index)
{
    console.log(index +" "+value)
}
//map()
var num1 =  [20,32,99,72,54]
var num2 = num1.map(myFun2)//it iterate the num1 elements and assign new array to num2, it doesnot change num1
function myFun2(value,index)
{
    return value * 2
}
console.log(num2)
//filter()
var numOver40 = num1.filter(filterFun)//iterate every element and check test with element,if element is passes then assign that element to new array
function filterFun(value)
{
    return  value > 40  //in normal this returns true or false but because of filter it returns numbers greter than 40
}
console.log("filter " +numOver40)
//reduce()
var sum = num1.reduce(reduceFun)//iterate to each value and store previous value to total
console.log(num1)
function reduceFun(value,total)
{
    return total + value
}
console.log(sum)
//you can initialize total
sum = num1.reduce(reduceFun,100)
console.log(sum)
//reduceRight() same as reduce() but iterate right to left
//every()
//don't confuse with filter,filter return
var allOver30 = num1.every(everyFun)//iterate every element if all passes test then return true else false
console.log(allOver30)
function everyFun(value)
{
    return  value > 30
}
//some() same as every() but return true if atleast one element passes condition
//indexOf()
console.log(fruits)
var index = fruits.indexOf("banana")//return index of banana
console.log(index)    //return -1 if not found, and it checks case sensitive,if multiple occurs then it returns first occurence index
//lastIndexOf()  is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
//