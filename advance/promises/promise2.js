function createData(db){
    let res = { name : "",age : ""}
    setTimeout(() => { res.name = db.name;res.age = db.age},1000)
    let obj = {     
        then : function (callback){
            callback(res)
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