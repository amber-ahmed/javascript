import fs from 'fs'
function delay(fun,ms){
    return new Promise(function (resolve,reject){
        if(ms < 0)
            reject('time cannot be in negative')
        else
            {
                setTimeout(() => resolve(fun()),ms)
            }
    })
}
delay(() => console.log(100),1000).catch((err) => console.log(err))

function cusReadFile(fileName,fun){
    return new Promise(function (resolve,reject) {
        try{
            resolve(fs.readFile(fileName,fun))     
        }catch(err){
            reject('file not found')
        }
    })
}

cusReadFile("hello.txt", (err, data) => {
    if (err)
        throw err
    console.log(data.toString());
}).catch((err)=>console.log(err))

function cusWriteFile(fileName,data,fun){
    return new Promise(function (resolve,reject) {
        try{
            resolve(fs.writeFile(fileName, data,fun))
        }catch(err){
            reject('file not found')
        }
    })
}

let data = 'hello world'
cusWriteFile("hello.txt", data, (err) => {
    if (err) throw err
    console.log("completed")
})
