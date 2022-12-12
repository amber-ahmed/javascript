var a=0,b=1,c
function fibSeries(n){
    if(n>0)
    {
         c = a + b
         a = b
         b = c
         console.log(c)
         fibSeries(n-1)
    }
}
console.log(0,"\n",1)
fibSeries(6)