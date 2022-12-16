
function fibSeries(n,a,b){
    if(n == 2){
        fibSeries(1,a,b)
        console.log(b)
        return b
    }
   else if(n==1){
        console.log(a)
    }
    else{
        b = fibSeries(n - 1,a,b)
        c = a + b
        console.log(c)
        return c
    }
}
fibSeries(8,0,1)