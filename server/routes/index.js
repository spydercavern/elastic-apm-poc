var express = require("express");
const apm = require("../bin/apm");
var router = express.Router();

/* GET /api/message */
router.get("/message", function (req, res, next) {
  // res.json("Hello from the API!");
  apm.captureError(Error("Simulated error from backend"));
  res.sendStatus(400);
});

/* GET /api/hello */
router.get("/hello", function (req, res, next) {
  res.json("Hello from the API!");
});


module.exports = router;
