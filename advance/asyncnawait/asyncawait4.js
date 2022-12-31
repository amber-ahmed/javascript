//we can solve this problem by giving await promise.catch()
//reject with await
//when promises reject it will throw error and furhter promises will not solve
//so instead you can use resolve in the place of reject
async function demo(){
    let pr1 = new Promise(function(resolve,reject) {
        setTimeout(() => {
            resolve('pr1')
        }, 2000);
    })
    let pr2 = new Promise(function (resolve,reject) {
        setTimeout(() => {
            reject('pr2')
        }, 5000);
    })
    
    let arr = []
    try{
    console.log('waiting for pr2 to resolve')
    arr[1] = await pr2.catch(() => {})
    console.log('waiting for pr1 to resolve')
    arr[0] = await pr1.catch(() => {})
    }catch(err) {console.log('error')}
    return arr
}
//console.log(demo())
console.log(demo().then(val => console.log(val)))