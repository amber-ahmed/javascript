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
    //url = dataBase
    let pr = new Promise(function (resolve,rejected){
        let response = {}
        setTimeout(() => {
            try{
            response.name = url.name//dataBase.name
            response.age = url.age
            resolve(response)
            }
            catch(error){
                rejected('invalid url')
            }
        },5000)
        
    })
    return pr
}