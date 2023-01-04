import express from "express";
let app = express();

// app.get('/amber',(req,res) => {//http://localhost:5001 ,error cannot GET, bcz wrong path
//     res.send('from server root')
// })

// app.get('/amber',(req,res) => {//http://localhost:5001 ,error cannot GET, bcz wrong path
//     res.send('from server amber')
// })

// app.get('/amber',(req,res) => {
//     res.send('from server amber')
//     console.log(req.query)//http://localhost:5001/amber?key1=value1
// })

// app.get('/amber',(req,res) => {
//     res.send('from server amber')
//     console.log(req.query)//http://localhost:5001/amber?key1=value1&key2=value2
//     console.log(req.query.key1,req.query.key2)//http://localhost:5001/amber?key1=value1&key2=value2
// })

// app.get('/amber',(req,res) => {
//     res.send('from server amber')
//     console.log(req.query)//http://localhost:5001/amber?key1=value1&key2=value2
//     console.log(req.query.key1,req.query.key2)//http://localhost:5001/amber?key1=value1&key2=value2
// })

// app.get('/amber/:users',(req,res) => {
//     // res.send('from server amber')
//     console.log(req.params)//http://localhost:5001/amber/123
//     console.log(req.params.users)
//     res.send('you send params ' + req.params.users)
// })

// app.get("/amber/:user1/home/:user2", (req, res) => {
//   console.log(req.params); //http://localhost:5001/amber/123/home/321
//   console.log(req.params.users);
//   res.send("you send params " + JSON.stringify(req.params)); //CANNOT PASS OBJECT THROUGH res.send(), SO CONVERT FIRST OBJECT TO STRING
// });

// app.get("/", (req, res) => {
//   console.log(req.headers);
//   res.send("from server");
// });

// app.get("/", (req, res) => {
//     console.log('user agent ' + req.headers['user-agent']);//user-agent is the device
//     res.send("from server");
//   });

// app.get("/", (req, res) => {
//   console.log("user agent " + req.headers["user-agent"]); //user-agent is the device
//   console.log(req.headers.auth)
//   res.send("from server");
// });

// app.get("/", (req, res) => {
//     console.log(req.headers.auth,req.headers.auth2)
//     res.send("from server");
//   });

////Middlewares
// app.use(express.text()); //Global / App level
// app.get("/", (req, res) => {
//     console.log(req.body)
//     res.send("from server");
// });


app.use(express.json()); //Global / App level
// app.get("/", (req, res) => {
//     console.log(req.body)
//     res.send("from server");
// });

app.get("/", (req, res) => {
    let data = req.body
    console.table(data)
    res.send("from server");
});



let port = 5001;
app.listen(port, () => {
  console.log("server started");
});
