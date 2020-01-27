var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send({ text: "We are getting data from API with HOOKS OMG!" });
});

module.exports = router;
