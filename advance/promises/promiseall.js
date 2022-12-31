function job(delay){
return new Promise(function (resolve,rejected){
    setTimeout(() => {
        resolve(delay)
    }, delay);
})
}
//without promise.all
job(4000).then((data) => console.log(data))
job(1000).then((data) => console.log(data))
job(3000).then((data) => console.log(data))
job(2000).then((data) => console.log(data))
//even thought we are resolvine first 4000 promise but it is resolving in sequence
//how it is doing means who ever first resolved that promise is  executed
console.log('we can solve it wiht promise.all')
let promises = Promise.all([job(4000),job(1000),job(3000),job(2000)])
promises.then((data) => {
    data.forEach((prData) => console.log(prData))
})
//But even if one promise is rejected then promise.all will not resolve further promise
//we can solve this problem with catch,see promiseall2.js