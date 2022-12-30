//Now lets create actual promise
let dataBase = {
    name : 'amber',
    age : 22
}

let promise = get(dataBase)
console.log('waiting to fetch data')
console.log(promise)
promise.then((res) => console.log(res)).catch((err) => console.log(err))

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