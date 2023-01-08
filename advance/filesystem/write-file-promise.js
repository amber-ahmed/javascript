import fs from 'fs/promises'

async function main(){
    let data = await fs.readFile("data.json")
    data = JSON.parse(data)
    data.push({name : 'ahmed',age : 23})
    await fs.writeFile('data.json',JSON.stringify(data))
}
main()