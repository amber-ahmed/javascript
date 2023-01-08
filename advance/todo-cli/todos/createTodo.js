import readlineSync from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";

import { randomStringGenerator } from "../utils/index.js";

async function createTodo(email) {
    try {
        console.clear();
        console.log(`
   ====================================\n
   \tCreate a Todo\n 
   ====================================`);

        // let email = readlineSync.questionEMail("Enter your Email : ");

        let todoName = readlineSync.question("Please Enter a Task : ");
        while(!todoName){
            todoName = readlineSync.question("Enter a Valid Task : ");
        }

        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData);

        //Checking if User Exists
        // if (!emailFound) {
        //     throw ("User Doesn't exist. Invalid Response");
        // }
        let emailFound = fileData.find((ele) => ele.email == email);
        let todoData = {
            todoName,
            isCompleted: false,
            todo_id: randomStringGenerator(12)
        }
        emailFound.todos.push(todoData);
        await fs.writeFile("data.json", JSON.stringify(fileData));
        console.log(chalk.green("Task Added Successfully"))

    } catch (error) {
        console.error(error);
    }
}

// createTodo();

export default createTodo;