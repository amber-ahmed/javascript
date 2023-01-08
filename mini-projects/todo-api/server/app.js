import express from 'express'
import userRouter from './contrllers/users/index.js'
import todoRouter from './contrllers/todos/index.js'
const app = express()
const port = 5001

app.use('/api/user',userRouter)

app.use('/api/todo',todoRouter)

app.listen(port,() => {
    console.log('server started')
})