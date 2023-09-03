const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/register", (req, res) => {
  const name = req.body.name;
  res.send(`Hello ${name}`);
});
app.listen(PORT, () => {
  console.log(`You server is running at http://localhost:${PORT}`);
});
