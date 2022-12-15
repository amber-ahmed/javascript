//let is restricted to block only
function loop(){
    let i = 0
    for(let i = 0; i < 11; i++){  //you cannot declare i with var here bcz 
                                 //var will declare it as global variable 
                                 //and you cannot redeclare variable with let at above line
        console.log(i)
    }
    console.log("while")
    while(i<21){
        console.log(i++)
    }
}
loop()
console.log()

let b = "Outside";

function main() {
    let a = "";
    console.log(a);
    console.log(b);
    if (a) {
        let c='block';
        console.log(c);
    }else {
        let c="binary";
        console.log(c);
    }
}
main();