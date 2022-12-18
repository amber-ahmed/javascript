
    var a,b

function fibSeries(n){
    if(n == 2){
        a = 0
        b = 0
        fibSeries(1)
        console.log(1)
        return 1
    }
   else if(n==1){
        a = 0
        b = 0
        console.log(0)
    }
     
    else{
        b = fibSeries(n - 1)
        c = a + b
        a = b
        console.log(c)
        return c
    }
}
fibSeries(8)