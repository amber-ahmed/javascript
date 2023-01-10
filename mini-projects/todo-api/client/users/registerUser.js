import chalk from "chalk";
import fs from "fs/promises";
import axios from 'axios'
import readlineSync from "readline-sync";
import { sendSMS } from "../utils/index.js";
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
        // let password = readlineSync.questionNewPassword("Enter your Password : ");
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
        // console.log(username, email, phone, location, password, password2)

        let body = {username,email,password,password2,location,phone}
        let result = await axios.post('http://localhost:5003/api/user/register',body)
        await sendSMS({message : "Thanks for registering! We've reserved your space — see you there.",phone })


        console.log(chalk.green(result.data.success))

        // let fileData = await fs.readFile("data.json");
        // fileData = JSON.parse(fileData);
        // console.log(fileData);

        //Checking Dulicate Users
        // let emailFound = fileData.find((ele) => ele.email == email);
        // if (emailFound) {
        //     throw ("User Already Exists");
        // }
        // let userData = { username, email, phone, location, password, todos: [] }
        // console.log(userData);

        // fileData.push(userData);

        // await writeFile("data.json", JSON.stringify(fileData));
        // console.log(chalk.green("User Registered Successfully"));


    } catch (error) {
        // if(error.response.status == 400)
        // {
        //     let arr = error.response.data.errors
        //     arr.forEach((ele) => {
        //         console.log(chalk.red(ele.msg))
        //     })
        // }
        // else
        // console.error(chalk.red(error.response.data.error))
        console.error(error)
    }
}

// registerUser();
export default registerUser;