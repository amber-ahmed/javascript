import readlineSync from "readline-sync";
import fs from "fs/promises";
import menu from "../display/index.js";
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
    // console.log(chalk.green("Tasks Fetched Successfully"));
    let shouldContinue = readlineSync.question("Go To Home ? (Y/n) : ");
    if (
      shouldContinue === "y" ||
      shouldContinue === "Y" ||
      shouldContinue === "yes"
    ) {
      menu();
    } else {
      console.log("Thank you for Using, Bye!");
    }
  } catch (error) {
    console.error(error);
  }
}

// getAllTodos();
export default getAllTodos;
