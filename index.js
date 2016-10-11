var http = require('http');
var express = require('express');
var app=  express();
app.set('port',process.env.PORT || 3035);

// http.createServer(function(req,res){
//   res.writeHead(200,{'Content-type':'text/plain'});
//     res.writeHead("Jade has express and node set up");
//
// }).listen(8123);
app.listen(app.get('port'),function(){
  console.log("Jade you got express working!");

});

//node express with http server;
