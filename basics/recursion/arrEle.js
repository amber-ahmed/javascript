function arrEle(i,ar){
    if(i == -1) return 
    arrEle(i-1,ar)
    console.log(ar[i])
}
var arr = [2,5,6,11,6,45]
arrEle(arr.length-1,arr)