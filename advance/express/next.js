import express from "express";

const app = express();
const port =6001;

// app.get("/",(req,res)=>{
//     res.send("Getting Response");
// })

const cb0 = (req,res,next)=>{
    console.log(req);
    console.log(" I am in Callback 1");
    req.adnan = "someValue"
    // res.send('from first')
    next();
}


app.get("/",cb0,(req,res)=>{
    console.log("Do Something");
    console.log(req.adnan);
    console.log(req.a);
    res.send("Check Req Object")
})



app.listen(port,()=>{
    console.log("Server Started at Port : ",port)
})