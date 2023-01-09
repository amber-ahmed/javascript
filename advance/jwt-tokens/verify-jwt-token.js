import jwt from 'jsonwebtoken'
import fs from 'fs/promises'

async function main(){
    let jwtToken = await fs.readFile('token.txt')
    jwtToken = jwtToken.toString()
    const privateKey = 'developer'
    let decodedPayload = jwt.verify(jwtToken,privateKey)
    console.log(decodedPayload)
}
main()