function countDig(n){
    if(n==0)
        return 0
    return countDig(Math.trunc(n/10)) + 1
}
console.log(countDig(502))