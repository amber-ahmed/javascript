import express from  'express'
const app = express()


app.use('/',(req,res) => {
    res.redirect('www.youtube.com')
    // res.send('from server')
})
app.listen(5003,() => {
    console.log('server started')
})