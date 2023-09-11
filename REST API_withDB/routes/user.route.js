const express = require("express");
const getAllUser = require("../controller/user.controller");

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getAllUser);
router.post("/")
module.exports = router;
