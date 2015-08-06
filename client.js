var url = "http://localhost:2000";

var request = require('request');

function execute() {
  request.get(url, function(err, response) {
    console.log(response.statusCode);
  })
}

setInterval(execute, 500);

