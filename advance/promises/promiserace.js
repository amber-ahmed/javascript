/*
Promise.race takes an array of promises. The result is a new promise that 
resolves or rejects as soon as one of the promises in the given array resolves or rejects
*/


function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time, 'success ' + time);
    });
}

Promise.race([delay(500), delay(100)]).then(function(data) {
    console.log(data);
});