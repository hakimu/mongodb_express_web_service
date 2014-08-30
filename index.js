// http://www.raywenderlich.com/61078/write-simple-node-jsmongodb-web-service-ios-app
var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
	res.send('<html><body><h1>Hello World</html></body></h1>');
});

app.get('/:a?/:b?/:c?', function(req,res){
	res.send(req.params.a + ' ' + req.params.b + ' ' + req.params.c);
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

