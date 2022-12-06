/*

* * * * *
* * * *
* * *
* * 
*

*/
var n=5
var str = ""
for(var j=0;j<n;j++)
str+="* "
for(var i = (n*2)-1;i>0;i-=2)
{
    console.log(str.substring(0,i))
}