var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  filename = 'index.html'
  fs.readFile(filename, "binary", function(err, file) {
    if(err) {        
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.write(err + "\n");
      res.end();
      return;
    }

    res.writeHead(200);
    res.write(file, "binary");
    res.end();
  })
}).listen(443)

