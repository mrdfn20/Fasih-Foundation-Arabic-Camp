var http = require("http");

var port = 7070;
http
  .createServer(function (req, res) {
    console.log("Aplikasi berjalan pada port : " + port);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World! hellow cow hello kuo");
  })
  .listen(port);
