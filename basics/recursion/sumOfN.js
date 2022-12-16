function sumOfN(n){
    if(n == 1 ) return 1
    return sumOfN(n-1) + n
}
console.log(sumOfN(5))