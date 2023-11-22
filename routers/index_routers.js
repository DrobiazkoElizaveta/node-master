const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  addLine("Pinging /");
  res.sendFileSync(__dirname + "../public/index.html");
});
router.post("/", function (req, res) {});

router.get("/register", function (req, res) {});
router.post("/register", function (req, res) {});

module.exports = router;
