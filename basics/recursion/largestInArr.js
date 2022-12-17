function largestInArr(i,ar){
    if(i==0)
        return ar[0]
    return largestInArr(i-1,ar) > ar[i] ? ar[i-1] : ar[i]
}

var arr = [5,6,7,10,45,3]
console.log(largestInArr((arr.length-1),arr))