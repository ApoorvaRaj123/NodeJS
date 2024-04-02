const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req,res) => {
  const log = `${Date.now()}: ${req.url} New req received\n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("log.txt", log, (err, data)=>{
    switch(myUrl.pathname){
        case: "/"
          res.end("Homepage")
          break;
        case: "/about"
          const username = myUrl.query.myname;
          res.end(`Hi, ${username}`);
          break;
        case: "/search"
          const search = myUrl.query.search_query;
          res.end("Your results are:", search);
    }
  })
})
