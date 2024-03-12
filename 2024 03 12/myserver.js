const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const conn = mysql.createConnection({
    host: '203.189.123.200',
    user: 'nodejs',
    password: '1SCCHo0WDNBrrned',
    database : 'nodejs',
});

// conn.connect(function(err){});
// conn.connect((err)=>{});

conn.connect(function(err){
    if (err) throw err;
    console.log("connected to MySQL ....");
});

// conn.connect((err)=>{
//     if (err) throw err;
//     console.log("connected to MySQL ....");
// });

app.get('/api/users',function(req,res){
   let sql = "SELECT * FROM user";
   let query = conn.query(sql, function (err,result){
        if (err) throw err;
        res.send(JSON.stringify({
            "status" : 200,
            "error" : null,
            "response" : result
        }));
   }); 
});
app.get('/api/users/:id',function(req,res){});
app.post('/api/users/',function(req,res){});
app.put('/api/users/:id',function(req,res){});
app.delete('/api/users/:id',function(req,res){});


var server = app.listen(8000,function(){
    console.log("API Server running at port 8000");
});
