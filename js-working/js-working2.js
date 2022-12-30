/*
block scope
let b = 100
{
    var a= 10
    let b = 20
    const c = 30
    console.log(a)
console.log(b)
console.log(c)
}
console.log(a)
console.log(b)
console.log(c)
*/
//closures
/*
function x(){
    var a = 7
    function y(){
        console.log(a)
    }
    return y
}
var z = x()
z()
*/
/*
//setTimeOut and closure
// let i = 10
// setTimeout(() => console.log(i), 3000)
// i = 20
// console.log(i)

function x(){
    for(var i = 1; i <=5; i++){
        setTimeout(() => console.log(i),
        i * 1000)
    }
}
//x()
function y(){
    for(let i = 1; i <=5; i++){
        setTimeout(() => console.log(i),
        i * 1000)
    }
}
//y()
function z(){
   
    for(var i = 1; i <=5; i++){
        function close(x){
        setTimeout(() => console.log(x),
        x * 1000)
    }
        close(i)
    }    
}

z()
*/
//closure example
/*
let f
for(let  i = 0; i < 5; i++){
    function close(){
        console.log(i)
    }
    if(i ==  1)  
        f = close
}
f()

function counter(){
    var count = 0;
    return function incrementCounter(){
        count++
        console.log(count)
    }
}
var count1 = counter()
count1()
count1()
count1()
var count2 = counter()
count2()
count2()

function Counter(){
    var count = 0
    this.incrementCounter = function (){
        count++
        console.log(count)
    }
    this.decrementCounter = function (){
        count--
        console.log(count)
    }
}
var counter1 = new Counter()
counter1.incrementCounter()
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()
counter1.decrementCounter()
var counter2 = new Counter()
counter2.decrementCounter()
counter2.incrementCounter()
*/
//first class function
/*
the ability of functions to behave like values is called first calss function
like a function can be pass as arguments just like values,a fucntion can be returned
just like values, function can be assign to a variable just like value
thes all abiblities make a function first class function or first class citzen
*/
/*
setTimeout(() => {
    console.log('first')
    setTimeout(() => {
        console.log('inner')
    },7000)
}, 5000)
setTimeout(() => {
    console.log('second')
    setTimeout(() => {
        console.log('second inner')
    },4000)
},9000)
*/
//setTimeout trust issues
// console.log('start')
// setTimeout(() => console.log('settimeout'),5000)
// let start = new Date().getTime()
// let endTime = start
// while(endTime < start + 2000){
//     endTime = new Date().getTime()
// }
// console.log('end')
var obj = fetch('https://jsonplaceholder.typicode.com/posts/1')
console.log(obj)
var obj2  = {
    obj1 : { name : 'amber',age : 22},
    obj2 : { name : 'ahmed',age : 23}    
}
for(var x in obj){
    console.log("hi",x)
}