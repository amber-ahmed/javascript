import express from 'express'
var app = express();

//Middleware function to log request protocol
app.get('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());

   res.send('from first routing')
   next();
});

// Route handler that sends the response
app.get('/things', function(req, res){
   console.log('second')
   // res.send('Things');
});

app.listen(3000);
