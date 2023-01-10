import jwt from 'jsonwebtoken'
import displayMenu from "./client/app.js"
import fs from 'fs/promises'
import userLogin from './client/users/loginUser.js'

async function main(){



    try {
       

        let token = await fs.readFile('./client/authToken.txt')
      
        let login = true
        
        
        if(login){
            home()
        }
        else{
            displayMenu()
        }



        let data = { "auth-token" : token };
        let config = {
            method: 'post',
            url: 'http://localhost:5001/api/user/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        let response = await axios(config)
        //below code is equivalent to above
        //let response = await axios.post('http://localhost:5001/api/user/login',data)
        console.log(chalk.green(response.data.success))
        await fs.writeFile("./client/authToken.txt",response.data.token.toString());

    } catch (error) {
        // console.error(error);
        console.error(error.response.data.error);
        console.error(error.response.data.errors);

    }








    
   

}
main()

