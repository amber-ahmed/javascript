import readlineSync from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";
import axios from "axios";

async function deleteTodo() {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tDelete a Todo\n 
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



        let taskNumber = readlineSync.questionInt('Enter task number : ')
        let data = {taskNumber}
   let response = await axios.post(
    "http://localhost:5005/api/todos/delete",
    data,
    {
      headers : {
          'auth-token' : token
      }
    }
  );   
if(response.data.success){
  console.log("task deleted succesfully")
}

let shouldContinue = readlineSync.question(
  "Go To Home ? (Y/n) : "
);
if (
  shouldContinue === "y" ||
  shouldContinue === "Y" ||
  shouldContinue === "yes"
) {
    menu()
} else {
  console.log("Thank you for Using, Bye!");
}

    // let fileData = await fs.readFile("data.json");
    // fileData = JSON.parse(fileData);
    // console.log(fileData);
    // let emailFound = fileData.find((ele) => ele.email == email);
    // console.table(emailFound.todos);
    // let todoIndex = readlineSync.questionInt("Enter the Task Index that you want to delete : ");
    // while (!emailFound.todos[todoIndex] && todoIndex >= emailFound.todos.length) {
    //     todoIndex = readlineSync.questionInt("Enter a Valid Index that you want to delete : ");
    // }

    // emailFound.todos.splice(todoIndex,1)
    // await fs.writeFile("data.json", JSON.stringify(fileData));
    //     console.log(chalk.green("Task Edited Deleted"))


  } catch (error) {
    // console.log(error);


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
  let shouldContinue = readlineSync.question(
    "Go To Home ? (Y/n) : "
  );
  if (
    shouldContinue === "y" ||
    shouldContinue === "Y" ||
    shouldContinue === "yes"
  ) {
      menu()
  } else {
    console.log("Thank you for Using, Bye!");
  }
}
export default deleteTodo
