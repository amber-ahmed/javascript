import readlineSync from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";

import { randomStringGenerator } from "../utils/index.js";

async function getAllTodos(email) {
    try {
        console.clear();
        console.log(`
   ====================================\n
   \t List of all Todos\n 
   ====================================`);

        // let email = readlineSync.questionEMail("Enter your Email : ");

        //Read File Contents from data.json
        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData);

        //Checking if User Exists
        let emailFound = fileData.find((ele) => ele.email == email);
        // if (!emailFound) {
        //     throw ("User Doesn't exist. Invalid Response");
        // }
        console.table(emailFound.todos);
     
        console.log(chalk.green("Tasks Fetched Successfully"))

    } catch (error) {
        console.error(error);
    }
}

// getAllTodos();
export default getAllTodos;