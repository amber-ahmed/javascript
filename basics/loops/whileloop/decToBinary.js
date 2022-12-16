var str = ""
var num = 10
while(num>0){
    str += num%2
    num= Math.trunc(num/2)
}
str = str.split('').reverse().join('')
console.log(str)