//The keyword async before a function makes the function return a promise
async function myFunction() {
    return "Hello";
}
console.log(myFunction())

async function myFunction2() {
    return "Hello";
}
myFunction2().then(
    function (value) { console.log(value); },
    function (error) { console.log(error); }
);
/*
The await keyword can only be used inside an async function.

The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
*/
async function myDisplay() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("I love You !!");
    });
    console.log(await myPromise)
    return myPromise
}

myDisplay().then((res) => console.log(res))
//
async function myDisplay2() {
    let myPromise = new Promise(function (resolve) {
        setTimeout(function () { resolve("I love You 2!!"); }, 3000);
    });
    //console.log(await myPromise)
    return  await myPromise
}
myDisplay2().then((res) => console.log(res))