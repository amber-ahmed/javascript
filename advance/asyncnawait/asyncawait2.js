/*
basically await solve the given promise and gives result,just like .then()
hence await can be used instead of .then 
*/


async function demo(){
    let pr1 = new Promise(function(resolve,reject) {
        setTimeout(() => {
            resolve('pr1')
        }, 2000);
    })
    let pr2 = new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve('pr2')
        }, 5000);
    })
    
    let arr = []
    console.log('waiting for pr2 to resolve')
    arr[1] = await pr2
    console.log('waiting for pr1 to resolve')
    arr[0] = await pr1
    //console.log(typeof arr[0]  === 'object' && typeof arr[0].then === 'function')
    return arr
}
//console.log(demo())
console.log(demo().then(val => console.log(val)))