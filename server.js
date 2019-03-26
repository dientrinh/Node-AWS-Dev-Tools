const appPort = 1500;

var express = require('express');
var app = express();
app.use(express.static('public'));


app.get('/', function (req, callback) {	
 	callback.send("Hello world"); 	
})

var server = app.listen(appPort, function () {
var host = server.address().address
var port = server.address().port

   console.log("App listening at http://%s:%s", host, port)
})