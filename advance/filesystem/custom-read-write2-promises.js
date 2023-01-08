import {cusReadFile,cusWriteFile} from './custom-read-write-promises.js'

async function main(){
    let data = await cusReadFile("data.json")
    data = JSON.parse(data)
    console.log(data)
    await cusWriteFile('data2.json',JSON.stringify(data))
}
main()