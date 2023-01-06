import express from 'express'
import fs from 'fs/promises'
import {body, validationResult } from 'express-validator'
const app = express()
const port = 6002
app.use(express.json())

/*
User Signup - Public - POST
User Login - Public - POST
All These are Private
User Deletion - DELETE
Create Task - POST
Edit Task - PUT
Delete Task - DELETE
Read Task - GET
Read Tasks - GET 
*/

//User Signup
app.get('/', (req, res) => {
    res.send("from server")
})

app.post('/api/register',body('email').isEmail(),
body('password').isLength({min : 5}),
// body(password2).isBo
body('phone').isMobilePhone(),
async  (req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty())
            return res.status(400).json({errors : errors.array()})
        let { username, email, phone, location, password, password2 } = req.body
        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)
        console.log(fileData)
        let emailFound = fileData.find(ele => ele.email == email)
        if(emailFound){
            return res.status(409).json('User already exist')
        } 
        let userData = {username, email, phone, location, password, password2, todos : []}
        fileData.push(userData)
        await fs.writeFile('data.json',JSON.stringify(fileData))
        res.status(200).json({ success: 'Regiter Successfully' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})


app.post('/api/login', body('email').isEmail(),
body('password').isLength({ min: 5 }),
(req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty())
        return res.status(400).json({error : errors.array()})
    
})

app.listen(port, () => {
    console.log('server started')
})