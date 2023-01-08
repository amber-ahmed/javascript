import chalk from "chalk";
import fs from "fs/promises";
import readlineSync from "readline-sync";
import createTodo from "../todos/createTodo.js";
import editTodo from "../todos/editTodo.js";
import getAllTodos from "../todos/getAllTodos.js";
import deleteTodo from "../todos/deleteTodo.js";

async function userLogin() {
    try {
        console.clear();
        console.log(`
   ====================================\n
   \tUser Login\n 
   ====================================`);
        let email = readlineSync.questionEMail("Enter your Email : ");
        // let email = 'amber@gmail.com'
        let password = readlineSync.question("Enter your password : ", {
            hideEchoBack: true,
        });
        // let password = '12345'
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
        console.log(`
        ====================================\n
        \tOptins \n 
        ====================================`);
        console.log('1. create todo')
        console.log('2. edit todo')
        console.log('3. delete todo')
        console.log('4. view todos')
        let choice = readlineSync.questionInt('enter your choice : ')
        switch(choice){
            case 1 :
                await createTodo(email)
                break
            case 2 :
                await editTodo(email)
                break   
            case 3 :
                await deleteTodo(email)
                break
            case 4 :
                await getAllTodos(email)
                break
        }
        } catch (error) {
        console.error(error);
    }
}

// userLogin();
export default userLogin;