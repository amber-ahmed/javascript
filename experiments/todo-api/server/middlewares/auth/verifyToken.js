import jwt from 'jsonwebtoken'
function authMiddleWare(req,res,next){
    let token = req.headers['auth-token']
    if(!token)
    {
        req.logged = false
        return next()
    }
    const privateKey = 'developer'
    try{
        let payload = jwt.verify(token,privateKey)
        req.payload = payload
        req.logged = true
        return next()
    }catch(error){
        req.logged = false
        return next()
        // return res.status(401).json({error : 'Invalid token/Token expired'})
    }
}
export default authMiddleWare