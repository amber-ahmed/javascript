import fs from 'fs'
fs.readFile('hello.txt', (err, data) => {
    if(err)
        throw err
    console.log(data.toString())
})
fs.readFile('json-demo.json',(err, data) => {
    if(err)
        throw err
    console.log(JSON.parse(data))
    console.log(JSON.parse(data).age)

})
