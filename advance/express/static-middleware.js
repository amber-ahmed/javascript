import express from  'express'
const app = express()

// app.use(express.static('public'))
// //http://localhost:5003/image.jpg

app.use(express.static('.'))
//http://localhost:5003/image.jpg

app.listen(5003,() => {
    console.log('server started')
})