import express from  'express'
const app = express()


app.get('/',(req,res) => {
    res.redirect('/www.youtube.com')
    // res.send('from server')
})
app.listen(5004,() => {
    console.log('server started')
})