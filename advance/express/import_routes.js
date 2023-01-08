import express from 'express'
import userRouter from './export_routes.js'
import dataRouter from './export_routes2.js'



const app = express()

app.use('/',userRouter)
app.use('/api/home',userRouter)
app.use('/data/home',dataRouter)

app.listen(5005,() => {
    console.log('router server started')
})