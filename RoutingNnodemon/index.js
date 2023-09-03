const http = require("http");
const fs = require("fs");

const hostName = "127.0.0.1";
const port = 3000;
let myServer = http.createServer((req, res) => {
  const readFile = (statusCode, fileName) => {
    fs.readFile(fileName, (err, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url == "/") {
    readFile(200, "index.html");
  } else if (req.url == "/about") {
    readFile(200, "about.html");
  } else if (req.url == "/contact") {
    readFile(200, "contact.html");
  }
});
myServer.listen(3000, hostName, port, () => {
  console.log(`Your server is running at http://${hostName}:${port}`);
});
