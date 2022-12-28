import axios from "axios";

function getData(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => console.log(response))
    .catch((err) => {
        console.error(err)
    })
}
getData()