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
console.log()
//
function fib(n){
    if(n==0)return 0
    if(n==1)return 1
    return fib(n-1) + fib(n-2)
}
var n =10
for(var i = 0 ;i<=n;i++)
console.log(fib(i))

