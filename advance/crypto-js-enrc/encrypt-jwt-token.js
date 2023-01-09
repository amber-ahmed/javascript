import jwt from 'jsonwebtoken'
import cryptoJs from 'crypto-js'
import chalk from 'chalk'
//
const payload = {
    name : "amber",
    email : "amber@gmail.com",
}
console.log(chalk.red('payload ') + JSON.stringify(payload))
//encode payload
const privateKey = 'dev321'
const jwtToken = jwt.sign(payload,privateKey,{expiresIn : '1h'})
console.log(chalk.red('jwt token ') + jwtToken)
//encrypting jwt token
const encryptKey = 'dev123'
let encryptedJwtToken = cryptoJs.AES.encrypt(jwtToken,encryptKey).toString()
console.log(chalk.red('encrypted Jwt Token ') + encryptedJwtToken)
//decrypting jwt token
const bytes = cryptoJs.AES.decrypt(encryptedJwtToken,encryptKey)
const decryptedJwtToken = bytes.toString(cryptoJs.enc.Utf8)
console.log(chalk.red('decrypted Jwt Token ') + decryptedJwtToken)

