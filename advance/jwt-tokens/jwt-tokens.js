import jwt from 'jsonwebtoken'
import fs from 'fs/promises'

async function main(){
    let username = 'amber'
    let email = 'amber123@gmail.com'

    const payload = {username,email}
    const privateKey = 'developer'
    const token = jwt.sign(payload,privateKey,{expiresIn : '1h'})
    console.log(token)
    fs.writeFile('token.txt',token)
}
main()