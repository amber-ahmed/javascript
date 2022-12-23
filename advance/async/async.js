// console.log('line 1')
// console.log('line 2')
// setTimeout(() => console.log('line 3'),3000)
// console.log('line 4')

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