
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
console.log(promise)
promise.then((res) => {
    for (let x in res) {
        get(userDetails[res[x]]).then((resp) =>
            console.log(resp))
    }
})
    .catch((err) => console.log(err))

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