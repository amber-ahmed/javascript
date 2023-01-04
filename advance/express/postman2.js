import express from 'express'
async function getApi(){
const app = express()
app.use(express.json())//Global / App level
 app.use(express.text())//Global / App level

 app.get('/:user/all/:user2', async (req,res) => {
    console.log(req.params)//http://localhost:5001/123/all/321
    console.log(req.headers['auth'])
    console.log(req.method)
    console.log(req.body)
    res.send('from server 2')
}) 

app.use('/', async (req,res) => {
    console.log(req.query.page,req.query.page2)//http://localhost:5001/?page=123&page2=321
    console.log(req.headers)
    console.log(req.method)
    console.log(req.body)
    res.send('from server 2')
})


app.get('/amber/:users',(req,res) => {
    // res.send('from server amber')
    console.log(req.params)//http://localhost:5001/amber/123
    console.log(req.params.users)
    res.send('you send params ' + JSON.stringify(req.params))//CANNOT PASS OBJECT THROUGH res.send(), SO CONVERT FIRST OBJECT TO STRING
})

let port = 5001
app.listen(port,() => {
    console.log('server 2 is started' )
})
}
getApi()
