import express from  'express'
const app = express()


app.use('/',(req,res) => {
    // res.redirect('public')
    res.send('from public server')
})
app.listen(5004,() => {
    console.log('server started')
})