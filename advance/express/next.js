import express from "express";
//MIDDLEWARE
const app = express();
const port =6001;

// app.get("/",(req,res)=>{
//     res.send("Getting Response");
// })

const cb = (req,res,next)=>{
    console.log(req);
    console.log(" I am in Callback");
    req.amber = "someValue"
    // res.send('from first')
    next();
}


app.get("/",cb,(req,res)=>{
    console.log("Do Something");
    console.log(req.amber);
    console.log(req.a);
    res.send("Check Req Object")
})



app.listen(port,()=>{
    console.log("Server Started at Port : ",port)
})