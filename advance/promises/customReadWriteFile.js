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
})
.then((res) => {
    return cusWriteFile('hello2.txt',res)
})

cusWriteFile('f/hello','data')
.then((res) => console.log(res))
.catch((err) => console.log(err))




function cusWriteFile(fileName,data){
    return new Promise(function(resolve,reject){
            fs.writeFile(fileName,data,function(err){
                if(err)
                reject("error")
        resolve(fileName)
    })
    })
}


function cusReadFile(fileName){
    let pr = new Promise(function(resolve,reject){
        fs.readFile(fileName,function(err,data){
            if(err)
                reject("error")
            resolve(data.toString())
        })
        
    })
    return pr
}