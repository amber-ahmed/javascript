import { readFile } from 'fs'
import fs from 'fs/promises'


async function main(){
    let fileData = await fs.readFile('data.json')
    fileData = JSON.parse(fileData)
    console.log(fileData)
}
main()