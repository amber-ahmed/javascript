import chalk from "chalk";
import fs from "fs/promises";
import axios from "axios";
import readlineSync from "readline-sync";
import menu from "../display/index.js";
import continueApp from "../utils/continue.js";
import main from "../todo.js";
// import {writeFile} from "../utils/index.js"

async function registerUser() {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tRegister New User\n 
   ====================================`);
    let username = readlineSync.question("Enter Your Name : ");
    while (!username) {
      username = readlineSync.question("Please Enter a Valid Name : ");
    }
    let email = readlineSync.questionEMail("Enter your Email : ");
    let phone = readlineSync.question("Enter Your Phone : ");
    while (!phone) {
      phone = readlineSync.question("Please Enter a Valid Mobile Number : ");
    }
    let location = readlineSync.question("Enter your Location : ");
    while (!location) {
      location = readlineSync.question("Please Enter a Valid Location : ");
    }
    let password = readlineSync.question("Enter your password : ", {
      hideEchoBack: true,
    });
    let password2 = readlineSync.question("Re-Enter your password : ", {
      hideEchoBack: true,
    });
    while (password != password2) {
      console.log(chalk.red("Password Do Not Match"));
      password = readlineSync.question("Re-Enter your password : ", {
        hideEchoBack: true,
      });
      password2 = readlineSync.question("Confirm your password : ", {
        hideEchoBack: true,
      });
    }

    let body = { username, email, password, password2, location, phone };

    let response = await axios.post(
      "http://localhost:5005/api/user/register",
      body,
      {}
    );

    if (response.data.register) {
      await fs.writeFile("authToken.txt", response.data.token.toString());
      await menu();
    }
    return
  } catch (error) {
    // console.log('hi')
    if (error.response.status == 400) {
      let arr = error.response.data.errors;
      arr.forEach((ele) => {
        console.log(chalk.red(chalk.red(ele.msg)));
      });
    }else if(!error.response.data.register){
        console.log('User already exists')
    }
    
    else {
      console.log(error);
    }
    if (continueApp('Re register ?')) {
      registerUser()
    } else {
main()
    }
  }
}

// registerUser();
export default registerUser;
