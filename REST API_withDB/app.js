const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.route");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);

//api/users:GET
//api/users/:id:GET
//api/users/:POST
//api/users/:id:PATCH
//api/users/:id:DELETE
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});
//route not found error handle
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found! Please check again properly",
  });
});
//server error handle
app.use((err, req, res, next) => {
  res.status(404).json({
    message: "Route Not Found! Please check again properly",
  });
});

module.exports = app;
