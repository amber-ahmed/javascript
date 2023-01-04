function arithmetic(callbackArr,a,b){
    let arr = []
    for(let i = 0; i < callbackArr.length; i++){
        arr.push(callbackArr[i](a,b))
    }
    return arr
}
function add(a,b){
    return a + b
}
function sub(a,b){
    return a - b
}
function mul(a,b){
    return a * b
}
function div(a,b){
    return a / b
}
console.log(arithmetic([add,sub,mul,div],15,5))