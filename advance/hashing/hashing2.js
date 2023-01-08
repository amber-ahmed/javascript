import fs from 'fs/promises'
import bcrypt from 'bcrypt'

async function main(){
    let password = await fs.readFile('password.txt')
    password = password.toString()
    console.log(password)
    let enteredPassword = 'Amber@123'
    let matchPassword =  bcrypt.compare(enteredPassword,password)//order should be maintain,bcrypt.compare(to be compare value, hash code)
    if(matchPassword)
        console.log('password matched')
    else
        console.log('password does not match')
}
main()