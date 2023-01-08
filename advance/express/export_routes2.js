import express from 'express'

const router = express.Router()

router.get('/data',(req,res) => {
    res.send('from data router')
})

router.post('/data2',(req,res) => {
    res.send('from data2 router')
})

export default router