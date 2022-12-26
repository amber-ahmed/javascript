import   chalk from 'chalk'
var a = 0xffff
var b = 65535
var hexa = parseInt(b, 16)
console.log(hexa)
if (a == b)
    console.log("compared")
var x = ""
console.log(isNaN(x))
console.log(Number.isInteger(parseInt(x)))
console.log(10 / "")
console.log(null == 0)
console.log("" === 0)
console.log("undefined is zero", undefined == 0)
console.log(typeof null)
console.log(typeof false)
console.log(typeof NaN)
console.log(!5)
console.log(!0)
var a = "105"
a = a * 1
console.log(typeof (-a))
console.log(typeof a)
console.log("testing")
var i = "1001z"
i = +(i) // i stored as number, but as NaN
console.log(i) // NaN bcz i is not in number format
console.log(typeof i)
if (typeof i === 'number')
    console.log("not a number")
console.log('ABC' > 'abc')// true > true
console.log(true > true)// 1 > 1
let input = 'a'
if (input % 2 == 0)
    console.log('even')
console.log(parseInt(false))
console.log(false == "")
//= new Array(3)
let matrix = Array(3).fill(0)
//matrix[1][0] = ["j", 2]//gives error
console.log(matrix)
let arr = [
    {
        name : 'amber',
    age : 22},
    {
        name : 'ahmed',
        age : 23
    }
]
console.log(arr)
//console.log(arr[0].name)
arr[0].name = chalk.red('hi')
let data = JSON.stringify(arr[0])
let str = data.split(',')
str[0] = chalk.red(str[0])
console.log(JSON.parse(str.join(',')))
console.log(arr)