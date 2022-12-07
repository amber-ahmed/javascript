//even or odd
function evenOdd(element){
    if(element%2)
        console.log(element+" is odd")
    else
        console.log(element + " is even")
}
evenOdd(4)
for(var i =1;i<=10;i++){
    evenOdd(i)
}
console.log()
var fun = element => {
    if(element%2)
    console.log(element+" is odd")
else
    console.log(element + " is even")   
}
for(var j =1;j<=10;j++)
fun(j)