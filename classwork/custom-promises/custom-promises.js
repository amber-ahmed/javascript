import fs from 'fs'
function delay(fun,ms){
    return new Promise(function (resolve,reject){
        if(ms < 0)
            reject('time cannot be in negative')
        else
            {
                setTimeout(fun,ms)
                resolve()
            }
    })
}
delay(() => console.log(100),1000).catch((err) => console.log(err))

function cusReadFile(fileName,fun){
    return new Promise(function (resolve,reject) {
        try{
            fs.readFile(fileName,fun)
            resolve()     
        }catch(err){
            reject('error')
        }
    })
}

cusReadFile("hello.txt", (err, data) => {
    if (err) {
        console.error(err);
        return;
      }
    console.log(data.toString());
}).catch((err)=>console.log(err))

function cusWriteFile(fileName,data,fun){
    return new Promise(function (resolve,reject) {
        try{
            fs.writeFile(fileName, data,fun)
            resolve()
        }catch(err){
            reject('error')
        }
    })
}

let data = 'hello world'
cusWriteFile("hello.txt", data, (err) => {
    if (err) {
        console.error(err);
        return;
      }    console.log("completed")
})
