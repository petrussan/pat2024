var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));

app.get('/',function(req,res){
    console.log("got a GET request, route: /");
    res.send('welcome to express framework --> GET');
});

app.get('/list_user',function(req,res){
    console.log("got a GET request, route: /list_user");
    res.send('welcome to express framework --> GET (list_user)');
});

app.get('/abc*def',function(req,res){
    console.log("got a GET request, route: wild card abc*def");
    res.send('welcome to express framework --> GET (abc*def)');
});

// app.get('/bc?d',function(req,res){
//     console.log("got a GET request, route: wild card ab?c");
//     res.send('welcome to express framework --> GET (ab?c)');
// });

app.post('/',function(req,res){
   console.log("got a POST request, route: /");
   res.send('welcome to express framework --> POST (/)');    
});

app.put('/',function(req,res){
    console.log("got a PUT request, route: /");
    res.send('welcome to express framework --> PUT (/)');         
});

app.delete('/',function(req,res){
    console.log("got a DELETE request, route: /");
    res.send('welcome to express framework --> DELETE (/)');     
});


var server = app.listen(8000,function(){
    console.log("API Server running at port 8000");
});