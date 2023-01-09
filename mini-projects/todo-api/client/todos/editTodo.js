import readlineSync from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";

import { randomStringGenerator } from "../utils/index.js";

async function editTodo(email) {
    try {
        console.clear();
        console.log(`
   ====================================\n
   \tEdit a Todo\n 
   ====================================`);
        //Get User Email
        // let email = readlineSync.questionEMail("Enter your Email : ");
        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData);
        //Checking if User Exists

        let emailFound = fileData.find((ele) => ele.email == email);
        // if (!emailFound) {
        //     throw ("User Doesn't exist. Invalid Response");
        // }
        //Display all the Tasks

        console.table(emailFound.todos);

        let todoIndex = readlineSync.questionInt("Enter the Task Index that you want to update : ");
        // while (todoIndex > emailFound.todos.length - 1 || todoIndex < 0) {
        //     todoIndex = readlineSync.questionInt("Enter a Valid Index that you want to update : ");
        // }

        while (!emailFound.todos[todoIndex]  && todoIndex >= emailFound.todos.length) {
            todoIndex = readlineSync.questionInt("Enter a Valid Index that you want to update : ");
        }


        let todoName = readlineSync.question("Enter Updated Task : ");
        while (!todoName) {
            todoName = readlineSync.question("Enter a Valid Task : ");
        }

        let isCompleted = readlineSync.question("Is this Task Completed Enter (y/n)");
        while (!isCompleted) {
            isCompleted = readlineSync.question("Enter a Valid Input : ");
        }
        if (isCompleted === "y" ||
            isCompleted === "Y" ||
            isCompleted === "yes") {
            isCompleted = true
        } else {
            isCompleted = false;
        }
        let todoData = {
            todoName,
            isCompleted,
            todo_id: emailFound.todos[todoIndex].todo_id
        }
        emailFound.todos[todoIndex] = todoData;

        await fs.writeFile("data.json", JSON.stringify(fileData));
        console.log(chalk.green("Task Edited Successfully"))

    } catch (error) {
        console.error(error);
    }
}

// editTodo('amber@gmail.com');
export default editTodo;