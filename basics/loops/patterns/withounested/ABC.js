/*
A
A B
A B C
A B C D
A B C D E
*/
var input = "E"
var str = "" //= String.fromCharCode(65)
var end = input.charCodeAt(0)
console.log(end)
for (var i = 65 ; i <= end ;i++)
{
    str = str + String.fromCharCode(i) + " " 
    console.log(str)
}
