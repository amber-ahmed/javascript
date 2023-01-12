import chalk from "chalk";
import readlineSync from "readline-sync";
import axios from "axios";
import fs from "fs/promises";
import menu from "../display/index.js";
import main from "../todo.js";
import continueApp from "../utils/continue.js";

async function userLogout() {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tUser Logout\n 
   ====================================`);
   if (continueApp('Do you really want to log out ?')) {
    await fs.writeFile('authToken.txt',"")
    menu();
  } else {
menu()
  }
    
  } catch (error) {
    console.log(error)
  }
}

// userLogin();
export default userLogout;
