// Create web server
var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
    // Open a file on the server and return its content
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

// Run the server with Node.js
// Open your browser and type: http://localhost:8080
// The server will return the content of the file demofile1.html