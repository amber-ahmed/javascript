/*
let a = 1, b = 2,c = 3,d = 4,e = 5
console.log(a,b,c,d,e)
you cannot access one variable with other variable
despite values of variables has relation but you cannot access one value with other
*/
let arr = [1,2,3,4,5]//same as a[0]=1,a[1]=2,a[2]=3,a[3]=4,a[4]=5
console.log(arr[0])//indexing starts from 0
console.log(arr)
//you can store any  values in array
//in other languages all array's values should be same type but in javascript you can store  different types
let names = ["amber","furqan",'zoeib']
console.log(names)
console.log(names[2])
let mixed = [0,1,5,'A',"hello",10.56]
console.log(mixed)
console.log(mixed[1],mixed[3])

var i=0
while(mixed[i++]!=undefined)//stops if array contain undefined
{}
console.log(i-1)
/*
var i=0,count=0,val=0
while(val!=undefined)
{
val=mixed[i++]
count++
}
console.log(count)
*/

/*
won't work below if array contains any falsy values
var l=0
while(mixed[l])
{
    l++
}
console.log(l) 
*/