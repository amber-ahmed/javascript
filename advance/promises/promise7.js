//promise can also return values or promises
let dataBase = {
    name : 'amber',
    age : 22
}

let promise = get(dataBase)
console.log('waiting to fetch data')
console.log(promise)
let str = promise.then((res) => {console.log(res); return 'hi'}).catch((err) => console.log(err))
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