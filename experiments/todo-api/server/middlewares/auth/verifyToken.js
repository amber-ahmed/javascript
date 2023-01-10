import jwt from 'jsonwebtoken'
function authMiddleWare(req,res,next){
    const privateKey = 'developer'
    try{
        let token = req.headers['auth-token']
        let payload = jwt.verify(token,privateKey)
        req.payload = payload
        req.logged = true
        return next()
    }catch(error){
        req.logged = false
        return res.status(401).json({error : 'Invalid token/Token expired'})
    }
}
export default authMiddleWare