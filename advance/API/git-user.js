import axios from 'axios'
function getUsers(){
    axios.get('https://api.github.com/users',{
        auth : {
            username : "amber-ahmed",
            password : "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"
        }
    })
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.error(err)
    })
}
getUsers()