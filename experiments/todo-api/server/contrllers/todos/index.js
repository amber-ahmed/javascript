import express from 'express'
import fs from 'fs/promises'
import { todoAddValidator,errorMiddleWare } from '../../middlewares/validators/index.js'
import authMiddleWare from '../../middlewares/auth/verifyToken.js'
import { randomStringGenerator } from '../../utils/index.js'
const router = express.Router()

router.use(express.json())

router.post('/add',authMiddleWare, todoAddValidator(),errorMiddleWare,
 async (req,res) => {
    try {
        // console.log(req.headers)
        // const privateKey="codeforindia"
        // let token = req.headers['auth-token'];
        // console.log(token);
        // let payload = jwt.verify(token,privateKey);
        console.log(req.payload);

        //Reading FileData
        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData);

        //Check for User
        let userFound = fileData.find((ele) => ele.email == req.payload.email);
        if (!userFound) {
            return res.status(401).json({ error: "Unauthorised Access" })
        }

        let todoData = {
            todoName : req.body.todoName,
            isCompleted: false,
            todo_id: randomStringGenerator(12)
        }

        userFound.todos.push(todoData);

        //Write File Data
        await fs.writeFile("data.json", JSON.stringify(fileData));
       return res.status(200).json({ success: "Add Task is Up." })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" })
    }
})
export default router