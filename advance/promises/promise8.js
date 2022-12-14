import axios from "axios";
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
               // console.log(str)
                return JSON.stringify(ele)
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