import express from 'express'
const app = express()
app.use('/',(req,res) => {
    res.redirect('http://localhost:5005')
})
app.listen(5004,() => {
    console.log('server started')
})