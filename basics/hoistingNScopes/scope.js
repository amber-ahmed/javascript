//scope of var is global
function loop(){
   // var i = 0
   console.log("before declare",i)
    for(var i = 0; i < 11; i++){
        console.log(i)
    }
    console.log("wile")
    while(i<21){
        console.log(i++)
    }
}
loop()