/*
promises has two states 
1. pending
2. resolve(fullfilled)/rejected
and gives the resultant data known as response
So promises mainly gives promise state and response
*/

function createData(db){
    let res = { name : "",age : ""}
    setTimeout(() => { res.name = db.name;res.age = db.age;obj.promiseState = "fullfilled"},1000)
    let obj = {  
        promiseState : 'pending',
        response : res,
        then : function (callback){
            callback(this.response)
        }
    }
    return obj
}
let database = {
    name : 'ahmed',
    age : 22
}
const axios ={
    get : function (database){
        return createData(database)
    }
}
axios.get(database)
.then((res) => console.log(res))
console.log(axios.get(database))
console.log(axios.get(database).promiseState)