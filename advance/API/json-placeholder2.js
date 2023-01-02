import axios from "axios";

function getData(i){

    axios.get(`https://jsonplaceholder.typicode.com/users/${i}`)
    .then((response) =>{
         console.log(response.data.id,response.data.name)
        })
    .catch((err) => {
        console.error(err.data)
    })
}
for(let i = 1; i <= 10; i++){
getData(i)
}