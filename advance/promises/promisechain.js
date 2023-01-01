// import axios from 'axios'
// axios.get('https://jsonplaceholder.typicode.co/posts')
// .then((res) => {
//     console.log(res.data)
// }).catch((res) => {
//     console.log(res)
// })

let cart = ['shoes','shirt','groceries','xyz']



 getOrder(cart).then((orderId) => {
    console.log(orderId)
    return orderId//promise , orderId, resolved
})

.then((orderId) => {
    console.log("payment successful")
     return payment(orderId)//promise ,successfull
})

.then((successful) => {
    console.log("500rs")
    return summary(successful)
})

.then((summary) =>{
    console.log(summary)
})

.catch((res) => console.log(res))


function getOrder(cart){
    let orderId = '12345'
    let pr = new Promise(function (resolve,reject){
        setTimeout(() => {
            //....
            if(validateCart(cart))
                 resolve(orderId)
            else
                reject('rejected')
        }, 2000);
    })
  return pr  
}

function payment(orderId){
    let successful = '500rs'
    let pr = new Promise(function (resolve,reject){
        setTimeout(() => {
            if(orderId){
                //.....
                resolve(successful)
            }
        }, 2000);
    })
    return pr 
}

function summary(summary){
    let summ = 'order placed'
    let pr = new Promise(function (resolve,reject){
        setTimeout(() => {
            if(summ){
                //.....
                resolve(summ)
            }
        }, 2000);
    })
    return pr  
}

function validateCart(cart){
    //.....
    return true
}
