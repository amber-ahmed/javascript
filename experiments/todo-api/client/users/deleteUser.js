import chalk from "chalk";
import readlineSync from "readline-sync";
import axios from "axios";
import fs from "fs/promises";
import menu from "../display/index.js";
import continueApp from "../utils/continue.js";
import main from "../todo.js";

async function deleteUser() {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \Delete User\n 
   ====================================`);
    let email = readlineSync.questionEMail("Enter your Email : ");
    let password = readlineSync.question("Enter your password : ", {
      hideEchoBack: true,
    });
    while (!password) {
      password = readlineSync.question("Enter a Valid Password : ", {
        hideEchoBack: true,
      });
    }

    let data = { email, password };
    let response = await axios.post(
      "http://localhost:5005/api/user/delete",
      data,
      {}
    );
if(response.data.deleted){
  await fs.writeFile('authToken.txt','')
  console.log('Account deleted successfully')
  if (continueApp('Go to Home ?')) {
main()
  } else {
return
  }
}
    return
  } catch (error) {
    console.error(error);
    if (error.response.status == 400) {
      let arr = error.response.data.errors;
      arr.forEach((ele) => {
        console.log(chalk.red(chalk.red(ele.msg)));
      });
    } else if (!error.response.data.deleted) {
      console.error("Unuthorized access");
    } else {
      console.log("Internal server error");
    }
    if (continueApp('Try Again ?')) {
      deleteUser()
    } else {
      console.log("Thank you for Using, Bye!");
    }
  }
}

// userLogin();
export default deleteUser;
