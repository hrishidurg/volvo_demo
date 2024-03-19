var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Welcome to the world of Volvo Cars known for saftey/Durability'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
