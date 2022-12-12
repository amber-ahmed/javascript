function printRev(n){
    if(n==0)return
    console.log(n)
    printRev(n-1)
}
//printRev(10)
//
function print(n){
    if(n==0)return
    print(n-1)
    console.log(n)
}
print(10)