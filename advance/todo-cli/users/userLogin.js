import chalk from "chalk";
import fs from "fs/promises";
import readlineSync from "readline-sync";

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
        while (!password ) {
            password = readlineSync.question("Enter a Valid Password : ", {
                hideEchoBack: true,
            });
        }

        // console.log(username, email, phone, location, password, confirmPassword)

        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData);

        //Checking if User Exists
        let emailFound = fileData.find((ele) => ele.email == email);
        if (!emailFound) {
            throw ("Unauthorised Access");
        }
        if(emailFound.password!=password){
            throw ("Unauthorised Access");
        }
        console.log("User Signed in Successfully")
    } catch (error) {
        console.error(error);
    }
}

// userLogin();
export default userLogin;