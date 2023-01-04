import express from 'express'
async function getApi(){
const app = express()
app.use(express.json())
 app.use(express.text())
app.use('/', async (req,res) => {
    console.log(req.query)//http://localhost:5002/?query1=321&query2=123
    console.log(req.headers['auth'])
    console.log(req.method)
    console.log(req.body)
    res.send('from server 3')
})
let port = 5002
app.listen(port,() => {
    console.log('server 3 is started' )
})
}
getApi()
//Middle wares
//Global / Applevel
//