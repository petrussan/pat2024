var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
//    res.write('Hello World');
//    res.write(req.url);
    var q = url.parse(req.url,true).query;
    var t = q.data+"";
    res.write(t);
    res.end();
}).listen(8080);