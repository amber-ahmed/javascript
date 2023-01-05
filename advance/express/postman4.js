import axios from "axios";
import express from 'express'
let app = express()

let apiKey = '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'
let auth = {
    username : 'amber-ahmed',
    password : apiKey
}

 app.post('/git/:userName',async (req,res) => {

    try{
    let userName = req.params.userName
    let object = {}
    let result = await axios.get(`https://api.github.com/users/${userName}`,
    auth)
    
    object['Full-name'] = result.data.name
    object['User-name'] = result.data.login
    object['Bio'] = result.data.bio
    object['Followers'] = result.data.followers
    object['Following'] = result.data.following

    let result2 = await axios.get(`https://api.github.com/users/${userName}/repos`, {
        username : 'amber-ahmed',
        password : apiKey
    })
    let arr = []
    for(let i = 0; i < 6; i++){
    // console.log(result.data[i].name)
    arr.push(result2.data[i].name)
    }
    object['Repos'] = arr
    res.status(200).json(object)

}catch(err){
    res.status(500).json({error : 'internal error'})
    console.log(err)
}

})



app.listen(6002,()=> {
    console.log('server started')
})