//Asynchronous Programming

/*
How to identify asynchronous functions
1. Function Call Back
2. Promise
3. Async Await
4. Generators

*/



// setTimeout(print, 1000);

// function print() {
//     console.log("Print this");
// }
console.log("Line 1");



setTimeout(() => {
    console.log("Hello India");
    setTimeout(() => {
        console.log("Hello World");
    }, 2000)
}, 5000)

// let outer = () => {
//     console.log("Hello India");
//     setTimeout(inner, 2000)
// }
// let inner = () => {
//     console.log("Hello World");
// }
// setTimeout(outer, 5000)

let arr = new Array(1000)
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[i], arr[j]);
    }
}


console.log("Line 2");
console.log("Line 3");

