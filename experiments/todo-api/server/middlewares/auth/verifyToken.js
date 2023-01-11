import jwt from "jsonwebtoken";
function authMiddleWare(req, res, next) {
  try {
    let token = req.headers["auth-token"];
    if (!token) {
      req.logged = false;
      return next();
    }
    const privateKey = "developer";
    let payload = jwt.verify(token, privateKey);
    // console.log(payload)

    req.logged = true;
    payload = { email: payload.email, username: payload.username };
    req.payload = payload
    token = jwt.sign(payload, privateKey, { expiresIn: "1h" });
    req.token = token;
    return next();
  } catch (error) {
    req.logged = false;
    return next();
    // return res.status(401).json({error : 'Invalid token/Token expired'})
  }
}
export default authMiddleWare;
