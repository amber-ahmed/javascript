import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import fs from "fs/promises";
import {
  uerRegisterationValidation,
  userLoginValidation,
  errorMiddleWare,
} from "../../middlewares/validators/index.js";
import authMiddleWare from "../../middlewares/auth/verifyToken.js";
const router = express.Router();
// router.use(express.json());

router.post("/home", authMiddleWare, async (req, res) => {
  if (req.logged) {
    return res.json({ logged: true, token: req.token });
  }
  return res.json({ logged: false });
});

router.post(
  "/register",
  authMiddleWare,
  uerRegisterationValidation(),
  errorMiddleWare,
  async (req, res) => {
    try {
      let { username, email, password, location, phone } = req.body;
      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);
      // console.log(email);
      let userFound = fileData.find((ele) => ele.email == email);
      // console.log(userFound);
      // console.log(req.body);
      if (userFound) {
        return res.status(409).json({ register: false });
      }

      password = await bcrypt.hash(password, 12);

      let userData = { email, username, password, location, phone, todos: [] };

      fileData.push(userData);
      console.log("a");
      await fs.writeFile("data.json", JSON.stringify(fileData));
      console.log('b');
      const privateKey = "developer";
      let payload = { email, username };
      let token = jwt.sign(payload, privateKey, { expiresIn: "1h" });
      console.log('c');
      res.status(200).json({ register: true,token }); 
      console.log('d');
    } catch (error) {
      // console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.post(
  "/login",
  authMiddleWare,
  userLoginValidation(),
  errorMiddleWare,
  async (req, res) => {
    try {
      if (req.logged) {
        return res.json({ logged: true, token: req.token });
      }

      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);

      let userFound = fileData.find((ele) => ele.email == req.body.email);

      const matchPassword = await bcrypt.compare(
        req.body.password,
        userFound.password
      );
      if (!matchPassword || !userFound) {
        return res.status(401).json({ access: false });
      }

      const privateKey = "developer";
      let payload = { email: req.body.email, username: userFound.username };
      let token = jwt.sign(payload, privateKey, { expiresIn: "1h" });
      return res.status(200).json({ access: true, token });
    } catch (error) {
      //  console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);





router.post(
  "/delete",
  authMiddleWare,
  userLoginValidation(),
  errorMiddleWare,
  async (req, res) => {
    try {
      if (req.logged) {
        return res.json({ logged: true, token: req.token });
      }

      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);

      let userFound = fileData.find((ele) => ele.email == req.body.email);

      const matchPassword = await bcrypt.compare(
        req.body.password,
        userFound.password
      );
      if (!matchPassword || !userFound) {
        return res.status(401).json({ deleted: false });
      
      }
      fileData.splice(fileData.indexOf(userFound),1)
      await fs.writeFile('data.json',fileData)
      return res.status(200).json({ success: true });


      // const privateKey = "developer";
      // let payload = { email: req.body.email, username: userFound.username };
      // let token = jwt.sign(payload, privateKey, { expiresIn: "1h" });
      // return res.status(200).json({ access: true, token });
    } catch (error) {
      //  console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
export default router;
