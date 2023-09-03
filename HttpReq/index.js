const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user", (req, res) => {
  const name = req.body.name;
  res.send(`"Hello ${name}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running at http://localhost:${PORT}`);
});
