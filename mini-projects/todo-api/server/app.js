import express from 'express'
import userRouter from './contrllers/users/index.js'
import todoRouter from './contrllers/todos/index.js'
const app = express()
const port = 5002

app.use(express.json())

app.use('/api/user',userRouter)

app.use('/api/todos',todoRouter)

app.listen(port,() => {
    console.log('server started')
})