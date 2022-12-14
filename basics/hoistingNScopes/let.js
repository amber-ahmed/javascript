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