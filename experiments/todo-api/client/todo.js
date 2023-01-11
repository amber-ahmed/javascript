// import jwt from "jsonwebtoken";
// import displayMenu from "./client/app.js";
import fs from "fs/promises";
import axios from "axios";
import readlineSync from 'readline-sync'
import userLogin from "./users/loginUser.js";
import registerUser from "./users/registerUser.js";
import menu from "./display/index.js";

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




    /*
    let login = true;

    if (login) {
      home();
    } else {
      displayMenu();
    }

    let data = { "auth-token": token };
    let config = {
      method: "post",
      url: "http://localhost:5001/api/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    // let response = await axios(config);
    //below code is equivalent to above
    //let response = await axios.post('http://localhost:5001/api/user/login',data)
    console.log(chalk.green(response.data.success));
    await fs.writeFile(
      "./client/authToken.txt",
      response.data.token.toString()
    );
    */
  } catch (error) {
    // console.error(error);
    console.error(error);
    console.error(error);
  }
}
main();
