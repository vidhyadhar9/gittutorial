app =require('express')();
http = require('http').Server(app);

app.listen(3000, function(){
  console.log('listening on *:3000');
});


//conetnt in the apis page
// app.use(express.json())

app.get('/',function(req,res){
    return res.send("Hoem page ");
});

app.get('/about',function(req,res){
    return res.send("About page ");
});

app.get('/', function(req, res){
  res.send("replying you hitted featrue branch");
});


//content in the feature/client

app.get('/feature', function(req, res){
  res.send("replying you hitted featrue branch");
});