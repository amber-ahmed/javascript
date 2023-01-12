import chalk from "chalk";
import readlineSync from "readline-sync";
import axios from "axios";
import fs from "fs/promises";
import menu from "../display/index.js";
import continueApp from "../utils/continue.js";
async function userLogin() {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tUser Login\n 
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
      "http://localhost:5005/api/user/login",
      data,
      {}
    );

    if (response.data.access) {
      await fs.writeFile("authToken.txt", response.data.token.toString());
      await menu()
    }
    return
  } catch (error) {
    // console.error(error);
    if (error.response.status == 400) {
      let arr = error.response.data.errors;
      arr.forEach((ele) => {
        console.log(chalk.red(chalk.red(ele.msg)));
      });
    } else if (!error.response.data.access) {
      console.error("Unuthorized access");
    } else {
      console.log("Internal server error");
    }
    if (continueApp('Re login ?')) {
      userLogin()
    } else {
      console.log("Thank you for Using, Bye!");
    }
  }
}

// userLogin();
export default userLogin;
