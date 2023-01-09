import express from 'express'
import { todoAddValidator,errorMiddleWare } from '../../middlewares/validators/index.js'
const router = express.Router()

router.post('/add',todoAddValidator(),errorMiddleWare,
 async (req,res) => {
    res.send('todo router add')
})
export default router