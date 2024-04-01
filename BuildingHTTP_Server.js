const http = require('http');

const myServer = http.createServer((req, res) => {
  console.log("New Request Received");
  res.end("Hello");
})
