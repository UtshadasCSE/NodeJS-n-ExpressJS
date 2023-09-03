// const http = require("http");
// const port = 3000;
// const hostName = "localhost";

// const myServer = http.createServer((req, res) => {
//   res.write("Hello");
//   res.end();
// });

// myServer.listen(port, hostName, () => {
//   console.log(`Your server is running at https://${hostName}:${port} !`);
// });
// const utsha = require("./second");
// console.log("Gello", utsha);
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
