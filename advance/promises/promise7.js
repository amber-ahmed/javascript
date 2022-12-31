//The result of then is always a promise. Always. At worst, it can be a never resolved promise, but it is a promise.
/*
Returns a new Promise immediately. This new promise is always pending when returned, regardless of the current promise's status.

One of the onFulfilled and onRejected handlers will be executed to handle the current promise's fulfillment or rejection. The call always happens asynchronously, even when the current promise is already settled. The behavior of the returned promise (call it p) depends on the handler's execution result, following a specific set of rules. If the handler function:

returns a value: p gets fulfilled with the returned value as its value.
doesn't return anything: p gets fulfilled with undefined.
throws an error: p gets rejected with the thrown error as its value.
returns an already fulfilled promise: p gets fulfilled with that promise's value as its value.
returns an already rejected promise: p gets rejected with that promise's value as its value.
returns another pending promise: the fulfillment/rejection of the promise returned by then will be subsequent to the resolution/rejection of the promise returned by the handler. Also, the resolved value of the promise returned by then will be the same as the resolved value of the promise returned by the handler.
use Promise.resolve() to auto resolve returned promise
*/
let dataBase = {
    name : 'amber',
    age : 22
}

let promise = get(dataBase)
console.log('waiting to fetch data')
console.log(promise)
let str = promise.then((res) => {console.log(res); return Promise.resolve('hi')}).catch((err) => console.log(err))
str.then((r) => console.log(r) ) // str is promise that have already resolved and have value 'hi'
function get(url){
    let pr = new Promise(function (resolve,rejected){
        let response = {}
        setTimeout(() => {
            try{
            response.name = url.name
            response.age = url.age
            resolve(response)
            }
            catch(error){
                let err = new Error('invalid url')
                rejected(err)
            }
        },5000)
        
    })
    return pr
}