var str = "" //= String.fromCharCode(65)
var end = "E".charCodeAt(0)
console.log(end)
for (var i = 65 ; i <= end ;i++)
{
    str = str + String.fromCharCode(i) + " " 
    console.log(str)
}
