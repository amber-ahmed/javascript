//Javascript in synchrounous language, but by few methods we can make it
//asynchronous one of them is using callback, example is setTimeOut
//setTimOut is asynchronous function which takes callback
//asynchronous functions are handled by EVENT LOOP

console.log('line 1')
console.log('line 2')
setTimeout(fun,10000)
console.log('line 4')

function fun(){
    console.log('line 3')
    setTimeout(fun2, 3000);
}
function fun2(){
        console.log('inner')
}