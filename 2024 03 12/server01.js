var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));

app.get('/list_user',function(req,res){
    fs.readFile("users.json","utf-8",function(err,data){
        console.log(data);
        res.end(data);
    });    
});

var user = {
    "user5" : {
        "nama" : "Edward",
        "password" : "password5",
        "role" : "student",
        "id" : 5
    }
}

app.post('/add_data',function(req,res){
    fs.readFile("users.json","utf-8",function(err,data){
        data = JSON.parse(data);
        data["user5"] = user["user5"];
        console.log(data);
        res.end(JSON.stringify(data));
    });        
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