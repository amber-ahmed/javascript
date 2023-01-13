import readlineSync from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";
import axios from "axios";

import { randomStringGenerator } from "../utils/index.js";
import menu from "../display/index.js";
import continueApp from "../utils/continue.js";

async function createTodo() {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tCreate a Todo\n 
   ====================================`);

    let todoName = readlineSync.question("Please Enter a Task : ");
    while (!todoName) {
      todoName = readlineSync.question("Enter a Valid Task : ");
    }
    let data = { todoName };
    let token = await fs.readFile("authToken.txt");
    token = token.toString();
    let response = await axios.post(
      "http://localhost:5005/api/todos/add",
      data,
      {
        headers: {
          "auth-token": token,
        },
      }
    );

    if (response.data.access) {
      await fs.writeFile("authToken.txt", response.data.token.toString());
    }
    console.log('task added')
    if (continueApp('Go to Home ?')) {
      return    menu();
    } else {
      console.log("Thank you for Using, Bye!");
    }
  } catch (error) {
    if (error.response.status == 400) {
      let arr = error.response.data.errors;
      arr.forEach((ele) => {
        console.log(chalk.red(chalk.red(ele.msg)));
      });
    } else if (!error.response.data.access) {
      console.error("Unuthorized access");
    } else {
      console.log("Internal server error");
    }
  }
  if (continueApp('Go to Home ?')) {
    return menu();
  } else {
    console.log("Thank you for Using, Bye!");
  }
}

// createTodo();

export default createTodo;
