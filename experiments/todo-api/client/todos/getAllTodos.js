import readlineSync from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";

import { randomStringGenerator } from "../utils/index.js";
import axios from "axios";

async function getAllTodos() {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \t List of all Todos\n 
   ====================================`);
    let token = await fs.readFile("authToken.txt");
    token = token.toString();
    let response = await axios.post(
      "http://localhost:5005/api/todos/view",
      {},
      {
        headers: {
          "auth-token": token,
        },
      }
    );

    console.table(response.data.todos)

    // console.table(emailFound.todos);

    console.log(chalk.green("Tasks Fetched Successfully"));
  } catch (error) {
    console.error(error);
  }
}

// getAllTodos();
export default getAllTodos;
