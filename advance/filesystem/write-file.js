import fs from 'fs'

const data = {
    name : 'amber',
    age : 22
}


fs.writeFile('data.json',JSON.stringify(data), (err) => {
    if(err) throw err
     console.log('updated')
})
const data2 = {
    name : 'ahmed',
    age : 23
}
fs.appendFile('data.json',JSON.stringify(data2), (err) => {
    if(err) throw err
     console.log('updated')
})