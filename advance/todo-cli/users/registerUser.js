import chalk from "chalk";
import fs from "fs/promises";
import readlineSync from "readline-sync";
import {writeFile} from "../utils/index.js"

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
        // let password = readlineSync.questionNewPassword("Enter your Password : ");
        let password = readlineSync.question("Enter your password : ", {
            hideEchoBack: true,
        });
        let confirmPassword = readlineSync.question("Re-Enter your password : ", {
            hideEchoBack: true,
        });
        while (password != confirmPassword) {
            console.log(chalk.red("Password Do Not Match"));
            password = readlineSync.question("Re-Enter your password : ", {
                hideEchoBack: true,
            });
            confirmPassword = readlineSync.question("Confirm your password : ", {
                hideEchoBack: true,
            });
        }
        // console.log(username, email, phone, location, password, confirmPassword)

        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData);
        // console.log(fileData);

        //Checking Dulicate Users
        let emailFound = fileData.find((ele) => ele.email == email);
        if (emailFound) {
            throw ("User Already Exists");
        }
        let userData = { username, email, phone, location, password, todos: [] }
        // console.log(userData);

        fileData.push(userData);

        await writeFile("data.json", JSON.stringify(fileData));
        console.log("User Registered Successfully");


    } catch (error) {
        console.error(error);
    }
}

// registerUser();
export default registerUser;