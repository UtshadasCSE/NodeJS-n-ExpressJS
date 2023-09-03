const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("I am get request at home route");
});
router.get("/register", (req, res) => {
  res.send("I am register route");
});
router.get("/login", (req, res) => {
  res.send("I am login route");
});

module.exports = router;
