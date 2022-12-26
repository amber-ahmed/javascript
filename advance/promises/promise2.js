import axios from "axios";
import chalk from "chalk"
function pingAPI() {
    //Gives you a promise
    axios.get("http://jsonplaceholder.typicode.com/users")
    //Resolves the Promise    
    .then((res) => {

            //Res.data is the Data you receive from the API
            // console.log(res.data);
             let data = res.data;

            // data.forEach((ele) => {
            //     console.log(ele.name);
            // })

            //Mapping the Data you received from API
            let namesArray = data.map((ele) => {
                let res = JSON.parse(JSON.stringify(ele));
                let str = chalk.red(res['name'])
               // console.log(str)
                res['name'] = "str"
                return res
            })
            console.log(namesArray)
        })

        //Handles Error
        .catch((err) => {
            console.error('We ran into an Error')
            console.error(err);
        });
}

pingAPI();