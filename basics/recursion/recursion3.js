function fun(num){
    if(num == 4)
        return num
    return 2 * fun(num + 1)
}
var n = 1
console.log(fun(n))