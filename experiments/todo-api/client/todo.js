// import jwt from "jsonwebtoken";
// import displayMenu from "./client/app.js";
import fs from "fs/promises";
import axios from "axios";
import readlineSync from 'readline-sync'
import userLogin from "./users/loginUser.js";
import registerUser from "./users/registerUser.js";
import menu from "./display/index.js";
import exp from "constants";

async function main() {
  try {
    let token = await fs.readFile("authToken.txt");
    let response = await axios.post("http://localhost:5005/api/user/home",{}, {
      headers: {
        "auth-token": token,
      }
    });
    // console.log(response.data.logged);
    // console.log(response.data.token);
    // console.log(response.data);

    if(!response.data.logged){
        console.clear();
        console.log("===================================");
        console.log("\t WELCOME TO TODO APP");
        console.log("===================================");
        console.log(`
    Press 0 to Exit
    Press 1 To Create a User
    Press 2 to Login
    `)
    await fs.writeFile('authToken.txt','')
    let option = readlineSync.questionInt("Please Enter your Choice : ");
        switch (option) {
            case 0:
                return console.log("EXIT");
            case 1:
                await registerUser();
                return
                break;
            case 2:
                await userLogin();
                return
                break;
            default:
                console.log("Invalid Option");
                main()
        }
    }
    else{
         await menu()
        // console.log('logged')
    }

  } catch (error) {
    // console.error(error);
    console.error(error);
  }
}
main();
export default main