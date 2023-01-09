import readlineSync from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";

async function deleteTodo(email) {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tDelete a Todo\n 
   ====================================`);
    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);
    console.log(fileData);
    let emailFound = fileData.find((ele) => ele.email == email);
    console.table(emailFound.todos);
    let todoIndex = readlineSync.questionInt("Enter the Task Index that you want to delete : ");
    while (!emailFound.todos[todoIndex] && todoIndex >= emailFound.todos.length) {
        todoIndex = readlineSync.questionInt("Enter a Valid Index that you want to delete : ");
    }

    emailFound.todos.splice(todoIndex,1)
    await fs.writeFile("data.json", JSON.stringify(fileData));
        console.log(chalk.green("Task Edited Deleted"))


  } catch (err) {
    console.log(err);
  }
}
export default deleteTodo
