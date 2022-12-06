/*

* * * * *
  * * * *
    * * *
      * *
        *
*/
var str = "* * * * *"
var spc = "         "
for(var i=0;i<9;i=i+2)
console.log(spc.substring(0,i)+str.substring(i,9))