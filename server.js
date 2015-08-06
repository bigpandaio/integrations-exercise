var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.set('port', 2000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendStatus(200);
});

app.get('/health', function (req, res) {
  res.sendStatus(200);
});

var server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log("Simrelic server listening on port " + app.get('port'));
});
