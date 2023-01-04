import express from 'express'
const app = express()
app.get('/',(req,res) => {
    console.log(req.headers)
    console.log(req.method)
    console.log(req.body)
    res.send('from server')
})
app.use('/',(req,res) => {
    console.log(req.headers)
    console.log(req.method)
    // res.send
})
let port = 5000
app.listen(port,() => {
    console.log('server is started 1' )
})
//Middlewares
//1. Global / App level
//2. Router Level