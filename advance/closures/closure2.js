//setTimeOut and closure
let i = 10
setTimeout(() => console.log(i), 3000)
i = 20
console.log(i)

function x(){
    for(var i = 1; i <=5; i++){
        setTimeout(() => console.log(i),
        i * 1000)
    }
}
x()
