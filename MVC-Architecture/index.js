const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

const users = [
  {
    name: "Utsha",
    age: 22,
  },
  {
    name: "Purnima",
    age: 20,
  },
];
app.listen(PORT, () => {
  console.log(`Your server is running at http://localhost:${PORT}`);
});
app.use((req, res, next) => {
  res.status(404).json({
    message: "Not A valid Address",
  });
});
