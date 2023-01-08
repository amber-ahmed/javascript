import fs from "fs/promises";
import readlineSync from 'readline-sync'
async function deleteUser() {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tDelete User\n 
   ====================================`);

    let email = readlineSync.questionEMail("Enter your Email : ");
    // let email = "amber@gmail.com";
    let password = readlineSync.question("Enter your password : ", {
        hideEchoBack: true,
    });
    // let password = "12345";
    while (!password) {
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
      throw "Unauthorised Access";
    }
    if (emailFound.password != password) {
      throw "Unauthorised Access";
    }
    
    let confirm = readlineSync.question('Do you really want to delete you account y/n : ')
    if(confirm === 'y' || confirm === 'Y' || confirm === 'Yes' || confirm === 'yes'){
        fileData.splice(fileData.indexOf(emailFound),1)
        await fs.writeFile('data.json',JSON.stringify(fileData))
        console.log('User deleted successfully')
    }


  } catch (err) {
    console.log(err);
  }
}
export default deleteUser