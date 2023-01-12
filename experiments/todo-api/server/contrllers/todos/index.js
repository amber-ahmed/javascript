import express from "express";
import fs from "fs/promises";
import {
  todoAddValidator,
  errorMiddleWare,
  todoDeleteValidator,
} from "../../middlewares/validators/index.js";
import authMiddleWare from "../../middlewares/auth/verifyToken.js";
import { randomStringGenerator } from "../../utils/index.js";
const router = express.Router();

router.use(express.json());

router.post(
  "/add",
  authMiddleWare,
  todoAddValidator(),
  errorMiddleWare,
  async (req, res) => {
    try {
      if (!req.logged) {
        return res.json({ access: false });
      }
      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);
      console.log(req.payload.email);
      let userFound = fileData.find((ele) => ele.email == req.payload.email);
      if (!userFound) {
        return res.status(401).json({ access: false });
      }
      let todoData = {
        todoName: req.body.todoName,
        isCompleted: false,
        todo_id: randomStringGenerator(12),
      };

      // console.log(todoData)
      userFound.todos.push(todoData);

      //Write File Data
      await fs.writeFile("data.json", JSON.stringify(fileData));
      return res.status(200).json({ success: "Add Task is Up." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.post(
  "/delete",
  authMiddleWare,
  todoDeleteValidator(),
  errorMiddleWare,
  async (req, res) => {
    try {
      if (!req.logged) {
        return res.json({ access: false });
      }
      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);
    //   console.log(req.payload.email);
      let userFound = fileData.find((ele) => ele.email == req.payload.email);
      if (!userFound) {
        return res.status(401).json({ access: false });
      }

      if (req.body.taskNumber >= userFound.todos.length) {
        return res.status(401).json({ error: "enter valid task" });
      }

      userFound.todos.splice(req.body.taskNumber, 1);
      await fs.writeFile("data.json", JSON.stringify(fileData));
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.post("/view", authMiddleWare, async (req, res) => {
  try {
    if (!req.logged) {
      return res.json({ access: false });
    }
    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);
    let userFound = fileData.find((ele) => ele.email == req.payload.email);

    if (!userFound) {

      return res.status(401).json({ access: false });
      
    }
    if(userFound.todos.length ==  0)
        res.status(200).json({todos : 'No data'})
    res.status(200).json({todos : userFound.todos})





  } catch (error) {
    console.log(error)
  }
});



router.post("/singletodo", authMiddleWare, async (req, res) => {
  try {
    if (!req.logged) {
      return res.json({ access: false });
    }
    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);
    let userFound = fileData.find((ele) => ele.email == req.payload.email);
    if (!userFound) {
      return res.status(401).json({ access: false });
    }

    if (req.body.taskNumber >= userFound.todos.length) {
      return res.status(401).json({ error: "enter valid task" });
    }


    let taskDetails = userFound.todos[req.body.taskNumber];
    return res.status(200).json({ success: true,taskDetails });



  } catch (error) {
    console.log(error)
  }
});



router.post("/edit", authMiddleWare, async (req, res) => {
  try {
    if (!req.logged) {
      return res.json({ access: false });
    }
    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);
  //   console.log(req.payload.email);
    let userFound = fileData.find((ele) => ele.email == req.payload.email);
    if (!userFound) {
      return res.status(401).json({ access: false });
    }



    userFound.todos[req.body.taskNumber].todoName = req.body.changes
    await fs.writeFile("data.json", JSON.stringify(fileData));
    return res.status(200).json({ success: true });



  } catch (error) {
    console.log(error)
  }
});


export default router;
