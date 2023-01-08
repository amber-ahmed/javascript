import express from 'express'
const router = express.Router()

router.post('/create',(req,res) => {
    res.send('express router create')
})
export default router