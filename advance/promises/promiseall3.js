import axios from "axios";

function hitAPI() {
    return axios.get("https://api.github.com/users", {
        auth: {
            username: "adnanali-in",
            password: "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"
        }
    })
}

// console.log(hitAPI());

// async function getData() {
//     let result = await hitAPI();
//     console.log(result);
// }

// getData();

hitAPI()
    .then((res) => {

        let promiseArray = res.data.map((ele) => {
            return axios.get(`https://api.github.com/users/${ele.login}`, {
                auth: {
                    username: "adnanali-in",
                    password: "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"
                }
            })
        })
        Promise.all(promiseArray)
            .then((responses) => {
                responses.forEach((ele) => {
                    console.log(`${ele.data.login} has ${ele.data.followers} with ID ${ele.data.id}`)
                })
            })
            .catch((err) => {
                console.error(err);

            })
    }
    ).catch((err) => {
        console.error(err)
    })