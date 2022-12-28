import readlineSync from 'readline-sync'
import axios  from 'axios'
/*
Full name
Username 
Bio
Followers number
Following numbers
Top 5 repos
*/

function getData(){
   let  apiKey = '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'
   let  userName = readlineSync.question('enter username to search : ')
    axios.get(`https://api.github.com/users/${userName}`, {
        username : 'amber-ahmed',
        password : apiKey
    })
    .then((res) => {
        console.log('Full name : ',res.data.name)
        console.log('User name : ',res.data.login)
        console.log('Bio : ',res.data.bio)
        console.log('Follwers : ',res.data.followers)
        console.log('following : ',res.data.following)
        console.log('Top 5 Repos')


        axios.get(`https://api.github.com/users/${userName}/repos`, {
        username : 'amber-ahmed',
        password : apiKey
    })
    .then((result) => {
        for(let i = 0; i < result.data.length; i++){
        console.log(result.data[i].name)
        }
    })
    .catch((err) => {
       console.error(err.response.data.message)
    })



    })
    .catch((error) => {
       console.error(error.response.data.message)
    })
}
getData()