import express from 'express'
let port = 6003
const app = express()
// app.use('/',(req,res) => {
//     res.send('from home')
// })

app.use('/home/:id([0-9]{5})',(req,res) => {
    res.send('id : ' + req.params.id)
})

app.use('/home/:id([A-Z]*)',(req,res) => {
    res.send('id : ' + req.params.id)
})

app.listen(port,() => {
    console.log('server started')
})