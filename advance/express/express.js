import express from 'express'
let app = express()

app.get('/',(req,res) => {
    res.send('from server')
})



let port = 5000
app.listen(port,()=>{
    console.log('server started')
})