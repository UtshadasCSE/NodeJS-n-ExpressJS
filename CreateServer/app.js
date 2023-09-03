const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");

app.use("/api/user", userRouter);
app.use("/login", (req, res) => {
  res.send("<h1>Page Not found</h1>");
});
app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
  // res.status(200).json({
  //   name: "Utsha",
  //   message: "Hello Bangladesh",
  //   statusCode: 200,
  // });
  // res.redirect("/login");
});
module.exports = app;
