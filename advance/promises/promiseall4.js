import axios from "axios";


function hitAPI(id) {
    return axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
}

let promiseArray = [];
for (let i = 1; i <= 10; i++) {
    promiseArray.push(hitAPI(i));
}
// console.log(promiseArray);

Promise.all(promiseArray)
    .then((responses) => {
        responses.forEach((ele) => {
            console.log(ele.data.name, ele.data.id);
        })
    })
    .catch((err) => {
        console.error(err);
    })