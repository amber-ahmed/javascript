import express from  'express'
const app = express()

app.use(express.static('public'))

app.listen(5003,() => {
    console.log('server started')
})