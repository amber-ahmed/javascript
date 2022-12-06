let mixed = [0,1,5,'A',"hello",10.56]
var i=0
while(mixed[i++]!=undefined)
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