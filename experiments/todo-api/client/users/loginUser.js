import chalk from "chalk";
import readlineSync from "readline-sync";
import axios from "axios";
import fs from "fs/promises";


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
        let config = {
            method: 'post',
            url: 'http://localhost:5003/api/user/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        let response = await axios(config)

        console.log(chalk.green(response.data.success))
        await fs.writeFile("authToken.txt",response.data.token.toString());

    } catch (error) {
        // console.error(error);
        if(error.response.status == 400)
        {
            let arr = error.response.data.errors
            arr.forEach((ele) => {
                console.log(chalk.red(chalk.red(ele.msg)))
            })
        }
        else
            console.error(chalk.red(error.response.data.error))

    }
}

// userLogin();
export default userLogin;