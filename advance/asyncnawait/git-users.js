import axios from 'axios'
let apiKey = "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"

 function getUsers(){
    return axios.get('https://api.github.com/users',
    { 
        name : 'amber-ahmed',
        password : apiKey
    })
}

// getUsers().then((res) => {
//     for(let i = 0; i < res.data.length; i++){
//     console.log(res.data[i])
//     }
// })
getUsers().then((res) => {
    //console.log(res.data[0].login)
    res.data.forEach((ele) => {
        getUserDetails(ele.login)
    })
})
async function getUserDetails(userName){
  let details =  await axios.get('https://api.github.com/users/' + userName,
    { 
        name : 'amber-ahmed',
        password : apiKey
    })
    console.log(details.data)
}