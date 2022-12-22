let num = 5
let pwr = 3
function power(n,pwe){
    if(pwr == 0)
        return 1
    return n * power(n - 1)
}
console.log(power(num,pwr))