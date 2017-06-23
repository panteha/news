var httpServer = require("http-server");
var path = require("path");
var app = path.join(__dirname, "./");
var server = httpServer.createServer({ root: app });
server.listen(3000);
