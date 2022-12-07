var c = [1,2,3]
c[8]=10
console.log(c.length)
console.log(c[7])
console.log(c[10])
console.log(c)
/*
gives error
var arr
arr[0]=5
console.log(arr)
*/
var arr2=[]
console.log(arr2.length)
var arr3=new Array()
console.log(arr3.length)
arr3[4]=5
console.log(arr3)
var mixed = [2,"hello",10.54,'C']
//          -4   -3      -2   -1               
console.log(mixed[-1])
console.log(mixed.at(-1))
console.log(mixed.at(-2))
var input=15
var arr4 = new Array(input)//initialize arr4 with length
console.log(arr4.length)
console.log(arr4)

