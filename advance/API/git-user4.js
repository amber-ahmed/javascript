import axios from "axios";

function hitAPI() {
    return axios.get("https://api.github.com/users", {
        auth: {
                    username: "amber-ahmed",
                    password: "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"
        }
    })
}


hitAPI()
    .then((res) => {
        res.data.forEach((ele) => {
            axios.get(`https://api.github.com/users/${ele.login}`, {
                auth: {
                    username: "amber-ahmed",
                    password: "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"
                }
            })
                .then((res) => {
                    console.log(`${res.data.login} has ${res.data.followers} Followers with ID ${res.data.id}`)
                }).catch((err) => {
                    console.error(err.data);
                })
        })

    }).catch((err) => {
        console.error(err.data)
    })