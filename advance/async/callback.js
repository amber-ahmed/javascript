function add(disp,a,b){// passing disp as arguments, disp is function, passing function  is called call back function
    let sum = a + b
    disp(sum)
}
function disp(sum){
    console.log(sum)
}
let res = add(disp,5,10)