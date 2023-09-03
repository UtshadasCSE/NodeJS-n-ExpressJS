const express = require("express");
const app = express();
const PORT = 3000;

const myMiddleWare = (req, res, next) => {
  console.log("This url is undefined");
  res.send("this is unfind");
  next();
};
app.use(myMiddleWare);
app.get("/", myMiddleWare, (req, res) => {
  res.send("Hello Developer");
});

app.listen(PORT, () => {
  console.log(`Your server is running at http://localhost:${PORT}`);
});
