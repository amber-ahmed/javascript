import axios from 'axios'
function getUsers(){
    axios.get('https://api.github.com/users/amber-ahmed',{
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