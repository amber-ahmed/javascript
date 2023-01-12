import chalk from "chalk";
import readlineSync from "readline-sync";
import axios from "axios";
import fs from "fs/promises";
import menu from "../display/index.js";
import main from "../todo.js";

async function userLogout() {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tUser Logout\n 
   ====================================`);
    let Confirm = readlineSync.question("Do you really want to log out y/n : ");
    if (
        Confirm === "y" ||
        Confirm === "Y" ||
        Confirm === "yes"
      ) {
        await fs.writeFile('authToken.txt','')
        main()
      } else {
        menu();
    }
    
  } catch (error) {
    console.log(error)
  }
}

// userLogin();
export default userLogout;
