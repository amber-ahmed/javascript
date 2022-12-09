var read = require('readline-sync')
var n = read.questionInt('enter size of array  ')
var arr = []
var i = 0
while(i<n){ 
    arr.push(read.questionInt('enter ' + (i+1) + 'st element '))
    i++
}
console.log(arr)
var sum = 0
arr.forEach((value) => {
sum+=value
})
console.log(sum)
console.log(sum/n)