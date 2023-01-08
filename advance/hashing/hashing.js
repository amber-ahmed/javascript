import bcrypt from 'bcrypt'
import fs from 'fs/promises'
async function main(){
    let password = 'Amber@123'
    password = await bcrypt.hash(password,12)
    // console.log(password)
    await fs.writeFile('password.txt',password)
}
main()