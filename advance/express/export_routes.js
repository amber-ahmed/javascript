import express from 'express'

const router = express.Router()

router.get('/',(req,res) => {
    res.send('root rout')
})

router.get('/register',(req,res) => {
    res.send('from register router')
})

router.post('/login',(req,res) => {
    res.send('from login router')
})

export default router