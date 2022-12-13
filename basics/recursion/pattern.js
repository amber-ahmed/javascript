function pattern(n){
    if(n==0)return
    console.log("* * * * * *")
    pattern(n-1)
}
pattern(5)
//
function pattern(n){
    if(n==0)return ""
    var str = "* * * * * *\n" 
    return str  + pattern(n-1)
}
console.log(pattern(5))