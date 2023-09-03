const http = require("http");
const port = 3000;
const hostName = "127.0.0.1";
let myServer = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/html" });
  res.write("<h1>Hello World</h1>");
  res.end();
});
myServer.listen(3000, hostName, port, () => {
  console.log(`Your server is running at http://${hostName}:${port}`);
});
