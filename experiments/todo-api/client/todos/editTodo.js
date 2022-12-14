import readlineSync from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";
import axios from "axios";
import open from "open";
import menu from '../display/index.js'
import continueApp from "../utils/continue.js";
async function editTodo() {
    try {
        console.clear();
        console.log(`
   ====================================\n
   \tEdit a Todo\n 
   ====================================`);

    
   let token = await fs.readFile('authToken.txt')
        token = token.toString()
        let res = await axios.post(
          "http://localhost:5005/api/todos/view",
          {},
          {
            headers: {
              "auth-token": token,
            },
          }
        );
    
        console.table(res.data.todos)



        let taskNumber = readlineSync.questionInt('Enter task number to edit: ')

        let data = {taskNumber}
        let response = await axios.post(
         "http://localhost:5005/api/todos/singletodo",
         data,
         {
           headers : {
               'auth-token' : token
           }
         }
       );  
console.log(response.data.taskDetails)



let task = response.data.taskDetails.todoName
// let taskId = response.data.taskDetails.todo_id
await fs.writeFile("./temp.txt", task);
console.log("Edit in editor");
await open("./temp.txt");
let save = readlineSync.question("Do you want to save changes y/n : ");

if (save == "y" || save == "Y" || save == "yes") {
  let changes = await fs.readFile("./temp.txt");
  changes = changes.toString()

//   fileData = await fs.readFile("data.json");
//   fileData = JSON.parse(fileData);
//   fileData[taskNumber].todos = changes.toString()
//   await fs.writeFile("data.json", JSON.stringify(fileData));

let data2 = {taskNumber,changes}
  let response2 = await axios.post(
    "http://localhost:5005/api/todos/edit",
    data2,
    {
      headers : {
          'auth-token' : token
      }
    }
  );   
   if(response2.data.success)
    console.log('Edit successfully')
    if (continueApp('Go to Home ?')) {
      return menu();
    } else {
      console.log("Thank you for Using, Bye!");
    }
}




   




    } catch (error) {        
    if (error.response.status == 400) {
        let arr = error.response.data.errors;
        arr.forEach((ele) => {
          console.log(chalk.red(chalk.red(ele.msg)));
        });
      } else if (error.response.data.error) {
        console.error("enter valid task");
      } else {
        console.log(error);
      }
  
    }
    if (continueApp('Go to Home ?')) {
      return menu();
    } else {
      console.log("Thank you for Using, Bye!");
    }


    }


// editTodo('amber@gmail.com');
export default editTodo;