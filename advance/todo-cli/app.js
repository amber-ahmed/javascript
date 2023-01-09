import readlineSync from "readline-sync";
import loading from "loading-cli"

import { timer } from "./utils/index.js"
import registerUser from "./users/registerUser.js";
import userLogin from "./users/userLogin.js";
import delelteUser from './users/deleteUser.js'
//User Login 
//User Registration
//Delete User

//Insert Todo
//Edit Todo 
//Delete Todo
//View Todos

async function displayMenu() {
    try {
        console.clear();
        console.log("===================================");
        console.log("\t OUR TODO CLI APP");
        console.log("===================================");
        console.log(`
    Press 0 to Exit
    Press 1 To Create a User
    Press 2 to Login
    Press 3 to Delete Account 
    `)
        let option = readlineSync.questionInt("Please Enter your Choice : ");
        switch (option) {
            case 0:
                return console.log("EXIT");
                break;
            case 1:
                // console.log("User Registration");
                await registerUser();
                break;
            case 2:
                // console.log("User Login");
                await userLogin();
                break;
            case 3:
                await delelteUser()
                break

            break;
            default:
                console.log("Invalid Option");
        }
        let shouldContinue = readlineSync.question(
            "Do you want to continue ? (Y/n) : "
        );
        if (
            shouldContinue === "y" ||
            shouldContinue === "Y" ||
            shouldContinue === "yes"
        ) {
            const load = loading({
                "text": "Redirecting to Main Menu",
                "color": "blue",
                "interval": 250,
                "stream": process.stdout,
                "frames": ["😂", "😭"]
            }).start();
            await timer(3000);
            load.stop();
            displayMenu();
        } else {
            console.log("Thank you for Using, Bye!")
        }
    } catch (error) {
        console.error(error);
    }
}

displayMenu();