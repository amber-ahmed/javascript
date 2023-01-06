import express from "express";
import fs from "fs/promises";
import {
  uerRegisterationValidation,
  errorMiddleWare,
  userLoginValidation,
} from "./validation/index.js";
const app = express();
const port = 6002;
app.use(express.json());

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
app.get("/", (req, res) => {
  res.send("from server");
});

app.post(
  "/api/register",
  uerRegisterationValidation(),
  errorMiddleWare,
  async (req, res) => {
    try {
      let { username, email, phone, location, password } = req.body;
      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);

      //Checking Dulicate Users
      let emailFound = fileData.find((ele) => ele.email == email);
      if (emailFound) {
        return res
          .status(409)
          .json({ error: "User Already Exists, Please Log in." });
      }

      let userData = { username, email, phone, location, password, todos: [] };
      fileData.push(userData);
      console.log(JSON.stringify(fileData));
      await fs.writeFile("data.json", JSON.stringify(fileData));
      res.status(200).json({ success: "User Registered Successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

//User Login
app.post(
  "/api/login",
  userLoginValidation(),
  errorMiddleWare,
  async (req, res) => {
    try {
      let { email, password } = req.body;
      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);
      let emailFound = fileData.find((ele) => ele.email == email);
      if (!emailFound) {
        res.status(401).json({ error: "Unauthorised Access" });
      }
      if (emailFound.password != password) {
        res.status(401).json({ error: "Unauthorised Access" });
      }
      res.status(200).json({ success: "Login Successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

app.listen(port, () => {
  console.log("server started");
});
