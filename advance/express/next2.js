import express from "express";

const app = express();
const port =6002;

app.get("/",(req,res)=>{
    res.send("Getting Response");
})

const cb0 = (req,res,next)=>{
    console.log(req);
    console.log(" I am in Callback 1");
    req.adnan = "someValue"
    next();
}
const cb1 = (req, res, next) => {
    console.log("I m in CallBack 2");
 res.send("Welcome to next middleware.");
    req.a = 9+8;
    next();
}
const callbacks = [cb0,cb1]

app.get("/test",callbacks,(req,res)=>{
    console.log("Do Something");
    console.log(req.adnan);
    console.log(req.a);
    res.send("Check Req Object")
})



app.listen(port,()=>{
    console.log("Server Started at Port : ",port)
})