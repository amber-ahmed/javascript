/*
12345
1234
123
12
1
*/
var n =5
for(i = 0;i<n;i++){
    var ptn = ""
    for(j=1;j<=n-i;j++){
        ptn += j
    }
    console.log(ptn)
}
