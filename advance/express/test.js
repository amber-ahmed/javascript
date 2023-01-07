import express from  'express'
const app = express()


app.get('/',(req,res) => {
    // res.redirect('https://www.youtube.com/')
    res.redirect('http://localhost:5005')
    // res.send('from server')
})
app.listen(8008,() => {
    console.log('server started')
})