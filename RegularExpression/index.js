const express = require("express");
const app = express();
const PORT = 3000;

app.get("/product/:id([0-9]+)", (req, res) => {
  res.send(`<h2>ID = ${req.params.id}</h2>`);
});
app.use("*", (req, res) => {
  res.status(404).send({
    message: "Not A Valid Route",
  });
});

app.listen(PORT, () => {
  console.log(`Your server is running at http://localhost:${PORT}`);
});
