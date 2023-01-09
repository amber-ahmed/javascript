import bcrypt from 'bcrypt'
import express from 'express'
import jwt from "jsonwebtoken";
import fs from 'fs/promises'
import { uerRegisterationValidation, userLoginValidation, errorMiddleWare} from '../../middlewares/validators/index.js'
const router = express.Router()
router.use(express.json())
router.post('/register',uerRegisterationValidation(),errorMiddleWare,
async (req,res) => {

  try {
    // console.log(req.body);
    // console.log(req.ip);

    let { username, email, password, location, phone } = req.body

    //Reading FileData
    let fileData = await fs.readFile("data.json")
    fileData = JSON.parse(fileData);

    //Check for Duplicate Users
    let userFound = fileData.find((ele) => ele.email == req.body.email);
    if (userFound) {
        return res.status(409).json({ error: "User Already Exists" })
    }
    // bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    //     // Store hash in your password DB.
    // });

    //Hashing the Password
    password = await bcrypt.hash(password, 12);
    let userData = { email, username, password, location, phone, todos: [] }
    fileData.push(userData);
    await fs.writeFile("data.json", JSON.stringify(fileData));
    res.status(200).json({ success: "User is Registered Successfully" });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
}
 
})

router.post('/login',userLoginValidation(),errorMiddleWare,
async (req,res) => {
  try {
    // console.log(req.body);
    // console.log(req.ip);

    //Reading FileData
    let fileData = await fs.readFile("data.json")
    fileData = JSON.parse(fileData);

    //Check for User
    let userFound = fileData.find((ele) => ele.email == req.body.email);
    if (!userFound) {
        return res.status(401).json({ error: "Unauthorised Access" })
    }

    //Compare Hashed Passwords
    const matchPassword = await bcrypt.compare(req.body.password, userFound.password);
    // console.log(matchPassword);
    if (!matchPassword) {
        return res.status(401).json({ error: "Unauthorised Access" })
    }
    //Get Payload
    const payload = { email: req.body.email, username: userFound.username };
    const privateKey = "codeforindia";
    const token = jwt.sign(payload, privateKey,{expiresIn:'1h'});
    res.status(200).json({ success: "Login is Successful" });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
}
})
export default router