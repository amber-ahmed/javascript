import fs from 'fs'

// let str

// fs.readFile('hello.txt',function(err,data){
//     if(err)
//         throw err
//     str = data.toString()
//     console.log(data.toString())
//     fs.writeFile("hello2.txt",data.toString(),function(err){
//         if(err)
//             throw err
//         console.log("copied")
//     })
// })
// console.log(str)


cusReadFile('hello.txt').then((res) => {
    console.log(res)
    return res
}).then((res) => {
    return cusWriteFile('hello2.txt',res)
}).then((res) => console.log(res))


function cusWriteFile(fileName,data){
    return new Promise(function(resolve,reject){
            fs.writeFile(fileName,data,function(err){
        if(err)
            throw err
        resolve("copied")
    })
    })
}


function cusReadFile(fileName){
    let pr = new Promise(function(resolve,reject){
        fs.readFile(fileName,function(err,data){
            if(err)
                throw err
            resolve(data.toString())
        })
        
    })
    return pr
}