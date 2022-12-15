//scope of var is global
function loop(){
   // var j = 0
   console.log("before declare",i)
    for(var j = 0; j < 11; j++){
        console.log(j)
    }
    console.log("wile")
    while(j<21){
        console.log(j++)
    }
}
loop()
console.log()
a = 5;
// console.log(a);

function printNum() {
  
    while (i < 5) {
        console.log(i);
        i++;
    }
}
printNum();

console.log("This Is Output of Another Function");
function printN() {
    while (i < 11) {
        console.log(i);
        i++;
    }
}
printN();