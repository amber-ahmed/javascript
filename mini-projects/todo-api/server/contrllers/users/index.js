import bcrypt from 'bcrypt'
import express from 'express'
import { uerRegisterationValidation, userLoginValidation, errorMiddleWare } from '../../validators/index.js'
const router = express.Router()
router.use(express.json())
router.post('/register',uerRegisterationValidation(),errorMiddleWare,
async (req,res) => {

    try {
        let { username, email, phone, location, password } = req.body;
        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData);
  
        //Checking Dulicate Users
        let emailFound = fileData.find((ele) => ele.email == email);
        if (emailFound) {
          return res.status(401).json({error: "Unauthorized access"})
            .json({ error: "User Already Exists, Please Log in." });
        }
  
        let userData = { username, email, phone, location, password, todos: [] };
        fileData.push(userData);
        await fs.writeFile("data.json", JSON.stringify(fileData));
        res.status(200).json({ success: "User Registered Successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }

})

router.post('/login',userLoginValidation(),errorMiddleWare,
(req,res) => {
    // console.log(req.body)
    res.send('express router login')
})
export default router