
let dataBase = {
    person1: 'amber',
    person2: 'ahmed',
}
let userDetails = {
    amber: {
        name: 'amber',
        age: 22
    },
    ahmed: {
        name: 'ahmed',
        age: 23
    }
}
let promise = get(dataBase)
console.log('waiting to fetch data')
//console.log(promise)
promise.then((res) => { return get(userDetails[res['person2']])})
.then((resp) => console.log(resp))

//get(userDetails[dataBase['person1']]).then( (respons) => console.log(respons))



function get(url) {
    let pr = new Promise(function (resolve, rejected) {
        let response = {}
        setTimeout(() => {
            try {
                response = url
                resolve(response)
            }
            catch (error) {
                let err = new Error('invalid url')
                rejected(err)
            }
        }, 1000)

    })
    return pr
}