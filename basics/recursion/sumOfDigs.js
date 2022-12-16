function sumOfDigs(n){
    if(n==0)
        return 0
    var dig = n % 10
    return sumOfDigs(Math.trunc(n/10)) + dig
}

console.log(sumOfDigs(451))